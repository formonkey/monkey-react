"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTHENTICATION_ROUTER_MAP_COMPONENTS = void 0;
var react_1 = __importDefault(require("react"));
var enums_1 = require("../enums");
var authentication_1 = require("../../../authentication");
exports.AUTHENTICATION_ROUTER_MAP_COMPONENTS = (_a = {},
    _a[enums_1.RecoverPasswordRouter.Login] = {
        path: '/',
        element: react_1.default.createElement(authentication_1.Login, null),
    },
    _a[enums_1.RecoverPasswordRouter.ResetPassword] = {
        path: '/reset-password/:token',
        element: react_1.default.createElement(authentication_1.ResetPassword, null),
    },
    _a[enums_1.RecoverPasswordRouter.RecoverPassword] = {
        path: '/recover-password',
        element: react_1.default.createElement(authentication_1.RecoverPassword, null),
    },
    _a);
