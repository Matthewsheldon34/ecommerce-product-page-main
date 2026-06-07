import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
// https://vite.dev/config/
export default defineConfig({
     base: "/ecommerce-product-page-main/",

  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
