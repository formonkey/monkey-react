"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericViewResumen = void 0;
var react_1 = __importStar(require("react"));
var react_i18next_1 = require("react-i18next");
var http_client_1 = require("../../http-client");
var monkey_conf_1 = require("../../monkey-conf");
var GenericViewResumen = function (_a) {
    var resume = _a.resume, meta = _a.meta;
    var t = (0, react_i18next_1.useTranslation)().t;
    var _b = (0, http_client_1.useHttpClient)(), api = _b.api, state = _b.state;
    var _c = (0, react_1.useState)([]), data = _c[0], setData = _c[1];
    var queries = (0, monkey_conf_1.useMonkeyConf)().queries;
    (0, react_1.useEffect)(function () {
        if (resume.endpoint) {
            api("".concat(resume.endpoint), "GET");
        }
        return function () {
            if (data.length) {
                setData([]);
            }
        };
    }, []);
    (0, react_1.useEffect)(function () {
        if (state.data) {
            setData(state.data[resume.data]);
        }
    }, [state.data]);
    return (react_1.default.createElement("div", { className: "card" },
        react_1.default.createElement("div", { className: "card-body" },
            react_1.default.createElement("div", { className: "d-flex align-items-start justify-content-between" },
                react_1.default.createElement("div", { className: "content-left" },
                    react_1.default.createElement("span", null, t(resume.title)),
                    react_1.default.createElement("div", { className: "d-flex align-items-end mt-2" },
                        react_1.default.createElement("h2", { className: "mb-0 me-2" }, data.length),
                        react_1.default.createElement("small", { className: "text-primary sm" },
                            "(",
                            ((data.length * 100) /
                                meta[queries.pagination.total]).toFixed(2),
                            "%)")),
                    react_1.default.createElement("small", null, t(resume.label))),
                react_1.default.createElement("span", { className: "badge bg-label-primary rounded p-2" },
                    react_1.default.createElement("i", { className: "bx ".concat(resume.icon, " bx-sm") }))))));
};
exports.GenericViewResumen = GenericViewResumen;
