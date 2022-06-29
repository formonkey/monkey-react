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
import React, { Routes, Route } from 'react-router-dom';
import { MyProfile } from '../my-profile';
import { GenericDetail, GenericView, NoData, useMonkeyConf } from '../../elements';
export var PlatformRouter = function () {
    var _a;
    var _b = useMonkeyConf().menu, privacy = _b.privacy, generic = _b.generic;
    return (React.createElement(Routes, null, (_a = __spreadArray(__spreadArray([], privacy, true), generic, true)) === null || _a === void 0 ? void 0 :
        _a.map(function (element, index) {
            var _a, _b;
            return element.children ? (element.children.map(function (child, idx) {
                var _a, _b, _c;
                return (React.createElement(React.Fragment, null,
                    React.createElement(Route, { key: "".concat(index, "-").concat(idx), element: React.createElement(GenericView, __assign({}, child)), path: "".concat((_a = element.path) !== null && _a !== void 0 ? _a : '').concat(child.path) }),
                    ((_c = (_b = child.actions) === null || _b === void 0 ? void 0 : _b.custom) === null || _c === void 0 ? void 0 : _c.length)
                        ? child.actions.custom.map(function (action, cidx) { return (React.createElement(Route, { key: "".concat(index, "-").concat(idx, "-").concat(cidx), element: React.createElement(GenericDetail, __assign({}, action)), path: action.path })); })
                        : null));
            })) : (React.createElement(React.Fragment, null,
                React.createElement(Route, { key: index, path: element.path, element: React.createElement(GenericView, __assign({}, element)) }),
                ((_b = (_a = element.actions) === null || _a === void 0 ? void 0 : _a.custom) === null || _b === void 0 ? void 0 : _b.length)
                    ? element.actions.custom.map(function (action, idx) { return (React.createElement(Route, { key: "".concat(idx), path: action.path, element: React.createElement(GenericDetail, { action: action, config: element }) })); })
                    : null));
        }),
        React.createElement(Route, { path: "my-profile", element: React.createElement(MyProfile, null) }),
        React.createElement(Route, { path: "*", element: React.createElement(NoData, null) })));
};
