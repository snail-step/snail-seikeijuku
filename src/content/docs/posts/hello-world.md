---
title: 第一篇文章
description: 這是一篇示範文章，教你怎麼用 Markdown 寫部落格。
---

這是你的第一篇文章。要新增文章，只要在 `src/content/docs/posts/` 底下
建立一個新的 `.md` 檔，填好上方的 frontmatter（`title`、`description`），
它就會自動出現在側邊欄。

## Markdown 基本語法

你可以用標準 Markdown 撰寫內容：

- **粗體**、*斜體*、`行內程式碼`
- [連結](https://astro.build)
- 清單、引用、表格……

> 引用區塊看起來像這樣。

```js
// 程式碼區塊會有語法高亮
function hello(name) {
  return `Hello, ${name}!`;
}
```

## 主題提供的元件

Lucode 主題也支援 Starlight 的內建元件，例如提示框：

:::tip[小提示]
把這個檔案複製一份、改個檔名，就是一篇新文章。
:::

:::note
側邊欄的順序可以在 frontmatter 加上 `sidebar.order` 來控制。
:::
