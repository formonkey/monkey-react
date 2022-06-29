"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetDouble = void 0;
var react_1 = __importDefault(require("react"));
var constants_1 = require("../constants");
var WidgetDouble = function (_a) {
    var conf = _a.conf;
    return (react_1.default.createElement("div", { className: "row" }, conf === null || conf === void 0 ? void 0 : conf.widgets.map(function (widget, idx) {
        var _a, _b;
        return (react_1.default.createElement("div", { className: "col-lg-12 col-xl-6", key: idx }, (_b = (_a = constants_1.WIDGET_ELEMENTS)[widget.element]) === null || _b === void 0 ? void 0 : _b.call(_a, { conf: widget, idx: idx })));
    })));
};
exports.WidgetDouble = WidgetDouble;
