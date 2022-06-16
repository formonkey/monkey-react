import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHttpClient } from "../http-client";
import { useMonkeyConf } from "../monkey-conf";
export var Notifications = function () {
    var data = useState([])[0];
    var t = useTranslation().t;
    var api = useHttpClient().api;
    var notifications = useMonkeyConf().notifications;
    useEffect(function () {
        if (notifications) {
            api(notifications.endpoint, "GET");
        }
    }, []);
    return (React.createElement("li", { className: "nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1" },
        React.createElement("a", { className: "nav-link dropdown-toggle hide-arrow", href: "javascript:void(0);", "data-bs-toggle": "dropdown", "data-bs-auto-close": "outside", "aria-expanded": "false" },
            React.createElement("i", { className: "bx bx-bell bx-sm" }),
            data.length ? (React.createElement("span", { className: "badge bg-danger rounded-pill badge-notifications" }, data.length)) : (React.createElement(React.Fragment, null))),
        data.length ? (React.createElement("ul", { className: "dropdown-menu dropdown-menu-end py-0" },
            React.createElement("li", { className: "dropdown-menu-header border-bottom" },
                React.createElement("div", { className: "dropdown-header d-flex align-items-center py-3" },
                    React.createElement("h5", { className: "text-body mb-0 me-auto" }, t("Notification")),
                    React.createElement("a", { href: "javascript:void(0)", className: "dropdown-notifications-all text-body", "data-bs-toggle": "tooltip", "data-bs-placement": "top" },
                        React.createElement("i", { className: "bx fs-4 bx-envelope-open" })))),
            React.createElement("li", { className: "dropdown-notifications-list scrollable-container" },
                React.createElement("ul", { className: "list-group list-group-flush" }, data.map(function (_, idx) { return (React.createElement("li", { key: idx, className: "list-group-item list-group-item-action dropdown-notifications-item" },
                    React.createElement("div", { className: "d-flex" },
                        React.createElement("div", { className: "flex-shrink-0 me-3" },
                            React.createElement("div", { className: "avatar" },
                                React.createElement("img", { src: "../../assets/img/avatars/1.png", alt: "", className: "w-px-40 h-auto rounded-circle" }))),
                        React.createElement("div", { className: "flex-grow-1" },
                            React.createElement("h6", { className: "mb-1" }, "Congratulation Lettie \uD83C\uDF89"),
                            React.createElement("p", { className: "mb-0" }, "Won the monthly best seller gold badge"),
                            React.createElement("small", { className: "text-muted" }, "1h ago")),
                        React.createElement("div", { className: "flex-shrink-0 dropdown-notifications-actions" },
                            React.createElement("a", { href: "javascript:void(0)", className: "dropdown-notifications-read" },
                                React.createElement("span", { className: "badge badge-dot" })),
                            React.createElement("a", { href: "javascript:void(0)", className: "dropdown-notifications-archive" },
                                React.createElement("span", { className: "bx bx-x" })))))); }))),
            data.length > 5 ? (React.createElement("li", { className: "dropdown-menu-footer border-top" },
                React.createElement("a", { href: "javascript:void(0);", className: "dropdown-item d-flex justify-content-center p-3" }, t("View all notifications")))) : (React.createElement(React.Fragment, null)))) : (React.createElement(React.Fragment, null))));
};
