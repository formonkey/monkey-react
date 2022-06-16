"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var react_1 = __importDefault(require("react"));
var Footer = function () {
    var date = new Date().getFullYear();
    return (react_1.default.createElement("footer", { className: "content-footer footer bg-footer-theme" },
        react_1.default.createElement("div", { className: "container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column" },
            react_1.default.createElement("div", { className: "mb-2 mb-md-0" },
                "\u00A9",
                date,
                " By",
                react_1.default.createElement("a", { href: "https://www.xtremis.com/", target: "_blank", className: "footer-link fw-bolder" }, "Xtremis")),
            react_1.default.createElement("div", null))));
};
exports.Footer = Footer;
