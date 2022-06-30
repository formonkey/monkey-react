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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bootstrap = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var pages_1 = require("../pages");
var elements_1 = require("../elements");
var Bootstrap = function (_a) {
    var _b = _a.customRoutes, customRoutes = _b === void 0 ? {} : _b;
    var get = (0, elements_1.useStore)().get;
    var _c = (0, react_1.useState)(false), logged = _c[0], setLogged = _c[1];
    (0, react_1.useEffect)(function () {
        if (get(elements_1.StoreKeys.Token)) {
            setLogged(true);
        }
    }, []);
    return (react_1.default.createElement(elements_1.MonkeyConf, null, logged ? (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(pages_1.Platform, { customRoutes: customRoutes }))) : (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(pages_1.Authentication, null)))));
};
exports.Bootstrap = Bootstrap;
