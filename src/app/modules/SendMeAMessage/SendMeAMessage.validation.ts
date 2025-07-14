import { z } from 'zod';

const SendMeAMessageValidation = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, { message: 'Name cannot be empty' })
      .trim()
      .refine((val) => val.length > 0, {
        message: 'To send message, Name is required',
      }),

    email: z
      .string()
      .email({ message: 'Email must be a valid email' })
      .min(1, { message: 'Email cannot be empty' }),

    subject: z.string().optional(),

    message: z.string().min(1, { message: 'Message cannot be empty' }),
  }),
});


export const SendMeAMessageZodValidation = {
    SendMeAMessageValidation,
}

