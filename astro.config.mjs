// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sentry from '@sentry/astro';
import lucode from 'lucode-starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  // 部署到 Vercel 後，記得把這裡換成你的正式網域
  site: 'https://snail-seikeijuku.vercel.app',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    sentry({
      dsn: process.env.PUBLIC_SENTRY_DSN,
      enabled: Boolean(process.env.PUBLIC_SENTRY_DSN),
      sourceMapsUploadOptions: {
        project: process.env.SENTRY_PROJECT,
        org: process.env.SENTRY_ORG,
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
    starlight({
      title: '蝸牛政經塾',
      // 首頁專屬樣式（限制內容最大寬度）／全站排版設定，並載入 KaTeX 公式樣式
      customCss: [
        './src/styles/home.css',
        './src/styles/customCss.css',
        'katex/dist/katex.min.css',
      ],
      // 介面語言設為繁體中文
      defaultLocale: 'root',
      locales: {
        root: {
          label: '繁體中文',
          lang: 'zh-TW',
        },
      },
      lastUpdated: true,
      // 套用 Lucode（shadcn/ui 風格）主題
      plugins: [
        lucode({
          navLinks: [
            { label: '文章', link: '/posts/articles/knowledge-map/' },
          ],
          footerText: '© 2026 蝸牛政經塾',
        }),
      ],
      // 覆寫 Lucode 的 Sidebar，改用 <details>/<summary> 讓資料夾群組可摺疊（支援 sidebar 設定的 collapsed）
      // 覆寫 PageTitle，把「最後更新時間」從頁尾移到文章標題下方（頁尾原本的 LastUpdated 改用 CSS 隱藏，見 customCss.css）
      components: {
        Sidebar: './src/components/overrides/Sidebar.astro',
        PageTitle: './src/components/overrides/PageTitle.astro',
        // 覆寫 PageFrame，改用本地修正版 Drawer，讓最外層攤平、未分組的文章
        // （上方第一筆 autogenerate）也能在手機選單顯示。
        PageFrame: './src/components/overrides/PageFrame.astro',
      },
      // 側邊欄：文章列表。資料夾分類需明確指定中文標籤，
      // 其餘未分類文章維持手動列出。最外層不包群組，直接攤平顯示。
      sidebar: [
        // 未分類文章（posts/articles 內自動列出，依各篇 frontmatter 的 sidebar.order 排序）
        { autogenerate: { directory: 'posts/articles' } },
        // 分類資料夾：名詞解釋（posts/noun-explanation 內自動列出）
        {
          label: '🔠 名詞解釋',
          collapsed: false,
          items: [{ autogenerate: { directory: 'posts/noun-explanation' } }],
        },
        // 分類資料夾：讀書會（posts/mit-investments-course 內自動列出）
        {
          label: '✏️ 財報/法說/產業鏈',
          collapsed: false,
          items: [{ autogenerate: { directory: 'posts/finance-reports' } }],
        },
        {
          label: '✏️ 頻道整理',
          collapsed: false,
          items: [{ autogenerate: { directory: 'posts/channel' } }],
        },
        // 分類資料夾：讀書會（posts/weekly 內自動列出）
        {
          label: '📌 讀書會',
          collapsed: false,
          items: [{ autogenerate: { directory: 'posts/weekly' } }],
        },
        {
          label: '✏️ (好難 先放棄) MIT投資學',
          collapsed: true,
          items: [{ autogenerate: { directory: 'posts/mit-investments-course' } }],
        },
      ],
    }),
  ],
});
