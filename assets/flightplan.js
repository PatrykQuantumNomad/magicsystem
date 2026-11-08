// Mission-elapsed-time clock, phase GO stamps, and a rail cursor locked to the phases.
(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const met = document.getElementById('met');
  const start = performance.now();
  const pad = (n) => String(n).padStart(2, '0');
  const tick = () => {
    const s = Math.floor((performance.now() - start) / 1000);
    met.textContent = `T+${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`;
  };
  if (met) { tick(); setInterval(tick, 1000); }

  const root = document.documentElement;
  const rail = document.querySelector('.rail');
  const phases = [...document.querySelectorAll('.phase')];
  const railItems = [...document.querySelectorAll('.rail-phases li')];
  const mobile = matchMedia('(max-width: 860px)');

  // Desktop: the cursor runs from the first phase dot to the last.
  const placeTrack = () => {
    if (!rail || !railItems.length || mobile.matches) return;
    const r = rail.getBoundingClientRect();
    const dot = (li) => li.getBoundingClientRect().top - r.top + 19.5;
    const top = dot(railItems[0]);
    rail.style.setProperty('--track-top', `${top}px`);
    rail.style.setProperty('--track-h', `${dot(railItems[railItems.length - 1]) - top}px`);
  };

  const update = () => {
    const line = innerHeight * 0.55;
    const tops = phases.map((p) => p.getBoundingClientRect().top);
    let current = -1;
    tops.forEach((t, i) => { if (t < line) current = i; });

    phases.forEach((p, i) => {
      const done = i <= current;
      if (done !== p.classList.contains('is-go')) {
        p.classList.toggle('is-go', done);
        const stamp = p.querySelector('.stamp');
        if (stamp) stamp.textContent = done ? 'GO' : 'Planned';
      }
    });
    railItems.forEach((li, i) => {
      li.classList.toggle('is-go', i < current);
      li.classList.toggle('is-now', i === Math.max(current, 0));
    });

    // Progress: whole phases passed plus the fraction toward the next one.
    let progress = 0;
    const n = phases.length;
    if (current >= 0 && n > 1) {
      const next = tops[current + 1];
      const frac = next === undefined ? 0 : Math.min(1, Math.max(0, (line - tops[current]) / (next - tops[current])));
      progress = Math.min(1, (current + frac) / (n - 1));
    }
    root.style.setProperty('--progress', progress.toFixed(4));
  };

  const all = () => { placeTrack(); update(); };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', all);
  if (document.fonts) document.fonts.ready.then(all);
  all();
})();
