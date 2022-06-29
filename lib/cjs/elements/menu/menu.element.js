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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importStar(require("react"));
var react_i18next_1 = require("react-i18next");
var react_router_dom_1 = require("react-router-dom");
var monkey_conf_1 = require("../monkey-conf");
var store_1 = require("../store");
var Menu = function () {
    var get = (0, store_1.useStore)().get;
    var t = (0, react_i18next_1.useTranslation)().t;
    var pathname = (0, react_router_dom_1.useLocation)().pathname;
    var _a = (0, react_1.useState)(''), open = _a[0], setOpen = _a[1];
    var _b = (0, monkey_conf_1.useMonkeyConf)(), name = _b.name, menu = _b.menu;
    var _c = (0, react_1.useState)([]), generics = _c[0], setGenerics = _c[1];
    var _d = (0, react_1.useState)([]), privacies = _d[0], setPrivacies = _d[1];
    (0, react_1.useEffect)(function () {
        var roles = get(store_1.StoreKeys.Token).roles;
        setPrivacies(__spreadArray([], menu.privacy.filter(function (privacy) {
            return privacy.permision
                ? roles.find(function (role) { return privacy.permision.includes(role); })
                : true;
        }), true));
        setGenerics(__spreadArray([], menu.generic.filter(function (generic) {
            return generic.permision
                ? roles.find(function (role) { return generic.permision.includes(role); })
                : true;
        }), true));
    }, []);
    return (react_1.default.createElement("aside", { id: "layout-menu", className: "layout-menu menu-vertical menu bg-menu-theme" },
        react_1.default.createElement("div", { className: "app-brand demo" },
            react_1.default.createElement("a", { href: "/", className: "app-brand-link" },
                react_1.default.createElement("span", { className: "app-brand-logo demo" }),
                react_1.default.createElement("span", { className: "app-brand-text demo menu-text fw-bolder ms-2" }, name)),
            react_1.default.createElement("div", { className: "layout-menu-toggle menu-link text-large ms-auto" },
                react_1.default.createElement("i", { className: "bx bx-chevron-left bx-sm align-middle" }))),
        react_1.default.createElement("div", { className: "menu-inner-shadow" }),
        react_1.default.createElement("ul", { className: "menu-inner py-1" },
            privacies.length && generics.length ? (react_1.default.createElement("li", { className: "menu-header small text-uppercase" },
                react_1.default.createElement("span", { className: "menu-header-text" }, t('Privacy')))) : null,
            privacies.map(function (element, index) { return (react_1.default.createElement("li", { className: "menu-item ".concat(pathname === element.path && 'active', " ").concat(open === element.path && 'open'), key: index }, element.children ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("a", { className: "menu-link menu-toggle cursor-pointer", onClick: function () {
                        return setOpen(open !== element.path ? element.path : '');
                    } },
                    react_1.default.createElement("i", { className: "menu-icon tf-icons bx ".concat(element.icon) }),
                    react_1.default.createElement("div", null, t(element.name))),
                react_1.default.createElement("ul", { className: "menu-sub" }, element.children.map(function (child) { return (react_1.default.createElement("li", { className: "menu-item" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "".concat(element.path).concat(child.path), className: "menu-link" },
                        react_1.default.createElement("div", null, t(child.name))))); })))) : (react_1.default.createElement(react_router_dom_1.Link, { to: element.path, className: "menu-link" },
                react_1.default.createElement("i", { className: "menu-icon tf-icons bx ".concat(element.icon) }),
                react_1.default.createElement("div", null, t(element.name)))))); }),
            generics.length && privacies.length ? (react_1.default.createElement("li", { className: "menu-header small text-uppercase" },
                react_1.default.createElement("span", { className: "menu-header-text" }, t('Generics')))) : null,
            generics.map(function (element, index) { return (react_1.default.createElement("li", { className: "menu-item ".concat(pathname.match(element.path) && 'active', " ").concat(open === element.path && 'open'), key: index }, element.children ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("a", { className: "menu-link menu-toggle cursor-pointer", onClick: function () {
                        return setOpen(open !== element.path ? element.path : '');
                    } },
                    react_1.default.createElement("i", { className: "menu-icon tf-icons bx ".concat(element.icon) }),
                    react_1.default.createElement("div", null, t(element.name))),
                react_1.default.createElement("ul", { className: "menu-sub" }, element.children.map(function (child) { return (react_1.default.createElement("li", { className: "menu-item ".concat(pathname === "".concat(element.path).concat(child.path) &&
                        'active') },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "".concat(element.path).concat(child.path), className: "menu-link" },
                        react_1.default.createElement("div", null, t(child.name))))); })))) : (react_1.default.createElement(react_router_dom_1.Link, { to: element.path, className: "menu-link" },
                react_1.default.createElement("i", { className: "menu-icon tf-icons bx ".concat(element.icon) }),
                react_1.default.createElement("div", null, t(element.name)))))); })),
        react_1.default.createElement("script", { src: "/assets/vendor/js/menu.js" })));
};
exports.Menu = Menu;
