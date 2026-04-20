# Portafolio Personal — Listo para GitHub Pages

## Estructura
```
portafolio/
├── index.html              ← Home (animación dot wave)
├── trabajos/
│   └── index.html          ← Carrusel de arco con 15 proyectos
├── sobre-mi/
│   └── index.html          ← Perfil, skills, experiencia y contacto
├── projects/
│   ├── _template/          ← Plantilla base para nuevos proyectos
│   │   └── index.html
│   ├── proyecto-01/
│   │   ├── index.html      ← Página individual del proyecto
│   │   └── assets/         ← Imágenes del proyecto
│   ├── proyecto-02/ ...
│   └── proyecto-15/
└── README.md
```

---

## 🚀 Publicar en GitHub Pages

1. Crea un repositorio en GitHub (puede ser público o privado con plan Pro)
2. Sube todos los archivos a la rama `main`
3. Ve a **Settings → Pages → Source: Deploy from branch → main → / (root)**
4. Tu portafolio quedará disponible en:
   `https://tu-usuario.github.io/nombre-del-repo/`

> **Tip:** Si el repositorio se llama exactamente `tu-usuario.github.io`, quedará en la raíz sin subcarpeta.

---

## ✏️ Personalizar el contenido

### Home (`index.html`)
- Cambia `"Portafolio"` por tu nombre o siglas
- Ajusta el texto de los dos botones si lo necesitas

### Trabajos (`trabajos/index.html`)
- Edita el array `PROJECTS` al inicio del script
- Cada proyecto tiene: `num`, `name`, `year`, `tags`, `tools`, `palette`, `style`, `desc`, `process`
- Para agregar un proyecto nuevo, añade un objeto al array — el arco se recalcula solo

### Sobre mí (`sobre-mi/index.html`)
- Reemplaza los textos de presentación, skills y experiencia
- Descomenta la línea `<img>` dentro de `.about-photo` y apunta a tu foto
- Cambia el email, GitHub y LinkedIn en la sección `#contacto`

### Páginas de proyecto (`projects/proyecto-XX/index.html`)
- Reemplaza el emoji en `.hero` por `<img src="assets/cover.jpg" alt="...">`
- Edita el título, descripción, proceso, galería y herramientas
- Añade imágenes reales en la carpeta `assets/` de cada proyecto

---

## ➕ Agregar un nuevo proyecto

1. Duplica la carpeta `projects/_template/` y renómbrala `proyecto-16` (o el nombre que prefieras)
2. Edita su `index.html`
3. En `trabajos/index.html`, añade un objeto al array `PROJECTS`:

```js
{
  num:'16',
  name:'Nombre del Proyecto',
  year:'2025',
  tags:['Categoría','Material'],
  tools:['Herramienta 1','Herramienta 2'],
  palette:['#COLOR1','#COLOR2','#COLOR3','#COLOR4'],
  style:'mesh', // mesh | dots | grid | lines
  desc:'Descripción breve del proyecto.',
  process:[
    {t:'Fase 1', d:'Descripción de la fase.'},
    {t:'Fase 2', d:'Descripción de la fase.'},
    {t:'Fase 3', d:'Descripción de la fase.'},
    {t:'Resultado', d:'Descripción del resultado.'},
  ]
}
```

---

## 🎨 Ajustar el carrusel de arco

Estos tres valores en `trabajos/index.html` controlan la geometría:

| Variable | Valor actual | Efecto |
|---|---|---|
| `bottom` en `#arc-wrap` | `80px` | Altura del pivot — más alto = tarjetas más arriba |
| `ARC_RADIUS` | `300px` | Radio del arco — más pequeño = tarjetas más juntas |
| `ARC_HALF` | `±150°` | Arco visible — más grande = más tarjetas visibles |

---

© 2025 — Portafolio de Diseño Industrial
