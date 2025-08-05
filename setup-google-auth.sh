#!/bin/bash

echo "🔧 Configuración de Google Client ID para Frontend Roadmap 2025"
echo "================================================================"
echo ""

# Verificar si existe .env.local
if [ -f ".env.local" ]; then
    echo "✅ Archivo .env.local encontrado"
else
    echo "📝 Creando archivo .env.local desde .env.example..."
    cp .env.example .env.local
fi

echo ""
echo "📋 PASOS PARA OBTENER TU GOOGLE CLIENT ID:"
echo ""
echo "1. 🌐 Ve a Google Cloud Console:"
echo "   https://console.developers.google.com/"
echo ""
echo "2. 📁 Crea un nuevo proyecto o selecciona uno existente"
echo ""
echo "3. 🔑 Ve a 'APIs & Services' → 'Credentials'"
echo ""
echo "4. ➕ Click 'Create Credentials' → 'OAuth client ID'"
echo ""
echo "5. 🌍 Selecciona 'Web application'"
echo ""
echo "6. 📝 Configurar Authorized JavaScript origins:"
echo "   - http://localhost:5173"
echo "   - http://localhost:3000"
echo "   - https://tu-dominio-produccion.com (si tienes)"
echo ""
echo "7. 📋 Copia el Client ID generado"
echo ""
echo "8. ✏️  Edita el archivo .env.local y reemplaza:"
echo "   VITE_GOOGLE_CLIENT_ID=TU_CLIENT_ID_REAL_AQUI"
echo ""
echo "9. 🔄 Reinicia el servidor de desarrollo:"
echo "   npm run dev"
echo ""
echo "================================================================"
echo "💡 Tip: El Client ID debe terminar en '.apps.googleusercontent.com'"
echo ""

# Abrir el archivo .env.local para edición
if command -v code &> /dev/null; then
    echo "🚀 Abriendo .env.local en VS Code..."
    code .env.local
elif command -v notepad &> /dev/null; then
    echo "🚀 Abriendo .env.local en Notepad..."
    notepad .env.local
else
    echo "📝 Edita manualmente el archivo .env.local"
fi
