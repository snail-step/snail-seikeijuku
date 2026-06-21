# 蝸牛政經塾 - snail-seikeijuku

用 Markdown 寫作的政經評論部落格，使用 [Astro](https://astro.build) +
[Starlight](https://starlight.astro.build)，套用
[Lucode Starlight 主題](https://github.com/lucas-labs/lucode-starlight-theme)
（shadcn/ui 風格），部署在 Vercel。

## 本機開發

```bash
npm install      # 安裝依賴
npm run dev      # 啟動本機伺服器 http://localhost:4321
npm run build    # 產生靜態檔到 dist/
npm run preview  # 預覽 build 結果
```

## 怎麼寫文章

在 `src/content/docs/posts/` 底下新增一個 `.md` 檔，最上面放 frontmatter：

```md
---
title: 文章標題
description: 一句話說明這篇文章。
---

正文用 Markdown 寫……
```

存檔後文章會自動出現在側邊欄。首頁是 `src/content/docs/index.mdx`。

## 部署到 Vercel

1. 把這個資料夾推到 GitHub（GitLab / Bitbucket 也可以）：
   ```bash
   git init && git add -A && git commit -m "init blog"
   git remote add origin <你的 repo 網址>
   git push -u origin main
   ```
2. 到 [vercel.com](https://vercel.com) → **Add New → Project** → 匯入這個 repo。
3. Vercel 會自動偵測到 Astro，build 指令 `astro build`、輸出目錄 `dist`
   都會自動帶好，直接按 **Deploy** 即可。
4. 部署完成後，把 `astro.config.mjs` 裡的 `site` 改成你的正式網域。

> 純靜態網站，不需要額外的 Vercel adapter，也不需要 `vercel.json`。

## 自訂

- 站名 / 導覽列 / 頁尾：改 `astro.config.mjs`。
- 主題色票（圓角、側邊欄寬度等）：在自己的 CSS 覆寫 `--radius`、
  `--sidebar-width` 等變數，詳見
  [主題文件](https://lucas-labs.github.io/lucode-starlight-theme)。
