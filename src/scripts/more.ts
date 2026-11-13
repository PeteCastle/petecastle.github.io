// "View more" toggles. The extra items are in the HTML and show without
// JavaScript; with it (html.js) they stay hidden until the button opens them.
document.querySelectorAll<HTMLButtonElement>('[data-more]').forEach((button) => {
  const target = document.getElementById(button.getAttribute('aria-controls') ?? '');
  const label = button.querySelector('[data-more-label]');
  if (!target || !label) return;

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    target.classList.toggle('is-open', open);
    label.textContent = open ? 'View less' : 'View more';
  });
});

export {};
