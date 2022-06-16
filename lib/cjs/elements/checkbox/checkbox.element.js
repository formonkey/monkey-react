"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var react_1 = __importDefault(require("react"));
var Checkbox = function (_a) {
    var t = _a.t, label = _a.label, name = _a.name, onChange = _a.onChange, value = _a.value;
    var handleChange = function (e) {
        var _a;
        onChange((_a = {}, _a[name] = !!e.target.checked, _a));
    };
    return (react_1.default.createElement("div", { className: "mb-3" },
        react_1.default.createElement("div", { className: "form-check" },
            react_1.default.createElement("input", { id: name, name: name, type: "checkbox", onChange: handleChange, defaultChecked: !!value, className: "form-check-input" }),
            react_1.default.createElement("label", { className: "form-check-label", htmlFor: name },
                ' ',
                t(label),
                ' '))));
};
exports.Checkbox = Checkbox;
