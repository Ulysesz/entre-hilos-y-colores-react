# Entre Hilos y Colores (React)

Migración a React del proyecto maquetado en HTML y CSS (Trabajo Práctico Final, Opción A).

Pagina de un emprendimiento de piezas hechas a mano en crochet y porcelana fría.

## Cómo ejecutar el proyecto

1. Clonar el repositorio.
2. Instalar las dependencias: `npm install`
3. Iniciar el servidor de desarrollo: `npm run dev`
4. Abrir en el navegador la URL que muestra la terminal (normalmente http://localhost:5173).

## Versión de producción

- `npm run build`: genera la carpeta `dist/` con los archivos optimizados.
- `npm run preview`: muestra en el navegador esa versión final.

## Tecnologías

- React + Vite
- React Router
- CSS

## Estructura

- `src/components`: Navbar, Footer, Card, Gallery y Contact.
- `src/pages`: Layout, Index, Productos, Galeria, Nosotros y Contacto.
- `src/data`: datos de los productos y de la galería.
- `src/styles`: archivos CSS.
- `public/assets`: imágenes.
- `src/App.jsx`: define las rutas de la aplicación.

## Funcionalidades

- Navegación entre páginas con React Router, con un Layout compartido.
- Productos y galería generados con `map` a partir de datos, usando props.
- Formulario de contacto controlado con `useState`: los eventos de los inputs y el envío se muestran en la consola del navegador, y el formulario se puede enviar y limpiar.