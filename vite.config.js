const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import html from 'vite-plugin-html'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }
      ]
    }),
    html({
      inject:{
        injectData:{
          title:'this is my blog'
        }
      },
    })
  ],
  resolve:{
    //别名
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  },
  build:{
    //移除console debugger
    terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
    }
  }
})
