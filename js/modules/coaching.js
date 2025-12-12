// coaching module placeholder - could be extended to render booking UI
export function initCoaching() {
  // currently no dynamic initialization required; kept for symmetry
  const section = document.getElementById('coaching');
  if (!section) return;
  if (section.dataset.initialized) return;
  section.dataset.initialized = '1';
  // future: render booking widget, calendar integration, etc.
}
