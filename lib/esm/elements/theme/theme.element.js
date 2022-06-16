import React, { useEffect, useState } from 'react';
import { StoreKeys, useStore } from '../store';
import { useMonkeyConf } from '../monkey-conf';
export var Theme = function () {
    var _a = useStore(), get = _a.get, set = _a.set;
    var theme = useMonkeyConf().theme;
    var _b = useState(), mode = _b[0], setMode = _b[1];
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
    useEffect(function () {
        var temp = get(StoreKeys.Theme);
        setMode(temp !== null && temp !== void 0 ? temp : theme.modes[0]);
    }, []);
    useEffect(function () {
        if (mode) {
            set(StoreKeys.Theme, mode);
            changeClassByName(theme.classes.core, mode.styles.core);
            changeClassByName(theme.classes.default, mode.styles.default);
        }
    }, [mode]);
    return (React.createElement("li", { className: "nav-item me-2 me-xl-0" },
        React.createElement("span", { className: "nav-link style-switcher-toggle cursor-pointer hide-arrow", onClick: onToggleMode },
            React.createElement("i", { className: "bx bx-sm bx-".concat(mode === null || mode === void 0 ? void 0 : mode.icon) }))));
};
