import { z } from 'zod';

export const signInLoginSchema = z.object({
  login: z.string(),
  password: z.string()
});
