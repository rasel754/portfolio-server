import { z } from 'zod';

const createSkillValidation = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    level: z
      .number({ required_error: 'Level is required' })
      .min(0)
      .max(100),
    color: z.string({ required_error: 'Color is required' }),
    logo: z.string().optional(),
  }),
});

const updateSkillValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    level: z.number().min(0).max(100).optional(),
    color: z.string().optional(),
    logo: z.string().optional(),
  }),
});

export const SkillValidation = {
  createSkillValidation,
  updateSkillValidation,
};
