const header = document.querySelector('[data-nav]');
const toggle = document.querySelector('.nav-toggle');
if (header && toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}
