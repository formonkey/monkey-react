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
exports.Password = void 0;
var react_1 = __importStar(require("react"));
var Password = function (_a) {
    var t = _a.t, label = _a.label, link = _a.link, name = _a.name, placeholder = _a.placeholder, onChange = _a.onChange;
    var _b = (0, react_1.useState)(false), show = _b[0], setShow = _b[1];
    var handleChange = function (e) {
        var _a;
        onChange((_a = {}, _a[name] = e.target.value, _a));
    };
    return (react_1.default.createElement("div", { className: "mb-3 form-password-toggle" },
        react_1.default.createElement("div", { className: "d-flex justify-content-between" },
            react_1.default.createElement("label", { className: "form-label", htmlFor: "password" }, t(label)),
            link && (react_1.default.createElement("a", { href: link },
                react_1.default.createElement("small", null, t('Forgot Password?'))))),
        react_1.default.createElement("div", { className: "input-group input-group-merge" },
            react_1.default.createElement("input", { id: name, name: name, onChange: handleChange, className: "form-control", placeholder: t(placeholder), "aria-describedby": "password", type: show ? 'text' : 'password' }),
            react_1.default.createElement("span", { className: "input-group-text cursor-pointer", onClick: function () { return setShow(!show); } },
                react_1.default.createElement("i", { className: "bx bx-".concat(show ? 'show' : 'hide') })))));
};
exports.Password = Password;
