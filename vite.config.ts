import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
            ],
            dirs: [
                'src/layout',
            ],
            vueTemplate: true,
        }),
        Components({
            // allow auto load markdown components under `./src/components/`
            extensions: ['vue', 'md'],
            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            dirs: [
                'src/components',
                'src/components/**',
                'src/layout',
                'src/layout/**',
                'src/views/**'
            ],
            resolvers: [
                AntDesignVueResolver(),
            ],
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/variables.scss";`
            },
        },
    },
})
