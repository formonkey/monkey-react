"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
var react_1 = __importDefault(require("react"));
var File = function (_a) {
    var label = _a.label, accept = _a.accept, multiple = _a.multiple, name = _a.name, t = _a.t;
    return (react_1.default.createElement("div", { className: "mb-3" },
        react_1.default.createElement("label", { htmlFor: "file-".concat(name), className: "btn btn btn-outline-primary" },
            react_1.default.createElement("i", { className: "bx-upload bx bx-pie-chart-alt" }),
            react_1.default.createElement("span", { className: "px-2 pt-2" }, t(label))),
        react_1.default.createElement("input", { type: "file", accept: accept, id: "file-".concat(name), multiple: multiple, style: { display: 'none' } })));
};
exports.File = File;
