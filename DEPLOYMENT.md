# 🚀 Guía de Despliegue - Frontend Roadmap 2025

## 📋 Checklist Pre-Despliegue

### ✅ Configuración de Variables de Entorno

1. **Google Client ID para Producción**:
   - Ve a [Google Cloud Console](https://console.developers.google.com/)
   - Crea un nuevo OAuth Client ID para **Web Application**
   - Agrega tu dominio de producción a **Authorized JavaScript origins**:
     - `https://tu-dominio.com`
     - `https://www.tu-dominio.com` (si usas www)

2. **Configurar .env.production**:
   ```bash
   VITE_GOOGLE_CLIENT_ID=tu-client-id-de-produccion.apps.googleusercontent.com
   VITE_APP_URL=https://tu-dominio.com
   ```

### 🏗️ Build de Producción

```bash
# Instalar dependencias
npm install

# Build optimizado para producción
npm run build:production

# Preview local de la build
npm run serve
```

## 🌐 Opciones de Despliegue

### 1. **Netlify** (Recomendado para principiantes)

1. **Preparación**:
   ```bash
   npm run build:production
   ```

2. **Deploy**:
   - Conecta tu repositorio GitHub a Netlify
   - Build command: `npm run build:production`
   - Publish directory: `dist`
   - Environment variables: Copia las de `.env.production`

3. **Configuración**:
   - Agrega el dominio de Netlify a Google Cloud Console
   - Configura redirects para SPA en `public/_redirects`:
     ```
     /*    /index.html   200
     ```

### 2. **Vercel** (Excelente para proyectos React/Vue)

1. **Instalación**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

3. **Configuración**:
   - Build Command: `npm run build:production`
   - Output Directory: `dist`
   - Environment Variables: Agrega las de `.env.production`

### 3. **GitHub Pages**

1. **Configurar vite.config.js**:
   ```js
   export default defineConfig({
     base: '/nombre-del-repositorio/', // Solo si no es github.io principal
   })
   ```

2. **Build y Deploy**:
   ```bash
   npm run build:production
   git subtree push --prefix dist origin gh-pages
   ```

### 4. **Firebase Hosting**

1. **Instalación**:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init hosting
   ```

2. **Configuración** (`firebase.json`):
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run build:production
   firebase deploy
   ```

### 5. **AWS S3 + CloudFront**

1. **Build**:
   ```bash
   npm run build:production
   ```

2. **S3 Setup**:
   - Crea bucket S3
   - Habilita static website hosting
   - Sube contenido de `dist/`

3. **CloudFront**:
   - Crea distribución CloudFront
   - Configura custom error pages para SPA

## 🔧 Configuraciones Post-Despliegue

### 1. **Google Cloud Console**
- Agrega tu dominio de producción a **Authorized JavaScript origins**
- Actualiza **Authorized redirect URIs** si es necesario

### 2. **HTTPS Obligatorio**
- Asegúrate de que tu sitio use HTTPS
- Google Sign-In requiere HTTPS en producción

### 3. **Performance**
- Verifica que el Service Worker funcione
- Comprueba que la PWA se instale correctamente
- Testa la funcionalidad offline

## 📊 Monitoreo Post-Despliegue

### 1. **Testing Funcional**
```bash
# Lista de verificación:
□ Login con Google funciona
□ PWA se instala correctamente
□ Progreso se sincroniza
□ Funcionamiento offline
□ Responsive design en móviles
□ Performance (Core Web Vitals)
```

### 2. **Herramientas de Monitoreo**
- Google Analytics (opcional)
- Google Search Console
- Lighthouse CI para performance

## 🆘 Troubleshooting

### Error: "invalid_client"
- Verifica que el dominio esté en Google Cloud Console
- Confirma que el Client ID sea correcto
- Asegúrate de usar HTTPS

### PWA no se instala
- Verifica que `manifest.json` sea accesible
- Confirma que el Service Worker se registre
- Usa HTTPS

### Problemas de CORS
- Verifica configuración de APIs
- Confirma headers CORS del servidor

## 📝 Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build:production

# Preview de producción local
npm run serve

# Deploy preview completo
npm run deploy:preview
```

---

## 🎯 Próximos Pasos

1. **Elige una plataforma de hosting**
2. **Configura las variables de entorno**
3. **Haz el primer deploy**
4. **Configura el dominio en Google Cloud Console**
5. **Testa todas las funcionalidades**

¡Tu Frontend Roadmap 2025 estará listo para el mundo! 🚀
