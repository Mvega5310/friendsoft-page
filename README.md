# Friendsoft - Página Web Corporativa

> Sitio web corporativo desarrollado con Next.js para Friendsoft, empresa especializada en desarrollo de software y soluciones tecnológicas.

## 📋 Descripción del Proyecto

Este proyecto es el sitio web oficial de Friendsoft, una plataforma moderna y responsiva que presenta los servicios, proyectos y capacidades de la empresa. La aplicación está construida con tecnologías de vanguardia para ofrecer una experiencia de usuario excepcional.

### ✨ Características Principales

- **🌐 Sitio web multiidioma** - Soporte para español e inglés
- **📱 Diseño responsivo** - Optimizado para todos los dispositivos
- **🎨 Animaciones fluidas** - Implementadas con Framer Motion
- **🗺️ Mapas interactivos** - Integración con Leaflet para ubicaciones
- **⚡ Rendimiento optimizado** - Lazy loading y optimizaciones de Next.js
- **🎯 SEO optimizado** - Meta tags y estructura semántica
- **🐳 Containerización** - Configuración Docker para despliegue

## 🛠️ Tecnologías Utilizadas

- **Framework:** Next.js 15.5.2
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Internacionalización:** react-i18next
- **Mapas:** React Leaflet
- **Iconos:** Heroicons
- **Linting:** ESLint

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm**, **yarn**, **pnpm** o **bun** como gestor de paquetes
- **Git** para control de versiones

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd friendsoft-page
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

### 3. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto (si es necesario):

```env
# Agregar variables de entorno según sea necesario
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🏃‍♂️ Uso y Desarrollo

### Servidor de desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### Comandos disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Construcción
npm run build        # Construye la aplicación para producción
npm run start        # Inicia el servidor de producción

# Calidad de código
npm run lint         # Ejecuta ESLint para verificar el código
```

## 🐳 Despliegue con Docker

### Construcción de la imagen

```bash
# Construir la aplicación
npm run build
npm run export  # Si usas exportación estática

# Construir la imagen Docker
docker build -t friendsoft-page .
```

### Ejecutar el contenedor

```bash
docker run -p 80:80 friendsoft-page
```

### Usando Docker Compose

```bash
docker-compose up -d
```

## 📁 Estructura del Proyecto

```
friendsoft-page/
├── public/                 # Archivos estáticos
│   ├── images/            # Imágenes del sitio
│   ├── icons/             # Iconos
│   └── ...
├── src/
│   ├── app/               # Páginas de la aplicación (App Router)
│   │   ├── contact/       # Página de contacto
│   │   ├── projects/      # Página de proyectos
│   │   ├── services/      # Página de servicios
│   │   └── ...
│   ├── components/        # Componentes reutilizables
│   │   ├── home/          # Componentes específicos del home
│   │   ├── layout/        # Componentes de layout
│   │   └── ...
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Configuraciones y utilidades
│   ├── locales/           # Archivos de traducción
│   │   ├── en/            # Traducciones en inglés
│   │   └── es/            # Traducciones en español
│   ├── services/          # Servicios y APIs
│   └── utils/             # Funciones utilitarias
├── docker-compose.yml     # Configuración Docker Compose
├── Dockerfile             # Configuración Docker
├── nginx.conf             # Configuración Nginx
└── ...
```

## 🌐 Internacionalización

El proyecto soporta múltiples idiomas:

- **Español (es)** - Idioma por defecto
- **Inglés (en)** - Idioma alternativo

Las traducciones se encuentran en `src/locales/` y se gestionan con `react-i18next`.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📝 Recursos Adicionales

### Next.js
- [Documentación de Next.js](https://nextjs.org/docs) - Aprende sobre las características y API de Next.js
- [Tutorial interactivo de Next.js](https://nextjs.org/learn) - Tutorial paso a paso

### Despliegue
- [Documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) - Plataforma recomendada para despliegue

## 📄 Licencia

Este proyecto es propiedad de Friendsoft. Todos los derechos reservados.

---

**Desarrollado con ❤️ por el equipo de Friendsoft**
