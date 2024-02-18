const fs = require('fs');
const Parser = require('rss-parser');
const parser = new Parser();

const README_PATH = './README.md'; // README文件的路徑
const MARKER_START = '<!-- BLOG-POST-LIST:START -->'; // 文章列表開始的標記
const MARKER_END = '<!-- BLOG-POST-LIST:END -->'; // 文章列表結束的標記

(async () => {
  const feed = await parser.parseURL('https://minglin.coderbridge.io/atom.xml');
  
  let newContent = `${MARKER_START}\n`;
  feed.items.slice(0, 5).forEach(item => {
    newContent += `- [${item.title}](${item.link})\n`;
  });
  newContent += `${MARKER_END}\n`;

  const originalReadme = fs.readFileSync(README_PATH, 'utf8');
  const updatedReadme = originalReadme.replace(new RegExp(`${MARKER_START}[\\s\\S]*${MARKER_END}`), newContent);

  fs.writeFileSync(README_PATH, updatedReadme);
})();
