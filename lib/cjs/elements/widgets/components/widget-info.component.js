"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetInfo = void 0;
var react_1 = __importDefault(require("react"));
var constants_1 = require("../constants");
var WidgetInfo = function (_a) {
    var _b;
    var t = _a.t, conf = _a.conf, idx = _a.idx;
    return (react_1.default.createElement("div", { className: "card mb-4", key: "widget-info-".concat(idx) },
        react_1.default.createElement("div", { className: "card-body" }, conf.data && conf.sections
            ? (_b = conf.sections) === null || _b === void 0 ? void 0 : _b.map(function (section, idx) { return (react_1.default.createElement("div", { key: idx },
                react_1.default.createElement("small", { className: "text-muted text-uppercase" }, t(section.title)),
                react_1.default.createElement("ul", { className: "list-unstyled mb-4 mt-3" }, section.columns.map(function (column, childIndex) {
                    var _a, _b, _c;
                    return ((_a = column === null || column === void 0 ? void 0 : column.parsed) === null || _a === void 0 ? void 0 : _a.type) !== 'tags' ? (react_1.default.createElement("li", { className: "d-flex align-items-center mb-3", key: "widget-".concat(section.title, "-").concat(childIndex) },
                        react_1.default.createElement("i", { className: "bx bx-".concat(column.icon) }),
                        react_1.default.createElement("span", { className: "fw-semibold mx-2" },
                            t(column.label),
                            ":"),
                        react_1.default.createElement("span", null, column.parsed
                            ? (_b = constants_1.WIDGET_INFO_PARSED === null || constants_1.WIDGET_INFO_PARSED === void 0 ? void 0 : constants_1.WIDGET_INFO_PARSED[column.parsed.type]) === null || _b === void 0 ? void 0 : _b.call(constants_1.WIDGET_INFO_PARSED, __assign(__assign({}, column.parsed), { element: conf.data }))
                            : t(conf.data[column.key])))) : (react_1.default.createElement("div", { className: "list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2" }, (_c = constants_1.WIDGET_INFO_PARSED === null || constants_1.WIDGET_INFO_PARSED === void 0 ? void 0 : constants_1.WIDGET_INFO_PARSED[column.parsed.type]) === null || _c === void 0 ? void 0 : _c.call(constants_1.WIDGET_INFO_PARSED, __assign(__assign({}, column.parsed), { element: conf.data }))));
                })))); })
            : null)));
};
exports.WidgetInfo = WidgetInfo;
