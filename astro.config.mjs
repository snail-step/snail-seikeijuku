// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
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
            { label: '文章', link: '/posts/knowledge-map/' },
          ],
          footerText: '© 2026 蝸牛政經塾',
        }),
      ],
      // 側邊欄：文章列表。資料夾分類需明確指定中文標籤，
      // 其餘未分類文章維持手動列出。
      sidebar: [
        {
          label: '文章',
          items: [
            // 未分類文章（posts 目錄下的單篇 markdown）
            'posts/knowledge-map',
            'posts/spcx',
            'posts/spcx-spcxd',
            'posts/moving-average',
            // 分類資料夾：名詞解釋（posts/noun-explanation 內自動列出）
            {
              label: '🔠名詞解釋',
              items: [{ autogenerate: { directory: 'posts/noun-explanation' } }],
            },
            // 分類資料夾：讀書會（posts/weekly 內自動列出）
            {
              label: '📌讀書會',
              items: [{ autogenerate: { directory: 'posts/weekly' } }],
            },
            // 分類資料夾：讀書會（posts/mit-investments-course 內自動列出）
            {
              label: '✏️財報/法說 分析',
              items: [{ autogenerate: { directory: 'posts/finance-reports' } }],
            },
            {
              label: '✏️(好難 先放棄) MIT投資學',
              items: [{ autogenerate: { directory: 'posts/mit-investments-course' } }],
            },
          ],
        },
      ],
    }),
  ],
});
