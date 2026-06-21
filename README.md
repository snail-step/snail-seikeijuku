# 蝸牛政經塾 - snail-seikeijuku

用 Markdown 寫作的政經評論部落格，使用 [Astro](https://astro.build) +
[Starlight](https://starlight.astro.build)，套用
[Lucode Starlight 主題](https://github.com/lucas-labs/lucode-starlight-theme)
（shadcn/ui 風格），部署在 Vercel。

## 怎麼寫文章

在 [src/content/docs/posts/articles](https://github.com/snail-step/snail-seikeijuku/tree/main/src/content/docs/posts/articles) 底下

1. 新增一個 `.md` 檔
2. 最上面放 標題、小標題（frontmatter）：
```md
---
title: 文章標題
description: 一句話說明這篇文章。
---

正文用 Markdown 寫……
```

3. commit（存檔）後，文章會自動出現在側邊欄。

# 以下 for development

## Local

```bash
npm install      # 安裝依賴
npm run dev      # 啟動本機伺服器 http://localhost:4321
npm run build    # 產生靜態檔到 dist/
npm run preview  # 預覽 build 結果
```

## Deploy

1. commit and push to `main` branch:
   ```bash
   git init && git add -A && git commit -m "init blog"
   git remote add origin <你的 repo 網址>
   git push -u origin main
   ```

## 自訂

- 站名 / 導覽列 / 頁尾：改 `astro.config.mjs`。
- 主題色票（圓角、側邊欄寬度等）：在自己的 CSS 覆寫 `--radius`、
  `--sidebar-width` 等變數，詳見
  [主題文件](https://lucas-labs.github.io/lucode-starlight-theme)。
