import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const envBase = process.env.BASE_PATH;

  return {
    plugins: [react()],
    base:
      envBase !== undefined
        ? envBase || './'
        : mode === 'production'
        ? '/React-Vat-Calculator/' 
        : '/', 
  };
});