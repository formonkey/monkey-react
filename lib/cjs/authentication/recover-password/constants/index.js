"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RECOVER_PASSWORD_EMAIL_FORM_SCHEMA = void 0;
var zod_1 = require("zod");
exports.RECOVER_PASSWORD_EMAIL_FORM_SCHEMA = zod_1.z.object({
    email: zod_1.z.string().email(),
});
