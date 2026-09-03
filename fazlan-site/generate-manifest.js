// This script runs at build time on Netlify to generate posts/manifest.json
// It scans all .md files in /posts and creates the index the site uses to load them

const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'posts');
const files = fs.readdirSync(postsDir)
  .filter(f => f.endsWith('.md'))
  .sort()
  .reverse(); // newest first

fs.writeFileSync(
  path.join(postsDir, 'manifest.json'),
  JSON.stringify(files, null, 2)
);

console.log(`Generated manifest with ${files.length} post(s):`, files);
