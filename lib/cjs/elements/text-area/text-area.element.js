"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextArea = void 0;
var react_1 = __importDefault(require("react"));
var TextArea = function (_a) {
    var t = _a.t, label = _a.label, name = _a.name, placeholder = _a.placeholder, onChange = _a.onChange;
    var handleChange = function (e) {
        var _a;
        onChange((_a = {}, _a[name] = e.target.value, _a));
    };
    return (react_1.default.createElement("div", { className: "mb-3" },
        react_1.default.createElement("label", { htmlFor: name, className: "form-label" }, t(label)),
        react_1.default.createElement("textarea", { rows: 3, id: name, name: name, onChange: handleChange, className: "form-control", placeholder: t(placeholder) })));
};
exports.TextArea = TextArea;
