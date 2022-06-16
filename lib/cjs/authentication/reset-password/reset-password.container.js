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
exports.ResetPassword = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var constants_1 = require("./constants");
var elements_1 = require("../../elements");
exports.ResetPassword = (0, elements_1.Form)(constants_1.RESET_PASSWORD_FORM_SCHEMA)(function (_a) {
    var form = _a.form, onChange = _a.onChange, disabled = _a.disabled;
    var params = (0, react_router_dom_1.useParams)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _b = (0, react_1.useState)(''), token = _b[0], setToken = _b[1];
    var _c = (0, elements_1.useHttpClient)(), api = _c.api, state = _c.state;
    var resetPassword = (0, elements_1.useMonkeyConf)().resetPassword;
    (0, react_1.useEffect)(function () {
        if (!token && params.token) {
            setToken(params.token);
        }
    }, []);
    (0, react_1.useEffect)(function () {
        if (token) {
            api(resetPassword.validateToken, 'POST', { token: token });
        }
    }, [token]);
    (0, react_1.useEffect)(function () {
        if ((state.path === resetPassword.validateToken && state.error) ||
            (state.path === resetPassword.endpoint && state.data)) {
            navigate('/');
        }
    }, [state]);
    var handleSubmit = function () {
        api(resetPassword.endpoint, 'POST', {
            token: token,
            password: form.password,
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h4", { className: "mb-2" }, "Reset Password \uD83D\uDD12"),
        react_1.default.createElement("div", { className: "mb-3" },
            react_1.default.createElement(elements_1.Password, { name: "password", label: "New Password", onChange: onChange, placeholder: "\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7" }),
            react_1.default.createElement(elements_1.Password, { onChange: onChange, name: "confirmPassword", label: "Confirm Password", placeholder: "\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7" }),
            react_1.default.createElement(elements_1.Button, { disabled: disabled, text: "Set new password", onClick: handleSubmit, isLoading: !disabled && state.isLoading }),
            react_1.default.createElement("div", { className: "text-center" },
                react_1.default.createElement("a", { href: "/" },
                    react_1.default.createElement("i", { className: "bx bx-chevron-left scaleX-n1-rtl bx-sm" }),
                    "Back to login")))));
});
