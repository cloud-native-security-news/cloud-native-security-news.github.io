import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import Markdown from 'unplugin-vue-markdown/vite'
import hljs from 'highlight.js'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
        }),
        Markdown({
            markdownItSetup(md) {
            }
        })
    ],
    build: {
        outDir: '_site',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
