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
    order: z.number().int(),
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
    z
      .object({
        name: z.string(),
        issuer: z.string(),
        date: z.coerce.date(),
        /** The issuer's own copy; "View the certificate" opens it. */
        credentialUrl: z.url().optional(),
        /** A scan beside the yaml file, for certificates with no online copy. Leave it
            out when credentialUrl is set: an unlinked scan still ships at full size. */
        image: image().optional(),
        skills: z.array(z.string()).min(1),
      })
      .refine((c) => c.credentialUrl || c.image, { message: 'Give either credentialUrl or image.' }),
});

const education = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/education' }),
  schema: ({ image }) =>
    z.object({
      order: z.number().int(),
      /** Degrees show up front; secondary schools sit behind "View more". */
      level: z.enum(['degree', 'secondary']),
      degree: z.string(),
      school: z.string(),
      location: z.string(),
      range: z.string(),
      /** The school's mark, a square transparent PNG beside the yaml file. */
      logo: image(),
      /** Bullet points; `{ text, gold: true }` sets one in the accent gold. */
      points: z.array(z.union([z.string(), z.object({ text: z.string(), gold: z.literal(true) })])).min(1),
    }),
});

export const collections = { profile, jobs, featured, projects, skills, certifications, education };
