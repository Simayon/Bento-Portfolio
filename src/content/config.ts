import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
        category: z.string().optional(),
        readingTime: z.number().optional(),
    })
});

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        technologies: z.array(z.string()),
        impact: z.string(),
        date: z.date(),
        featured: z.boolean().optional(),
    })
});

export const collections = {
    'blog': blogCollection,
    'projects': projectsCollection
};
