import { defineConfig } from 'vite'

export default defineConfig({
  // Configuración base
  base: '/',
  
  // Configuración de build para producción
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    
    // Optimizaciones para producción
    minify: 'esbuild',
    sourcemap: false,
    
    // Configuración de assets
    assetsInlineLimit: 4096,
    
    // Configuración de CSS
    cssCodeSplit: true
  },
  
  // Configuración del servidor de desarrollo
  server: {
    port: 5173,
    host: true,
    strictPort: false
  },
  
  // Configuración del servidor de preview
  preview: {
    port: 4173,
    host: true,
    strictPort: false
  },
  
  // Definir variables globales
  define: {
    __APP_VERSION__: JSON.stringify('1.0.0'),
  },
  
  // Configuración de PWA y Service Worker
  publicDir: 'public'
})
