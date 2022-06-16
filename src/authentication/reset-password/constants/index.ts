import { z } from 'zod';

export const RESET_PASSWORD_FORM_SCHEMA = z.object({
    password: z.string().min(8).max(255),
    confirmPassword: z.string().min(8).max(255),
})
    .refine((data: any) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"], // path of error
    });