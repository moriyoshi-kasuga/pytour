use mdbook::book::Chapter;
use regex::Regex;
use serde::{Deserialize, Serialize};
use std::{
    fs::{self, File},
    io::{Error, Read},
    path::PathBuf,
};

pub struct Work {
    root: PathBuf,
    work_re: Regex,
}

fn question_title_default() -> String {
    "問題".to_string()
}

fn collapsible_default() -> bool {
    true
}

fn collapsible_title_default() -> String {
    "解答例".to_string()
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
    pub fn new(root: PathBuf) -> Self {
        Work {
            root,
            work_re: Regex::new(r".*\{\{\s*#work\s*(?P<path>.*)\s*\}\}").unwrap(),
        }
    }

    fn load_config(&self, file: Result<File, Error>) -> WorkConfig {
        file.and_then(|mut file| {
            let mut s = String::new();
            file.read_to_string(&mut s)?;
            toml::from_str(&s)
                .map_err(|_| Error::new(std::io::ErrorKind::InvalidData, "Toml parsing error"))
        })
        .unwrap_or_default()
    }

    pub fn run(&self, chap: &mut Chapter) {
        let work_path = format!("{}/../../work/", self.root.to_str().unwrap());
        chap.content = self
            .work_re
            .replace_all(&chap.content, |caps: &regex::Captures| {
                let path = format!(
                    "{}{}",
                    work_path,
                    caps.name("path").unwrap().as_str().trim()
                );
                let config = self.load_config(File::open(format!("{}/config.toml", path)));

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
