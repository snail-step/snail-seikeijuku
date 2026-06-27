#!/usr/bin/env node
// 把 src/**/images/ 下的 png/jpg 壓縮並轉成 webp。
//
// 用法：
//   node scripts/img-to-webp.mjs                 # 自動抓 git 未追蹤/已修改的 png/jpg
//   node scripts/img-to-webp.mjs path1 dir2 ...  # 指定檔案或資料夾
//
// 行為：輸出同目錄同名 .webp、刪除原檔、把 mdx 引用從 .png/.jpg 改成 .webp。

import { execSync } from "node:child_process";
import { readdirSync, statSync, readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { join, dirname, extname, basename, resolve, relative } from "node:path";
import sharp from "sharp";

const ROOT = resolve(import.meta.dirname, "..");
const QUALITY = 80;
const MAX_WIDTH = 1600;
const RASTER = new Set([".png", ".jpg", ".jpeg"]);

function fmt(bytes) {
  return bytes < 1024 * 1024
    ? `${(bytes / 1024).toFixed(0)}K`
    : `${(bytes / 1024 / 1024).toFixed(2)}M`;
}

// 遞迴列出資料夾下的檔案
function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

// 決定要轉哪些檔
function collectTargets(args) {
  let files = [];
  if (args.length) {
    for (const a of args) {
      const p = resolve(a);
      const st = statSync(p);
      files.push(...(st.isDirectory() ? walk(p) : [p]));
    }
  } else {
    // git 未追蹤 + 已修改 + 已暫存的檔案
    const out = execSync("git status --porcelain --untracked-files=all", {
      cwd: ROOT,
      encoding: "utf8",
    });
    for (const line of out.split("\n")) {
      if (!line.trim()) continue;
      const path = line.slice(3).trim().replace(/^"|"$/g, "");
      files.push(resolve(ROOT, path));
    }
  }
  return files.filter(
    (f) => RASTER.has(extname(f).toLowerCase()) && f.includes("/images/")
  );
}

async function convert(file) {
  const webp = file.slice(0, -extname(file).length) + ".webp";
  const before = statSync(file).size;
  const img = sharp(file);
  const meta = await img.metadata();
  if (meta.width && meta.width > MAX_WIDTH) img.resize({ width: MAX_WIDTH });
  await img.webp({ quality: QUALITY }).toFile(webp);
  const after = statSync(webp).size;
  unlinkSync(file);
  return { file, webp, before, after };
}

// 把所有 mdx 裡指向舊檔名的引用改成 .webp
function rewriteMdx(converted) {
  const renames = new Map(); // oldBasename -> newBasename
  for (const c of converted) {
    renames.set(basename(c.file), basename(c.webp));
  }
  const mdxFiles = walk(join(ROOT, "src/content/docs/posts")).filter((f) =>
    /\.(md|mdx)$/.test(f)
  );
  const touched = [];
  for (const f of mdxFiles) {
    let content = readFileSync(f, "utf8");
    let changed = false;
    for (const [oldName, newName] of renames) {
      // 只比對路徑分隔線後的檔名（圖片引用都是 .../images/<name>）
      const re = new RegExp(
        "(?<=/)" + oldName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "g"
      );
      if (re.test(content)) {
        content = content.replace(re, newName);
        changed = true;
      }
    }
    if (changed) {
      writeFileSync(f, content);
      touched.push(relative(ROOT, f));
    }
  }
  return touched;
}

async function main() {
  const targets = collectTargets(process.argv.slice(2));
  if (!targets.length) {
    console.log("沒有要轉的 png/jpg。把圖片放進 src/**/images/ 後再執行。");
    return;
  }

  const converted = [];
  let totalBefore = 0;
  let totalAfter = 0;
  for (const t of targets) {
    try {
      const r = await convert(t);
      converted.push(r);
      totalBefore += r.before;
      totalAfter += r.after;
      const saved = ((1 - r.after / r.before) * 100).toFixed(0);
      console.log(
        `✓ ${relative(ROOT, r.file)} → ${basename(r.webp)}  ${fmt(r.before)} → ${fmt(r.after)}  (-${saved}%)`
      );
    } catch (e) {
      console.error(`✗ ${relative(ROOT, t)}: ${e.message}`);
    }
  }

  if (!converted.length) return;

  const touched = rewriteMdx(converted);
  const savedPct = ((1 - totalAfter / totalBefore) * 100).toFixed(0);
  console.log(
    `\n轉了 ${converted.length} 張，${fmt(totalBefore)} → ${fmt(totalAfter)} (-${savedPct}%)`
  );
  if (touched.length) {
    console.log(`更新引用的 mdx：\n  ${touched.join("\n  ")}`);
  } else {
    console.log("沒有 mdx 引用需要更新。");
  }
}

main();
