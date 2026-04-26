import { z } from 'zod';

const createToolValidation = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    icon: z.string({ required_error: 'Icon is required' }),
  }),
});

const updateToolValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    icon: z.string().optional(),
  }),
});

export const ToolValidation = {
  createToolValidation,
  updateToolValidation,
};
