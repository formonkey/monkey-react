"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetTimeline = void 0;
var react_1 = __importDefault(require("react"));
var constants_1 = require("../constants");
var WidgetTimeline = function (_a) {
    var conf = _a.conf, t = _a.t;
    return (react_1.default.createElement("div", { className: "card card-action mb-4" },
        react_1.default.createElement("div", { className: "card-header align-items-center" },
            react_1.default.createElement("h5", { className: "card-action-title mb-0" },
                react_1.default.createElement("i", { className: "bx bx-list-ul me-2" }),
                t(conf.title)),
            react_1.default.createElement("div", { className: "card-action-element" })),
        react_1.default.createElement("div", { className: "card-body" },
            react_1.default.createElement("ul", { className: "timeline ms-2" },
                conf.data.slice(0, 8).map(function (item, i) {
                    var _a, _b, _c, _d, _e;
                    return (react_1.default.createElement("li", { className: "timeline-item timeline-item-transparent", key: i },
                        react_1.default.createElement("span", { className: "timeline-point timeline-point-primary" }),
                        react_1.default.createElement("div", { className: "timeline-event" },
                            react_1.default.createElement("div", { className: "timeline-header" },
                                react_1.default.createElement("h6", { className: "mb-0" }, item.action),
                                react_1.default.createElement("small", { className: "text-muted" }, ((_a = conf === null || conf === void 0 ? void 0 : conf.parsed) === null || _a === void 0 ? void 0 : _a.today) &&
                                    constants_1.WIDGET_TIMELINE_PARSED[conf.parsed.today.type](conf.parsed.today.key, item))),
                            react_1.default.createElement("p", { className: "mb-0" }, "".concat((_c = (_b = item.action_arguments) === null || _b === void 0 ? void 0 : _b.resource) !== null && _c !== void 0 ? _c : '', " ").concat((_e = (_d = item.action_arguments) === null || _d === void 0 ? void 0 : _d.resource_id) !== null && _e !== void 0 ? _e : '')))));
                }),
                react_1.default.createElement("li", { className: "timeline-end-indicator" },
                    react_1.default.createElement("i", { className: "bx bx-check-circle" }))))));
};
exports.WidgetTimeline = WidgetTimeline;
