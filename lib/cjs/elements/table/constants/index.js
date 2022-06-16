"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TABLE_ELEMENT_CUSTOM = void 0;
var react_1 = __importDefault(require("react"));
exports.TABLE_ELEMENT_CUSTOM = {
    add: function (conf, value, data) { return "".concat(value, " ").concat(data[conf.key]); },
    // parsed: (conf: any, value: string) => `${value[conf.key]}`,
    parsed: function (conf, value) { return "".concat((value && value[conf.key]) || '-'); },
    boolean: function (_, value) {
        return value ? (react_1.default.createElement("span", { className: 'badge badge-center rounded-pill bg-success' },
            react_1.default.createElement("i", { className: 'bx bx-check' }))) : (react_1.default.createElement("span", { className: 'badge badge-center rounded-pill bg-danger' },
            react_1.default.createElement("i", { className: 'bx bx-x' })));
    },
    tags: function (conf, value) {
        return value.map(function (tag, idx) { return (react_1.default.createElement("span", { key: idx, className: "badge rounded-pill bg-label-primary" }, tag[conf.key])); });
    },
};
