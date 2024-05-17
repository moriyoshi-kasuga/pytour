use mdbook::book::Chapter;
use regex::Regex;

pub struct Embed {
    embed_re: Regex,
    youtube_re: Regex,
}

impl Default for Embed {
    fn default() -> Self {
        Self {
            embed_re: Regex::new(r".*\{\{\s*#embed\s*(?P<url>.*)\s*\}\}").unwrap(),
            youtube_re: Regex::new(r".+youtube\.com.+v=(.*)").unwrap(),
        }
    }
}

impl Embed {
    pub fn run(&self, chap: &mut Chapter) {
        chap.content = self.embed_re.replace_all(&chap.content, |caps: &regex::Captures| {
            let url = caps.name("url").unwrap().as_str();
            if let Some(cap) = self.youtube_re.captures_iter(url).next() {
                format!("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/{}\"></iframe>", &cap[1])
            } else {
                format!("<a href=\"{url}\">{url}</a>")
            }
        }).to_string();
    }
}
