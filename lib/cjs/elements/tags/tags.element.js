"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tags = void 0;
var react_1 = __importDefault(require("react"));
var Tags = function (_a) {
    var _b;
    var form = _a.form, name = _a.name, keys = _a.keys;
    return (react_1.default.createElement("div", { className: "mb-4" }, ((_b = form === null || form === void 0 ? void 0 : form[name]) === null || _b === void 0 ? void 0 : _b.length) &&
        (form === null || form === void 0 ? void 0 : form[name].map(function (element) { return (react_1.default.createElement("span", { className: "badge bg-label-secondary me-1 mb-1" }, keys.map(function (key) { return element[key]; }).join(';'))); }))));
};
exports.Tags = Tags;
