import { z, defineCollection } from "astro:content";

const post = defineCollection({
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string().optional(),
    image: image(),
    featured: z.boolean().default(false),
    canonical: z.string().url().optional(),

    publishDate: z.date(),
    draft: z.boolean().optional(),

    excerpt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
  }),
});

const scm = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  post: post,
  scm,
};
