// extended module placeholder - renders into #extended-root
export function initExtended() {
  const root = document.getElementById('extended-root');
  if (!root) return;
  if (root.dataset.initialized) return;
  root.dataset.initialized = '1';

  root.innerHTML = `
    <div class="extended-card">
      <p>Der detaillierte Test ist vorbereitet. Hier können wir später das vollständige Test-UI, Zahlungsablauf oder PDF-Generierung integrieren.</p>
      <button id="extended-start" class="btn-secondary">Test starten (49 €)</button>
      <div id="extended-status" style="margin-top:10px;color:var(--muted)"></div>
    </div>
  `;

  const status = document.getElementById('extended-status');
  const btn = document.getElementById('extended-start');
  btn.addEventListener('click', async () => {
    status.textContent = 'Test wird gestartet...';
    await new Promise(r => setTimeout(r, 700));
    status.textContent = 'Test gestartet — hier würde das Test-UI geladen werden.';
  });
}
