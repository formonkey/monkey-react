import React from 'react';
import { Menu, NavBar, Footer } from '../../elements';
import { PlatformRouter } from './platform.router';
export var Platform = function (_a) {
    var customRoutes = _a.customRoutes;
    return (React.createElement("div", { className: "layout-wrapper layout-content-navbar" },
        React.createElement("div", { className: "layout-container" },
            React.createElement(Menu, null),
            React.createElement("div", { className: "layout-page" },
                React.createElement(NavBar, null),
                React.createElement("div", { className: "content-wrapper" },
                    React.createElement("div", { className: "container-xxl flex-grow-1 container-p-y" },
                        React.createElement(PlatformRouter, { customRoutes: customRoutes })),
                    React.createElement(Footer, null),
                    React.createElement("div", { className: "content-backdrop fade" })))),
        React.createElement("div", { className: "layout-overlay layout-menu-toggle" }),
        React.createElement("div", { className: "drag-target" })));
};
