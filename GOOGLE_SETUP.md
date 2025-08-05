# 🔐 Configuración de Google Sign-In

Esta guía te ayudará a configurar el login con Google para el Frontend Roadmap 2025.

## 🚀 Configuración rápida

### 1. Obtener Google Client ID

1. **Ve a Google Cloud Console**: https://console.developers.google.com/
2. **Crea un proyecto** o selecciona uno existente
3. **Habilita APIs**:
   - Ve a "APIs & Services" → "Library"
   - Busca y habilita "Google+ API"
4. **Crear credenciales**:
   - Ve a "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - Selecciona "Web application"
5. **Configurar orígenes autorizados**:
   ```
   http://localhost:5173
   http://localhost:3000
   https://tu-dominio-produccion.com
   ```
6. **Copiar el Client ID** (termina en `.apps.googleusercontent.com`)

### 2. Configurar variables de entorno

1. **Copia el archivo ejemplo**:
   ```bash
   cp .env.example .env.local
   ```

2. **Edita `.env.local`** y reemplaza el Client ID:
   ```bash
   VITE_GOOGLE_CLIENT_ID=tu_client_id_real.apps.googleusercontent.com
   ```

3. **Reinicia el servidor**:
   ```bash
   npm run dev
   ```

## 🛠️ Scripts de ayuda

### Windows
```bash
./setup-google-auth.bat
```

### Linux/Mac
```bash
chmod +x setup-google-auth.sh
./setup-google-auth.sh
```

## ✅ Verificar configuración

1. Abre la aplicación: http://localhost:5173
2. Ve a "Mi Perfil"
3. Deberías ver el botón "Sign in with Google"
4. Si ves un mensaje de configuración, sigue los pasos indicados

## 🔧 Solución de problemas

### Error: "Client ID no configurado"
- Verifica que el archivo `.env.local` existe
- Verifica que el Client ID está correctamente copiado
- Reinicia el servidor de desarrollo

### Error: "Origin not allowed"
- Verifica que `http://localhost:5173` está en los orígenes autorizados
- Ve a Google Cloud Console → Credentials → Tu OAuth Client → Authorized JavaScript origins

### Error: "Google API not loaded"
- Verifica que tienes conexión a internet
- Revisa la consola del navegador para errores de red

## 📱 Para producción

Cuando despliegues la aplicación:

1. **Agrega tu dominio** a los orígenes autorizados en Google Cloud Console
2. **Crea un archivo `.env.production`** con el mismo Client ID
3. **Verifica HTTPS** - Google requiere HTTPS en producción

## 🎯 Estados de la aplicación

- **✅ Configurado**: Botón de Google aparece y funciona
- **⚙️ Sin configurar**: Mensaje con guía de configuración
- **🔄 Cargando**: Google API inicializándose
- **❌ Error**: Problema con Client ID o red

## 💡 Consejos

- El Client ID es público y puede compartirse
- Nunca compartas el Client Secret (no lo usamos aquí)
- Los cambios en `.env.local` requieren reiniciar el servidor
- El archivo `.env.local` está en `.gitignore` por seguridad
