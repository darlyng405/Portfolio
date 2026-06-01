// ── HOTBAR: active slot on scroll ──────────────────────
const sections = document.querySelectorAll('[data-section]');
const slots    = document.querySelectorAll('.slot');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.dataset.section;
      slots.forEach(s => s.classList.toggle('active', s.dataset.id === id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// Slot click → smooth scroll
slots.forEach(slot => {
  slot.addEventListener('click', () => {
    const target = document.querySelector(`[data-section="${slot.dataset.id}"]`);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── REVEAL ON SCROLL ───────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── PROJECTS: expand / collapse con botón "Cerrar" ─────────
const expandLabels = { es: { open: '[ Expandir ]', close: '[ Cerrar ]' }, en: { open: '[ Expand ]', close: '[ Close ]' } };

function getExpandLabel(type) {
  const lang = (typeof currentLang !== 'undefined' ? currentLang : localStorage.getItem('lang')) || 'es';
  return expandLabels[lang]?.[type] ?? expandLabels.es[type];
}

document.querySelectorAll('.project-header').forEach(header => {
  // Prevent expand-btn click from bubbling to header listener (avoids double-fire)
  header.querySelector('.expand-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    header.dispatchEvent(new MouseEvent('click', { bubbles: false }));
  });

  header.addEventListener('click', (e) => {
    if (e.target.closest('.github-btn')) return;

    const card = header.closest('.project-card');
    const btn  = header.querySelector('.expand-btn');
    const isOpen = card.classList.contains('open');

    document.querySelectorAll('.project-card').forEach(c => {
      c.classList.remove('open');
      const b = c.querySelector('.expand-btn');
      if (b) b.textContent = getExpandLabel('open');
    });

    if (!isOpen) {
      card.classList.add('open');
      btn.textContent = getExpandLabel('close');
    }
  });
});

// ── COPY EMAIL ─────────────────────────────────────────
document.getElementById('copy-email')?.addEventListener('click', () => {
  const email = document.getElementById('email-addr')?.textContent?.trim();
  if (!email) return;
  navigator.clipboard.writeText(email).then(() => {
    const fb = document.getElementById('copy-fb');
    if (!fb) return;
    fb.classList.add('show');
    setTimeout(() => fb.classList.remove('show'), 2000);
  });
});