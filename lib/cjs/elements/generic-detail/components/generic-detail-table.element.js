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
exports.GenericDetailTable = void 0;
var react_1 = __importStar(require("react"));
var react_i18next_1 = require("react-i18next");
var http_client_1 = require("../../http-client");
var monkey_conf_1 = require("../../monkey-conf");
var GenericDetailTable = function (_a) {
    var _b;
    var key = _a.key, item = _a.item, params = _a.params;
    var t = (0, react_i18next_1.useTranslation)().t;
    var queries = (0, monkey_conf_1.useMonkeyConf)().queries;
    var _c = (0, react_1.useState)([]), data = _c[0], setData = _c[1];
    var _d = (0, react_1.useState)({}), meta = _d[0], setMeta = _d[1];
    var _e = (0, http_client_1.useHttpClient)(), api = _e.api, state = _e.state;
    var _f = (0, react_1.useState)((_b = {},
        _b[queries.sort.key] = "",
        _b[queries.filter.key] = "",
        _b[queries.pagination.limit] = queries.limit,
        _b[queries.pagination.page] = queries.system === "eve" ? 1 : 0,
        _b)), searches = _f[0], setSearches = _f[1];
    var handleChange = function (e) {
        var _a;
        if (queries.system === "eve") {
            var where_1 = 'where={"$or":[';
            Object.keys(item.columns).forEach(function (column) {
                where_1 += "{\"".concat(column, "\":").concat(item.columns[column].type !== "number"
                    ? "{\"$regex\":\".*".concat(e.target.value, ".*\"}")
                    : +e.target.value, "},");
            });
            where_1 = "".concat(where_1.slice(0, -1), "]}");
            setSearches((_a = {}, _a[queries.filter.key] = where_1, _a));
        }
    };
    (0, react_1.useEffect)(function () {
        var path = item.endpoint;
        Object.keys(item.replace).forEach(function (key) {
            path = path.replace(key, params[item.replace[key]]);
        });
        api("".concat(path, "?").concat(searches[queries.filter.key]), item.method);
    }, [searches]);
    (0, react_1.useEffect)(function () {
        if (state.data && !state.isLoading) {
            setData(state.data[item.data]);
            setMeta(state.data[queries.pagination.key]);
        }
    }, [state]);
    return (react_1.default.createElement("div", { className: "card mb-4", key: key },
        react_1.default.createElement("div", { className: "table-responsive mb-3" },
            react_1.default.createElement("div", { id: "DataTables_Table_0_wrapper", className: "dataTables_wrapper dt-bootstrap5 no-footer" },
                react_1.default.createElement("div", { className: "d-flex justify-content-between align-items-center flex-column flex-sm-row mx-4 row" },
                    react_1.default.createElement("div", { className: "col-sm-4 col-12 d-flex align-items-center justify-content-sm-start justify-content-center" },
                        react_1.default.createElement("h5", { className: "" }, item.title)),
                    react_1.default.createElement("div", { className: "col-sm-8 col-12 d-flex align-items-center justify-content-sm-end justify-content-center" },
                        react_1.default.createElement("div", { id: "DataTables_Table_0_filter", className: "dataTables_filter" },
                            react_1.default.createElement("label", null,
                                react_1.default.createElement("input", { type: "search", className: "form-control", placeholder: "Search...", onChange: handleChange, "aria-controls": "DataTables_Table_0" }))))),
                react_1.default.createElement("table", { className: "table datatable-project border-top dataTable no-footer dtr-column", id: "DataTables_Table_0", role: "grid", "aria-describedby": "DataTables_Table_0_info" },
                    react_1.default.createElement("thead", null,
                        react_1.default.createElement("tr", { role: "row" }, Object.keys(item.columns).map(function (key, idx) { return (react_1.default.createElement("th", { key: idx, className: "text-nowrap sorting_disabled", "aria-label": "Total Task" }, item.columns[key].label)); }))),
                    react_1.default.createElement("tbody", null, data.map(function (e, idx) { return (react_1.default.createElement("tr", { key: idx, className: "odd" }, Object.keys(item.columns).map(function (key) { return (react_1.default.createElement("td", { valign: "top" }, e[key])); }))); }))),
                react_1.default.createElement("div", { className: "d-flex justify-content-between mx-4 row" },
                    react_1.default.createElement("div", { className: "col-sm-12 col-md-6" },
                        react_1.default.createElement("div", { className: "dataTables_info", id: "DataTables_Table_0_info", role: "status", "aria-live": "polite" },
                            t("Showing"),
                            " ",
                            searches[queries.pagination.page],
                            " to",
                            " ",
                            queries.limit *
                                searches[queries.pagination.page] ||
                                queries.limit,
                            " ",
                            "of ",
                            meta[queries.pagination.total],
                            " entries")),
                    react_1.default.createElement("div", { className: "col-sm-12 col-md-6" },
                        react_1.default.createElement("div", { className: "dataTables_paginate paging_simple_numbers", id: "DataTables_Table_0_paginate" },
                            react_1.default.createElement("ul", { className: "pagination" },
                                react_1.default.createElement("li", { className: "paginate_button page-item previous disabled", id: "DataTables_Table_0_previous" },
                                    react_1.default.createElement("a", { href: "#", "aria-controls": "DataTables_Table_0", "data-dt-idx": "0", className: "page-link" }, t("Previous"))),
                                react_1.default.createElement("li", { className: "paginate_button page-item next disabled", id: "DataTables_Table_0_next" },
                                    react_1.default.createElement("a", { href: "#", "aria-controls": "DataTables_Table_0", "data-dt-idx": "1", className: "page-link" }, t("Next")))))))))));
};
exports.GenericDetailTable = GenericDetailTable;
