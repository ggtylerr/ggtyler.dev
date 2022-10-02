import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ggtyler.dev',
  integrations: [mdx(), sitemap(), tailwind(), compress(), react()]
});
