/* arc.js — Carrusel de arco rotante + vista detalle
   ─────────────────────────────────────────────────
   CÓMO AGREGAR TU PROYECTO:
   1. Añade un objeto al array PROJECTS (sigue el mismo formato)
   2. Guarda la imagen de portada en: assets/images/proyecto-XX-cover.jpg
   3. Guarda imágenes de galería en:  assets/images/proyecto-XX-01.jpg, etc.
   4. El arco se recalcula solo — no necesitas cambiar nada más.
   ───────────────────────────────────────────────── */

const PROJECTS = [
  {
    num: '01',
    name: 'Mesa Estructura',
    year: '2024',
    tags: ['Mobiliario', 'Madera', 'CNC'],
    tools: ['Rhinoceros 3D', 'Grasshopper', 'CNC Router', 'Aceite de tung'],
    desc: 'Sistema modular de apoyo en madera recuperada y acero laminado en frío. Geometría paramétrica tensada con la veta natural del material.',
    process: [
      { t: 'Investigación', d: 'Estudio de ensambles japoneses adaptados a producción semi-industrial.' },
      { t: 'Prototipado',   d: '3 iteraciones en MDF. Test de carga con 180 kg.' },
      { t: 'Fabricación',   d: 'CNC de precisión ±0.1mm, acabado con aceite de tung en 3 capas.' },
      { t: 'Serie',         d: 'Edición limitada de 12 unidades por lote.' },
    ],
    /* ── IMÁGENES ──────────────────────────────────────────────
       cover:   imagen que aparece en la tarjeta del arco
       hero:    imagen grande en la vista detalle
       gallery: array de imágenes de la galería del proyecto

       Puedes cambiar estas URLs por archivos locales en assets/images.
       Si la imagen no existe, se muestra un emoji de placeholder.
       ────────────────────────────────────────────────────────── */
    cover:   'proyecto-01/01.jpg',
    hero:    'proyecto-01/02.jpg',
    gallery: [
      'proyecto-01/01.jpg',
      'proyecto-01/02.jpg',
      'proyecto-01/03.jpg',
      'proyecto-01/04.jpg',
      'proyecto-01/05.jpg',
      'proyecto-01/06.jpg',
      'proyecto-01/07.jpg',
      'proyecto-01/08.jpg',
      'proyecto-01/09.jpg',
      'proyecto-01/10.jpg',
      'proyecto-01/12.jpg',
      'proyecto-01/13.jpg',
      'proyecto-01/14.jpg',
      'proyecto-01/15.jpg',
    ],
    coverEmoji: '🪵',
    heroEmoji:  '🪵',
    palette: ['#FF6B35', '#1B4332', '#F9C74F', '#023E8A'],
    style: 'mesh',
  },
  {
    num: '02',
    name: 'Objeto Utilitario',
    year: '2024',
    tags: ['Cerámica', 'Torno'],
    tools: ['Torno de alfarero', 'Horno gas 1280°C', 'Esmaltes naturales'],
    desc: 'Serie de piezas domésticas que preservan la huella táctil del proceso artesanal como evidencia del tiempo.',
    process: [
      { t: 'Concepto',   d: 'La imperfección como valor de producción intencional.' },
      { t: 'Material',   d: 'Arcilla chamotada. Temperatura: 1280°C.' },
      { t: 'Esmalte',    d: 'Formulación propia con ceniza volcánica local.' },
      { t: 'Edición',    d: '30 piezas numeradas y documentadas.' },
    ],
    cover: 'proyecto-02/01.jpg',
    hero: 'proyecto-02/02.jpg',
    gallery: [
      'proyecto-02/01.jpg',
      'proyecto-02/02.jpg',
      'proyecto-02/03.jpg',
      'proyecto-02/04.jpg',
      'proyecto-02/05.jpg',
      'proyecto-02/06.jpg',
    ],
    coverEmoji: '🏺', heroEmoji: '🏺',
    palette: ['#A8DADC', '#E63946', '#457B9D', '#F1FAEE'],
    style: 'dots',
  },
  {
    num: '03',
    name: 'Módulo Cero',
    year: '2023',
    tags: ['Sistemas', 'Acero', 'Láser'],
    tools: ['SolidWorks', 'Corte láser', 'TIG Welding', 'Anodizado'],
    desc: 'Sistema estructural ensamblable sin herramientas. 12 tipologías de nodo generan +200 configuraciones posibles.',
    process: [
      { t: 'Sistema',    d: 'Tolerancias ±0.3mm para ensamble manual fluido.' },
      { t: 'Material',   d: 'Acero laminado 2mm. Anodizado negro mate.' },
      { t: 'Prueba',     d: 'Instalación piloto en Matucana 100, Santiago.' },
      { t: 'Variantes',  d: 'Powder coat en 6 colores estándar.' },
    ],
    cover: 'proyecto-03/01.jpg',
    hero: 'proyecto-03/02.jpg',
    gallery: [
      'proyecto-03/01.jpg',
      'proyecto-03/02.jpg',
      'proyecto-03/03.jpg',
      'proyecto-03/04.jpg',
      'proyecto-03/05.jpg',
      'proyecto-03/06.jpg',
      'proyecto-03/07.jpg',
    ],
    coverEmoji: '⚙️', heroEmoji: '⚙️',
    palette: ['#FFBE0B', '#FB5607', '#FF006E', '#3A0CA3'],
    style: 'grid',
  },
  {
    num: '04',
    name: 'Silla Tubo',
    year: '2023',
    tags: ['Mobiliario', 'Acero', 'Doblado'],
    tools: ['Dobladoras CNC', 'AutoCAD', 'MIG Welding', 'Pintura electrostática'],
    desc: 'Un único tubo de acero 22mm doblado en frío genera asiento, respaldo y estructura en recorrido continuo.',
    process: [
      { t: 'Geometría',  d: 'Simulación digital de pliegues antes del primer doble.' },
      { t: 'Ergonomía',  d: 'Test con 24 usuarios. Ajuste de ángulo de respaldo.' },
      { t: 'Producción', d: 'Fabricable en taller pequeño. 45 min/unidad.' },
      { t: 'Acabado',    d: 'Pintura electrostática en 8 colores.' },
    ],
    cover: 'proyecto-04/01.jpg',
    hero: 'proyecto-04/02.jpg',
    gallery: [
      'proyecto-04/01.jpg',
      'proyecto-04/02.jpg',
      'proyecto-04/03.jpg',
      'proyecto-04/04.jpg',
      'proyecto-04/05.jpg',
      'proyecto-04/06.jpg',
    ],
    coverEmoji: '🪑', heroEmoji: '🪑',
    palette: ['#06D6A0', '#118AB2', '#073B4C', '#FFD166'],
    style: 'lines',
  },
  {
    num: '05',
    name: 'Sistema Visual',
    year: '2023',
    tags: ['Identidad', 'Packaging'],
    tools: ['Illustrator', 'InDesign', 'Impresión offset', 'Foil cobre'],
    desc: 'Lenguaje material completo para marca emergente. Sistema de 4 familias con lógica cromática propia.',
    process: [
      { t: 'Investigación', d: 'Análisis de 80 competidores. Mapeo de espacio visual.' },
      { t: 'Sistema',       d: '4 familias. Papel reciclado 100%, tintas vegetales.' },
      { t: 'Detalle',       d: 'Foil cobre en hot stamping. Tipografía propietaria.' },
      { t: 'Escala',        d: '12 piezas packaging + identidad digital + señalética.' },
    ],
    cover: 'proyecto-05/01.jpg',
    hero: 'proyecto-05/02.jpg',
    gallery: [
      'proyecto-05/01.jpg',
      'proyecto-05/02.jpg',
      'proyecto-05/03.jpg',
      'proyecto-05/04.jpg',
      'proyecto-05/05.jpg',
      'proyecto-05/06.jpg',
    ],
    coverEmoji: '📦', heroEmoji: '📦',
    palette: ['#F72585', '#7209B7', '#3A0CA3', '#4CC9F0'],
    style: 'mesh',
  },
  {
    num: '06',
    name: 'Tejido Técnico',
    year: '2022',
    tags: ['Textil', 'Producto', 'Bio'],
    tools: ['Telar semi-industrial', 'Adobe Color', 'Tinturas naturales', 'CAD'],
    desc: 'Fibras naturales en contexto industrial. Texturas funcionales para aplicación en equipamiento urbano.',
    process: [
      { t: 'Material', d: 'Lino, yute y fibra de coco. Sin sintéticos.' },
      { t: 'Color',    d: 'Tintes naturales: añil, cúrcuma y mora.' },
      { t: 'Estructura', d: '3 ligamentos distintos para resistencias diferenciadas.' },
      { t: 'Uso',      d: 'Prototipo instalado en banca de espacio público.' },
    ],
    cover: 'proyecto-06/01.jpg',
    hero: 'proyecto-06/02.jpg',
    gallery: [
      'proyecto-06/01.jpg',
      'proyecto-06/02.jpg',
      'proyecto-06/03.jpg',
      'proyecto-06/04.jpg',
      'proyecto-06/05.jpg',
      'proyecto-06/06.jpg',
    ],
    coverEmoji: '🧵', heroEmoji: '🧵',
    palette: ['#52B788', '#B7E4C7', '#1B4332', '#D8F3DC'],
    style: 'dots',
  },
  {
    num: '07',
    name: 'Luminaria Piel',
    year: '2022',
    tags: ['Iluminación', 'Cuero', 'Artesanal'],
    tools: ['Sketchbook Pro', 'Láser cuero', 'LED 2700K', 'Costura manual'],
    desc: 'Difusor de luz en cuero vegetal cortado láser. La piel envejece con el uso, transformando la pieza con el tiempo.',
    process: [
      { t: 'Material',  d: 'Cuero vegetal 2.5mm. Adquiere pátina con el uso.' },
      { t: 'Luz',       d: 'LED 2700K difuminado. Consumo 8W.' },
      { t: 'Corte',     d: 'Patrón generativo. Cada pieza es única.' },
      { t: 'Montaje',   d: 'Sistema de costura manual visible como detalle.' },
    ],
    cover: 'proyecto-07/01.jpg',
    hero: 'proyecto-07/2.jpg',
    gallery: [
      'proyecto-07/01.jpg',
      'proyecto-07/2.jpg',
      'proyecto-07/03.jpg',
      'proyecto-07/04.jpg',
      'proyecto-07/05.jpg',
      'proyecto-07/06.jpg',
      'proyecto-07/07.jpg',
      'proyecto-07/08.jpg',
    ],
    coverEmoji: '💡', heroEmoji: '💡',
    palette: ['#D4A373', '#CCD5AE', '#E9EDC9', '#FEFAE0'],
    style: 'grid',
  },
  {
    num: '08',
    name: 'Kit Emergencia',
    year: '2022',
    tags: ['Producto', 'Diseño Social', 'ABS'],
    tools: ['Fusion 360', 'Inyección plástica', 'Serigrafía', 'User testing'],
    desc: 'Equipo de primeros auxilios para zonas sin acceso a salud. Diseñado con y para comunidades rurales del sur de Chile.',
    process: [
      { t: 'Co-diseño', d: '12 talleres con comunidades mapuche en La Araucanía.' },
      { t: 'Material',  d: 'ABS reciclado + silicona médica. IP54.' },
      { t: 'Producción',d: 'Molde de inyección para serie de 500 unidades.' },
      { t: 'Distribución', d: 'Piloto activo en 3 postas rurales.' },
    ],
    cover: 'proyecto-08/01.jpg',
    hero: 'proyecto-08/02.jpg',
    gallery: [
      'proyecto-08/01.jpg',
      'proyecto-08/02.jpg',
      'proyecto-08/03.jpg',
      'proyecto-08/04.jpg',
      'proyecto-08/05.jpg',
      'proyecto-08/06.jpg',
      'proyecto-08/07.jpg',
      'proyecto-08/08.jpg',
    ],
    coverEmoji: '🩺', heroEmoji: '🩺',
    palette: ['#EF233C', '#D90429', '#8D99AE', '#EDF2F4'],
    style: 'lines',
  },
  {
    num: '09',
    name: 'Estante Orgánico',
    year: '2021',
    tags: ['Mobiliario', 'Madera', 'Paramétrico'],
    tools: ['Rhino + Grasshopper', 'Torno CNC', 'Laca natural', 'Fotografía'],
    desc: 'Estante generado por algoritmo que simula crecimiento de ramas. Ninguna pieza es igual a otra.',
    process: [
      { t: 'Algoritmo',  d: 'Grasshopper genera geometría a partir de parámetros de "crecimiento".' },
      { t: 'Fabricación',d: 'Torno CNC 4 ejes. Madera de eucalipto.' },
      { t: 'Acabado',    d: 'Laca natural mate. Revela el grano interior.' },
      { t: 'Serie',      d: 'Edición de autor: 5 piezas firmadas.' },
    ],
    cover: 'proyecto-09/01.jpg',
    hero: 'proyecto-09/02.jpg',
    gallery: [
      'proyecto-09/01.jpg',
      'proyecto-09/02.jpg',
      'proyecto-09/03.jpg',
      'proyecto-09/04.jpg',
      'proyecto-09/05.jpg',
      'proyecto-09/06.jpg',
      'proyecto-09/07.jpg',
      'proyecto-09/08.jpg',
    ],
    coverEmoji: '🌿', heroEmoji: '🌿',
    palette: ['#E9C46A', '#F4A261', '#E76F51', '#264653'],
    style: 'mesh',
  },
  {
    num: '10',
    name: 'Mochila Modular',
    year: '2021',
    tags: ['Accesorios', 'Cordura', 'Sistemas'],
    tools: ['CLO 3D', 'Costura industrial', 'Laser', 'Broches YKK'],
    desc: 'Sistema de carga con módulos intercambiables por broches magnéticos. 43 configuraciones posibles.',
    process: [
      { t: 'Sistema',    d: '7 módulos distintos. 43 configuraciones posibles.' },
      { t: 'Material',   d: 'Cordura 500D + base rígida HDPE 2mm.' },
      { t: 'Ergonomía',  d: 'Distribución de peso validada con sensor de presión.' },
      { t: 'Prototipo',  d: 'v3 en uso por 6 meses. Sin fallas estructurales.' },
    ],
    cover: 'proyecto-10/01.jpg',
    hero: 'proyecto-10/02.jpg',
    gallery: [
      'proyecto-10/01.jpg',
      'proyecto-10/02.jpg',
      'proyecto-10/03.jpg',
      'proyecto-10/04.jpg',
      'proyecto-10/05.jpg',
      'proyecto-10/06.jpg',
      'proyecto-10/07.jpg',
      'proyecto-10/08.jpg',
    ],
    coverEmoji: '🎒', heroEmoji: '🎒',
    palette: ['#6D6875', '#B5838D', '#E5989B', '#FFB4A2'],
    style: 'dots',
  },
  {
    num: '11',
    name: 'Señalética Táctil',
    year: '2021',
    tags: ['Inclusivo', 'Sistemas', 'Bronce'],
    tools: ['AutoCAD', 'Fundición bronce', 'Braille encoding', 'Instalación'],
    desc: 'Sistema de señalética para personas con discapacidad visual. Braille fusionado con diseño tipográfico en bronce fundido.',
    process: [
      { t: 'Investigación', d: 'Colaboración con Fundación Luz. 40 entrevistas.' },
      { t: 'Material',      d: 'Bronce fundido. Alta durabilidad en exterior.' },
      { t: 'Braille',       d: 'Codificación validada por revisores certificados.' },
      { t: 'Instalación',   d: 'Piloto en Museo de Arte Precolombino, Santiago.' },
    ],
    cover: 'proyecto-11/01.jpg',
    hero: 'proyecto-11/02.jpg',
    gallery: [
      'proyecto-11/01.jpg',
      'proyecto-11/02.jpg',
      'proyecto-11/03.jpg',
      'proyecto-11/04.jpg',
      'proyecto-11/05.jpg',
      'proyecto-11/06.jpg',
      'proyecto-11/07.jpg',
      'proyecto-11/08.jpg',
      'proyecto-11/09.jpg',
    ],
    coverEmoji: '🔡', heroEmoji: '🔡',
    palette: ['#C9B99A', '#A68A64', '#7D6037', '#3D2B1F'],
    style: 'grid',
  },
  {
    num: '12',
    name: 'Banca Compuesta',
    year: '2025',
    tags: ['Urbano', 'Compuesto', 'Paramétrico'],
    tools: ['Rhino', 'Fabricación CNC', 'Resina epoxi', 'Fibra carbono'],
    desc: 'Banca de espacio público en fibra de carbono y resina. Resistencia: 800 kg/m². Peso: 8 kg.',
    process: [
      { t: 'Material',     d: 'Fibra carbono 3K + epoxi de baja viscosidad.' },
      { t: 'Fabricación',  d: 'Laminado manual en molde CNC de poliuretano.' },
      { t: 'Carga',        d: 'Resistencia: 800 kg/m². Peso: 8 kg.' },
      { t: 'Estado',       d: '3 unidades instaladas en Plaza Ñuñoa, Santiago.' },
    ],
    cover: 'proyecto-12/01.jpg',
    hero: 'proyecto-12/02.jpg',
    gallery: [
      'proyecto-12/01.jpg',
      'proyecto-12/02.jpg',
      'proyecto-12/03.jpg',
      'proyecto-12/04.jpg',
      'proyecto-12/05.jpg',
      'proyecto-12/06.jpg',
      'proyecto-12/07.jpg',
      'proyecto-12/08.jpg',
      'proyecto-12/09.jpg',
      'proyecto-12/10.jpg',
    ],
    coverEmoji: '🏙', heroEmoji: '🏙',
    palette: ['#023047', '#219EBC', '#8ECAE6', '#FFB703'],
    style: 'lines',
  },
  {
    num: '13',
    name: 'Envase Bioplástico',
    year: '2025',
    tags: ['Packaging', 'Bioplástico', 'Bio'],
    tools: ['Fusion 360', 'Termoformado', 'Bioplástico PLA', 'Serigrafía vegetal'],
    desc: 'Envase cosmético en bioplástico de almidón de maíz. 100% compostable en 90 días.',
    process: [
      { t: 'Material',     d: 'PLA + almidón de maíz. Certificado OK Compost.' },
      { t: 'Proceso',      d: 'Termoformado en molde de aluminio CNC.' },
      { t: 'Gráfica',      d: 'Serigrafía con tintas a base de agua.' },
      { t: 'Ciclo',        d: 'El envase se convierte en abono al final de su vida útil.' },
    ],
    cover: 'proyecto-13/01.jpg',
    hero: 'proyecto-13/02.jpg',
    gallery: [
      'proyecto-13/01.jpg',
      'proyecto-13/02.jpg',
      'proyecto-13/03.jpg',
      'proyecto-13/04.jpg',
      'proyecto-13/05.jpg',
      'proyecto-13/06.jpg',
      'proyecto-13/07.jpg',
      'proyecto-13/08.jpg',
    ],
    coverEmoji: '🌱', heroEmoji: '🌱',
    palette: ['#2DC653', '#F7FFF7', '#1A535C', '#FFE66D'],
    style: 'mesh',
  },
  {
    num: '14',
    name: 'Silla Apilable',
    year: '2025',
    tags: ['Interacción', 'Mobiliario', 'Serie'],
    tools: ['SolidWorks', 'Extrusión aluminio', 'Anodizado', 'Test EN 16139'],
    desc: 'Silla de uso público apilable hasta 12 unidades. Estructura en aluminio extruido. Certificada EN 16139.',
    process: [
      { t: 'Geometría',      d: 'Perfil de extrusión optimizado para rigidez y peso mínimo.' },
      { t: 'Ergonomía',      d: 'Ángulo de asiento 4°. Test con 80 usuarios.' },
      { t: 'Producción',     d: 'Serie de 500 unidades. Tiempo de ciclo: 12 min/silla.' },
      { t: 'Certificación',  d: 'Aprobada norma europea EN 16139 nivel 2.' },
    ],
    cover: '', hero: '', gallery: [],
    coverEmoji: '🏛', heroEmoji: '🏛',
    palette: ['#C0C0C0', '#2B2D42', '#EF233C', '#8D99AE'],
    style: 'grid',
  },
  {
    num: '15',
    name: 'Reloj de Pared',
    year: '2026',
    tags: ['Producto', 'Latón', 'Artesanal'],
    tools: ['Rhino', 'Torno manual', 'Latón', 'Mecanismo Miyota'],
    desc: 'Reloj en latón torneado a mano. Mecanismo japonés de alta precisión. Edición de 20 unidades.',
    process: [
      { t: 'Material',   d: 'Latón macizo C360. Torneado manual en torno paralelo.' },
      { t: 'Mecanismo',  d: 'Miyota 2035. Precisión ±15 seg/mes.' },
      { t: 'Acabado',    d: 'Pulido espejo en esfera. Oxidado en agujas.' },
      { t: 'Edición',    d: '20 unidades firmadas y numeradas. Bajo pedido.' },
    ],
    cover: '', hero: '', gallery: [],
    coverEmoji: '🕐', heroEmoji: '🕐',
    palette: ['#B5935A', '#F2E9D8', '#3D1F00', '#FFD700'],
    style: 'dots',
  },
  {
    num: '16',
    name: 'Interfaz Táctil',
    year: '2026',
    tags: ['Interacción', 'Experiencia', 'Pantalla'],
    tools: ['Figma', 'Prototipado', 'Arduino', 'Sensores'],
    desc: 'Interfaz táctil para un módulo de consulta en espacio público, diseñada para accesibilidad y flujo rápido de información.',
    process: [
      { t: 'Investigación', d: 'Mapa de recorridos de usuario y entrevistas para definir necesidades de consulta rápida.' },
      { t: 'Prototipo',   d: 'Interfaz responsive con feedback háptico en prototipo de baja fidelidad.' },
      { t: 'Validación',  d: 'Pruebas en campo con 30 usuarios y ajustes de contraste y tamaño de objetivo.' },
      { t: 'Entrega',     d: 'Diseño para producción de 10 dispositivos interactivos para espacios culturales.' },
    ],
    cover: '',
    coverVideo: 'proyecto-16/01.mp4',
    hero: 'proyecto-16/03.jpg',
    gallery: [
      'proyecto-16/02.jpg',
      'proyecto-16/03.jpg',
      'proyecto-16/04.jpg',
      'proyecto-16/05.jpg',
      'proyecto-16/06.jpg',
      'proyecto-16/07.jpg',
    ],
    coverEmoji: '🖥️', heroEmoji: '🖥️',
    palette: ['#0A9396', '#94D2BD', '#EE9B00', '#001219'],
    style: 'grid',
  },
];

/* ═══════════════════════
   FILTROS
   ═══════════════════════ */
const FILTER_MAP = {
  'Todas': () => true,
  'Interacción': proj => proj.tags.some(t => /interacción|identidad|packaging|inclusivo|iluminación|iluminac|señalética|visual|experiencia/i.test(t)),
  'Fabricación Digital': proj => proj.tags.some(t => /cnc|láser|laser|fabricación|producción|madera|acero|paramétrico|corte|resina|extrusión|doblado|aluminio|bronce|fibra carbono|impresión|inyección/i.test(t)),
  'Prototipado': proj => proj.tags.some(t => /cerámica|textil|producto|bioplástico|bio|accesorios|cordura|costura|mecanismo|torno|prototipado|serigrafía|molde|latón|taller/i.test(t)),
  'Objetos funcionales': proj => proj.tags.some(t => /cerámica|textil|producto|bioplástico|bio|accesorios|cordura|costura|mecanismo|torno|prototipado|serigrafía|molde|latón|taller/i.test(t)),
};

let currentFilter = 'Todas';

/* ═══════════════════════
   GRÁFICAS GENERATIVAS
   (se usan cuando no hay imagen real)
   ═══════════════════════ */
function drawGen(cv, proj, w, h) {
  cv.width = w; cv.height = h;
  const ctx = cv.getContext('2d');
  const p = proj.palette, s = proj.style;
  if (s === 'mesh') {
    ctx.fillStyle = p[3]; ctx.fillRect(0,0,w,h);
    [[.2,.2],[.8,.3],[.5,.7],[.1,.8],[.9,.6]].forEach(([fx,fy],i) => {
      const g = ctx.createRadialGradient(fx*w,fy*h,0,fx*w,fy*h,Math.max(w,h)*.75);
      g.addColorStop(0, p[i%p.length]+'CC'); g.addColorStop(1,'transparent');
      ctx.fillStyle = g; ctx.fillRect(0,0,w,h);
    });
  } else if (s === 'dots') {
    ctx.fillStyle = p[3]||'#111'; ctx.fillRect(0,0,w,h);
    for(let r=0;r<7;r++) for(let c=0;c<5;c++){
      ctx.beginPath();
      ctx.arc((c+.5)*w/5,(r+.5)*h/7,Math.min(w/5,h/7)*.37,0,Math.PI*2);
      ctx.fillStyle = p[(r*5+c)%p.length]; ctx.fill();
    }
  } else if (s === 'grid') {
    ctx.fillStyle = p[3]||'#000'; ctx.fillRect(0,0,w,h);
    for(let i=0;i<9;i++){
      ctx.fillStyle = p[i%p.length]+'BB';
      ctx.fillRect(i*w/9,0,(w/9)*(Math.random()*.5+.25),h);
    }
    for(let j=0;j<5;j++){
      ctx.fillStyle = p[(j+1)%p.length]+'44';
      ctx.fillRect(0,j*h/4,w,h/11);
    }
  } else {
    ctx.fillStyle = '#080808'; ctx.fillRect(0,0,w,h);
    for(let i=0;i<30;i++){
      const x=i*w/30, amp=h*.35*Math.sin(i*.38+1.2);
      ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x+amp,h);
      ctx.strokeStyle=p[i%p.length]; ctx.lineWidth=(w/30)*.7;
      ctx.globalAlpha=.88; ctx.stroke();
    }
    ctx.globalAlpha=1;
  }
  ctx.font=`bold ${Math.round(w*.28)}px sans-serif`;
  ctx.fillStyle='rgba(255,255,255,.06)';
  ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText(proj.num, w*.5, h*.52);
}

/* ═══════════════════════
   MOTOR DEL ARCO
   ═══════════════════════ */
const arcWrap = document.getElementById('arc-wrap');
let filteredProjects = PROJECTS;
let N = filteredProjects.length;
let cardEls = [];

function buildCards() {
  arcWrap.innerHTML = '';
  cardEls = [];
  N = filteredProjects.length;

  filteredProjects.forEach((proj, i) => {
    const card = document.createElement('div');
    card.className = 'arc-card';
    card.dataset.idx = i;
    if (currentFilter !== 'Todas') card.classList.add('list-card');

    // Imagen, video o canvas generativo
    if (proj.coverVideo) {
      const video = document.createElement('video');
      video.src = proj.coverVideo;
      video.className = 'arc-card-video';
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.controls = false;
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      video.onerror = () => {
        video.replaceWith(makeGenCanvas(proj, 320, 512));
      };
      card.appendChild(video);
    } else if (proj.cover) {
      const img = document.createElement('img');
      img.src = proj.cover;
      img.className = 'arc-card-img';
      img.alt = proj.name;
      // fallback si la imagen falla
      img.onerror = () => {
        img.replaceWith(makeGenCanvas(proj, 320, 512));
      };
      card.appendChild(img);
    } else {
      card.appendChild(makeGenCanvas(proj, 320, 512));
    }

    const lbl = document.createElement('div');
    lbl.className = 'arc-card-label';
    lbl.innerHTML = `<div class="acl-num">Proyecto ${proj.num}</div><div class="acl-name">${proj.name}</div>`;
    card.appendChild(lbl);

    arcWrap.appendChild(card);
    cardEls.push(card);

    card.addEventListener('click', () => openDetail(proj));
    card.addEventListener('mouseenter', () => document.body.classList.add('cur-hover'));
    card.addEventListener('mouseleave', () => document.body.classList.remove('cur-hover'));
  });
}

function applyFilter(filter) {
  currentFilter = filter || 'Todas';
  const nextProjects = (currentFilter === 'Todas')
    ? PROJECTS
    : PROJECTS.filter(FILTER_MAP[currentFilter]);

  const useListMode = currentFilter !== 'Todas';
  const scene = document.getElementById('scene');
  scene.classList.toggle('list-mode', useListMode);
  arcWrap.classList.toggle('list-mode', useListMode);

  arcWrap.style.transition = 'transform .35s ease, opacity .35s ease';
  arcWrap.style.transform = 'translateX(-50px)';
  arcWrap.style.opacity = '0';

  setTimeout(() => {
    filteredProjects = nextProjects;
    arcWrap.style.transition = 'none';
    buildCards();
    if (useListMode) {
      resetListLayout();
      listSpeed = targetListSpeed = BASE_LIST_SPEED;
      listOffset = 0;
    } else {
      speed = targetSpeed = BASE_SPEED;
    }
    offset = 0;
    arcWrap.style.transform = 'translateX(50px)';
    arcWrap.style.opacity = '0';
    requestAnimationFrame(() => {
      arcWrap.style.transition = 'transform .35s ease, opacity .35s ease';
      arcWrap.style.transform = 'translateX(0)';
      arcWrap.style.opacity = '1';
    });
  }, 300);
}

buildCards(); // inicializar
if (currentFilter !== 'Todas') resetListLayout();

function makeGenCanvas(proj, w, h) {
  const cv = document.createElement('canvas');
  drawGen(cv, proj, w, h);
  cv.style.cssText = 'width:100%;height:100%;display:block;pointer-events:none;';
  return cv;
}

/* Valores responsivos */
function getArcParams() {
  const w = window.innerWidth;
  if (w <= 600) return { radius: 200, arcHalf: Math.PI * 1.2 };
  if (w <= 900) return { radius: 280, arcHalf: Math.PI * 1.45 };
  return { radius: 590, arcHalf: Math.PI * 1.667 }; 
  /* radio del arco en escritorio */
}
let { radius: ARC_RADIUS, arcHalf: ARC_HALF } = getArcParams();
window.addEventListener('resize', () => {
  const p = getArcParams(); ARC_RADIUS = p.radius; ARC_HALF = p.arcHalf;
  if (currentFilter !== 'Todas') resetListLayout();
});

let offset = 0;
const BASE_SPEED = 0.0010;
let speed = BASE_SPEED, targetSpeed = BASE_SPEED;
let wheelTimer;

const BASE_LIST_SPEED = 0.100; // px por frame para categorías
let listSpeed = BASE_LIST_SPEED;
let targetListSpeed = BASE_LIST_SPEED;
const SPEED_BOOST = 0.0080;
const LIST_SPEED_BOOST = 2.4;
const LIST_GAP = 40;
let galleryScrollOffset = 0;
let galleryScrollSpeed = 0;
let galleryTargetScrollSpeed = 0;
let galleryScrollTimer;
let galleryActiveTrack = null;
let galleryLoopFrame = null;
const GALLERY_BASE_SPEED = 0.85;
const GALLERY_SPEED_BOOST = 2.2;
const GALLERY_FRICTION = 0.08;let listOffset = 0;
let listLayout = { baseX: 0, step: 0, totalWidth: 0, cardWidth: 300, cardHeight: 480 };

function resetListLayout() {
  if (!cardEls.length) return;
  const cardRect = cardEls[0].getBoundingClientRect();
  const cardWidth = cardRect.width || 300;
  const cardHeight = cardRect.height || 480;
  const step = cardWidth + LIST_GAP;
  const total = N * step;
  const baseX = (window.innerWidth - total) / 2;

  listLayout = {
    baseX,
    step,
    totalWidth: total,
    cardWidth,
    cardHeight,
  };
  listOffset = 0;

  cardEls.forEach((card, i) => {
    card.style.position = 'absolute';
    card.style.top = '50%';
    card.style.transform = 'translateY(-50%)';
    const x = baseX + i * step;
    card.style.left = `${x}px`;
    card.style.display = '';
  });
}

function updateGalleryScroll() {
  if (!galleryActiveTrack) return;
  galleryScrollSpeed += (galleryTargetScrollSpeed - galleryScrollSpeed) * GALLERY_FRICTION;
  galleryScrollOffset += galleryScrollSpeed;
  const halfWidth = galleryActiveTrack.scrollWidth / 2;

  if (halfWidth > 0) {
    if (galleryScrollOffset >= halfWidth) galleryScrollOffset -= halfWidth;
    if (galleryScrollOffset < 0) galleryScrollOffset += halfWidth;
    galleryActiveTrack.style.transform = `translateX(-${galleryScrollOffset}px)`;
  }
}

function startGalleryLoop() {
  if (galleryLoopFrame) return;
  const tick = () => {
    updateGalleryScroll();
    galleryLoopFrame = requestAnimationFrame(tick);
  };
  galleryLoopFrame = requestAnimationFrame(tick);
}

function stopGalleryLoop() {
  if (galleryLoopFrame) {
    cancelAnimationFrame(galleryLoopFrame);
    galleryLoopFrame = null;
  }
}

function isPointerOverGallery(clientX, clientY) {
  if (!galleryActiveTrack) return false;
  const rect = galleryActiveTrack.getBoundingClientRect();
  return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
}

function positionListCards() {
  if (!cardEls.length || listLayout.totalWidth <= 0) return;

  listSpeed += (targetListSpeed - listSpeed) * 0.08;
  listOffset += listSpeed;
  if (listOffset >= listLayout.totalWidth) listOffset -= listLayout.totalWidth;
  if (listOffset < 0) listOffset += listLayout.totalWidth;

  const screenW = window.innerWidth;
  const total = listLayout.totalWidth;

  cardEls.forEach((card, i) => {
    let x = listLayout.baseX + i * listLayout.step + listOffset;
    while (x > screenW) x -= total;
    while (x < -listLayout.cardWidth) x += total;
    card.style.left = `${x}px`;
    card.style.display = '';
    card.classList.remove('is-center');
  });
}

function positionCards() {
  if (currentFilter !== 'Todas') return;
  const TWO_PI = Math.PI * 2;
  let centerIdx = -1, minDist = Infinity;
  cardEls.forEach((card, i) => {
    let theta = offset + (i / N) * TWO_PI;
    theta = ((theta % TWO_PI) + TWO_PI) % TWO_PI;
    if (theta > Math.PI) theta -= TWO_PI;
    const inArc = Math.abs(theta) < ARC_HALF;
    card.style.display = inArc ? '' : 'none';
    if (!inArc) return;
    const x = ARC_RADIUS * Math.sin(theta);
    const y = -ARC_RADIUS * Math.cos(theta);
    const deg = theta * (180 / Math.PI);
    const scaleT = 1 - Math.abs(theta) / ARC_HALF;
    const scale = 0.88 + scaleT * 0.24;
    card.style.transform = `translate(${x}px,${y}px) rotate(${deg}deg) scale(${scale})`;
    card.style.opacity = 0.55 + scaleT * 0.45;
    card.style.zIndex = Math.round(scaleT * 90);
    card.classList.remove('is-center');
    if (Math.abs(theta) < minDist) { minDist = Math.abs(theta); centerIdx = i; }
  });
  if (centerIdx >= 0) cardEls[centerIdx].classList.add('is-center');
}

(function loop() {
  if (currentFilter !== 'Todas') {
    positionListCards();
  } else {
    speed += (targetSpeed - speed) * 0.05;
    offset += speed;
    positionCards();
  }
  requestAnimationFrame(loop);
})();

/* Scroll → acelerar (escritorio) */
window.addEventListener('wheel', e => {
  const detail = document.getElementById('detail');
  const isOverGallery = galleryActiveTrack && detail.classList.contains('open') && isPointerOverGallery(e.clientX, e.clientY);

  if (isOverGallery) {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    const direction = delta > 0 ? 1 : -1;
    galleryTargetScrollSpeed = direction > 0
      ? GALLERY_BASE_SPEED + GALLERY_SPEED_BOOST
      : -(GALLERY_BASE_SPEED + GALLERY_SPEED_BOOST);
    clearTimeout(galleryScrollTimer);
    galleryScrollTimer = setTimeout(() => {
      galleryTargetScrollSpeed = GALLERY_BASE_SPEED;
    }, 320);
    e.preventDefault();
    return;
  }
  if (detail.classList.contains('open')) return;
  const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
  const direction = delta > 0 ? 1 : -1;
  if (currentFilter !== 'Todas') {
    targetListSpeed = direction > 0
      ? BASE_LIST_SPEED + LIST_SPEED_BOOST
      : -(BASE_LIST_SPEED + LIST_SPEED_BOOST);
  } else {
    targetSpeed = direction > 0
      ? BASE_SPEED + SPEED_BOOST
      : -(BASE_SPEED + SPEED_BOOST);
  }
  clearTimeout(wheelTimer);
  wheelTimer = setTimeout(() => {
    targetSpeed = BASE_SPEED;
    targetListSpeed = BASE_LIST_SPEED;
  }, 320);
}, { passive: false });

/* Touch → horizontal controla dirección (móvil/tablet) */
let tx0 = 0, ty0 = 0;
window.addEventListener('touchstart', e => { tx0 = e.touches[0].clientX; ty0 = e.touches[0].clientY; }, { passive: true });
window.addEventListener('touchmove', e => {
  const detail = document.getElementById('detail');
  if (detail.classList.contains('open') && galleryActiveTrack && isPointerOverGallery(e.touches[0].clientX, e.touches[0].clientY)) {
    const dx = e.touches[0].clientX - tx0;
    const dy = e.touches[0].clientY - ty0;
    tx0 = e.touches[0].clientX; ty0 = e.touches[0].clientY;
    if (Math.abs(dx) > Math.abs(dy)) {
      const direction = dx > 0 ? 1 : -1;
      galleryTargetScrollSpeed = direction > 0
        ? GALLERY_BASE_SPEED + GALLERY_SPEED_BOOST
        : -(GALLERY_BASE_SPEED + GALLERY_SPEED_BOOST);
      clearTimeout(galleryScrollTimer);
      galleryScrollTimer = setTimeout(() => {
        galleryTargetScrollSpeed = GALLERY_BASE_SPEED;
      }, 400);
      e.preventDefault();
    }
    return;
  }
  if (detail.classList.contains('open')) return;
  const dx = e.touches[0].clientX - tx0;
  const dy = e.touches[0].clientY - ty0;
  tx0 = e.touches[0].clientX; ty0 = e.touches[0].clientY;
  if (Math.abs(dx) > Math.abs(dy)) {
    const direction = dx > 0 ? 1 : -1;
    if (currentFilter !== 'Todas') {
      targetListSpeed = direction > 0
        ? BASE_LIST_SPEED + LIST_SPEED_BOOST
        : -(BASE_LIST_SPEED + LIST_SPEED_BOOST);
    } else {
      targetSpeed = direction > 0
        ? BASE_SPEED + SPEED_BOOST
        : -(BASE_SPEED + SPEED_BOOST);
    }
    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => {
      targetSpeed = BASE_SPEED;
      targetListSpeed = BASE_LIST_SPEED;
    }, 400);
  }
}, { passive: false });

/* ═══════════════════════
   VISTA DETALLE
   ═══════════════════════ */
function openDetail(proj) {
  const det     = document.getElementById('detail');
  const cnt     = document.getElementById('det-content');
  const closeBtn= document.getElementById('det-close');

  // Hero HTML
  const heroClass = ['03', '05', '07', '16'].includes(proj.num) ? 'det-hero is-vertical' : 'det-hero';
  const heroHTML = proj.hero
    ? `<div class="${heroClass}"><img src="${proj.hero}" class="det-hero-img" alt="${proj.name}" onerror="this.parentNode.innerHTML='<div class=det-hero-placeholder>${proj.heroEmoji}</div>'"/></div>`
    : `<div class="${heroClass}"><div class="det-hero-placeholder">${proj.heroEmoji}</div></div>`;

  // Estructura desktop: top en 2 columnas
  cnt.innerHTML = `
    <div class="det-top">
      ${heroHTML}
      <div class="det-meta">
        <div class="det-tags">
          ${proj.tags.map(t=>`<span class="tag">${t}</span>`).join('')}
          <span class="tag">${proj.year}</span>
        </div>
        <h2 class="det-title">${proj.name}</h2>
        <p class="det-year">Proyecto ${proj.num} · Diseño Industrial</p>
        <p class="det-desc">${proj.desc}</p>
        <div class="sec-rule">Herramientas</div>
        <div class="det-tools">
          ${proj.tools.map(t=>`<span class="det-tool">${t}</span>`).join('')}
        </div>
      </div>
    </div>

    <div class="sec-rule">Proceso</div>
    <div class="det-pgrid">
      ${proj.process.map(s=>`<div class="det-pc"><h4>${s.t}</h4><p>${s.d}</p></div>`).join('')}
    </div>

    <div class="sec-rule">Galería</div>
    <div class="det-gallery-wrap">
      <div class="det-gallery-track" id="det-gal"></div>
    </div>

    <div class="det-cta">
      <p>¿Te interesa este trabajo?</p>
      <a href="sobre-mi.html#contacto" class="btn btn-dark">Hablemos →</a>
    </div>
  `;

  // Inyectar ítems de galería (canvas o img)
  const galEl = document.getElementById('det-gal');
  const galItems = [];

  // Número base de ítems: los del proyecto o 6 generativos
  const count = (proj.gallery && proj.gallery.length > 0) ? proj.gallery.length : 6;
  const isHorizontalGallery = ['09', '11', '12'].includes(proj.num);

  for (let v = 0; v < count; v++) {
    const wrap = document.createElement('div');
    wrap.className = `det-gallery-item${isHorizontalGallery ? ' is-horizontal' : ''}`;

    if (proj.gallery && proj.gallery[v]) {
      const img = document.createElement('img');
      img.src = proj.gallery[v];
      img.alt = proj.name;
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        openGalleryLightbox(img.src, proj.name);
      });
      img.onerror = () => {
        const ph = document.createElement('div');
        ph.className = 'det-gallery-placeholder';
        ph.textContent = '🖼';
        img.replaceWith(ph);
      };
      wrap.appendChild(img);
    } else {
      // Canvas generativo
      const cv = document.createElement('canvas');
      const rotP = [...proj.palette.slice(v % proj.palette.length), ...proj.palette.slice(0, v % proj.palette.length)];
      drawGen(cv, {...proj, palette:rotP, style:['mesh','dots','grid','lines'][v%4]}, 400, 530);
      cv.style.cssText = 'width:100%;height:100%;display:block;';
      wrap.appendChild(cv);
    }

    galEl.appendChild(wrap);
    galItems.push(wrap);
  }

  // Duplicar ítems para loop infinito
  galItems.forEach(item => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    galEl.appendChild(clone);
  });

  // Arrancar scroll continuo de la galería tras pintar
  galleryActiveTrack = galEl;
  galleryScrollOffset = 0;
  galleryScrollSpeed = 0;
  galleryTargetScrollSpeed = GALLERY_BASE_SPEED;
  galEl.style.transform = 'translateX(0px)';
  galEl.style.willChange = 'transform';
  startGalleryLoop();

  det.scrollTop = 0;
  requestAnimationFrame(() => {
    det.classList.add('open');
    closeBtn.classList.add('show');
  });
}

let galleryLightbox = null;

function ensureGalleryLightbox() {
  if (galleryLightbox) return galleryLightbox;

  galleryLightbox = document.createElement('div');
  galleryLightbox.className = 'gallery-lightbox';
  galleryLightbox.innerHTML = `
    <button type="button" class="gallery-lightbox-close" aria-label="Cerrar vista ampliada">✕</button>
    <img class="gallery-lightbox-img" alt="" />
  `;

  galleryLightbox.addEventListener('click', (e) => {
    if (e.target === galleryLightbox || e.target.classList.contains('gallery-lightbox-close')) {
      closeGalleryLightbox();
    }
  });

  document.body.appendChild(galleryLightbox);
  return galleryLightbox;
}

function openGalleryLightbox(src, alt) {
  const lb = ensureGalleryLightbox();
  const img = lb.querySelector('.gallery-lightbox-img');
  if (!img) return;

  img.src = src;
  img.alt = alt || 'Imagen ampliada';
  document.body.classList.add('lightbox-open');
  lb.classList.add('open');
}

function closeGalleryLightbox() {
  if (!galleryLightbox) return;
  galleryLightbox.classList.remove('open');
  document.body.classList.remove('lightbox-open');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeGalleryLightbox();
});

function closeDetailView() {
  closeGalleryLightbox();
  document.getElementById('detail').classList.remove('open');
  document.getElementById('det-close').classList.remove('show');
  stopGalleryLoop();
  galleryActiveTrack = null;
}

document.getElementById('det-close').addEventListener('click', closeDetailView);

// Exponer función para filtros desde HTML
window.setArcFilter = applyFilter;
