// Entry point: initialize modules and wire global behaviors
import { initQuicktest } from './modules/quicktest.js';
import { initExtended } from './modules/extended.js';
import { initCoaching } from './modules/coaching.js';
import { initContact } from './modules/contact.js';

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initQuicktest();
  initExtended();
  initCoaching();
  initContact();
  initSmoothScroll();
});
