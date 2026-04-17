import { z } from 'zod';

const createProjectValidation = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string({ required_error: 'Description is required' }),
    image: z.string({ required_error: 'Image is required' }),
    technologies: z.array(z.string(), { required_error: 'Technologies are required' }),
    github: z.string({ required_error: 'GitHub URL is required' }),
    liveUrl: z.string({ required_error: 'Live URL is required' }),
    content: z.array(z.string(), { required_error: 'Content is required' }),
    features: z.array(z.string(), { required_error: 'Features are required' }),
  }),
});

const updateProjectValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    github: z.string().optional(),
    liveUrl: z.string().optional(),
    content: z.array(z.string()).optional(),
    features: z.array(z.string()).optional(),
  }),
});

export const ProjectValidation = {
  createProjectValidation,
  updateProjectValidation,
};
