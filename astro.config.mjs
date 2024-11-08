import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import rehypeExternalLinks from 'rehype-external-links';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://lumirant.top',
  integrations: [mdx(), svelte()],
  markdown: {
    shikiConfig: {
      theme: 'nord'
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [[rehypeExternalLinks, {
      target: '_blank'
    }]]
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});