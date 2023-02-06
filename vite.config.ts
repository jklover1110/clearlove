import { resolve } from 'path'
import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    babel({
      filter: /\.tsx?$/,
      babelConfig: {
        babelrc: false,
        configFile: true
      }
    })
  ],
  build: {
    lib: {
      entry: {
        'esn-promise': resolve(__dirname, 'src/main.ts')
      },
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`
    }
  }
})
