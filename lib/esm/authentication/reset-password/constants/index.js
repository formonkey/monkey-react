import { z } from 'zod';
export var RESET_PASSWORD_FORM_SCHEMA = z.object({
    password: z.string().min(8).max(255),
    confirmPassword: z.string().min(8).max(255),
})
    .refine(function (data) { return data.password === data.confirmPassword; }, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
});
