use std::{
    fs::{self, File},
    io::{Error, Read},
    path::PathBuf,
};

use mdbook::{
    book::{Book, Chapter},
    preprocess::{Preprocessor, PreprocessorContext},
};
use regex::Regex;
use serde::{Deserialize, Serialize};

pub struct Pytour;

impl Pytour {
    pub fn new() -> Pytour {
        Pytour
    }
}

impl Preprocessor for Pytour {
    fn name(&self) -> &str {
        "extra-preprocessor"
    }

    fn supports_renderer(&self, renderer: &str) -> bool {
        renderer != "not-supported"
    }

    fn run(&self, ctx: &PreprocessorContext, mut book: Book) -> mdbook::errors::Result<Book> {
        let root = ctx.root.join(&ctx.config.book.src);

        let embed = Embed::new();
        let work = Work::new(root);
        book.for_each_mut(|item| {
            if let mdbook::book::BookItem::Chapter(chap) = item {
                embed.run(chap);
                work.run(chap);
            };
        });
        Ok(book)
    }
}

pub struct Work {
    root: PathBuf,
    work_re: Regex,
}

const QUESTION_TITLE: &str = "問題";
const COLLAPSIBLE: bool = true;
const COLLAPSIBLE_TITLE: &str = "解答例";

fn question_title_default() -> String {
    QUESTION_TITLE.to_string()
}

fn collapsible_default() -> bool {
    COLLAPSIBLE
}

fn collapsible_title_default() -> String {
    COLLAPSIBLE_TITLE.to_string()
}

#[derive(Debug, PartialEq, Serialize, Deserialize)]
pub struct WorkConfig {
    #[serde(default = "question_title_default")]
    question_title: String,
    #[serde(default = "collapsible_default")]
    collapsible: bool,
    #[serde(default = "collapsible_title_default")]
    collapsible_title: String,
}

impl Default for WorkConfig {
    fn default() -> Self {
        Self {
            question_title: question_title_default(),
            collapsible: true,
            collapsible_title: collapsible_title_default(),
        }
    }
}

impl Work {
    fn new(root: PathBuf) -> Self {
        Work {
            root,
            work_re: Regex::new(r".*\{\{\s*#work\s*(?P<path>.*)\s*\}\}").unwrap(),
        }
    }

    fn load_config(&self, file: Result<File, Error>) -> WorkConfig {
        file.map_or_else(
            |_| WorkConfig::default(),
            |mut file| {
                let mut s = String::new();
                let _ = file.read_to_string(&mut s);
                serde_yaml::from_str::<WorkConfig>(&s)
                    .or_else(|_| -> Result<WorkConfig, Error> {
                        {
                            Ok(WorkConfig::default())
                        }
                    })
                    .unwrap()
            },
        )
    }

    fn run(&self, chap: &mut Chapter) {
        let work_path = format!("{}/../../work/", self.root.to_str().unwrap());
        chap.content = self
            .work_re
            .replace_all(&chap.content, |caps: &regex::Captures| {
                let path = format!(
                    "{}{}",
                    work_path,
                    caps.name("path").unwrap().as_str().trim()
                );
                let config = self.load_config(File::open(format!("{}/config.yml", path)));

                format!(
                    r#"
~~~admonish question title="{}"
{}
~~~
~~~admonish example collapsible={} title="{}"
{}

```python
{}```
~~~
"#,
                    config.question_title,
                    fs::read_to_string(format!("{}/work.md", path)).unwrap(),
                    config.collapsible,
                    config.collapsible_title,
                    fs::read_to_string(format!("{}/answer.md", path)).unwrap(),
                    fs::read_to_string(format!("{}/main.py", path)).unwrap()
                )
            })
            .to_string();
    }
}

pub struct Embed {
    embed_re: Regex,
    youtube_re: Regex,
}

impl Embed {
    fn new() -> Embed {
        Embed {
            embed_re: Regex::new(r".*\{\{\s*#embed\s*(?P<url>.*)\s*\}\}").unwrap(),
            youtube_re: Regex::new(r".+youtube\.com.+v=(.*)").unwrap(),
        }
    }

    fn run(&self, chap: &mut Chapter) {
        chap.content = self.embed_re.replace_all(&chap.content, |caps: &regex::Captures| {
            let url = caps.name("url").unwrap().as_str();
            if let Some(cap) = self.youtube_re.captures_iter(&url).next() {
                format!("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/{}\"></iframe>", &cap[1])
            } else {
                format!("<a href=\"{url}\">{url}</a>")
            }
        }).to_string();
    }
}
