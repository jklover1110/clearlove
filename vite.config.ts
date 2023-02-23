import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  build: {
    lib: {
      entry: {
        clearlove: resolve(__dirname, 'src/index.ts')
      },
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`
    }
  }
})
