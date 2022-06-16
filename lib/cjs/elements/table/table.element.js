"use strict";
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
exports.Table = void 0;
var react_1 = __importStar(require("react"));
var react_i18next_1 = require("react-i18next");
var modals_1 = require("../modals");
var generic_form_1 = require("../generic-form");
var http_client_1 = require("../http-client");
var constants_1 = require("./constants");
var Table = function (_a) {
    var _b;
    var actions = _a.actions, form = _a.form, config = _a.config, meta = _a.meta, queries = _a.queries, data = _a.data, refresh = _a.refresh;
    var t = (0, react_i18next_1.useTranslation)().t;
    var _c = (0, modals_1.useModal)(), open = _c.open, close = _c.close;
    var _d = (0, http_client_1.useHttpClient)(), api = _d.api, state = _d.state;
    var _e = (0, react_1.useState)([]), headers = _e[0], setHeaders = _e[1];
    var _f = (0, react_1.useState)((_b = {},
        _b[queries.sort.key] = '',
        _b[queries.pagination.limit] = queries.limit,
        _b[queries.pagination.page] = queries.system === 'eve' ? 1 : 0,
        _b)), searches = _f[0], setSearches = _f[1];
    var handleCreateModal = function () {
        open(react_1.default.createElement(generic_form_1.GenericForm, { config: form, close: close, action: actions.create, refresh: refresh }), {
            title: form.title,
            subTitle: form.subTitle,
        });
    };
    var onSort = function (key, order) {
        var _a, _b;
        if (queries.system === 'eve') {
            setSearches(__assign(__assign({}, searches), (_a = {}, _a[queries.pagination.page] = 1, _a[queries.sort.key] = "".concat(queries.sort[order]).concat(key), _a)));
        }
        else if (queries.system === 'django') {
            setSearches(__assign(__assign({}, searches), (_b = {}, _b[queries.pagination.page] = 0, _b[queries.sort.key] = "".concat(queries.sort[order]).concat(key), _b)));
        }
    };
    var handleAction = function (action, element) {
        var endpoint = action.endpoint;
        if (action.replace) {
            Object.keys(action.replace).forEach(function (key) {
                endpoint = endpoint.replace(key, element[action.replace[key]]);
            });
        }
        if (action.type === 'request') {
            api(endpoint, action.method);
        }
        else if (action.type === 'modal') {
            open(react_1.default.createElement(generic_form_1.GenericForm, { config: form, close: close, action: action, values: element, refresh: refresh, endpoint: endpoint }), {
                title: form.title,
                subTitle: form.subTitle,
            });
        }
        else if (action.type === 'view') {
            // TODO: implement generic detail view for all entities
        }
    };
    (0, react_1.useEffect)(function () {
        setHeaders(config.model.filter(function (item) { return item.label; }));
    }, [config]);
    (0, react_1.useEffect)(function () {
        if (!state.isLoading) {
            refresh(new URLSearchParams(searches).toString());
        }
    }, [state.isLoading]);
    (0, react_1.useEffect)(function () {
        refresh(new URLSearchParams(searches).toString());
    }, [searches]);
    return (react_1.default.createElement("div", { className: "card-datatable table-responsive" },
        react_1.default.createElement("div", { id: "DataTables_Table_0_wrapper", className: "dataTables_wrapper dt-bootstrap5 no-footer" },
            react_1.default.createElement("div", { className: "row ms-2 me-3 p-4" },
                react_1.default.createElement("div", { className: "col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start gap-2" },
                    react_1.default.createElement("div", { className: "dataTables_length", id: "DataTables_Table_0_length" },
                        react_1.default.createElement("label", null,
                            react_1.default.createElement("select", { name: "DataTables_Table_0_length", "aria-controls": "DataTables_Table_0", className: "form-select" },
                                react_1.default.createElement("option", { value: "10" }, "10"),
                                react_1.default.createElement("option", { value: "25" }, "25"),
                                react_1.default.createElement("option", { value: "50" }, "50"),
                                react_1.default.createElement("option", { value: "100" }, "100")))),
                    (actions === null || actions === void 0 ? void 0 : actions.create) && (react_1.default.createElement("div", { className: "dt-action-buttons text-xl-end text-lg-start text-md-end text-start mt-md-0 mt-3" },
                        react_1.default.createElement("div", { className: "dt-buttons" },
                            react_1.default.createElement("button", { className: "dt-button btn btn-primary", tabIndex: 0, onClick: handleCreateModal, "aria-controls": "DataTables_Table_0", type: "button" },
                                react_1.default.createElement("span", null,
                                    react_1.default.createElement("i", { className: "bx bx-plus me-md-2" }),
                                    react_1.default.createElement("span", { className: "d-md-inline-block d-none" },
                                        t('Create'),
                                        " ",
                                        t(config.title)))),
                            ' ')))),
                react_1.default.createElement("div", { className: "col-12 col-md-6 d-flex align-items-center justify-content-end flex-column flex-md-row pe-3 gap-md-2" },
                    react_1.default.createElement("div", { id: "DataTables_Table_0_filter", className: "dataTables_filter" },
                        react_1.default.createElement("label", null,
                            react_1.default.createElement("input", { type: "search", className: "form-control", placeholder: t('Search...'), "aria-controls": "DataTables_Table_0" }))),
                    react_1.default.createElement("div", { className: "invoice_status mb-3 mb-md-0" }))),
            react_1.default.createElement("table", { className: "invoice-list-table table border-top dataTable no-footer dtr-column", id: "DataTables_Table_0", role: "grid", "aria-describedby": "DataTables_Table_0_info" },
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", { role: "row" },
                        headers.map(function (element, idx) {
                            var _a, _b;
                            return (react_1.default.createElement("th", { key: idx, onClick: function () {
                                    return element.sorting
                                        ? onSort(element === null || element === void 0 ? void 0 : element.name, searches[queries.sort.key] ===
                                            "".concat(queries.sort.desc).concat(element === null || element === void 0 ? void 0 : element.name)
                                            ? 'asc'
                                            : 'desc')
                                        : null;
                                }, className: "".concat(element.sorting ? 'sorting' : '', " ").concat(element.sorting
                                    ? ((_a = searches[queries.sort.key]) === null || _a === void 0 ? void 0 : _a.match(element === null || element === void 0 ? void 0 : element.name))
                                        ? "sorting_".concat(((_b = searches[queries.sort.key]) === null || _b === void 0 ? void 0 : _b.match(/^-/))
                                            ? 'asc'
                                            : 'desc')
                                        : ''
                                    : '', " ").concat(element.center ? 'text-center' : ''), tabIndex: 0, "aria-controls": "DataTables_Table_0", rowSpan: 1, colSpan: 1 }, t(element.label)));
                        }),
                        (actions === null || actions === void 0 ? void 0 : actions.edit) || (actions === null || actions === void 0 ? void 0 : actions.delete) || (actions === null || actions === void 0 ? void 0 : actions.show) ? (react_1.default.createElement("th", { className: "cell-fit sorting_disabled", rowSpan: 1, colSpan: 1, "aria-label": "Actions" },
                            react_1.default.createElement("div", { className: "d-flex align-items-center" }, t('Actions')))) : null)),
                react_1.default.createElement("tbody", null, data.map(function (element, idx) { return (react_1.default.createElement("tr", { className: "odd", key: idx },
                    headers &&
                        headers.map(function (header, idx) { return (react_1.default.createElement("td", { key: idx, colSpan: 1, className: "".concat(header.center ? 'text-center' : '') }, header.custom
                            ? constants_1.TABLE_ELEMENT_CUSTOM === null || constants_1.TABLE_ELEMENT_CUSTOM === void 0 ? void 0 : constants_1.TABLE_ELEMENT_CUSTOM[header.custom.type](header.custom, element === null || element === void 0 ? void 0 : element[header === null || header === void 0 ? void 0 : header.name], element)
                            : element === null || element === void 0 ? void 0 : element[header === null || header === void 0 ? void 0 : header.name])); }),
                    (actions === null || actions === void 0 ? void 0 : actions.edit) || (actions === null || actions === void 0 ? void 0 : actions.delete) || (actions === null || actions === void 0 ? void 0 : actions.show) ? (react_1.default.createElement("td", { colSpan: 1, className: "dataTables_empty text-center" },
                        react_1.default.createElement("div", { className: "d-flex align-items-center" },
                            (actions === null || actions === void 0 ? void 0 : actions.show) && (react_1.default.createElement("span", { "data-bs-toggle": "tooltip", className: "text-body cursor-pointer", "data-bs-placement": "top", title: "", "data-bs-original-title": "Preview Invoice", "aria-label": "Preview Invoice" },
                                react_1.default.createElement("i", { className: "bx bx-show mx-1" }))),
                            (actions === null || actions === void 0 ? void 0 : actions.edit) || (actions === null || actions === void 0 ? void 0 : actions.delete) ? (react_1.default.createElement("div", { className: "dropdown" },
                                react_1.default.createElement("a", { href: "javascript:;", className: "btn dropdown-toggle hide-arrow text-body p-0", "data-bs-toggle": "dropdown" },
                                    react_1.default.createElement("i", { className: "bx bx-dots-vertical-rounded" })),
                                react_1.default.createElement("div", { className: "dropdown-menu dropdown-menu-end" },
                                    (actions === null || actions === void 0 ? void 0 : actions.edit) ? (react_1.default.createElement(react_1.default.Fragment, null,
                                        react_1.default.createElement("span", { className: "dropdown-item", onClick: function () {
                                                return handleAction(actions.edit, element);
                                            } }, t('Edit')),
                                        (actions === null || actions === void 0 ? void 0 : actions.delete) ? (react_1.default.createElement("div", { className: "dropdown-divider" })) : null)) : null,
                                    (actions === null || actions === void 0 ? void 0 : actions.delete) ? (react_1.default.createElement("span", { className: "dropdown-item delete-record text-danger", onClick: function () {
                                            return handleAction(actions.delete, element);
                                        } }, t('Delete'))) : null))) : null))) : null)); }))),
            react_1.default.createElement("div", { className: "row mx-2 pt-4" },
                react_1.default.createElement("div", { className: "col-sm-12 col-md-6" },
                    react_1.default.createElement("div", { className: "dataTables_info", id: "DataTables_Table_0_info", role: "status", "aria-live": "polite" },
                        t('Showing'),
                        ' ',
                        +searches[queries.pagination.page] ||
                            searches[queries.pagination.page] + 1,
                        ' ',
                        t('to'),
                        ' ',
                        searches[queries.pagination.page]
                            ? queries.limit * searches[queries.pagination.page]
                            : queries.limit,
                        ' ',
                        t('of'),
                        " ",
                        meta[queries.pagination.total],
                        " ",
                        t('entries'))),
                react_1.default.createElement("div", { className: "col-sm-12 col-md-6" },
                    react_1.default.createElement("div", { className: "dataTables_paginate paging_simple_numbers", id: "DataTables_Table_0_paginate" },
                        react_1.default.createElement("ul", { className: "pagination justify-content-end" },
                            react_1.default.createElement("li", { className: "paginate_button page-item previous disabled", id: "DataTables_Table_0_previous" },
                                react_1.default.createElement("a", { href: "#", "aria-controls": "DataTables_Table_0", "data-dt-idx": "0", tabIndex: 0, className: "page-link" }, t('Previous'))),
                            react_1.default.createElement("li", { className: "paginate_button page-item next disabled", id: "DataTables_Table_0_next" },
                                react_1.default.createElement("a", { href: "#", "aria-controls": "DataTables_Table_0", "data-dt-idx": "1", tabIndex: 0, className: "page-link" }, t('Next'))))))))));
};
exports.Table = Table;
