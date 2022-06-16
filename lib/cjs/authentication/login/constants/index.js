"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN_FORM_EMAIL_SCHEMA = void 0;
var zod_1 = require("zod");
exports.LOGIN_FORM_EMAIL_SCHEMA = zod_1.z.object({
    email: zod_1.z.string().min(1),
    password: zod_1.z.string().min(1),
});
