var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
import React from "react";
import { Routes, Route } from "react-router-dom";
import { GenericView, NoData, useMonkeyConf } from "../../elements";
export var PlatformRouter = function () {
    var _a;
    var _b = useMonkeyConf().menu, privacy = _b.privacy, generic = _b.generic;
    return (React.createElement(Routes, null, (_a = __spreadArray(__spreadArray([], privacy, true), generic, true)) === null || _a === void 0 ? void 0 :
        _a.map(function (element, index) {
            return element.children ? (element.children.map(function (child, idx) {
                var _a;
                return (React.createElement(Route, { key: "".concat(index, "-").concat(idx), element: React.createElement(GenericView, __assign({}, child)), path: "".concat((_a = element.path) !== null && _a !== void 0 ? _a : "").concat(child.path) }));
            })) : (React.createElement(Route, { key: index, path: element.path, element: React.createElement(GenericView, __assign({}, element)) }));
        }),
        React.createElement(Route, { path: "*", element: React.createElement(NoData, null) })));
};
