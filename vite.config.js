import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
const srcPath = path.resolve(__dirname, 'src');
import dotenv from 'dotenv';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env': JSON.stringify(dotenv.config({ path: path.join(srcPath, '.env') }).parsed),
  },
})

