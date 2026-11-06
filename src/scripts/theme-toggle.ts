// Night by default; the switch turns Day on and remembers it.
const root = document.documentElement;
const sw = document.getElementById('theme-switch') as HTMLInputElement | null;
const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

type Theme = 'day' | 'night';

function apply(theme: Theme, persist: boolean) {
  // Repaint in one step: no colour transitions while the tokens swap.
  root.classList.add('theme-switching');
  root.setAttribute('data-theme', theme);
  if (sw) {
    sw.checked = theme === 'day';
    sw.setAttribute('aria-checked', String(theme === 'day'));
  }
  meta?.setAttribute('content', theme === 'day' ? '#ffffff' : '#141414');
  if (persist) {
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable: the choice lasts for this page only */
    }
  }
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('theme-switching')));
}

function stored(): Theme {
  try {
    return localStorage.getItem('theme') === 'day' ? 'day' : 'night';
  } catch {
    return root.getAttribute('data-theme') === 'day' ? 'day' : 'night';
  }
}

apply(root.getAttribute('data-theme') === 'day' ? 'day' : 'night', false);
sw?.addEventListener('change', () => apply(sw.checked ? 'day' : 'night', true));
// Back/forward: the browser may restore an old switch state or a cached page;
// re-sync both with the stored choice.
addEventListener('pageshow', () => apply(stored(), false));

export {};
