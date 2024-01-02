import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { format, resolve } from 'path'
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [{
    ...typescript({tsconfig: "./tsconfig.json"}),
    apply: "build",
    declaration: true,
    declarationDir: "types/",
    rootDir: "/"
  },
  dts({ // Adicione o plugin aqui
    input: ['/src/types/*.ts'],
    output: [{file: 'dist/index.d.ts', format: "es"}],
  }),vue()],
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
