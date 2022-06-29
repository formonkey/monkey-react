"use strict";
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
exports.PlatformRouter = void 0;
var react_router_dom_1 = __importStar(require("react-router-dom"));
var my_profile_1 = require("../my-profile");
var elements_1 = require("../../elements");
var PlatformRouter = function () {
    var _a;
    var _b = (0, elements_1.useMonkeyConf)().menu, privacy = _b.privacy, generic = _b.generic;
    return (react_router_dom_1.default.createElement(react_router_dom_1.Routes, null, (_a = __spreadArray(__spreadArray([], privacy, true), generic, true)) === null || _a === void 0 ? void 0 :
        _a.map(function (element, index) {
            var _a, _b;
            return element.children ? (element.children.map(function (child, idx) {
                var _a, _b, _c;
                return (react_router_dom_1.default.createElement(react_router_dom_1.default.Fragment, null,
                    react_router_dom_1.default.createElement(react_router_dom_1.Route, { key: "".concat(index, "-").concat(idx), element: react_router_dom_1.default.createElement(elements_1.GenericView, __assign({}, child)), path: "".concat((_a = element.path) !== null && _a !== void 0 ? _a : '').concat(child.path) }),
                    ((_c = (_b = child.actions) === null || _b === void 0 ? void 0 : _b.custom) === null || _c === void 0 ? void 0 : _c.length)
                        ? child.actions.custom.map(function (action, cidx) { return (react_router_dom_1.default.createElement(react_router_dom_1.Route, { key: "".concat(index, "-").concat(idx, "-").concat(cidx), element: react_router_dom_1.default.createElement(elements_1.GenericDetail, __assign({}, action)), path: action.path })); })
                        : null));
            })) : (react_router_dom_1.default.createElement(react_router_dom_1.default.Fragment, null,
                react_router_dom_1.default.createElement(react_router_dom_1.Route, { key: index, path: element.path, element: react_router_dom_1.default.createElement(elements_1.GenericView, __assign({}, element)) }),
                ((_b = (_a = element.actions) === null || _a === void 0 ? void 0 : _a.custom) === null || _b === void 0 ? void 0 : _b.length)
                    ? element.actions.custom.map(function (action, idx) { return (react_router_dom_1.default.createElement(react_router_dom_1.Route, { key: "".concat(idx), path: action.path, element: react_router_dom_1.default.createElement(elements_1.GenericDetail, { action: action, config: element }) })); })
                    : null));
        }),
        react_router_dom_1.default.createElement(react_router_dom_1.Route, { path: "my-profile", element: react_router_dom_1.default.createElement(my_profile_1.MyProfile, null) }),
        react_router_dom_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_router_dom_1.default.createElement(elements_1.NoData, null) })));
};
exports.PlatformRouter = PlatformRouter;
