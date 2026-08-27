document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('#menuBtn');
  const nav = document.querySelector('#navLinks');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open navigation menu');
    }));
  }
  const phone = '09123456789';
  document.querySelectorAll('[data-phone]').forEach(el => {
    el.textContent = '0912 345 6789';
    el.href = `tel:${phone}`;
  });
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
});