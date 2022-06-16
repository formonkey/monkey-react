"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
var react_1 = __importDefault(require("react"));
var Password = function (_a) {
    var t = _a.t, label = _a.label, link = _a.link, name = _a.name, placeholder = _a.placeholder, onChange = _a.onChange;
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
            react_1.default.createElement("input", { id: name, name: name, type: "password", onChange: handleChange, className: "form-control", placeholder: t(placeholder), "aria-describedby": "password" }),
            react_1.default.createElement("span", { className: "input-group-text cursor-pointer" },
                react_1.default.createElement("i", { className: "bx bx-hide" })))));
};
exports.Password = Password;
