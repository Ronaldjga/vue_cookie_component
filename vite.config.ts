import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueCookieComponent",
      fileName: "vue-cookie-component",
    },
    rollupOptions: {
      external: ["vue", 'bootstrap'],
      plugins: [],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  }
})
