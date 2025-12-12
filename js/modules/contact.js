// contact module: handles contact form submission (client-side example)
export function initContact() {
  const form = document.getElementById('contact-form');
  const resultEl = document.getElementById('contact-result');
  if (!form || !resultEl) return;
  if (form.dataset.initialized) return;
  form.dataset.initialized = '1';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name')?.trim();
    const email = fd.get('email')?.trim();
    const message = fd.get('message')?.trim();

    if (!name || !email) {
      resultEl.textContent = 'Bitte geben Sie Name und E‑Mail an.';
      return;
    }

    // TODO: replace with real API call
    resultEl.textContent = 'Nachricht wird gesendet…';
    setTimeout(() => {
      resultEl.textContent = 'Danke! Ihre Nachricht wurde gesendet. Wir melden uns zeitnah bei Ihnen.';
      form.reset();
    }, 900);
  });
}
