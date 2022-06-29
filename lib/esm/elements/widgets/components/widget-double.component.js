import React from 'react';
import { WIDGET_ELEMENTS } from '../constants';
export var WidgetDouble = function (_a) {
    var conf = _a.conf;
    return (React.createElement("div", { className: "row" }, conf === null || conf === void 0 ? void 0 : conf.widgets.map(function (widget, idx) {
        var _a, _b;
        return (React.createElement("div", { className: "col-lg-12 col-xl-6", key: idx }, (_b = (_a = WIDGET_ELEMENTS)[widget.element]) === null || _b === void 0 ? void 0 : _b.call(_a, { conf: widget, idx: idx })));
    })));
};
