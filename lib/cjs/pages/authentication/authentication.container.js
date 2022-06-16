"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
var react_1 = __importDefault(require("react"));
var elements_1 = require("../../elements");
var authentication_router_1 = require("./authentication.router");
var Authentication = function () {
    var _a = (0, elements_1.useMonkeyConf)(), name = _a.name, authenticationFlow = _a.authenticationFlow;
    return (react_1.default.createElement("div", { className: "container-xxl" },
        react_1.default.createElement("div", { className: "authentication-wrapper authentication-basic container-p-y" },
            react_1.default.createElement("div", { className: "authentication-inner" },
                react_1.default.createElement("div", { className: "card" },
                    react_1.default.createElement("div", { className: "card-body" },
                        react_1.default.createElement("div", { className: "app-brand justify-content-center" },
                            react_1.default.createElement("a", { href: "index.html", className: "app-brand-link gap-2" },
                                react_1.default.createElement("span", { className: "app-brand-logo demo" }),
                                react_1.default.createElement("span", { className: "app-brand-text demo text-body fw-bolder" }, name))),
                        react_1.default.createElement(authentication_router_1.AuthenticationRouter, { flow: authenticationFlow })))))));
};
exports.Authentication = Authentication;
