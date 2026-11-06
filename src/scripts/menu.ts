// The menu below 1280px: a native modal <dialog> (focus trap, Escape, focus return).
const menu = document.getElementById('menu') as HTMLDialogElement | null;
const button = document.getElementById('menu-btn');
const closeButton = document.getElementById('menu-close');

if (menu && button && typeof menu.showModal === 'function') {
  button.addEventListener('click', () => {
    menu.showModal();
    button.setAttribute('aria-expanded', 'true');
  });
  closeButton?.addEventListener('click', () => menu.close());
  menu.addEventListener('close', () => button.setAttribute('aria-expanded', 'false'));
  // A click on the backdrop (the dialog element itself, outside its content) closes it.
  menu.addEventListener('click', (event) => {
    if (event.target === menu) menu.close();
  });
  // Same-page links: close first, then let the browser follow the anchor.
  menu.querySelectorAll('a[href^="/#"], a[href="/projects/"]').forEach((a) => a.addEventListener('click', () => menu.close()));
  // Wider than the breakpoint: the menu has no job, so never leave it open.
  matchMedia('(min-width: 1280px)').addEventListener('change', (e) => {
    if (e.matches && menu.open) menu.close();
  });
}

export {};
