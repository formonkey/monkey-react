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
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useModal } from '../modals';
import { GenericForm } from '../generic-form';
import { useHttpClient } from '../http-client';
import { TABLE_ELEMENT_CUSTOM } from './constants';
export var Table = function (_a) {
    var _b;
    var _c, _d, _e, _f, _g, _h, _j, _k;
    var actions = _a.actions, filters = _a.filters, form = _a.form, config = _a.config, meta = _a.meta, queries = _a.queries, data = _a.data, refresh = _a.refresh;
    var t = useTranslation().t;
    var navigate = useNavigate();
    var _l = useModal(), open = _l.open, close = _l.close;
    var _m = useHttpClient(), api = _m.api, state = _m.state;
    var _o = useState([]), headers = _o[0], setHeaders = _o[1];
    var _p = useState({}), filter = _p[0], setFilter = _p[1];
    var _q = useState((_b = {},
        _b[queries.sort.key] = '',
        _b[queries.pagination.limit] = queries.limit,
        _b[queries.pagination.page] = queries.system === 'eve' ? 1 : 0,
        _b)), searches = _q[0], setSearches = _q[1];
    var handleCreateModal = function () {
        open(React.createElement(GenericForm, { config: form, close: close, action: actions.create, refresh: refresh }), {
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
            open(React.createElement(GenericForm, { config: form, close: close, action: action, values: element, refresh: refresh, endpoint: endpoint }), {
                title: form.title,
                subTitle: form.subTitle,
            });
        }
        else if (action.type === 'view') {
            // TODO: implement generic detail view for all entities
        }
    };
    useEffect(function () {
        setHeaders(config.model.filter(function (item) { return item.label; }));
        return function () {
            setHeaders([]);
        };
    }, [config]);
    useEffect(function () {
        if (!state.isLoading) {
            refresh(new URLSearchParams(searches).toString());
        }
    }, [state.isLoading]);
    useEffect(function () {
        refresh(new URLSearchParams(searches).toString());
    }, [searches]);
    useEffect(function () {
        if (Object.keys(filter).length) {
            if (queries.system === 'eve') {
                var where = "where={\"".concat(Object.keys(filter)[0], "\": {\"$regex\": \".*").concat(filter[Object.keys(filter)[0]], ".*\"}}");
                refresh("".concat(queries.pagination.page, "=1&").concat(queries.pagination.limit, "=").concat(queries.limit, "&").concat(where));
            }
        }
    }, [filter]);
    return (React.createElement("div", { className: "card-datatable table-responsive" },
        React.createElement("div", { id: "DataTables_Table_0_wrapper", className: "dataTables_wrapper dt-bootstrap5 no-footer" },
            React.createElement("div", { className: "row ms-2 me-3 p-4" },
                React.createElement("div", { className: "col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start gap-2" },
                    React.createElement("div", { className: "dataTables_length", id: "DataTables_Table_0_length" },
                        React.createElement("label", null,
                            React.createElement("select", { name: "DataTables_Table_0_length", "aria-controls": "DataTables_Table_0", className: "form-select" },
                                React.createElement("option", { value: "10" }, "10"),
                                React.createElement("option", { value: "25" }, "25"),
                                React.createElement("option", { value: "50" }, "50"),
                                React.createElement("option", { value: "100" }, "100")))),
                    (actions === null || actions === void 0 ? void 0 : actions.create) && (React.createElement("div", { className: "dt-action-buttons text-xl-end text-lg-start text-md-end text-start mt-md-0 mt-3" },
                        React.createElement("div", { className: "dt-buttons" },
                            React.createElement("button", { className: "dt-button btn btn-primary", tabIndex: 0, onClick: handleCreateModal, "aria-controls": "DataTables_Table_0", type: "button" },
                                React.createElement("span", null,
                                    React.createElement("i", { className: "bx bx-plus me-md-2" }),
                                    React.createElement("span", { className: "d-md-inline-block d-none" },
                                        t('Create'),
                                        " ",
                                        t(config.title)))),
                            ' ')))),
                React.createElement("div", { className: "col-12 col-md-6 d-flex align-items-center justify-content-end flex-column flex-md-row pe-3 gap-md-2" },
                    ((_c = filters === null || filters === void 0 ? void 0 : filters.fields) === null || _c === void 0 ? void 0 : _c.length) === 1 && (React.createElement("div", { id: "DataTables_Table_0_filter", className: "dataTables_filter" },
                        React.createElement("label", null,
                            React.createElement("input", { type: "search", className: "form-control", name: (_e = (_d = filters === null || filters === void 0 ? void 0 : filters.fields) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.name, "aria-controls": "DataTables_Table_0", value: filter === null || filter === void 0 ? void 0 : filter[(_g = (_f = filters === null || filters === void 0 ? void 0 : filters.fields) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.name], placeholder: t((_k = (_j = (_h = filters === null || filters === void 0 ? void 0 : filters.fields) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.placeholder) !== null && _k !== void 0 ? _k : 'Search...'), onChange: function (e) {
                                    var _a;
                                    setFilter((_a = {}, _a[e.target.name] = e.target.value, _a));
                                } })))),
                    React.createElement("div", { className: "invoice_status mb-3 mb-md-0" }))),
            React.createElement("table", { className: "invoice-list-table table border-top dataTable no-footer dtr-column", id: "DataTables_Table_0", role: "grid", "aria-describedby": "DataTables_Table_0_info" },
                React.createElement("thead", null,
                    React.createElement("tr", { role: "row" },
                        headers.map(function (element, idx) {
                            var _a, _b;
                            return (React.createElement("th", { key: idx, onClick: function () {
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
                        (actions === null || actions === void 0 ? void 0 : actions.edit) || (actions === null || actions === void 0 ? void 0 : actions.delete) || (actions === null || actions === void 0 ? void 0 : actions.show) ? (React.createElement("th", { className: "cell-fit sorting_disabled", rowSpan: 1, colSpan: 1, "aria-label": "Actions" },
                            React.createElement("div", { className: "d-flex align-items-center" }, t('Actions')))) : null)),
                React.createElement("tbody", null, data &&
                    (data === null || data === void 0 ? void 0 : data.map(function (element, idx) {
                        var _a, _b;
                        return (React.createElement("tr", { className: "odd", key: idx },
                            headers &&
                                (headers === null || headers === void 0 ? void 0 : headers.map(function (header, idx) {
                                    var _a;
                                    return (React.createElement("td", { key: idx, colSpan: 1, className: "".concat((header === null || header === void 0 ? void 0 : header.center) ? 'text-center' : '') }, (header === null || header === void 0 ? void 0 : header.custom)
                                        ? TABLE_ELEMENT_CUSTOM === null || TABLE_ELEMENT_CUSTOM === void 0 ? void 0 : TABLE_ELEMENT_CUSTOM[(_a = header === null || header === void 0 ? void 0 : header.custom) === null || _a === void 0 ? void 0 : _a.type](header === null || header === void 0 ? void 0 : header.custom, element === null || element === void 0 ? void 0 : element[header === null || header === void 0 ? void 0 : header.name], element)
                                        : element === null || element === void 0 ? void 0 : element[header === null || header === void 0 ? void 0 : header.name]));
                                })),
                            (actions === null || actions === void 0 ? void 0 : actions.edit) || (actions === null || actions === void 0 ? void 0 : actions.delete) || (actions === null || actions === void 0 ? void 0 : actions.show) ? (React.createElement("td", { colSpan: 1, className: "dataTables_empty text-center" },
                                React.createElement("div", { className: "d-flex align-items-center" },
                                    (actions === null || actions === void 0 ? void 0 : actions.show) && (React.createElement("span", { "data-bs-toggle": "tooltip", className: "text-body cursor-pointer", "data-bs-placement": "top", title: "", "data-bs-original-title": "Preview Invoice", "aria-label": "Preview Invoice" },
                                        React.createElement("i", { className: "bx bx-show mx-1" }))),
                                    (actions === null || actions === void 0 ? void 0 : actions.edit) || (actions === null || actions === void 0 ? void 0 : actions.delete) ? (React.createElement("div", { className: "dropdown" },
                                        React.createElement("a", { href: "javascript:;", className: "btn dropdown-toggle hide-arrow text-body p-0", "data-bs-toggle": "dropdown" },
                                            React.createElement("i", { className: "bx bx-dots-vertical-rounded" })),
                                        React.createElement("div", { className: "dropdown-menu dropdown-menu-end cursor-pointer" },
                                            (actions === null || actions === void 0 ? void 0 : actions.edit) ? (React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "dropdown-item", onClick: function () {
                                                        return handleAction(actions.edit, element);
                                                    } }, t('Edit')),
                                                (actions === null || actions === void 0 ? void 0 : actions.delete) &&
                                                    !((_a = actions === null || actions === void 0 ? void 0 : actions.custom) === null || _a === void 0 ? void 0 : _a.length) ? (React.createElement("div", { className: "dropdown-divider" })) : null)) : null,
                                            (actions === null || actions === void 0 ? void 0 : actions.custom)
                                                ? (_b = actions === null || actions === void 0 ? void 0 : actions.custom) === null || _b === void 0 ? void 0 : _b.map(function (action, idx) { return (React.createElement("div", { key: idx },
                                                    React.createElement("span", { className: "dropdown-item  cursor-pointer", onClick: function () {
                                                            var path = action.path;
                                                            Object.keys(action.replace).forEach(function (key) {
                                                                path =
                                                                    path.replace(key, element[action
                                                                        .replace[key]]);
                                                            });
                                                            navigate(path);
                                                        } }, t(action.label)),
                                                    (actions === null || actions === void 0 ? void 0 : actions.delete) ? (React.createElement("div", { className: "dropdown-divider" })) : null)); })
                                                : null,
                                            (actions === null || actions === void 0 ? void 0 : actions.delete) ? (React.createElement("span", { className: "dropdown-item delete-record text-danger  cursor-pointer", onClick: function () {
                                                    return handleAction(actions.delete, element);
                                                } }, t('Delete'))) : null))) : null))) : null));
                    })))),
            React.createElement("div", { className: "row mx-2 pt-4" },
                React.createElement("div", { className: "col-sm-12 col-md-6" },
                    React.createElement("div", { className: "dataTables_info", id: "DataTables_Table_0_info", role: "status", "aria-live": "polite" },
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
                React.createElement("div", { className: "col-sm-12 col-md-6" },
                    React.createElement("div", { className: "dataTables_paginate paging_simple_numbers", id: "DataTables_Table_0_paginate" },
                        React.createElement("ul", { className: "pagination justify-content-end" },
                            React.createElement("li", { className: "paginate_button page-item previous disabled", id: "DataTables_Table_0_previous" },
                                React.createElement("a", { href: "#", "aria-controls": "DataTables_Table_0", "data-dt-idx": "0", tabIndex: 0, className: "page-link" }, t('Previous'))),
                            React.createElement("li", { className: "paginate_button page-item next disabled", id: "DataTables_Table_0_next" },
                                React.createElement("a", { href: "#", "aria-controls": "DataTables_Table_0", "data-dt-idx": "1", tabIndex: 0, className: "page-link" }, t('Next'))))))))));
};
