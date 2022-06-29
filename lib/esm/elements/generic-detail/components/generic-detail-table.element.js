import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHttpClient } from '../../http-client';
import { useMonkeyConf } from '../../monkey-conf';
export var GenericDetailTable = function (_a) {
    var _b;
    var key = _a.key, item = _a.item, params = _a.params;
    var t = useTranslation().t;
    var queries = useMonkeyConf().queries;
    var _c = useState([]), data = _c[0], setData = _c[1];
    var _d = useState({}), meta = _d[0], setMeta = _d[1];
    var _e = useHttpClient(), api = _e.api, state = _e.state;
    var _f = useState((_b = {},
        _b[queries.sort.key] = '',
        _b[queries.filter.key] = '',
        _b[queries.pagination.limit] = queries.limit,
        _b[queries.pagination.page] = queries.system === 'eve' ? 1 : 0,
        _b)), searches = _f[0], setSearches = _f[1];
    var handleChange = function (e) {
        var _a;
        if (queries.system === 'eve') {
            var where_1 = 'where={"$or":[';
            Object.keys(item.columns).forEach(function (column) {
                where_1 += "{\"".concat(column, "\":").concat(item.columns[column].type !== 'number'
                    ? "{\"$regex\":\".*".concat(e.target.value, ".*\"}")
                    : +e.target.value, "},");
            });
            where_1 = "".concat(where_1.slice(0, -1), "]}");
            setSearches((_a = {}, _a[queries.filter.key] = where_1, _a));
        }
    };
    useEffect(function () {
        var path = item.endpoint;
        Object.keys(item.replace).forEach(function (key) {
            path = path.replace(key, params[item.replace[key]]);
        });
        api("".concat(path, "?").concat(searches[queries.filter.key]), item.method);
    }, [searches]);
    useEffect(function () {
        if (state.data && !state.isLoading) {
            setData(state.data[item.data]);
            setMeta(state.data[queries.pagination.key]);
        }
    }, [state]);
    return (React.createElement("div", { className: "card mb-4", key: key },
        React.createElement("div", { className: "table-responsive mb-3" },
            React.createElement("div", { id: "DataTables_Table_0_wrapper", className: "dataTables_wrapper dt-bootstrap5 no-footer" },
                React.createElement("div", { className: "d-flex justify-content-between align-items-center flex-column flex-sm-row mx-4 row" },
                    React.createElement("div", { className: "col-sm-4 col-12 d-flex align-items-center justify-content-sm-start justify-content-center" },
                        React.createElement("h5", { className: "" }, item.title)),
                    React.createElement("div", { className: "col-sm-8 col-12 d-flex align-items-center justify-content-sm-end justify-content-center" },
                        React.createElement("div", { id: "DataTables_Table_0_filter", className: "dataTables_filter" },
                            React.createElement("label", null,
                                React.createElement("input", { type: "search", className: "form-control", placeholder: "Search...", onChange: handleChange, "aria-controls": "DataTables_Table_0" }))),
                        React.createElement("div", { className: "dt-buttons" },
                            ' ',
                            React.createElement("button", { className: "dt-button add-new btn btn-primary mx-3", tabIndex: 0, "aria-controls": "DataTables_Table_0", type: "button", "data-bs-toggle": "offcanvas", "data-bs-target": "#offcanvasAddUser" },
                                React.createElement("span", null,
                                    React.createElement("i", { className: "bx bx-plus me-0 me-sm-2" }),
                                    React.createElement("span", { className: "d-none d-lg-inline-block" },
                                        "Add ",
                                        item.label))),
                            ' '))),
                React.createElement("table", { className: "table datatable-project border-top dataTable no-footer dtr-column", id: "DataTables_Table_0", role: "grid", "aria-describedby": "DataTables_Table_0_info" },
                    React.createElement("thead", null,
                        React.createElement("tr", { role: "row" }, Object.keys(item.columns).map(function (key, idx) { return (React.createElement("th", { key: idx, className: "text-nowrap sorting_disabled", "aria-label": "Total Task" }, item.columns[key].label)); }))),
                    React.createElement("tbody", null, data.map(function (e, idx) { return (React.createElement("tr", { key: idx, className: "odd" }, Object.keys(item.columns).map(function (key) { return (React.createElement("td", { valign: "top" }, e[key])); }))); }))),
                React.createElement("div", { className: "d-flex justify-content-between mx-4 row" },
                    React.createElement("div", { className: "col-sm-12 col-md-6" },
                        React.createElement("div", { className: "dataTables_info", id: "DataTables_Table_0_info", role: "status", "aria-live": "polite" },
                            t('Showing'),
                            " ",
                            searches[queries.pagination.page],
                            " to",
                            ' ',
                            queries.limit * searches[queries.pagination.page] || queries.limit,
                            ' ',
                            "of ",
                            meta[queries.pagination.total],
                            " entries")),
                    React.createElement("div", { className: "col-sm-12 col-md-6" },
                        React.createElement("div", { className: "dataTables_paginate paging_simple_numbers", id: "DataTables_Table_0_paginate" },
                            React.createElement("ul", { className: "pagination" },
                                React.createElement("li", { className: "paginate_button page-item previous disabled", id: "DataTables_Table_0_previous" },
                                    React.createElement("a", { href: "#", "aria-controls": "DataTables_Table_0", "data-dt-idx": "0", className: "page-link" }, t('Previous'))),
                                React.createElement("li", { className: "paginate_button page-item next disabled", id: "DataTables_Table_0_next" },
                                    React.createElement("a", { href: "#", "aria-controls": "DataTables_Table_0", "data-dt-idx": "1", className: "page-link" }, t('Next')))))))))));
};
