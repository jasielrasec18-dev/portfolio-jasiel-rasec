import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Se for publicar em GitHub Pages num subcaminho (ex: usuario.github.io/portifolio-pessoal),
  // troque a linha abaixo para: base: '/portifolio-pessoal/',
  base: '/',
})
