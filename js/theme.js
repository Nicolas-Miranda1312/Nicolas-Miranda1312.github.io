/* theme.js — Dark / light mode toggle */
(function () {
  const html = document.documentElement;

  // Apply saved preference immediately (avoids flash)
  if (localStorage.getItem('pf-theme') === 'dark') {
    html.classList.add('dark');
  }

  function init() {
    // Wire up ALL toggle buttons on the page (nav + fixed)
    document.querySelectorAll('.dark-toggle, #theme-btn').forEach(btn => {
      // Build knob if not already present
      if (!btn.querySelector('.knob')) {
        const k = document.createElement('div');
        k.className = 'knob';
        btn.appendChild(k);
      }
      btn.addEventListener('click', toggle);
    });
  }

  function toggle() {
    html.classList.toggle('dark');
    localStorage.setItem('pf-theme', html.classList.contains('dark') ? 'dark' : 'light');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
