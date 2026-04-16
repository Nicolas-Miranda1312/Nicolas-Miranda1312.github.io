# 🗂 Portafolio Personal — Guía de estructura

Este repositorio está diseñado para publicarse en **GitHub Pages** con una URL como:  
`https://tu-usuario.github.io/portafolio/`

---

## 📁 Estructura de carpetas

```
portafolio/
│
├── index.html                  ← Página principal del portafolio
├── README.md                   ← Este archivo
│
├── assets/                     ← Recursos compartidos del sitio principal
│   ├── css/
│   │   └── style.css           ← Estilos globales
│   ├── js/
│   │   └── main.js             ← Scripts globales
│   ├── fonts/                  ← Tipografías locales (si usas alguna)
│   └── images/
│       └── foto.jpg            ← Tu foto para la sección "Sobre mí"
│
└── projects/                   ← Carpeta con todos tus proyectos
    ├── proyecto-01/
    │   ├── index.html          ← Página del proyecto (lista para editar)
    │   ├── assets/
    │   │   ├── cover.png       ← Imagen de portada (aparece en la tarjeta)
    │   │   ├── screenshot-1.png
    │   │   └── screenshot-2.png
    │   └── docs/
    │       └── notas.md        ← Documentación interna del proyecto
    │
    ├── proyecto-02/
    │   ├── index.html
    │   ├── assets/
    │   └── docs/
    │
    └── proyecto-nuevo/         ← Así agregas cada proyecto nuevo
        ├── index.html          ← Copia la plantilla de proyecto-01
        ├── assets/
        └── docs/
```

---

## 🚀 Publicar en GitHub Pages

1. Sube todo el contenido a un repositorio en GitHub (puede ser público).
2. Ve a **Settings → Pages**.
3. En "Source", elige `main` branch y carpeta `/ (root)`.
4. Tu portafolio quedará en: `https://tu-usuario.github.io/nombre-del-repo/`

> **Tip:** Si el repo se llama `tu-usuario.github.io`, queda directamente en esa URL sin subcarpeta.

---

## ➕ Agregar un nuevo proyecto

1. Duplica la carpeta `projects/proyecto-01/` y renómbrala.
2. Edita el `index.html` de ese nuevo proyecto con tu contenido.
3. Abre `index.html` (raíz) y agrega una nueva tarjeta en la sección `#proyectos`:

```html
<a href="projects/mi-nuevo-proyecto/index.html" class="project-card">
  <div class="project-img-wrap">
    <img src="projects/mi-nuevo-proyecto/assets/cover.png" alt="Mi proyecto" />
    <div class="project-img-placeholder">P3</div>
  </div>
  <div class="project-info">
    <div class="project-meta">
      <span class="tag">Tipo</span>
      <span class="tag">2025</span>
    </div>
    <h3 class="project-name">Mi nuevo proyecto</h3>
    <p class="project-desc">Descripción breve.</p>
    <span class="project-link">Ver proyecto →</span>
  </div>
</a>
```

---

## ✏️ Personalización rápida

| Qué cambiar | Dónde |
|---|---|
| Nombre, bio y email | `index.html` — secciones Hero, Sobre mí, Contacto |
| Colores del sitio | `assets/css/style.css` — variables `:root` |
| Tu foto | Reemplaza `assets/images/foto.jpg` |
| Skills listadas | `index.html` — sección `#sobre-mi` |
| Links de GitHub / LinkedIn | `index.html` — sección `#contacto` |

---

## 🎨 Variables de color (fácil de cambiar)

```css
:root {
  --bg:        #F5F1EB;   /* fondo principal */
  --bg-alt:    #EDE8DF;   /* fondo alternativo */
  --ink:       #1A1714;   /* texto principal */
  --ink-muted: #6B6560;   /* texto secundario */
  --accent:    #C85C3A;   /* color de énfasis (terracota) */
}
```

---

Hecho con ♥ — listo para GitHub Pages.
