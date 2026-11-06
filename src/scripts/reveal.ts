// Sections rise into place once as they enter the viewport. Only runs with
// html.js (set in the head); reduced motion keeps a plain fade (see base.css).
const items = document.querySelectorAll<HTMLElement>('.reveal');

if (!('IntersectionObserver' in window)) {
  items.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0 },
  );
  items.forEach((el) => io.observe(el));
}

export {};
