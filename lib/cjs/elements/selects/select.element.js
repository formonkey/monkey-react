"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var react_1 = __importDefault(require("react"));
var Select = function (_a) {
    var t = _a.t, label = _a.label, name = _a.name, value = _a.value, onChange = _a.onChange, _b = _a.data, data = _b === void 0 ? [] : _b, props = __rest(_a, ["t", "label", "name", "value", "onChange", "data"]);
    var handleChange = function (e) {
        var _a;
        onChange((_a = {}, _a[name] = e.target.value, _a));
    };
    return (react_1.default.createElement("div", { className: "mb-3" },
        react_1.default.createElement("label", { className: "form-label", htmlFor: name }, t(label)),
        react_1.default.createElement("select", { id: name, name: name, className: "form-select", onChange: handleChange },
            react_1.default.createElement("option", { selected: !value }, t('Selected value')),
            data.map(function (item) {
                var _a, _b;
                return (react_1.default.createElement("option", { value: item.value, selected: ((_b = (_a = props.config) === null || _a === void 0 ? void 0 : _a.parsed) === null || _b === void 0 ? void 0 : _b.value)
                        ? (value === null || value === void 0 ? void 0 : value[props.config.parsed.value]) === item.value
                        : value === item.value }, t(item.label)));
            }))));
};
exports.Select = Select;
