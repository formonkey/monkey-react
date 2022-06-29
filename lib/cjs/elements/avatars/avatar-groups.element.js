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
exports.AvatarGroups = void 0;
var react_1 = __importStar(require("react"));
var AvatarGroups = function (_a) {
    var conf = _a.conf, data = _a.data;
    var getRandomColor = function () {
        var colors = conf.randomColors || ['dark'];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            [].slice
                .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                .map(function (tooltipTriggerEl) {
                return new window.bootstrap.Tooltip(tooltipTriggerEl);
            });
        }, 200);
    }, []);
    return (react_1.default.createElement("ul", { className: "list-unstyled m-0 d-flex align-items-center avatar-group" }, data === null || data === void 0 ? void 0 :
        data.slice(0, 3).map(function (item, idx) {
            var _a, _b, _c;
            return (react_1.default.createElement("li", { key: idx, "data-bs-toggle": "tooltip", "data-popup": "tooltip-custom", "data-bs-placement": "top", title: "".concat(item === null || item === void 0 ? void 0 : item[conf.name], " ").concat(item === null || item === void 0 ? void 0 : item[conf.lastName]), className: "avatar pull-up" }, item.avatar ? (react_1.default.createElement("img", { className: "rounded-circle", src: "../../assets/img/avatars/5.png", alt: "Avatar" })) : (react_1.default.createElement("span", { className: "avatar-initial rounded-circle bg-label-".concat(getRandomColor()) }, ((_a = item === null || item === void 0 ? void 0 : item[conf.name]) === null || _a === void 0 ? void 0 : _a[0]) + ((_b = item === null || item === void 0 ? void 0 : item[conf.lastName]) === null || _b === void 0 ? void 0 : _b[0]) ||
                ((_c = item === null || item === void 0 ? void 0 : item[conf.name]) === null || _c === void 0 ? void 0 : _c[1])))));
        }),
        data.length > 3 && (react_1.default.createElement("div", { className: "avatar" },
            react_1.default.createElement("span", { className: "avatar-initial rounded-circle pull-up bg-secondary" }, "+".concat(data.length - 3))))));
};
exports.AvatarGroups = AvatarGroups;
