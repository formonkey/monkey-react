"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var react_i18next_1 = require("react-i18next");
var Button = function (_a) {
    var text = _a.text, onClick = _a.onClick, disabled = _a.disabled, isLoading = _a.isLoading;
    var t = (0, react_i18next_1.useTranslation)().t;
    return (react_1.default.createElement("div", { className: "mb-3" },
        react_1.default.createElement("button", { className: "btn btn-primary d-grid w-100", type: "button", onClick: onClick, disabled: disabled }, isLoading ? (react_1.default.createElement("div", { className: "spinner-border m-auto" },
            react_1.default.createElement("span", { className: "sr-only" }, t('Loading ...')))) : (t(text)))));
};
exports.Button = Button;
