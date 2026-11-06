import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file, glob } from 'astro/loaders';

/** Editorial project areas; the filter on /projects/ is built from these. */
export const AREAS = {
  ml: 'Machine learning',
  de: 'Data engineering',
  software: 'Software and hardware',
  analytics: 'Analytics',
  cv: 'Computer vision',
  nlp: 'Natural language processing',
} as const;
export type Area = keyof typeof AREAS;
const area = z.enum(['ml', 'de', 'software', 'analytics', 'cv', 'nlp']);

const profile = defineCollection({
  loader: glob({ pattern: 'main.md', base: './src/content/profile' }),
  schema: z.object({
    name: z.string(),
    nickname: z.string(),
    brand: z.string(),
    roles: z.array(z.string()).min(1),
    lead: z.string(),
    location: z.string(),
    email: z.email(),
    phone: z.string(),
    phoneDisplay: z.string(),
    resume: z.string(),
    languages: z.array(z.string()),
    interests: z.array(z.string()),
    social: z.array(z.object({ name: z.string(), handle: z.string(), url: z.url() })),
    quote: z.object({ label: z.string(), text: z.string(), caption: z.string() }),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      twitter: z.string(),
      ogImage: z.string(),
      googleSiteVerification: z.string(),
    }),
    sourceUrl: z.url(),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/jobs' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    companyShort: z.string(),
    location: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().nullable(),
    range: z.string(),
    url: z.url(),
    type: z.enum(['Professional', 'Volunteer & Leadership']),
    companyDescription: z.string(),
  }),
});

const featured = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/featured' }),
  schema: ({ image }) =>
    z.object({
      order: z.number().int(),
      title: z.string(),
      date: z.coerce.date(),
      cover: image(),
      coverAlt: z.string(),
      tag: z.string(),
      area,
      tech: z.array(z.string()).min(1),
      github: z.url(),
      award: z.string().optional(),
      summary: z.string(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    github: z.url().optional(),
    youtube: z.url().optional(),
    tech: z.array(z.string()).min(1),
    area,
    note: z.string().optional(),
    showInProjects: z.boolean().default(true),
  }),
});

const skills = defineCollection({
  loader: file('./src/content/skills.yaml'),
  schema: z.object({
    order: z.number().int(),
    name: z.string(),
    tools: z.array(z.string()).min(1),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/certifications' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      issuer: z.string(),
      date: z.coerce.date(),
      image: image(),
      imageAlt: z.string(),
      credentialUrl: z.url().optional(),
      skills: z.array(z.string()).min(1),
    }),
});

const education = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/education' }),
  schema: z.object({
    order: z.number().int(),
    school: z.string(),
    degree: z.string(),
    year: z.number().int(),
    honours: z.string(),
    gold: z.boolean().default(false),
  }),
});

export const collections = { profile, jobs, featured, projects, skills, certifications, education };
