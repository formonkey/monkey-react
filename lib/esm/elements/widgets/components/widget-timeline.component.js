import React from 'react';
import { WIDGET_TIMELINE_PARSED } from '../constants';
export var WidgetTimeline = function (_a) {
    var conf = _a.conf, t = _a.t;
    return (React.createElement("div", { className: "card card-action mb-4" },
        React.createElement("div", { className: "card-header align-items-center" },
            React.createElement("h5", { className: "card-action-title mb-0" },
                React.createElement("i", { className: "bx bx-list-ul me-2" }),
                t(conf.title)),
            React.createElement("div", { className: "card-action-element" })),
        React.createElement("div", { className: "card-body" },
            React.createElement("ul", { className: "timeline ms-2" },
                conf.data.slice(0, 8).map(function (item, i) {
                    var _a, _b, _c, _d, _e;
                    return (React.createElement("li", { className: "timeline-item timeline-item-transparent", key: i },
                        React.createElement("span", { className: "timeline-point timeline-point-primary" }),
                        React.createElement("div", { className: "timeline-event" },
                            React.createElement("div", { className: "timeline-header" },
                                React.createElement("h6", { className: "mb-0" }, item.action),
                                React.createElement("small", { className: "text-muted" }, ((_a = conf === null || conf === void 0 ? void 0 : conf.parsed) === null || _a === void 0 ? void 0 : _a.today) &&
                                    WIDGET_TIMELINE_PARSED[conf.parsed.today.type](conf.parsed.today.key, item))),
                            React.createElement("p", { className: "mb-0" }, "".concat((_c = (_b = item.action_arguments) === null || _b === void 0 ? void 0 : _b.resource) !== null && _c !== void 0 ? _c : '', " ").concat((_e = (_d = item.action_arguments) === null || _d === void 0 ? void 0 : _d.resource_id) !== null && _e !== void 0 ? _e : '')))));
                }),
                React.createElement("li", { className: "timeline-end-indicator" },
                    React.createElement("i", { className: "bx bx-check-circle" }))))));
};
