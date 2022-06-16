"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoData = void 0;
var react_1 = __importDefault(require("react"));
var react_i18next_1 = require("react-i18next");
var NoData = function () {
    var t = (0, react_i18next_1.useTranslation)().t;
    return (react_1.default.createElement("div", { className: "layout-demo-wrapper" },
        react_1.default.createElement("div", { className: "layout-demo-info" },
            react_1.default.createElement("h4", null, t('Error 404')),
            react_1.default.createElement("p", null, t('This page was not found, you should try another menu option')))));
};
exports.NoData = NoData;
