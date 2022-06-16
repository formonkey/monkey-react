"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
var react_1 = __importDefault(require("react"));
var Switch = function () {
    return (react_1.default.createElement("div", { className: "form-check form-switch mb-2" },
        react_1.default.createElement("input", { className: "form-check-input", type: "checkbox", id: "flexSwitchCheckChecked", checked: false }),
        react_1.default.createElement("label", { className: "form-check-label", htmlFor: "flexSwitchCheckChecked" }, "Checked switch checkbox input")));
};
exports.Switch = Switch;
