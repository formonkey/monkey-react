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
import React from 'react';
export var Add = function (_a) {
    var t = _a.t, name = _a.name, form = _a.form, keys = _a.keys, label = _a.label, onChange = _a.onChange;
    var handleClick = function () {
        var _a;
        var _b;
        form[name] = (_b = form[name]) !== null && _b !== void 0 ? _b : [];
        var items = form[name].length ? form[name] : [];
        var temp = {};
        var tempVoid = {};
        keys.map(function (key) {
            tempVoid[key] = '';
            temp[key] = form[key];
        });
        items = __spreadArray(__spreadArray([], items, true), [temp], false);
        onChange(__assign((_a = {}, _a[name] = items, _a), tempVoid));
    };
    return (React.createElement("div", { className: "mb-0" },
        React.createElement("button", { className: "btn btn-primary", onClick: handleClick },
            React.createElement("i", { className: "bx bx-plus" }),
            React.createElement("span", { className: "align-middle" }, t(label)))));
};
