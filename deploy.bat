@echo off
echo 🚀 Preparando aplicación para producción...
echo ================================================================
echo.

echo 📦 Instalando dependencias...
call npm install
if %ERRORLEVEL% neq 0 (
    echo ❌ Error instalando dependencias
    pause
    exit /b 1
)

echo.
echo 🏗️ Construyendo aplicación para producción...
call npm run build:production
if %ERRORLEVEL% neq 0 (
    echo ❌ Error en build de producción
    pause
    exit /b 1
)

echo.
echo ✅ Build completado exitosamente!
echo 📁 Los archivos están en la carpeta 'dist'
echo.

echo 🌐 PRÓXIMOS PASOS:
echo.
echo 1. 📋 Sube el contenido de la carpeta 'dist' a tu hosting
echo 2. 🔑 Configura las variables de entorno en tu hosting:
echo    - VITE_GOOGLE_CLIENT_ID=tu-client-id-produccion
echo    - VITE_APP_URL=https://tu-dominio.com
echo.
echo 3. 🌍 Agrega tu dominio de producción a Google Cloud Console:
echo    - Ve a: https://console.developers.google.com/
echo    - Credentials → Edit OAuth Client ID
echo    - Agrega: https://tu-dominio.com
echo.
echo 4. 🧪 Testa que todo funcione:
echo    - Login con Google
echo    - Instalación PWA
echo    - Funcionalidad offline
echo.

echo ¿Quieres abrir la preview local? (S/N)
set /p answer=
if /i "%answer%"=="s" (
    echo 🖥️ Iniciando servidor de preview...
    call npm run serve
)

echo.
echo 🎉 ¡Tu aplicación está lista para producción!
pause
