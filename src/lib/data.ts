import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { AREAS, type Area } from '../content.config';

export const AREA_ORDER: Area[] = ['ml', 'de', 'software', 'analytics', 'cv', 'nlp'];
export { AREAS };

export async function getProfile() {
  const entry = await getEntry('profile', 'main');
  if (!entry) throw new Error('src/content/profile/main.md is missing');
  return entry;
}

/** Jobs in their editorial order (the `order` field). */
export async function getJobs() {
  const jobs = await getCollection('jobs');
  return jobs.sort((a, b) => a.data.order - b.data.order);
}

/** Featured projects in their editorial order. */
export async function getFeatured() {
  const featured = await getCollection('featured');
  return featured.sort((a, b) => a.data.order - b.data.order);
}

/** Non-featured projects that are shown, newest first. */
export async function getProjects() {
  const projects = await getCollection('projects', ({ data }) => data.showInProjects);
  return projects.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Skill groups in their editorial order. */
export async function getSkills() {
  const skills = await getCollection('skills');
  return skills.sort((a, b) => a.data.order - b.data.order);
}

export async function getCertifications() {
  const certs = await getCollection('certifications');
  return certs.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getEducation() {
  const edu = await getCollection('education');
  return edu.sort((a, b) => a.data.order - b.data.order);
}

/** One row of the /projects/ catalogue: a featured entry or a plain project. */
export type CatalogueItem =
  | { kind: 'featured'; entry: CollectionEntry<'featured'> }
  | { kind: 'project'; entry: CollectionEntry<'projects'> };

export function itemDate(item: CatalogueItem) {
  return item.entry.data.date;
}

/** Every project, newest first, grouped by year (newest year first). */
export async function getCatalogue() {
  const [featured, projects] = await Promise.all([getFeatured(), getProjects()]);
  const items: CatalogueItem[] = [
    ...featured.map((entry) => ({ kind: 'featured', entry }) as const),
    ...projects.map((entry) => ({ kind: 'project', entry }) as const),
  ].sort((a, b) => itemDate(b).getTime() - itemDate(a).getTime());

  const groups = new Map<number, CatalogueItem[]>();
  for (const item of items) {
    const y = itemDate(item).getUTCFullYear();
    if (!groups.has(y)) groups.set(y, []);
    groups.get(y)!.push(item);
  }
  const byYear = [...groups.entries()].sort((a, b) => b[0] - a[0]).map(([year, items]) => ({ year, items }));

  const byArea = Object.fromEntries(AREA_ORDER.map((a) => [a, 0])) as Record<Area, number>;
  for (const item of items) byArea[item.entry.data.area] += 1;

  return { items, byYear, byArea, total: items.length };
}

/** "Experience // 02 · 5 roles" style counters. */
export const pad2 = (n: number) => String(n).padStart(2, '0');
