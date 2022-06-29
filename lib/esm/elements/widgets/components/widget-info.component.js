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
import React from 'react';
import { WIDGET_INFO_PARSED } from '../constants';
export var WidgetInfo = function (_a) {
    var _b;
    var t = _a.t, conf = _a.conf, idx = _a.idx;
    return (React.createElement("div", { className: "card mb-4", key: "widget-info-".concat(idx) },
        React.createElement("div", { className: "card-body" }, conf.data && conf.sections
            ? (_b = conf.sections) === null || _b === void 0 ? void 0 : _b.map(function (section, idx) { return (React.createElement("div", { key: idx },
                React.createElement("small", { className: "text-muted text-uppercase" }, t(section.title)),
                React.createElement("ul", { className: "list-unstyled mb-4 mt-3" }, section.columns.map(function (column, childIndex) {
                    var _a, _b, _c;
                    return ((_a = column === null || column === void 0 ? void 0 : column.parsed) === null || _a === void 0 ? void 0 : _a.type) !== 'tags' ? (React.createElement("li", { className: "d-flex align-items-center mb-3", key: "widget-".concat(section.title, "-").concat(childIndex) },
                        React.createElement("i", { className: "bx bx-".concat(column.icon) }),
                        React.createElement("span", { className: "fw-semibold mx-2" },
                            t(column.label),
                            ":"),
                        React.createElement("span", null, column.parsed
                            ? (_b = WIDGET_INFO_PARSED === null || WIDGET_INFO_PARSED === void 0 ? void 0 : WIDGET_INFO_PARSED[column.parsed.type]) === null || _b === void 0 ? void 0 : _b.call(WIDGET_INFO_PARSED, __assign(__assign({}, column.parsed), { element: conf.data }))
                            : t(conf.data[column.key])))) : (React.createElement("div", { className: "list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2" }, (_c = WIDGET_INFO_PARSED === null || WIDGET_INFO_PARSED === void 0 ? void 0 : WIDGET_INFO_PARSED[column.parsed.type]) === null || _c === void 0 ? void 0 : _c.call(WIDGET_INFO_PARSED, __assign(__assign({}, column.parsed), { element: conf.data }))));
                })))); })
            : null)));
};
