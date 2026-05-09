/* theme.js — Dark / light mode toggle */
(function () {
  const html = document.documentElement;

  // Apply saved preference immediately (avoids flash)
  if (localStorage.getItem('pf-theme') === 'dark') {
    html.classList.add('dark');
  }

  function init() {
    // Wire all toggles: pill button (.np-toggle) + any .dark-toggle
    document.querySelectorAll('.np-toggle, .dark-toggle, #theme-btn').forEach(btn => {
      if (!btn.querySelector('.knob')) {
        const k = document.createElement('div');
        k.className = 'knob';
        btn.appendChild(k);
      }
      // avoid double binding
      if (!btn.dataset.themeWired) {
        btn.dataset.themeWired = '1';
        btn.addEventListener('click', toggle);
      }
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
