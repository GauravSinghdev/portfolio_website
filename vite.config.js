import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  base: '/portfolio_website/',
  
  // -----> this is for removing error after github pages deployed successfully and to run the website.

  // below line is req for github pages deployment.

  build:{
    outDir: './docs',   
  },
});
