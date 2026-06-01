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

// ── SKILL BARS ─────────────────────────────────────────
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(fill => {
        fill.style.width = fill.dataset.pct + '%';
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-bar-list').forEach(el => barObserver.observe(el));

// ── PROJECTS: expand / collapse ────────────────────────
document.querySelectorAll('.project-header').forEach(header => {
  header.addEventListener('click', () => {
    const card = header.closest('.project-card');
    const btn  = header.querySelector('.expand-btn');
    const isOpen = card.classList.contains('open');

    document.querySelectorAll('.project-card').forEach(c => {
      c.classList.remove('open');
      const b = c.querySelector('.expand-btn');
      if (b) b.textContent = '[ Expandir ]';
    });

    if (!isOpen) {
      card.classList.add('open');
      btn.textContent = '[ Colapsar ]';
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
