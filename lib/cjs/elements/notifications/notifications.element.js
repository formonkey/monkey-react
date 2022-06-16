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
exports.Notifications = void 0;
var react_1 = __importStar(require("react"));
var react_i18next_1 = require("react-i18next");
var http_client_1 = require("../http-client");
var monkey_conf_1 = require("../monkey-conf");
var Notifications = function () {
    var data = (0, react_1.useState)([])[0];
    var t = (0, react_i18next_1.useTranslation)().t;
    var api = (0, http_client_1.useHttpClient)().api;
    var notifications = (0, monkey_conf_1.useMonkeyConf)().notifications;
    (0, react_1.useEffect)(function () {
        if (notifications) {
            api(notifications.endpoint, "GET");
        }
    }, []);
    return (react_1.default.createElement("li", { className: "nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1" },
        react_1.default.createElement("a", { className: "nav-link dropdown-toggle hide-arrow", href: "javascript:void(0);", "data-bs-toggle": "dropdown", "data-bs-auto-close": "outside", "aria-expanded": "false" },
            react_1.default.createElement("i", { className: "bx bx-bell bx-sm" }),
            data.length ? (react_1.default.createElement("span", { className: "badge bg-danger rounded-pill badge-notifications" }, data.length)) : (react_1.default.createElement(react_1.default.Fragment, null))),
        data.length ? (react_1.default.createElement("ul", { className: "dropdown-menu dropdown-menu-end py-0" },
            react_1.default.createElement("li", { className: "dropdown-menu-header border-bottom" },
                react_1.default.createElement("div", { className: "dropdown-header d-flex align-items-center py-3" },
                    react_1.default.createElement("h5", { className: "text-body mb-0 me-auto" }, t("Notification")),
                    react_1.default.createElement("a", { href: "javascript:void(0)", className: "dropdown-notifications-all text-body", "data-bs-toggle": "tooltip", "data-bs-placement": "top" },
                        react_1.default.createElement("i", { className: "bx fs-4 bx-envelope-open" })))),
            react_1.default.createElement("li", { className: "dropdown-notifications-list scrollable-container" },
                react_1.default.createElement("ul", { className: "list-group list-group-flush" }, data.map(function (_, idx) { return (react_1.default.createElement("li", { key: idx, className: "list-group-item list-group-item-action dropdown-notifications-item" },
                    react_1.default.createElement("div", { className: "d-flex" },
                        react_1.default.createElement("div", { className: "flex-shrink-0 me-3" },
                            react_1.default.createElement("div", { className: "avatar" },
                                react_1.default.createElement("img", { src: "../../assets/img/avatars/1.png", alt: "", className: "w-px-40 h-auto rounded-circle" }))),
                        react_1.default.createElement("div", { className: "flex-grow-1" },
                            react_1.default.createElement("h6", { className: "mb-1" }, "Congratulation Lettie \uD83C\uDF89"),
                            react_1.default.createElement("p", { className: "mb-0" }, "Won the monthly best seller gold badge"),
                            react_1.default.createElement("small", { className: "text-muted" }, "1h ago")),
                        react_1.default.createElement("div", { className: "flex-shrink-0 dropdown-notifications-actions" },
                            react_1.default.createElement("a", { href: "javascript:void(0)", className: "dropdown-notifications-read" },
                                react_1.default.createElement("span", { className: "badge badge-dot" })),
                            react_1.default.createElement("a", { href: "javascript:void(0)", className: "dropdown-notifications-archive" },
                                react_1.default.createElement("span", { className: "bx bx-x" })))))); }))),
            data.length > 5 ? (react_1.default.createElement("li", { className: "dropdown-menu-footer border-top" },
                react_1.default.createElement("a", { href: "javascript:void(0);", className: "dropdown-item d-flex justify-content-center p-3" }, t("View all notifications")))) : (react_1.default.createElement(react_1.default.Fragment, null)))) : (react_1.default.createElement(react_1.default.Fragment, null))));
};
exports.Notifications = Notifications;
