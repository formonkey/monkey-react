"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Platform = void 0;
var react_1 = __importDefault(require("react"));
var elements_1 = require("../../elements");
var platform_router_1 = require("./platform.router");
var Platform = function (_a) {
    var customRoutes = _a.customRoutes;
    return (react_1.default.createElement("div", { className: "layout-wrapper layout-content-navbar" },
        react_1.default.createElement("div", { className: "layout-container" },
            react_1.default.createElement(elements_1.Menu, null),
            react_1.default.createElement("div", { className: "layout-page" },
                react_1.default.createElement(elements_1.NavBar, null),
                react_1.default.createElement("div", { className: "content-wrapper" },
                    react_1.default.createElement("div", { className: "container-xxl flex-grow-1 container-p-y" },
                        react_1.default.createElement(platform_router_1.PlatformRouter, { customRoutes: customRoutes })),
                    react_1.default.createElement(elements_1.Footer, null),
                    react_1.default.createElement("div", { className: "content-backdrop fade" })))),
        react_1.default.createElement("div", { className: "layout-overlay layout-menu-toggle" }),
        react_1.default.createElement("div", { className: "drag-target" })));
};
exports.Platform = Platform;
