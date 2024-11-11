import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import {dependencies, devDependencies} from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es'], // 1 js file in build
      name: 'live-bundlers',
    },
    rollupOptions: {
      external: [,
        'react/jsx-runtime',
        ...Object.keys(dependencies), 
        ...Object.keys(devDependencies),
      ],
      // output: {dir: 'dist', entryFileNames: '[name].js', format: 'es'} - 
    },
    target: 'esnext',
    sourcemap: true // убрать, если не будет хватать места
  },
  plugins: [react()],
})
