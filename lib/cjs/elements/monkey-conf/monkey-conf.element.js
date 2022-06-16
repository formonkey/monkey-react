"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonkeyConf = void 0;
var react_1 = __importDefault(require("react"));
var store_1 = require("../store");
var modals_1 = require("../modals");
var http_client_1 = require("../http-client");
var MonkeyConf = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(modals_1.Modal, null,
        react_1.default.createElement(store_1.Store, null,
            react_1.default.createElement(http_client_1.HttpClient, null, children))));
};
exports.MonkeyConf = MonkeyConf;
