import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/vue-yy/' ,
  plugins: [vue()],
  build: {
    rolldownOptions:{
      output:{
        entryFileNames: 'public/assets/[name].js',
        chunkFileNames: 'public/assets/[name].js',
        assetFileNames: 'public/assets/[name].[ext]'
      }
    }
  }
  
})
