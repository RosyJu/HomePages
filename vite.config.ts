import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import MpaPlus from 'vite-plugin-mpa-plus'; // 创建多页面项目

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    MpaPlus({pages: {
      main: {
        entry: 'src/pages/index/main.ts',
        template: 'src/pages/index/index.html',
        filename: 'index.html',
      },
    }
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
