---
title: 科技新聞採編規範
description: 每三天新聞整理的來源、時間範圍、查核及 Markdown 格式
sidebar:
  order: 2
---

## 內容與時間範圍

以繁體中文撰寫，每期使用 `YYYY-MM-DD.md`，日期以 Asia/Taipei 為準，存放於 `src/content/docs/posts/tech-news-summary/`。保留 `title` 與 `description` frontmatter。

從**上一份已成功推送文章的截止時間**接續到本期截止時間，採前開後閉區間。延遲執行時註明較長涵蓋區間，避免漏掉新聞。正文同時標示來源發布日期及事件日期；較早事件的新報導標為「本期新刊／背景事件」。

每期選題前先核對前 1–2 期「下期追蹤」，有新進展優先收錄並標為「前期追蹤回扣」。每期精選 **AI 2–3 則、Web3 快訊 2–3 則、Web3 專題 1 篇**（委託報告最多 1 篇），寧缺勿濫；其餘重要但未展開的事件，於該區末以「其他值得關注」**僅列一句話標題與原始連結**（各區最多 3–5 則）。每則附原始連結；同事件合併，已刊內容僅於實質新進展時再收錄。

## 篇幅預算與撰寫風格

- 全篇目標 **2,500–4,000 字**（約 5 分鐘讀完）。精選快訊限 **2 段、250–350 字**；專題限 **3 段、450–600 字**；導讀、下期追蹤、來源缺漏各限 **1 段、150 字內**。
- 新聞敘事不列點，段落自然銜接（僅「其他值得關注」列點）。
- 一句一意，聽一次懂，術語白話解釋；每則只留 1–2 個最關鍵對比數字，背景與次要名單交給原始連結。
- 明確區分官方宣稱、第三方實測／鏈上數據與編者推論。

## 每則精選必答

- **第 1 段（事實與基準）**：哪個服務替誰解決什麼問題？相較上一代或既有方案，能力、單位成本或限制改變了什麼（缺對照基準須直指）？
- **第 2 段（影響與證偽）**：舊問題解開後，瓶頸或風險移轉到哪裡？對投資人或前沿研究者，下一個可驗證的具體指標與證偽條件是什麼？

## 來源順序與選題門檻

原始資料優先，其次英文原創報導，中文補充；依重要性與證據品質選題，不因中文易讀優先收錄。

### AI

依[AI 新聞方向指引](/posts/tech-news-summary/ai-news-framework/)巡檢來源與事件觸發，並套用對應查核濾鏡；優先以開發者公告、系統卡、論文及財報查核，[Ars Technica AI](https://arstechnica.com/topic/ai/)補充解讀與採用。

優先收錄改變能力邊界、推論／訓練成本、Agent 可靠度、算力供應鏈或商業變現的事件；排除無實測的行銷預告、瑣碎介面微調與例行公關澄清。

### Web3 快訊

從 [CoinDesk RSS](https://www.coindesk.com/arc/outboundfeeds/rss/) 或[最新新聞列表](https://www.coindesk.com/latest-crypto-news)找線索，再讀正文與原始公告；[DeFiLlama](https://defillama.com/)交叉查核 TVL、費用、收入與穩定幣供給。

優先選協議更新、資安與權限漏洞、穩定幣、RWA、監管、重要融資與實際採用；過濾轉載、喊單、廣告與無影響說明的巨鯨轉帳。監管與數字回查原公告，查無則標為媒體轉述。

### Web3 專題

依序檢查涵蓋區間內新文；若列表頁因動態渲染、停更或逾時失效，改以 `site:` 搜尋該網域近期文章並直接讀單篇：

- [DeFiLlama Research 總覽](https://defillama.com/research/feed)（備援 `site:defillama.com/research`；LlamaFeed 不列為固定入口）
- [Blockworks Research](https://app.blockworks.com/research)（備援 `site:app.blockworks.com/research`）：協議數據、收入與代幣價值。
- [Four Pillars Issue／Article](https://research.4pillars.io/en/research?type=issue&type=article)（備援[研究首頁](https://research.4pillars.io/en/research)或 `site:research.4pillars.io`）：技術、機構採用與亞洲市場。
- [TechFlow 研究](https://www.techflowpost.com/research)（備援 `site:techflowpost.com/article`）：補充產業、協議與商業模式。

無新文時可選近 30 天未整理且高相關文章，標為「延伸閱讀」並列原日期。每篇須讀完整正文，交代必要名詞、核心論證、作者結論與潛在利益關係，以及待驗證問題。

## 每期固定格式

涵蓋時間 → 本期導讀 → AI 新聞 → Web3 快訊 → Web3 專題 → 下期追蹤 → 來源缺漏。

導讀不重複摘要，提煉本期共同的結構問題或成本取捨；下期追蹤列具體里程碑供回扣；來源缺漏聚焦尚缺獨立驗證的關鍵宣稱，HTTP 403／429 等連線失敗一行帶過即可。

使用 Markdown，必要時使用 Mermaid；不使用 HTML、React 或視覺卡片。AI 架構與本規範不當作新聞期數。發布操作依排程 prompt 執行。
