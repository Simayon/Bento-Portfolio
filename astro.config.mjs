import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    site: 'https://myblog.com',
    integrations: [],
    vite: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    },
    markdown: {
        shikiConfig: {
            theme: 'github-light'
        }
    }
});
