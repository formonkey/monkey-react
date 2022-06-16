import React from "react";
import { useTranslation } from "react-i18next";
import { Theme } from "../theme";
import { UserMenu } from "../user-menu";
import { Language } from "../languages";
import { Notifications } from "../notifications";
export var NavBar = function () {
    var t = useTranslation().t;
    return (React.createElement("nav", { className: "layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme", id: "layout-navbar" },
        React.createElement("div", { className: "layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none" },
            React.createElement("a", { className: "nav-item nav-link px-0 me-xl-4" },
                React.createElement("i", { className: "bx bx-menu bx-sm" }))),
        React.createElement("div", { className: "navbar-nav-right d-flex align-items-center", id: "navbar-collapse" },
            React.createElement("div", { className: "navbar-nav align-items-center" },
                React.createElement("div", { className: "nav-item navbar-search-wrapper mb-0" },
                    React.createElement("a", { className: "nav-item nav-link search-toggler px-0" },
                        React.createElement("i", { className: "bx bx-search bx-sm" }),
                        React.createElement("span", { className: "d-none d-md-inline-block text-muted" },
                            t("Search"),
                            " (Ctrl+/)")))),
            React.createElement("ul", { className: "navbar-nav flex-row align-items-center ms-auto" },
                React.createElement(Language, null),
                React.createElement(Theme, null),
                React.createElement(Notifications, null),
                React.createElement(UserMenu, null))),
        React.createElement("div", { className: "navbar-search-wrapper search-input-wrapper d-none" },
            React.createElement("input", { type: "text", "aria-label": t("Search..."), placeholder: t("Search..."), className: "form-control search-input container-xxl border-0" }),
            React.createElement("i", { className: "bx bx-x bx-sm search-toggler cursor-pointer" }))));
};
