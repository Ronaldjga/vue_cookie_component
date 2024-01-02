import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import typescript from "@rollup/plugin-typescript"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [{
    ...typescript({tsconfig: "./tsconfig.json"}),
    apply: "build",
    declaration: true,
    declarationDir: "types/",
    rootDir: "/"
  },vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueCookieComponent",
      fileName: "vue-cookie-component",
    },
    rollupOptions: {
      external: ["vue", 'bootstrap'],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  }
})
