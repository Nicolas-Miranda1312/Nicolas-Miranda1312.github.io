# Portafolio Personal — Diseño Industrial

Estructura modular HTML + CSS + JS, lista para GitHub Pages.

---

## 📁 Estructura de archivos

```
portafolio/
│
├── index.html          ← Home (animación dot wave)
├── trabajos.html       ← Carrusel de arco con 15 proyectos
├── sobre-mi.html       ← Perfil, skills, experiencia y contacto
│
├── style.css           ← Estilos globales compartidos (dark/light mode)
│
├── js/
│   ├── arc.js          ← Carrusel, datos de proyectos e imágenes
│   ├── cursor.js       ← Cursor personalizado
│   ├── theme.js        ← Toggle dark/light mode
│   └── reveal.js       ← Animación de entrada al hacer scroll
│
├── assets/
│   └── images/
│       ├── LEEME.txt   ← Instrucciones para agregar tu foto
│       └── foto.jpg    ← (REEMPLAZAR) Tu foto personal
│
└── projects/
    └── proyecto-01/
        ├── index.html  ← Plantilla de página de proyecto
        └── assets/
            ├── LEEME.txt   ← Instrucciones para las imágenes
            ├── cover.jpg   ← (REEMPLAZAR) Portada de la tarjeta
            ├── hero.jpg    ← (REEMPLAZAR) Imagen grande del detalle
            ├── img-01.jpg  ← (REEMPLAZAR) Galería imagen 1
            └── img-02.jpg  ← (REEMPLAZAR) Galería imagen 2
```

---

## 🚀 Publicar en GitHub Pages

1. Sube todos los archivos a un repositorio en GitHub
2. Ve a **Settings → Pages → Source: main → / (root)**
3. Tu sitio quedará en: `https://tu-usuario.github.io/nombre-del-repo/`

> Si el repo se llama `tu-usuario.github.io`, quedará directo en esa URL.

---

## 🖼 Cómo agregar tus imágenes

### Tu foto personal (`sobre-mi.html`)
1. Guarda tu foto en: `assets/images/foto.jpg`
2. Abre `sobre-mi.html`
3. Busca el emoji `📸` y reemplaza el bloque por:
```html
<img src="assets/images/foto.jpg" alt="Tu nombre" />
```

### Imágenes de un proyecto (`js/arc.js`)
1. Guarda tus imágenes en: `projects/proyecto-01/assets/`
   - `cover.jpg`  → portada en la tarjeta (640×1020 px)
   - `hero.jpg`   → imagen grande del detalle (1200×675 px)
   - `img-01.jpg` → galería (800×600 px)
2. Abre `js/arc.js`
3. Busca el proyecto correspondiente en el array `PROJECTS`
4. Rellena los campos de imagen:
```js
cover:   'assets/images/p01-cover.jpg',
hero:    'assets/images/p01-hero.jpg',
gallery: [
  'assets/images/p01-01.jpg',
  'assets/images/p01-02.jpg',
  'assets/images/p01-03.jpg',
],
```
> Las rutas son **relativas a `trabajos.html`**, así que deben empezar con `assets/images/` o `projects/proyecto-01/assets/`.

---

## ➕ Agregar un nuevo proyecto

### En `js/arc.js`:
Copia uno de los objetos del array `PROJECTS` y modifícalo:
```js
{
  num: '16',
  name: 'Nombre del Proyecto',
  year: '2025',
  tags: ['Categoría', 'Material'],
  tools: ['Herramienta 1', 'Herramienta 2'],
  desc: 'Descripción breve del proyecto.',
  process: [
    { t: 'Fase 1', d: 'Descripción.' },
    { t: 'Fase 2', d: 'Descripción.' },
    { t: 'Fase 3', d: 'Descripción.' },
    { t: 'Resultado', d: 'Descripción.' },
  ],
  cover:   'assets/images/p16-cover.jpg',
  hero:    'assets/images/p16-hero.jpg',
  gallery: ['assets/images/p16-01.jpg'],
  coverEmoji: '🎯',
  heroEmoji:  '🎯',
  palette: ['#COLOR1', '#COLOR2', '#COLOR3', '#COLOR4'],
  style: 'mesh', // opciones: mesh | dots | grid | lines
},
```
> El arco se recalcula automáticamente para incluir la nueva tarjeta.

### Página individual del proyecto:
1. Duplica la carpeta `projects/proyecto-01/` y renómbrala `proyecto-16`
2. Edita su `index.html` con el contenido del proyecto

---

## 🌙 Modo oscuro / claro

Todas las páginas incluyen un botón interruptor (esquina inferior derecha).
La preferencia se guarda en el navegador y se mantiene al navegar entre páginas.

Para cambiar los colores del modo oscuro, edita las variables en `style.css`:
```css
html.dark {
  --bg:   #0E0D0C;   /* fondo oscuro */
  --fg:   #F0EBE3;   /* texto claro  */
}
```

---

## 🎛 Ajustar el carrusel (en `js/arc.js`)

Modifica la función `getArcParams()`:
```js
function getArcParams() {
  const w = window.innerWidth;
  if (w <= 600) return { radius: 200, arcHalf: Math.PI * 1.2 };   // móvil
  if (w <= 900) return { radius: 280, arcHalf: Math.PI * 1.45 };  // tablet
  return         { radius: 420, arcHalf: Math.PI * 1.667 };        // escritorio
}
```

Para ajustar la velocidad del gesto táctil, busca y modifica:
```js
targetSpeed = BASE_SPEED + (dx > 0 ? 1 : -1) * 0.006;
//                                                ↑ aumenta para más velocidad
```

---

© 2026 — Portafolio Diseño Industrial
