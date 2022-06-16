"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
var react_1 = __importDefault(require("react"));
var react_i18next_1 = require("react-i18next");
var theme_1 = require("../theme");
var user_menu_1 = require("../user-menu");
var languages_1 = require("../languages");
var notifications_1 = require("../notifications");
var NavBar = function () {
    var t = (0, react_i18next_1.useTranslation)().t;
    return (react_1.default.createElement("nav", { className: "layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme", id: "layout-navbar" },
        react_1.default.createElement("div", { className: "layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none" },
            react_1.default.createElement("a", { className: "nav-item nav-link px-0 me-xl-4" },
                react_1.default.createElement("i", { className: "bx bx-menu bx-sm" }))),
        react_1.default.createElement("div", { className: "navbar-nav-right d-flex align-items-center", id: "navbar-collapse" },
            react_1.default.createElement("div", { className: "navbar-nav align-items-center" },
                react_1.default.createElement("div", { className: "nav-item navbar-search-wrapper mb-0" },
                    react_1.default.createElement("a", { className: "nav-item nav-link search-toggler px-0" },
                        react_1.default.createElement("i", { className: "bx bx-search bx-sm" }),
                        react_1.default.createElement("span", { className: "d-none d-md-inline-block text-muted" },
                            t("Search"),
                            " (Ctrl+/)")))),
            react_1.default.createElement("ul", { className: "navbar-nav flex-row align-items-center ms-auto" },
                react_1.default.createElement(languages_1.Language, null),
                react_1.default.createElement(theme_1.Theme, null),
                react_1.default.createElement(notifications_1.Notifications, null),
                react_1.default.createElement(user_menu_1.UserMenu, null))),
        react_1.default.createElement("div", { className: "navbar-search-wrapper search-input-wrapper d-none" },
            react_1.default.createElement("input", { type: "text", "aria-label": t("Search..."), placeholder: t("Search..."), className: "form-control search-input container-xxl border-0" }),
            react_1.default.createElement("i", { className: "bx bx-x bx-sm search-toggler cursor-pointer" }))));
};
exports.NavBar = NavBar;
