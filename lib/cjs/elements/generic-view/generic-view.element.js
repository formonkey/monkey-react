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
exports.GenericView = void 0;
var react_1 = __importStar(require("react"));
var table_1 = require("../table");
var http_client_1 = require("../http-client");
var monkey_conf_1 = require("../monkey-conf");
var react_i18next_1 = require("react-i18next");
var generic_form_1 = require("../generic-form");
var components_1 = require("./components");
var GenericView = function (props) {
    var _a;
    var _b = (0, react_1.useState)([]), data = _b[0], setData = _b[1];
    var _c = (0, react_1.useState)({}), meta = _c[0], setMeta = _c[1];
    var _d = (0, http_client_1.useHttpClient)(), api = _d.api, state = _d.state;
    var queries = (0, monkey_conf_1.useMonkeyConf)().queries;
    var t = (0, react_i18next_1.useTranslation)().t;
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if ((_a = props.config) === null || _a === void 0 ? void 0 : _a.endpoint) {
            api("".concat(props.config.endpoint, "?").concat(queries.pagination.page, "=").concat(queries.system === 'eve' ? 1 : 0, "&").concat(queries.pagination.limit, "=").concat(queries.limit, "&").concat((_b = props.config.query) !== null && _b !== void 0 ? _b : ''), 'GET');
        }
        return function () {
            if (data.length) {
                setData([]);
                setMeta({});
            }
        };
    }, [props]);
    (0, react_1.useEffect)(function () {
        if (state.data) {
            setData(state.data[props.data]);
            setMeta(queries.pagination.key ? state.data[queries.pagination.key] : state.data);
        }
    }, [state.data]);
    return props.config ? (react_1.default.createElement("div", null,
        react_1.default.createElement("h4", { className: "fw-bold py-3 mb-4" },
            react_1.default.createElement("span", { className: "text-muted fw-light" },
                t(props.config.title),
                " /"),
            " ",
            t('List')),
        props.resume && (react_1.default.createElement("div", { className: "row g-4 mb-4" }, props.resume.map(function (resume) { return (react_1.default.createElement("div", { className: "col-sm-6 col-xl-".concat(12 / props.resume.length) },
            react_1.default.createElement(components_1.GenericViewResumen, { resume: resume, meta: meta }))); }))),
        react_1.default.createElement("div", { className: "card" },
            props.filters && (react_1.default.createElement("div", { className: "card-header border-bottom row row ms-2 me-3 p-4" },
                react_1.default.createElement("h5", { className: "card-title" }, t((_a = props.filters.title) !== null && _a !== void 0 ? _a : 'Search Filters')),
                react_1.default.createElement("div", { className: "pr-2" },
                    react_1.default.createElement(generic_form_1.GenericForm, { isFilter: true, action: {}, close: function () { return null; }, refresh: function () { return null; }, config: props.filters, filter: function (searches) {
                            var _a;
                            if (searches === void 0) { searches = "".concat(queries.pagination.page, "=").concat(queries.system === 'eve' ? 1 : 0, "&").concat(queries.pagination.limit, "=").concat(queries.limit); }
                            return api("".concat(props.config.endpoint, "?").concat(searches, "&").concat((_a = props.config.query) !== null && _a !== void 0 ? _a : ''), 'GET');
                        } }),
                    ","))),
            react_1.default.createElement(table_1.Table, { data: data, meta: meta, queries: queries, form: props.form, config: props.config, actions: props.actions, refresh: function (searches) {
                    var _a;
                    if (searches === void 0) { searches = "".concat(queries.pagination.page, "=").concat(queries.system === 'eve' ? 1 : 0, "&").concat(queries.pagination.limit, "=").concat(queries.limit); }
                    return api("".concat(props.config.endpoint, "?").concat(searches, "&").concat((_a = props.config.query) !== null && _a !== void 0 ? _a : ''), 'GET');
                } })))) : (react_1.default.createElement(react_1.default.Fragment, null));
};
exports.GenericView = GenericView;
