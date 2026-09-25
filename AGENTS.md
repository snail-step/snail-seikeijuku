# 共用 Agent Skills

- 專案 skill 的唯一來源是 `.agents/skills/<skill-name>/SKILL.md`。
- 處理相關任務前，先讀取對應的 `SKILL.md`，再依其步驟執行。所有指令從專案根目錄執行。
- 圖片轉 WebP、壓縮與更新 MDX 引用：讀取 [.agents/skills/img-webp/SKILL.md](.agents/skills/img-webp/SKILL.md)。
- 依文章清單更新知識地圖：讀取 [.agents/skills/update-knowledge-map/SKILL.md](.agents/skills/update-knowledge-map/SKILL.md)。
- 新增或修改 skill 時只維護 `.agents/skills/` 的內容；其他 agent 的專屬目錄只放指向共用來源的連結，不複製流程。
- Claude Code 的 `.claude/skills/<skill-name>` 使用相對符號連結指向 `../../.agents/skills/<skill-name>`。新增 skill 時一併新增連結與此處的索引。
