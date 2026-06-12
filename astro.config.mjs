// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';

// https://astro.build/config
export default defineConfig({
  // 部署到 Vercel 後，記得把這裡換成你的正式網域
  site: 'https://snail-seikeijuku.vercel.app',
  integrations: [
    starlight({
      title: '蝸牛政經塾',
      // 介面語言設為繁體中文
      defaultLocale: 'root',
      locales: {
        root: {
          label: '繁體中文',
          lang: 'zh-TW',
        },
      },
      // 套用 Lucode（shadcn/ui 風格）主題
      plugins: [
        lucode({
          navLinks: [
            { label: '文章', link: '/posts/hello-world/' },
          ],
          footerText: '© 2026 蝸牛政經塾',
        }),
      ],
      // 側邊欄：自動把 posts 目錄底下的 markdown 列出來
      sidebar: [
        {
          label: '文章',
          items: [{ autogenerate: { directory: 'posts' } }],
        },
      ],
    }),
  ],
});
