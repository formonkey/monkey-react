"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationRouter = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var constants_1 = require("./constants");
var AuthenticationRouter = function (_a) {
    var flow = _a.flow;
    return (react_1.default.createElement(react_router_dom_1.Routes, null, flow === null || flow === void 0 ? void 0 :
        flow.map(function (key) { return (react_1.default.createElement(react_router_dom_1.Route, { key: key, path: constants_1.AUTHENTICATION_ROUTER_MAP_COMPONENTS[key].path, element: constants_1.AUTHENTICATION_ROUTER_MAP_COMPONENTS[key].element })); }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/", replace: true }) })));
};
exports.AuthenticationRouter = AuthenticationRouter;
