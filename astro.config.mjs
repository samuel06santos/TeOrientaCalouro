import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://samuel06santos.github.io',
  base: '/TeOrientaCalouro',
  output: 'static',
  build: { format: 'file' },
  vite: {
    plugins: [tailwindcss()],
  },
});
