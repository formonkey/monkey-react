var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import { useMonkeyConf } from '../monkey-conf';
import { StoreKeys, useStore } from '../store';
export var Menu = function () {
    var get = useStore().get;
    var t = useTranslation().t;
    var pathname = useLocation().pathname;
    var _a = useState(''), open = _a[0], setOpen = _a[1];
    var _b = useMonkeyConf(), name = _b.name, menu = _b.menu;
    var _c = useState([]), generics = _c[0], setGenerics = _c[1];
    var _d = useState([]), privacies = _d[0], setPrivacies = _d[1];
    useEffect(function () {
        var roles = get(StoreKeys.Token).roles;
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
    return (React.createElement("aside", { id: "layout-menu", className: "layout-menu menu-vertical menu bg-menu-theme" },
        React.createElement("div", { className: "app-brand demo" },
            React.createElement("a", { href: "/", className: "app-brand-link" },
                React.createElement("span", { className: "app-brand-logo demo" }),
                React.createElement("span", { className: "app-brand-text demo menu-text fw-bolder ms-2" }, name)),
            React.createElement("div", { className: "layout-menu-toggle menu-link text-large ms-auto" },
                React.createElement("i", { className: "bx bx-chevron-left bx-sm align-middle" }))),
        React.createElement("div", { className: "menu-inner-shadow" }),
        React.createElement("ul", { className: "menu-inner py-1" },
            privacies.length && generics.length ? (React.createElement("li", { className: "menu-header small text-uppercase" },
                React.createElement("span", { className: "menu-header-text" }, t('Privacy')))) : null,
            privacies.map(function (element, index) { return (React.createElement("li", { className: "menu-item ".concat(pathname === element.path && 'active', " ").concat(open === element.path && 'open'), key: index }, element.children ? (React.createElement(React.Fragment, null,
                React.createElement("a", { className: "menu-link menu-toggle cursor-pointer", onClick: function () {
                        return setOpen(open !== element.path ? element.path : '');
                    } },
                    React.createElement("i", { className: "menu-icon tf-icons bx ".concat(element.icon) }),
                    React.createElement("div", null, t(element.name))),
                React.createElement("ul", { className: "menu-sub" }, element.children.map(function (child) { return (React.createElement("li", { className: "menu-item" },
                    React.createElement(Link, { to: "".concat(element.path).concat(child.path), className: "menu-link" },
                        React.createElement("div", null, t(child.name))))); })))) : (React.createElement(Link, { to: element.path, className: "menu-link" },
                React.createElement("i", { className: "menu-icon tf-icons bx ".concat(element.icon) }),
                React.createElement("div", null, t(element.name)))))); }),
            generics.length && privacies.length ? (React.createElement("li", { className: "menu-header small text-uppercase" },
                React.createElement("span", { className: "menu-header-text" }, t('Generics')))) : null,
            generics.map(function (element, index) { return (React.createElement("li", { className: "menu-item ".concat(pathname.match(element.path) && 'active', " ").concat(open === element.path && 'open'), key: index }, element.children ? (React.createElement(React.Fragment, null,
                React.createElement("a", { className: "menu-link menu-toggle cursor-pointer", onClick: function () {
                        return setOpen(open !== element.path ? element.path : '');
                    } },
                    React.createElement("i", { className: "menu-icon tf-icons bx ".concat(element.icon) }),
                    React.createElement("div", null, t(element.name))),
                React.createElement("ul", { className: "menu-sub" }, element.children.map(function (child) { return (React.createElement("li", { className: "menu-item ".concat(pathname === "".concat(element.path).concat(child.path) &&
                        'active') },
                    React.createElement(Link, { to: "".concat(element.path).concat(child.path), className: "menu-link" },
                        React.createElement("div", null, t(child.name))))); })))) : (React.createElement(Link, { to: element.path, className: "menu-link" },
                React.createElement("i", { className: "menu-icon tf-icons bx ".concat(element.icon) }),
                React.createElement("div", null, t(element.name)))))); })),
        React.createElement("script", { src: "/assets/vendor/js/menu.js" })));
};
