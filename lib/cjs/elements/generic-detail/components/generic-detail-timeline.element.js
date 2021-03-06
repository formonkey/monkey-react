"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericDetailTimeline = void 0;
var react_1 = __importDefault(require("react"));
var GenericDetailTimeline = function () {
    return (react_1.default.createElement("div", { className: "card mb-4" },
        react_1.default.createElement("h5", { className: "card-header" }, "User Activity Timeline"),
        react_1.default.createElement("div", { className: "card-body" },
            react_1.default.createElement("ul", { className: "timeline" },
                react_1.default.createElement("li", { className: "timeline-item timeline-item-transparent" },
                    react_1.default.createElement("span", { className: "timeline-point timeline-point-primary" }),
                    react_1.default.createElement("div", { className: "timeline-event" },
                        react_1.default.createElement("div", { className: "timeline-header mb-1" },
                            react_1.default.createElement("h6", { className: "mb-0" }, "12 Invoices have been paid"),
                            react_1.default.createElement("small", { className: "text-muted" }, "12 min ago")),
                        react_1.default.createElement("p", { className: "mb-2" }, "Invoices have been paid to the company"),
                        react_1.default.createElement("div", { className: "d-flex" },
                            react_1.default.createElement("a", { href: "javascript:void(0)", className: "me-3" },
                                react_1.default.createElement("img", { src: "../../assets/img/icons/misc/pdf.png", alt: "PDF image", width: "15", className: "me-2" }),
                                react_1.default.createElement("span", { className: "fw-bold text-body" }, "invoices.pdf"))))),
                react_1.default.createElement("li", { className: "timeline-item timeline-item-transparent" },
                    react_1.default.createElement("span", { className: "timeline-point timeline-point-warning" }),
                    react_1.default.createElement("div", { className: "timeline-event" },
                        react_1.default.createElement("div", { className: "timeline-header mb-1" },
                            react_1.default.createElement("h6", { className: "mb-0" }, "Client Meeting"),
                            react_1.default.createElement("small", { className: "text-muted" }, "45 min ago")),
                        react_1.default.createElement("p", { className: "mb-2" }, "Project meeting with john @10:15am"),
                        react_1.default.createElement("div", { className: "d-flex flex-wrap" },
                            react_1.default.createElement("div", { className: "avatar me-3" },
                                react_1.default.createElement("img", { src: "../../assets/img/avatars/3.png", alt: "Avatar", className: "rounded-circle" })),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("h6", { className: "mb-0" }, "Lester McCarthy (Client)"),
                                react_1.default.createElement("span", { className: "text-muted" }, "CEO of ThemeSelection"))))),
                react_1.default.createElement("li", { className: "timeline-item timeline-item-transparent" },
                    react_1.default.createElement("span", { className: "timeline-point timeline-point-info" }),
                    react_1.default.createElement("div", { className: "timeline-event" },
                        react_1.default.createElement("div", { className: "timeline-header mb-1" },
                            react_1.default.createElement("h6", { className: "mb-0" }, "Create a new project for client"),
                            react_1.default.createElement("small", { className: "text-muted" }, "2 Day Ago")),
                        react_1.default.createElement("p", { className: "mb-2" }, "5 team members in a project"),
                        react_1.default.createElement("div", { className: "d-flex align-items-center avatar-group" },
                            react_1.default.createElement("div", { className: "avatar pull-up", "data-bs-toggle": "tooltip", "data-popup": "tooltip-custom", "data-bs-placement": "top", title: "", "data-bs-original-title": "Vinnie Mostowy" },
                                react_1.default.createElement("img", { src: "../../assets/img/avatars/5.png", alt: "Avatar", className: "rounded-circle" })),
                            react_1.default.createElement("div", { className: "avatar pull-up", "data-bs-toggle": "tooltip", "data-popup": "tooltip-custom", "data-bs-placement": "top", title: "", "data-bs-original-title": "Marrie Patty" },
                                react_1.default.createElement("img", { src: "../../assets/img/avatars/12.png", alt: "Avatar", className: "rounded-circle" })),
                            react_1.default.createElement("div", { className: "avatar pull-up", "data-bs-toggle": "tooltip", "data-popup": "tooltip-custom", "data-bs-placement": "top", title: "", "data-bs-original-title": "Jimmy Jackson" },
                                react_1.default.createElement("img", { src: "../../assets/img/avatars/9.png", alt: "Avatar", className: "rounded-circle" })),
                            react_1.default.createElement("div", { className: "avatar pull-up", "data-bs-toggle": "tooltip", "data-popup": "tooltip-custom", "data-bs-placement": "top", title: "", "data-bs-original-title": "Kristine Gill" },
                                react_1.default.createElement("img", { src: "../../assets/img/avatars/6.png", alt: "Avatar", className: "rounded-circle" })),
                            react_1.default.createElement("div", { className: "avatar pull-up", "data-bs-toggle": "tooltip", "data-popup": "tooltip-custom", "data-bs-placement": "top", title: "", "data-bs-original-title": "Nelson Wilson" },
                                react_1.default.createElement("img", { src: "../../assets/img/avatars/14.png", alt: "Avatar", className: "rounded-circle" }))))),
                react_1.default.createElement("li", { className: "timeline-item timeline-item-transparent" },
                    react_1.default.createElement("span", { className: "timeline-point timeline-point-success" }),
                    react_1.default.createElement("div", { className: "timeline-event" },
                        react_1.default.createElement("div", { className: "timeline-header mb-1" },
                            react_1.default.createElement("h6", { className: "mb-0" }, "Design Review"),
                            react_1.default.createElement("small", { className: "text-muted" }, "5 days Ago")),
                        react_1.default.createElement("p", { className: "mb-0" }, "Weekly review of freshly prepared design for our new app."))),
                react_1.default.createElement("li", { className: "timeline-end-indicator" },
                    react_1.default.createElement("i", { className: "bx bx-check-circle" }))))));
};
exports.GenericDetailTimeline = GenericDetailTimeline;
