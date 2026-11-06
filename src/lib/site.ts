export const SITE_URL = 'https://www.franciscayco.com';

export const NAV = [
  { label: 'Projects', href: '/projects/', key: 'projects' },
  { label: 'Experience', href: '/#experience', key: 'experience' },
  { label: 'About', href: '/#about', key: 'about' },
  { label: 'Skills', href: '/#skills', key: 'skills' },
  { label: 'Contact', href: '/#contact', key: 'contact' },
] as const;

export type NavKey = (typeof NAV)[number]['key'];

/** Absolute URL for a site path (keeps the trailing slash convention). */
export const absolute = (path: string) => new URL(path, SITE_URL).toString();

/** Public URL of a file in public/, with spaces and friends escaped. */
export const publicUrl = (path: string) => encodeURI(path);

export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "Nov 29, 2023" with the date read as UTC (collections parse dates as UTC midnight). */
export function shortDate(d: Date) {
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

export const year = (d: Date) => d.getUTCFullYear();
