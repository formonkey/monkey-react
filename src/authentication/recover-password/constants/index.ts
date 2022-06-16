import { z } from 'zod';

export const RECOVER_PASSWORD_EMAIL_FORM_SCHEMA = z.object({
    email: z.string().email(),
});