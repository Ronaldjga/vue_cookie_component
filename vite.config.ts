import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { format, resolve } from 'path'
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"

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
      plugins: [
        {
          ...typescript({ tsconfig: './tsconfig.json' }),
          apply: 'build',
          declaration: true,
          declarationDir: 'types/',
          rootDir: '/',
          allowImportingTsExtensions: true,
        }
      ],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  }
})
