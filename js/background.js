/* Fondo interactivo compartido del portafolio. */
(() => {
  const SPACING = 20;
  const canvas = document.createElement('canvas');
  canvas.className = 'portfolio-background';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);

  const context = canvas.getContext('2d');
  const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let width = 0;
  let height = 0;
  let cols = 0;
  let rows = 0;
  let time = 0;
  let animationFrame = 0;

  function resize() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    cols = Math.ceil(width / SPACING) + 2;
    rows = Math.ceil(height / SPACING) + 2;
  }

  function updatePointer(event) {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  }

  function draw() {
    const dark = document.documentElement.classList.contains('dark');
    context.fillStyle = dark ? '#000' : '#fff';
    context.fillRect(0, 0, width, height);
    time += 0.016;

    for (let i = 0; i < cols; i += 1) {
      for (let j = 0; j < rows; j += 1) {
        const x = i * SPACING;
        const y = j * SPACING;
        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const distance = Math.hypot(dx, dy);
        const influence = Math.pow(Math.max(0, 1 - distance / 180), 2);
        const wave = Math.sin(x * 0.022 + time * 1.1) * 18
          + Math.cos(y * 0.022 - time * 0.85) * 18
          + Math.sin((x - y) * 0.015 + time * 0.6) * 10;
        const angle = Math.atan2(dy, dx);
        const push = influence * 35;
        const px = x + Math.cos(angle) * push;
        const py = y + wave * 0.7 + Math.sin(angle) * push;
        const waveTone = (Math.sin(x * 0.022 + time * 1.1 + j * 0.3) + 1) / 2;
        const base = 160 + (30 - 160) * waveTone;
        const bright = Math.min(base - influence * 30, 220);
        const size = 1.5 + (5.5 - 1.5) * influence;

        if (influence > 0.05) {
          context.fillStyle = dark ? 'rgba(220,215,210,0.16)' : `rgba(${bright},${bright},${bright},${influence * 0.09})`;
          context.beginPath();
          context.ellipse(px, py, size * 1.75, size * 1.75, 0, 0, Math.PI * 2);
          context.fill();
        }

        const alpha = 0.31 + waveTone * 0.47;
        context.fillStyle = dark ? `rgba(220,215,210,${alpha})` : `rgba(${bright},${bright},${bright},${alpha})`;
        context.beginPath();
        context.ellipse(px, py, size / 2, size / 2, 0, 0, Math.PI * 2);
        context.fill();

        if (influence > 0.4) {
          context.fillStyle = dark ? 'rgba(240,235,227,0.8)' : 'rgba(10,10,10,0.8)';
          context.beginPath();
          context.ellipse(px, py, size * 0.225, size * 0.225, 0, 0, Math.PI * 2);
          context.fill();
        }
      }
    }

    animationFrame = window.requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', updatePointer, { passive: true });
  resize();
  draw();
})();
