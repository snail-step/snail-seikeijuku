#!/usr/bin/env node
// 掃描 src/content/docs/posts 下所有文章，輸出 slug/title/description 清單，
// 用途：貼給 AI，協助更新 KnowledgeMap.astro 裡手寫的知識地圖大綱。
// 用法：node scripts/list-articles.mjs

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = join(__dirname, '..');
const DOCS_DIR = join(ROOT, 'src/content/docs');
const POSTS_DIR = join(DOCS_DIR, 'posts');

function walk(dir) {
    const out = [];
    for (const name of readdirSync(dir)) {
        const full = join(dir, name);
        const stat = statSync(full);
        if (stat.isDirectory()) {
            out.push(...walk(full));
        } else if (extname(name) === '.md' || extname(name) === '.mdx') {
            out.push(full);
        }
    }
    return out;
}

function parseFrontmatter(content) {
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return {};
    const data = {};
    for (const line of match[1].split('\n')) {
        const m = line.match(/^(\w+):\s*(.*)$/);
        if (!m) continue;
        let [, key, value] = m;
        value = value.split(/\s+#/)[0].trim().replace(/^['"]|['"]$/g, '');
        if (value) data[key] = value;
    }
    return data;
}

const files = walk(POSTS_DIR).sort();

const articles = files.map((file) => {
    const frontmatter = parseFrontmatter(readFileSync(file, 'utf-8'));
    const slug =
        '/' +
        relative(DOCS_DIR, file)
            .replace(/\.mdx?$/, '')
            .split(sep)
            .join('/') +
        '/';
    return {
        slug,
        title: frontmatter.title ?? '(未設定 title)',
        description: frontmatter.description ?? '',
    };
});

console.log(JSON.stringify(articles, null, 2));
