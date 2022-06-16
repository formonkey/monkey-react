"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoverPassword = void 0;
var react_1 = __importStar(require("react"));
var constants_1 = require("./constants");
var elements_1 = require("../../elements");
var react_router_dom_1 = require("react-router-dom");
exports.RecoverPassword = (0, elements_1.Form)(constants_1.RECOVER_PASSWORD_EMAIL_FORM_SCHEMA)(function (_a) {
    var onChange = _a.onChange, form = _a.form, disabled = _a.disabled;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var api = (0, elements_1.useHttpClient)().api;
    var recoverPassword = (0, elements_1.useMonkeyConf)().recoverPassword;
    var _b = (0, react_1.useState)(false), success = _b[0], setSuccess = _b[1];
    var onSubmit = function () {
        setSuccess(true);
        api(recoverPassword.endpoint, 'POST', form);
        setTimeout(function () {
            navigate('/login');
        }, 5000);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h4", { className: "mb-2" }, "Forgot Password? \uD83D\uDD12"),
        success && (react_1.default.createElement("div", { className: "alert alert-success", role: "alert" }, "An email has been sent with a link to change the password.")),
        react_1.default.createElement("p", { className: "mb-4" }, "Enter your email and we'll send you instructions to reset your password"),
        react_1.default.createElement("div", { className: "mb-3" },
            react_1.default.createElement(elements_1.Input, { type: "text", onChange: onChange, label: recoverPassword.fields[0], name: recoverPassword.fields[0], placeholder: recoverPassword.fields[0] }),
            react_1.default.createElement(elements_1.Button, { text: "Send Reset Link", onClick: onSubmit, disabled: disabled }))));
});
