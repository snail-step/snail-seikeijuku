---
description: 把上傳的 png/jpg 壓縮轉成 webp，並自動更新 mdx 引用
---

執行 `npm run img-webp`（若使用者在指令後給了路徑，則附加為參數：`npm run img-webp -- <路徑>`）。

這個腳本會：
1. 自動抓 `src/**/images/` 下 git 未追蹤/已修改的 png/jpg（或指定路徑），用 sharp 轉成同名 `.webp`（quality 80、超過 1600px 才縮小）。
2. 刪除原本的 png/jpg。
3. 掃描 `src/content/docs/posts/**/*.mdx`，把指向被轉檔案的引用改成 `.webp`。

完成後，把腳本輸出的摘要回報給使用者：轉了哪些檔、總共省多少體積、更新了哪些 mdx。若有 `✗` 失敗項目，一併指出原因。
