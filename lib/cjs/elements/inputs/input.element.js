"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var react_1 = __importDefault(require("react"));
var Input = function (_a) {
    var _b;
    var t = _a.t, label = _a.label, name = _a.name, form = _a.form, focus = _a.focus, placeholder = _a.placeholder, type = _a.type, value = _a.value, onChange = _a.onChange;
    var handleChange = function (e) {
        var _a;
        onChange((_a = {}, _a[name] = e.target.value, _a));
    };
    return (react_1.default.createElement("div", { className: "mb-3" },
        react_1.default.createElement("label", { htmlFor: "email", className: "form-label" }, t(label)),
        react_1.default.createElement("input", { id: name, type: type, name: name, autoFocus: focus, value: (_b = form === null || form === void 0 ? void 0 : form[name]) !== null && _b !== void 0 ? _b : '', defaultValue: value, onChange: handleChange, className: "form-control", placeholder: t(placeholder) })));
};
exports.Input = Input;
