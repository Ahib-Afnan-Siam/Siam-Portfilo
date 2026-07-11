/**
 * Central site config — single source of truth for SEO / metadata.
 * Override the URL per-environment with NEXT_PUBLIC_SITE_URL if needed.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
).replace(/\/$/, '')

export const SITE = {
  name: 'Ahib Afnan Siam',

  // Alternate spellings people may search for.
  alternateNames: [
    'Ahib Afnan Siam',
    'Ahib Siam',
    'Ahib Afnan',
    'Ahib-Afnan-Siam',
    'Ahib Afnan Siam Portfolio',
  ],

  title: 'Ahib Afnan Siam — AI Software Engineer',

  description:
    'AI Software Engineer building production-grade LLM systems, RAG pipelines, NL2SQL assistants, semantic search platforms, Oracle VECTOR-powered matching, computer vision solutions, and full-stack AI products.',

  url: SITE_URL,

  email: 'ahibafnan99@gmail.com',

  location: 'Uttara, Dhaka, Bangladesh',

  socials: {
    github: 'https://github.com/Ahib-Afnan-Siam',
    linkedin: 'https://www.linkedin.com/in/ahib-afnan-siam/',
  },
} as const