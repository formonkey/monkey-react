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
var GenericView = function (props) {
    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];
    var _b = (0, react_1.useState)({}), meta = _b[0], setMeta = _b[1];
    var _c = (0, http_client_1.useHttpClient)(), api = _c.api, state = _c.state;
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
        react_1.default.createElement("div", { className: "card" },
            react_1.default.createElement(table_1.Table, { data: data, meta: meta, queries: queries, form: props.form, config: props.config, actions: props.actions, refresh: function (searches) {
                    var _a;
                    if (searches === void 0) { searches = "".concat(queries.pagination.page, "=").concat(queries.system === 'eve' ? 1 : 0, "&").concat(queries.pagination.limit, "=").concat(queries.limit); }
                    return api("".concat(props.config.endpoint, "?").concat(searches, "&").concat((_a = props.config.query) !== null && _a !== void 0 ? _a : ''), 'GET');
                } })))) : (react_1.default.createElement(react_1.default.Fragment, null));
};
exports.GenericView = GenericView;
