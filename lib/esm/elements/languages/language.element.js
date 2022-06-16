import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMonkeyConf } from '../monkey-conf';
import { StoreKeys, useStore } from '../store';
export var Language = function () {
    var _a;
    var _b = useTranslation(), t = _b.t, i18n = _b.i18n;
    var _c = useStore(), get = _c.get, set = _c.set;
    var langs = useMonkeyConf().langs;
    var _d = useState(), lang = _d[0], setLang = _d[1];
    useEffect(function () {
        if (!lang) {
            var storeLang = get(StoreKeys.Language);
            setLang(storeLang !== null && storeLang !== void 0 ? storeLang : langs[0]);
        }
    }, []);
    useEffect(function () {
        if (lang) {
            i18n.changeLanguage(lang === null || lang === void 0 ? void 0 : lang.code);
            set(StoreKeys.Language, lang);
        }
    }, [lang]);
    return (React.createElement("li", { className: "nav-item dropdown-language dropdown me-2 me-xl-0" },
        React.createElement("a", { "data-bs-toggle": "dropdown", className: "nav-link dropdown-toggle cursor-pointer hide-arrow" },
            React.createElement("i", { className: "fi fi-".concat((_a = lang === null || lang === void 0 ? void 0 : lang.icon) !== null && _a !== void 0 ? _a : lang === null || lang === void 0 ? void 0 : lang.code, " fis rounded-circle fs-3 me-1") })),
        React.createElement("ul", { className: "dropdown-menu dropdown-menu-end" }, langs === null || langs === void 0 ? void 0 : langs.map(function (lang, index) {
            var _a;
            return (React.createElement("li", { key: index },
                React.createElement("div", { className: "dropdown-item", onClick: function () { return setLang(lang); } },
                    React.createElement("i", { className: "fi fi-".concat((_a = lang === null || lang === void 0 ? void 0 : lang.icon) !== null && _a !== void 0 ? _a : lang === null || lang === void 0 ? void 0 : lang.code, " fis rounded-circle fs-4 me-1") }),
                    React.createElement("span", { className: "align-middle" }, t(lang.name)))));
        }))));
};
