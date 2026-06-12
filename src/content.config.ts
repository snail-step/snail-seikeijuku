import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { ExtendDocsSchema } from 'lucode-starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    // 擴充 Lucode 主題的 splash 首頁欄位，並保有型別檢查
    schema: docsSchema({ extend: ExtendDocsSchema }),
  }),
};
