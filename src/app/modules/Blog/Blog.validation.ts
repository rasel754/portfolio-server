import { z } from 'zod';

const createBlogValidation = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }).min(1, 'Title is required'),
    excerpt: z.string({ required_error: 'Excerpt is required' }).min(1, 'Excerpt is required'),
    image: z.string({ required_error: 'Image is required' }).min(1, 'Image is required'),
    date: z.string({ required_error: 'Date is required' }).min(1, 'Date is required'),
    readTime: z.string({ required_error: 'Read Time is required' }).min(1, 'Read Time is required'),
    url: z.string({ required_error: 'URL is required' }).min(1, 'URL is required'),
    tags: z.array(z.string()).min(1, 'Tags are required'),
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
