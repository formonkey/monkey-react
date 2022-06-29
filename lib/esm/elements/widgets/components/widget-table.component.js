import React from 'react';
export var WidgetTable = function (_a) {
    var t = _a.t, conf = _a.conf;
    console.log('Widget Table', conf);
    return (React.createElement("div", { className: "card mb-4" },
        React.createElement("div", { className: "card-datatable table-responsive" },
            React.createElement("div", { id: "DataTables_Table_0_wrapper", className: "dataTables_wrapper dt-bootstrap5 no-footer" },
                React.createElement("div", { className: "card-header pb-0 pt-sm-0" },
                    React.createElement("div", { className: "head-label text-center" },
                        React.createElement("h5", { className: "card-title mb-0" }, t(conf.title))),
                    React.createElement("div", { className: "d-flex justify-content-center justify-content-md-end" },
                        React.createElement("div", { id: "DataTables_Table_0_filter", className: "dataTables_filter" },
                            React.createElement("label", null,
                                t('Search'),
                                ":",
                                React.createElement("input", { type: "search", className: "form-control", placeholder: "", "aria-controls": "DataTables_Table_0" }))))),
                React.createElement("table", { className: "datatables-projects border-top table dataTable no-footer dtr-column", id: "DataTables_Table_0", role: "grid", "aria-describedby": "DataTables_Table_0_info" },
                    React.createElement("thead", null,
                        React.createElement("tr", { role: "row" }, conf.columns.map(function (col, idx) { return (React.createElement("th", { key: idx, className: "", "aria-controls": "DataTables_Table_0" }, t(col.label))); }))),
                    React.createElement("tbody", null, conf.data && conf.data.length ? (conf.data.map(function (element, idx) { return (React.createElement("tr", { key: "row-".concat(idx) }, conf.columns.map(function (col, idx) { return (React.createElement("td", { key: "col-".concat(idx) }, element[col.key])); }))); })) : (React.createElement("td", { valign: "top", colSpan: 6, className: "dataTables_empty" }, "Loading...")))),
                React.createElement("div", { className: "row mx-2" },
                    React.createElement("div", { className: "col-sm-12 col-md-6" }),
                    React.createElement("div", { className: "col-sm-12 col-md-6" },
                        React.createElement("div", { className: "dataTables_paginate paging_simple_numbers", id: "DataTables_Table_0_paginate" },
                            React.createElement("ul", { className: "pagination" },
                                React.createElement("li", { className: "paginate_button page-item previous disabled", id: "DataTables_Table_0_previous" },
                                    React.createElement("a", { href: "#", "aria-controls": "DataTables_Table_0", "data-dt-idx": 0, tabIndex: 0, className: "page-link" }, "Previous")),
                                React.createElement("li", { className: "paginate_button page-item next disabled", id: "DataTables_Table_0_next" },
                                    React.createElement("a", { href: "#", "aria-controls": "DataTables_Table_0", "data-dt-idx": 1, tabIndex: 0, className: "page-link" }, "Next"))))))))));
};
