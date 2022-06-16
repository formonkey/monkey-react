"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESET_PASSWORD_FORM_SCHEMA = void 0;
var zod_1 = require("zod");
exports.RESET_PASSWORD_FORM_SCHEMA = zod_1.z.object({
    password: zod_1.z.string().min(8).max(255),
    confirmPassword: zod_1.z.string().min(8).max(255),
})
    .refine(function (data) { return data.password === data.confirmPassword; }, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
});
