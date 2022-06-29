"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WIDGET_TIMELINE_PARSED = exports.WIDGET_INFO_PARSED = exports.WIDGET_ELEMENTS = void 0;
var react_1 = __importDefault(require("react"));
var components_1 = require("../components");
exports.WIDGET_ELEMENTS = {
    info: components_1.WidgetInfo,
    list: components_1.WidgetList,
    table: components_1.WidgetTable,
    double: components_1.WidgetDouble,
    timeline: components_1.WidgetTimeline,
};
exports.WIDGET_INFO_PARSED = {
    join: function (_a) {
        var keys = _a.keys, element = _a.element;
        return keys.map(function (key) { return element[key]; }).join(' ');
    },
    check: function (_a) {
        var key = _a.key, of = _a.of, value = _a.value, element = _a.element;
        if (of === 'array') {
            return element[key].includes(value) ? 'Yes' : 'No';
        }
        else {
            return element[key] === value ? 'Yes' : 'No';
        }
    },
    tags: function (_a) {
        var key = _a.key, element = _a.element;
        return element[key].map(function (tag, idx) { return (react_1.default.createElement("span", { key: idx, className: "badge bg-label-secondary" }, tag)); });
    },
    date: function (_a) {
        var key = _a.key, element = _a.element;
        return new Date(element[key]).toLocaleDateString();
    },
};
exports.WIDGET_TIMELINE_PARSED = {
    days: function (key, element) {
        var date = new Date(element[key]);
        var now = new Date();
        var diff = Math.abs(now.getTime() - date.getTime());
        var days = Math.ceil(diff / (1000 * 3600 * 24));
        return days > 1 ? "".concat(days, " Days ago") : 'Today';
    },
};
