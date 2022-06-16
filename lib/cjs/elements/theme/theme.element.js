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
exports.Theme = void 0;
var react_1 = __importStar(require("react"));
var store_1 = require("../store");
var monkey_conf_1 = require("../monkey-conf");
var Theme = function () {
    var _a = (0, store_1.useStore)(), get = _a.get, set = _a.set;
    var theme = (0, monkey_conf_1.useMonkeyConf)().theme;
    var _b = (0, react_1.useState)(), mode = _b[0], setMode = _b[1];
    var changeClassByName = function (className, style) {
        var _a;
        var element = document.getElementsByClassName(className)[0];
        if (element) {
            var href = (_a = element.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.split('/');
            href === null || href === void 0 ? void 0 : href.pop();
            element.setAttribute('href', "".concat(href === null || href === void 0 ? void 0 : href.join('/'), "/").concat(style, ".css"));
        }
    };
    var onToggleMode = function () {
        if (mode) {
            setMode(mode.icon === 'sun' ? theme.modes[0] : theme.modes[1]);
        }
    };
    (0, react_1.useEffect)(function () {
        var temp = get(store_1.StoreKeys.Theme);
        setMode(temp !== null && temp !== void 0 ? temp : theme.modes[0]);
    }, []);
    (0, react_1.useEffect)(function () {
        if (mode) {
            set(store_1.StoreKeys.Theme, mode);
            changeClassByName(theme.classes.core, mode.styles.core);
            changeClassByName(theme.classes.default, mode.styles.default);
        }
    }, [mode]);
    return (react_1.default.createElement("li", { className: "nav-item me-2 me-xl-0" },
        react_1.default.createElement("span", { className: "nav-link style-switcher-toggle cursor-pointer hide-arrow", onClick: onToggleMode },
            react_1.default.createElement("i", { className: "bx bx-sm bx-".concat(mode === null || mode === void 0 ? void 0 : mode.icon) }))));
};
exports.Theme = Theme;
