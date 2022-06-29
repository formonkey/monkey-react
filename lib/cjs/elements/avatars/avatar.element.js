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
exports.Avatar = void 0;
var react_1 = __importStar(require("react"));
var enums_1 = require("./enums");
var Avatar = function (_a) {
    var _b = _a.size, size = _b === void 0 ? enums_1.AvatarSize.Normal : _b, url = _a.url, name = _a.name, lastName = _a.lastName, _c = _a.type, type = _c === void 0 ? enums_1.AvatarType.Circle : _c;
    var _d = (0, react_1.useState)(''), image = _d[0], setImage = _d[1];
    var _e = (0, react_1.useState)(''), initials = _e[0], setInitials = _e[1];
    (0, react_1.useEffect)(function () {
        if (name && lastName) {
            setInitials("".concat(name[0]).concat(lastName[0]));
        }
    }, [name, lastName]);
    (0, react_1.useEffect)(function () {
        setImage(url || '');
    }, [url]);
    return image || initials ? (image ? (react_1.default.createElement("div", { className: "avatar avatar-".concat(size) },
        react_1.default.createElement("img", { src: image, alt: "Avatar", className: type }))) : (react_1.default.createElement("div", { className: "avatar avatar-".concat(size, " me-2") },
        react_1.default.createElement("span", { className: "avatar-initial ".concat(type, " bg-label-info") }, initials)))) : null;
};
exports.Avatar = Avatar;
