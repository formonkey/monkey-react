import { z } from 'zod';

export const LOGIN_FORM_EMAIL_SCHEMA = z.object({
    email: z.string().min(1),
    password: z.string().min(1),
});