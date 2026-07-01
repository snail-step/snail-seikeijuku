# 蝸牛政經塾 - snail-seikeijuku

用 Markdown 寫作的學習部落格，使用 [Astro](https://astro.build) +
[Starlight](https://starlight.astro.build)，套用
[Lucode Starlight 主題](https://github.com/lucas-labs/lucode-starlight-theme)
（shadcn/ui 風格），部署在 Vercel。

---

website: https://snail-seikeijuku.vercel.app/posts/articles/knowledge-map/

## 📌 開始寫文章！用 GitHub 網頁介面編輯

請看完整教學：[如何寫文章](如何寫文章.md)。

<br/>
<br/>
<br/>

# 以下 for 開發

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

## 與 Claude Code 協作

### command 1: `/update-knowledge-map`
新增文章後，在 Claude Code 對話框輸入 `/update-knowledge-map`，會自動執行
`npm run list-articles` 掃描所有文章，並比對更新
`src/components/KnowledgeMap.astro` 裡的知識地圖大綱（補上新文章、移除已刪除的連結）。
