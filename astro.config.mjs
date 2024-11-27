import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';
import mdx from '@astrojs/mdx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    site: 'https://myblog.com',
    integrations: [mdx()],
    vite: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    },
    markdown: {
        shikiConfig: {
            theme: 'github-dark',
            wrap: true
        },
        remarkPlugins: [],
        rehypePlugins: []
    }
});
