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
exports.Datepicker = void 0;
var react_1 = __importStar(require("react"));
var Datepicker = function (_a) {
    var name = _a.name, _b = _a.type, type = _b === void 0 ? 'date' : _b, onChange = _a.onChange, format = _a.format, label = _a.label;
    var handleChange = function (e) {
        var _a;
        var date = e.map(function (d) {
            return format ? window.moment(new Date(d)).format(format) : new Date(d).toISOString();
        });
        onChange((_a = {}, _a[name] = type === 'range' ? date : date[0], _a));
    };
    (0, react_1.useEffect)(function () {
        var element = document.querySelector("#".concat(name, "-flatpickr-").concat(type));
        if (element) {
            if (type === 'range') {
                element.flatpickr({
                    mode: 'range',
                    onChange: handleChange,
                    dateFormat: 'Y-m-d',
                });
            }
            else if (type === 'date') {
                element.flatpickr({
                    monthSelectorType: 'static',
                    onChange: handleChange,
                    dateFormat: 'Y-m-d',
                });
            }
        }
    }, []);
    return type === 'date' ? (react_1.default.createElement("div", { className: "mb-4" },
        react_1.default.createElement("label", { htmlFor: "".concat(name, "-flatpickr-").concat(type), className: "form-label" }, label),
        react_1.default.createElement("input", { type: "date", className: "form-control flatpickr-input", placeholder: "YYYY-MM-DD", onChange: handleChange, id: "".concat(name, "-flatpickr-").concat(type), readOnly: false }))) : (react_1.default.createElement("div", { className: "mb-4" },
        react_1.default.createElement("label", { htmlFor: "".concat(name, "-flatpickr-").concat(type), className: "form-label" }, label),
        react_1.default.createElement("input", { type: "text", className: "form-control flatpickr-input", placeholder: "YYYY-MM-DD to YYYY-MM-DD", id: "".concat(name, "-flatpickr-").concat(type), onChange: handleChange, readOnly: true })));
};
exports.Datepicker = Datepicker;
