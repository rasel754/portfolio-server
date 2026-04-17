import { z } from 'zod';

const createBlogValidation = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    excerpt: z.string({ required_error: 'Excerpt is required' }),
    image: z.string({ required_error: 'Image is required' }),
    date: z.string({ required_error: 'Date is required' }),
    readTime: z.string({ required_error: 'Read Time is required' }),
    url: z.string({ required_error: 'URL is required' }),
    tags: z.array(z.string(), { required_error: 'Tags are required' }),
  }),
});

const updateBlogValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    date: z.string().optional(),
    readTime: z.string().optional(),
    url: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const BlogValidation = {
  createBlogValidation,
  updateBlogValidation,
};
