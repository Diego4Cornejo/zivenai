import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const site = process.env.SITE ?? 'https://tu-usuario.github.io';
const base = process.env.BASE_PATH ?? '/zivenai';

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [tailwind()],
  vite: {
    server: {
      host: true
    }
  }
});
