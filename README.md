# Proyecto Opcean Discord Bot - Términos y Condiciones

Una aplicación web estática desarrollada con Astro para mostrar los términos y condiciones de los bots de Discord del ecosistema Proyecto Opcean.

## 🤖 Bots Incluidos

- **Sakura** 🌸 - Especialista en IA Avanzada
- **Nebula** 🌙 - Bot Multi-Función Principal  
- **Archan** 💻 - Asistente de Programación Kawaii

## ✨ Características

- Diseño kawaii con gradientes temáticos por bot
- Páginas individuales con términos específicos
- Responsive design optimizado para móvil
- Efectos visuales con iluminación por colores de bot
- Tipografía moderna con Onest Variable Font

## 🚀 Tecnologías

- **Astro 5.13.2** - Framework principal
- **TypeScript** - Tipado estático
- **CSS Custom Properties** - Sistema de tokens de diseño
- **Onest Variable Font** - Tipografía moderna

## 📦 Instalación

```bash
# Clonar repositorio
git clone <repository-url>
cd opcean-discord-bot-terms

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa del build
npm run preview
```

## 🌐 Despliegue

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `dist`

### Vercel
1. Conecta tu repositorio a Vercel
2. El framework se detecta automáticamente
3. Despliega

### GitHub Pages
1. Habilita GitHub Pages en tu repositorio
2. Usa GitHub Actions con el workflow incluido

### Otros servicios estáticos
El proyecto genera archivos estáticos en la carpeta `dist/` que pueden ser desplegados en cualquier servicio de hosting estático.

## ⚙️ Configuración

### Cambiar dominio
Edita `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://tu-dominio.com', // Cambia por tu dominio
  // ... resto de configuración
});
```

## 📁 Estructura

```
src/
├── components/       # Componentes reutilizables
├── layouts/         # Layouts principales
├── pages/           # Páginas del sitio
│   ├── archan/     # Términos de Archan
│   ├── nebula/     # Términos de Nebula
│   ├── sakura/     # Términos de Sakura
│   └── index.astro # Página principal
└── styles/          # Estilos globales

public/
├── images/bots/     # Avatares de los bots
└── favicon.svg      # Icono del sitio
```

## 🎨 Diseño

- **Tema kawaii** con colores pastel
- **Gradientes específicos** por bot:
  - Sakura: Rosa/Negro
  - Nebula: Morado/Negro  
  - Archan: Azul/Negro
- **Efectos de iluminación** en avatares
- **Animaciones suaves** y transiciones

## 🧞 Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia servidor de desarrollo                    |
| `npm run build`           | Construye el sitio para producción              |
| `npm run preview`         | Vista previa local del build                     |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                    |

## 👥 Desarrollo

Desarrollado por **OpceanAI** para el ecosistema de bots Discord.

## 📄 Licencia

MIT License - Ver archivo LICENSE para más detalles.
