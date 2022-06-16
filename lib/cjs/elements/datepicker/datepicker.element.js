"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datepicker = void 0;
var react_1 = __importDefault(require("react"));
var Datepicker = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'date' : _b;
    return type === 'date' ? (react_1.default.createElement("div", { className: "col-md-6 col-12 mb-4" },
        react_1.default.createElement("label", { htmlFor: "flatpickr-date", className: "form-label" }, "Date Picker"),
        react_1.default.createElement("input", { type: "text", className: "form-control flatpickr-input", placeholder: "YYYY-MM-DD", id: "flatpickr-date", readOnly: true }))) : (react_1.default.createElement("div", { className: "col-md-6 col-12 mb-4" },
        react_1.default.createElement("label", { htmlFor: "flatpickr-range", className: "form-label" }, "Range Picker"),
        react_1.default.createElement("input", { type: "text", className: "form-control flatpickr-input", placeholder: "YYYY-MM-DD to YYYY-MM-DD", id: "flatpickr-range", readOnly: true })));
};
exports.Datepicker = Datepicker;
