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

## 與 AI Agent 協作

專案的共用 skill 統一維護在 [.agents/skills/](.agents/skills/)，入口與維護規則見 [AGENTS.md](AGENTS.md)。

- [img-webp](.agents/skills/img-webp/SKILL.md)：把 PNG/JPG 壓縮轉成 WebP，並更新 MDX 引用。
- [update-knowledge-map](.agents/skills/update-knowledge-map/SKILL.md)：掃描文章，更新 `src/components/KnowledgeMap.astro` 的知識地圖大綱。

Claude Code 透過 `.claude/skills/` 中的相對符號連結讀取同一份 skill，仍可使用 `/img-webp`（可附圖片路徑）與 `/update-knowledge-map`。其他 agent 若未自動探索 `.agents/skills/` 或讀取 `AGENTS.md`，可直接要求它讀取對應的 `SKILL.md` 並執行。

新增 skill 時，在 `.agents/skills/<skill-name>/SKILL.md` 撰寫內容，frontmatter 包含 `name`、`description`，並更新 `AGENTS.md` 的索引。從專案根目錄新增 Claude 的入口：

```bash
ln -s ../../.agents/skills/<skill-name> .claude/skills/<skill-name>
```

共用目錄及符號連結都應納入 Git。日後接入其他 agent 時，讓它讀取共用目錄，或在其 skill 目錄建立連結；不要複製 skill 內容。
