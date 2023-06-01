import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

const licenseContent = `/*!
* vue-fullpage 0.2.14
* https://github.com/alvarotrigo/vue-fullpage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/
`;

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      formats: ['es', 'cjs', 'umd'],
      entry: resolve(__dirname, 'src/index.js'),
      name: 'vue-fullpage',
      fileName: 'vue-fullpage'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        banner: licenseContent
      },
    },
  },
})
