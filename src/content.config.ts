import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    icon:        z.string().optional(),
    titleEn:     z.string().optional(),
    titleDe:     z.string().optional(),
    descEn:      z.string().optional(),
    descDe:      z.string().optional(),
    date:        z.coerce.date().optional(),
    order:       z.number().optional(),
    techs:       z.array(z.string()).default([]),
    url:         z.string().url().optional(),
    image:       z.string().optional(),
    featured:    z.boolean().default(false),
    isNew:       z.boolean().default(false),
  }),
});

export const collections = { projects };
