# Portafolio Personal — Estructura v2

## Páginas
- `/index.html` → **Home** con animación de constelación + dos botones de navegación
- `/trabajos/index.html` → **Trabajos** con grilla filtrable de proyectos
- `/sobre-mi/index.html` → **Sobre mí** con skills, experiencia y contacto

## Agregar un nuevo proyecto

1. Duplica la carpeta `projects/proyecto-01/` con el nuevo nombre.
2. Edita su `index.html`.
3. En `trabajos/index.html`, añade dentro de `#projects-grid`:

```html
<a href="../projects/mi-proyecto/index.html" class="work-card large" data-cat="web">
  <div class="card-img">
    <img src="../projects/mi-proyecto/assets/cover.jpg" alt="Mi proyecto" />
    <span class="card-num">05</span>
  </div>
  <div class="card-body">
    <div class="card-meta">
      <span class="tag accent">Web</span>
      <span class="tag">2025</span>
    </div>
    <h2 class="card-title">Mi Proyecto</h2>
    <p class="card-desc">Descripción breve.</p>
    <span class="card-link">Ver caso completo →</span>
  </div>
</a>
```

`data-cat` puede ser: `web` | `app` | `diseño`  
`class` puede ser: `large` (span 7) | `small` (span 5) | `full` (span 12)

## Publicar en GitHub Pages
1. Sube todo a un repositorio GitHub.
2. Settings → Pages → Source: `main` / `root`.
3. URL: `https://tu-usuario.github.io/nombre-repo/`

## Personalizar colores
Edita las variables en `assets/css/shared.css`:
```css
--accent: #C85C3A;   /* color principal */
--bg:     #0D0C0B;   /* fondo oscuro    */
--ink:    #F0EBE3;   /* texto principal */
```
