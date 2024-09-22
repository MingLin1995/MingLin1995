const fs = require("fs");
const Parser = require("rss-parser");
const parser = new Parser();

const README_PATH = "./README.md"; // README文件的路徑
const MARKER_START = "<!-- MEDIUM-POST-LIST:START -->"; // 文章列表開始的標記
const MARKER_END = "<!-- MEDIUM-POST-LIST:END -->"; // 文章列表結束的標記

const MEDIUM_USERNAME = "MingLin1995";

(async () => {
  try {
    const feed = await parser.parseURL(
      `https://medium.com/feed/@${MEDIUM_USERNAME}`
    );

    let newContent = `${MARKER_START}\n`;
    feed.items.slice(0, 5).forEach((item) => {
      const title = item.title
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
      newContent += `- [${title}](${item.link})\n`;
    });
    newContent += `${MARKER_END}`;

    const originalReadme = fs.readFileSync(README_PATH, "utf8");
    const updatedReadme = originalReadme.replace(
      new RegExp(`${MARKER_START}[\\s\\S]*${MARKER_END}`),
      newContent
    );

    fs.writeFileSync(README_PATH, updatedReadme);
    console.log("README updated successfully with latest Medium posts.");
  } catch (error) {
    console.error("Error updating README:", error);
  }
})();
