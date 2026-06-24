---
description: 掃描所有文章並更新 KnowledgeMap.astro 的知識地圖大綱
---

執行 `npm run list-articles` 取得目前所有文章的 slug/title/description 清單。

讀取 `src/components/KnowledgeMap.astro`，比對清單與現有的 markdown 大綱：

1. 找出清單中存在、但大綱裡缺漏的文章，依語意判斷該歸入哪個既有分類（`##`/`###` 節點），若無合適分類才新增節點。
2. 找出大綱裡有、但清單中已不存在的文章連結（檔案被刪除或改名），移除對應項目。
3. 維持原有的分類架構與排序風格，不要大幅重組既有大綱。

修改完成後，列出本次新增/刪除/調整的項目摘要。
