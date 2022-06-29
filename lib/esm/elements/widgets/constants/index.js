import React from 'react';
import { WidgetDouble, WidgetInfo, WidgetList, WidgetTable, WidgetTimeline } from '../components';
export var WIDGET_ELEMENTS = {
    info: WidgetInfo,
    list: WidgetList,
    table: WidgetTable,
    double: WidgetDouble,
    timeline: WidgetTimeline,
};
export var WIDGET_INFO_PARSED = {
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
        return element[key].map(function (tag, idx) { return (React.createElement("span", { key: idx, className: "badge bg-label-secondary" }, tag)); });
    },
    date: function (_a) {
        var key = _a.key, element = _a.element;
        return new Date(element[key]).toLocaleDateString();
    },
};
export var WIDGET_TIMELINE_PARSED = {
    days: function (key, element) {
        var date = new Date(element[key]);
        var now = new Date();
        var diff = Math.abs(now.getTime() - date.getTime());
        var days = Math.ceil(diff / (1000 * 3600 * 24));
        return days > 1 ? "".concat(days, " Days ago") : 'Today';
    },
};
