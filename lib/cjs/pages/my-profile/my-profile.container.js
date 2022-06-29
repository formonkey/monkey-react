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
exports.MyProfile = void 0;
var react_1 = __importStar(require("react"));
var react_i18next_1 = require("react-i18next");
var use_file_upload_1 = require("use-file-upload");
var elements_1 = require("../../elements");
var avatars_1 = require("../../elements/avatars");
var MyProfile = function () {
    var _a, _b, _c;
    var conf = (0, elements_1.useMonkeyConf)().myProfile;
    var get = (0, elements_1.useStore)().get;
    var t = (0, react_i18next_1.useTranslation)().t;
    var _d = (0, react_1.useState)({}), data = _d[0], setData = _d[1];
    var _e = (0, use_file_upload_1.useFileUpload)(), file = _e[0], selectFile = _e[1];
    var _f = (0, react_1.useState)((_a = conf.tabs[0]) === null || _a === void 0 ? void 0 : _a.name), current = _f[0], setCurrent = _f[1];
    var _g = (0, react_1.useState)(conf.tabs[0]), widgetConf = _g[0], setWidgetConf = _g[1];
    (0, react_1.useEffect)(function () {
        var profile = get(elements_1.StoreKeys.Profile);
        if (profile) {
            setData(profile);
        }
    }, []);
    (0, react_1.useEffect)(function () {
        console.log("My profile file", file);
    }, [file]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h4", { className: "fw-bold py-3 mb-4" },
            react_1.default.createElement("span", { className: "text-muted fw-light" }, t(conf.title))),
        react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement("div", { className: "col-12" },
                react_1.default.createElement("div", { className: "card mb-4" },
                    react_1.default.createElement("div", { className: "user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-3" },
                        react_1.default.createElement("div", { className: "flex-shrink-0 mt-n2 mx-sm-0 mx-auto" },
                            react_1.default.createElement("div", { className: "d-block h-auto ms-0 ms-sm-4 rounded user-profile-img mt-sm-4" },
                                react_1.default.createElement(avatars_1.Avatar, { name: data === null || data === void 0 ? void 0 : data[conf.name], lastName: data === null || data === void 0 ? void 0 : data[conf.lastName], size: "xl", url: file === null || file === void 0 ? void 0 : file.source }))),
                        react_1.default.createElement("div", { className: "flex-grow-1 mt-3 mt-sm-3" },
                            react_1.default.createElement("div", { className: "d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4" },
                                react_1.default.createElement("div", { className: "user-profile-info" },
                                    react_1.default.createElement("h4", null, "".concat(data[conf.name], " ").concat(data[conf.lastName])),
                                    react_1.default.createElement("div", { className: "list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2" }, (_b = conf.actions) === null || _b === void 0 ? void 0 : _b.map(function (action, idx) {
                                        return action.type === "upload" ? (react_1.default.createElement("button", { key: idx, type: "button", onClick: function () {
                                                return selectFile(action.accept, action.multiple);
                                            }, className: "btn btn-sm btn-outline-secondary" },
                                            react_1.default.createElement("span", { className: "tf-icons bx bx-image" }),
                                            "\u00A0",
                                            " ",
                                            t(action.label))) : null;
                                    }))))))))),
        conf.tabs.length > 1 ? (react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement("div", { className: "col-md-12" },
                react_1.default.createElement("ul", { className: "nav nav-pills flex-column flex-sm-row mb-4" }, (_c = conf.tabs) === null || _c === void 0 ? void 0 : _c.map(function (tab, idx) { return (react_1.default.createElement("li", { key: idx, className: "nav-item", onClick: function () {
                        setWidgetConf(tab);
                        setCurrent(tab.name);
                    } },
                    react_1.default.createElement("span", { className: "nav-link cursor-pointer ".concat(current === tab.name ? "active" : "") },
                        react_1.default.createElement("i", { className: "bx bx-".concat(tab.icon) }),
                        t(tab.label)))); }))))) : null,
        (widgetConf === null || widgetConf === void 0 ? void 0 : widgetConf.widgets) && (react_1.default.createElement(elements_1.Widgets, { id: data[conf.id], conf: widgetConf }))));
};
exports.MyProfile = MyProfile;
