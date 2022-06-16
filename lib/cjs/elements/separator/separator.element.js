"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Separator = void 0;
var react_1 = __importDefault(require("react"));
var Separator = function (_a) {
    var t = _a.t, label = _a.label;
    return (react_1.default.createElement("div", { className: "divider divider-dashed" },
        react_1.default.createElement("div", { className: "divider-text" }, t(label))));
};
exports.Separator = Separator;
