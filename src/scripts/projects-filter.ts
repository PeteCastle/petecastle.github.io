// /projects/: the filtering itself is pure CSS (:has). This keeps the live
// "Showing n of N" caption true and mirrors the chosen area in the URL hash.
const radios = Array.from(document.querySelectorAll<HTMLInputElement>('input[name="area"]'));
const showing = document.getElementById('showing');
const projects = Array.from(document.querySelectorAll<HTMLElement>('#catalogue .project'));

const groups = Array.from(document.querySelectorAll<HTMLElement>('#catalogue .pgroup'));
const isShown = (el: HTMLElement) => el.offsetParent !== null;

function update() {
  const visible = projects.filter(isShown).length;
  if (showing) showing.textContent = `Showing ${visible} of ${projects.length}`;
  // Each year's caption counts what is on screen under the current filter.
  for (const group of groups) {
    const count = group.querySelector<HTMLElement>('[data-group-count]');
    if (!count) continue;
    const n = Array.from(group.querySelectorAll<HTMLElement>('.project')).filter(isShown).length;
    count.textContent = `${n} ${n === 1 ? 'project' : 'projects'}`;
  }
}

function fromHash() {
  const value = decodeURIComponent(location.hash.slice(1));
  const match = radios.find((r) => r.value === value) ?? radios.find((r) => r.value === 'all');
  if (match) match.checked = true;
}

if (radios.length) {
  fromHash();
  update();
  radios.forEach((radio) =>
    radio.addEventListener('change', () => {
      update();
      const url = radio.value === 'all' ? location.pathname : `${location.pathname}#${radio.value}`;
      history.replaceState(null, '', url);
    }),
  );
  window.addEventListener('hashchange', () => {
    fromHash();
    update();
  });
}

export {};
