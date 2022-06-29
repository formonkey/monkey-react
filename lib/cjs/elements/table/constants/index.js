"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TABLE_ELEMENT_CUSTOM = void 0;
var react_1 = __importDefault(require("react"));
var avatars_1 = require("../../avatars");
exports.TABLE_ELEMENT_CUSTOM = {
    add: function (conf, value, data) { return "".concat(value, " ").concat(data[conf.key]); },
    // parsed: (conf: any, value: string) => `${value[conf.key]}`,
    parsed: function (conf, value) { return "".concat((value && value[conf.key]) || '-'); },
    boolean: function (_, value) {
        return value ? (react_1.default.createElement("span", { className: "badge badge-center rounded-pill bg-success" },
            react_1.default.createElement("i", { className: "bx bx-check" }))) : (react_1.default.createElement("span", { className: "badge badge-center rounded-pill bg-danger" },
            react_1.default.createElement("i", { className: "bx bx-x" })));
    },
    tags: function (conf, value) {
        return value === null || value === void 0 ? void 0 : value.map(function (tag, idx) { return (react_1.default.createElement("span", { key: idx, className: "badge rounded-pill bg-label-primary" }, tag[conf.key])); });
    },
    avatar: function (conf, value, data) {
        if (Array.isArray(value)) {
            return react_1.default.createElement(avatars_1.AvatarGroups, { conf: conf, data: value });
        }
        else {
            return react_1.default.createElement(avatars_1.Avatar, __assign({}, data));
        }
    },
};
