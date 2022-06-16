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
exports.Language = void 0;
var react_1 = __importStar(require("react"));
var react_i18next_1 = require("react-i18next");
var monkey_conf_1 = require("../monkey-conf");
var store_1 = require("../store");
var Language = function () {
    var _a;
    var _b = (0, react_i18next_1.useTranslation)(), t = _b.t, i18n = _b.i18n;
    var _c = (0, store_1.useStore)(), get = _c.get, set = _c.set;
    var langs = (0, monkey_conf_1.useMonkeyConf)().langs;
    var _d = (0, react_1.useState)(), lang = _d[0], setLang = _d[1];
    (0, react_1.useEffect)(function () {
        if (!lang) {
            var storeLang = get(store_1.StoreKeys.Language);
            setLang(storeLang !== null && storeLang !== void 0 ? storeLang : langs[0]);
        }
    }, []);
    (0, react_1.useEffect)(function () {
        if (lang) {
            i18n.changeLanguage(lang === null || lang === void 0 ? void 0 : lang.code);
            set(store_1.StoreKeys.Language, lang);
        }
    }, [lang]);
    return (react_1.default.createElement("li", { className: "nav-item dropdown-language dropdown me-2 me-xl-0" },
        react_1.default.createElement("a", { "data-bs-toggle": "dropdown", className: "nav-link dropdown-toggle cursor-pointer hide-arrow" },
            react_1.default.createElement("i", { className: "fi fi-".concat((_a = lang === null || lang === void 0 ? void 0 : lang.icon) !== null && _a !== void 0 ? _a : lang === null || lang === void 0 ? void 0 : lang.code, " fis rounded-circle fs-3 me-1") })),
        react_1.default.createElement("ul", { className: "dropdown-menu dropdown-menu-end" }, langs === null || langs === void 0 ? void 0 : langs.map(function (lang, index) {
            var _a;
            return (react_1.default.createElement("li", { key: index },
                react_1.default.createElement("div", { className: "dropdown-item", onClick: function () { return setLang(lang); } },
                    react_1.default.createElement("i", { className: "fi fi-".concat((_a = lang === null || lang === void 0 ? void 0 : lang.icon) !== null && _a !== void 0 ? _a : lang === null || lang === void 0 ? void 0 : lang.code, " fis rounded-circle fs-4 me-1") }),
                    react_1.default.createElement("span", { className: "align-middle" }, t(lang.name)))));
        }))));
};
exports.Language = Language;
