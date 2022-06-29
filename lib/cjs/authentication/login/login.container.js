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
exports.Login = void 0;
var react_1 = __importStar(require("react"));
var constants_1 = require("./constants");
var elements_1 = require("../../elements");
var react_i18next_1 = require("react-i18next");
exports.Login = (0, elements_1.Form)(constants_1.LOGIN_FORM_EMAIL_SCHEMA)(function (_a) {
    var onChange = _a.onChange, form = _a.form, disabled = _a.disabled;
    var set = (0, elements_1.useStore)().set;
    var t = (0, react_i18next_1.useTranslation)().t;
    var _b = (0, elements_1.useHttpClient)(), api = _b.api, state = _b.state, setError = _b.setError;
    var _c = (0, elements_1.useMonkeyConf)(), name = _c.name, login = _c.login, authenticationFlow = _c.authenticationFlow;
    var onSubmit = function () {
        api(login.endpoint, 'POST', form);
    };
    (0, react_1.useEffect)(function () {
        if (state.error && !state.isLoading) {
            setError(null);
        }
    }, [form]);
    (0, react_1.useEffect)(function () {
        if (state.data) {
            set(elements_1.StoreKeys.Token, state.data);
            window.location.reload();
        }
    }, [state]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h4", { className: "mb-2" },
            t('Welcome to'),
            " ",
            name,
            "! \uD83D\uDC4B"),
        react_1.default.createElement("p", { className: "mb-2" }, "Please sign-in to your account and start the adventure"),
        react_1.default.createElement("div", { className: "mb-3" },
            react_1.default.createElement(elements_1.Input, { t: t, type: "text", form: form, onChange: onChange, name: login.fields[0], label: login.fields[0], placeholder: login.fields[0] }),
            react_1.default.createElement(elements_1.Password, { t: t, onChange: onChange, name: login.fields[1], label: login.fields[1], placeholder: login.fields[1], link: authenticationFlow.indexOf('recover-password') > -1
                    ? '/recover-password'
                    : '' }),
            react_1.default.createElement(elements_1.Checkbox, { t: t, name: "remember", label: "Remember me", onChange: function () { return null; } }),
            state.error && (react_1.default.createElement("div", { className: "alert alert-danger", role: "alert" }, "Incorrect username or password, try again!")),
            react_1.default.createElement(elements_1.Button, { text: "Sign in", onClick: onSubmit, disabled: disabled, isLoading: state.isLoading })),
        authenticationFlow.indexOf('register') > -1 && (react_1.default.createElement("p", { className: "text-center" },
            react_1.default.createElement("span", null, "New on our platform?"),
            react_1.default.createElement("a", { href: "auth-register-basic.html" },
                react_1.default.createElement("span", null, "Create an account"))))));
});
