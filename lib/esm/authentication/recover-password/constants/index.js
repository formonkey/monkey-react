import { z } from 'zod';
export var RECOVER_PASSWORD_EMAIL_FORM_SCHEMA = z.object({
    email: z.string().email(),
});
