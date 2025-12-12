// quicktest module: handles quicktest form and evaluation
export function initQuicktest() {
  const form = document.getElementById('quicktest-form');
  const resultEl = document.getElementById('quicktest-result');
  const evalBtn = document.getElementById('quicktest-evaluate');
  if (!form || !evalBtn || !resultEl) return;

  // prevent double initialization
  if (form.dataset.initialized) return;
  form.dataset.initialized = '1';

  evalBtn.addEventListener('click', () => {
    const selects = form.querySelectorAll('select');
    let sum = 0;
    let count = 0;
    selects.forEach(s => {
      const v = parseInt(s.value, 10);
      if (!Number.isNaN(v)) {
        sum += v;
        count += 1;
      }
    });
    if (count === 0) {
      resultEl.textContent = 'Bitte beantworte die Fragen, um eine Auswertung zu erhalten.';
      return;
    }
    const avg = sum / count;
    let text = '';
    if (avg >= 4) {
      text = 'Dein Profil wirkt sehr aktiv, strukturiert und kontaktfreudig. Nutze diese Stärken bewusst.';
    } else if (avg >= 3) {
      text = 'Du zeigst ausgewogene Tendenzen. Im detaillierten Test kannst du deine Feinheiten klarer erkennen.';
    } else {
      text = 'Du scheinst eher zurückhaltend und vorsichtig zu sein. Das kann eine Stärke sein – im Extended-Test erfährst du mehr.';
    }
    text += ' Wenn du genauer verstehen möchtest, wie du deine Persönlichkeit gezielt einsetzen kannst, ist der detaillierte Test für 49 € der nächste Schritt.';
    resultEl.textContent = text;
  });
}

// export evaluate function for programmatic use (optional)
export function evaluateQuicktestValues(values = []) {
  if (!Array.isArray(values) || values.length === 0) return null;
  const sum = values.reduce((a,b) => a + Number(b), 0);
  const avg = sum / values.length;
  let label = 'ausgeglichen';
  if (avg >= 4) label = 'aktiv & strukturiert';
  else if (avg < 3) label = 'zurückhaltend';
  return { avg, label };
}
