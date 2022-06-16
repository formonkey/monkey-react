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
exports.Modal = void 0;
var react_1 = __importStar(require("react"));
var react_i18next_1 = require("react-i18next");
var contexts_1 = require("./contexts");
var Modal = function (_a) {
    var children = _a.children;
    var t = (0, react_i18next_1.useTranslation)().t;
    var _b = (0, react_1.useState)({}), config = _b[0], setConfig = _b[1];
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var _d = (0, react_1.useState)(react_1.default.createElement(react_1.default.Fragment, null)), Component = _d[0], setComponent = _d[1];
    var handleOpen = function (Element, config) {
        setComponent(Element);
        setConfig(config);
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
        setConfig({});
        setComponent(react_1.default.createElement(react_1.default.Fragment, null));
    };
    return (react_1.default.createElement(contexts_1.ModalProvider, { value: { close: handleClose, open: handleOpen } },
        children,
        react_1.default.createElement("div", { className: "modal fade ".concat(open ? 'show' : ''), tabIndex: -1, style: { display: open ? 'block' : 'none', paddingLeft: '0px' }, "aria-modal": "true", role: "dialog" },
            react_1.default.createElement("div", { className: "modal-dialog modal-lg modal-simple modal-edit-user" },
                react_1.default.createElement("div", { className: "modal-content p-3 p-md-5" },
                    react_1.default.createElement("div", { className: "modal-body" },
                        react_1.default.createElement("button", { type: "button", onClick: handleClose, className: "btn-close" }),
                        react_1.default.createElement("div", { className: "text-center mb-4" },
                            react_1.default.createElement("h3", null, t(config.title)),
                            react_1.default.createElement("p", null, t(config.subTitle))),
                        Component)))),
        open ? react_1.default.createElement("div", { className: "modal-backdrop fade show", onClick: handleClose }) : react_1.default.createElement(react_1.default.Fragment, null)));
};
exports.Modal = Modal;
