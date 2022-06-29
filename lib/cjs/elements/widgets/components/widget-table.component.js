"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetTable = void 0;
var react_1 = __importDefault(require("react"));
var WidgetTable = function (_a) {
    var t = _a.t, conf = _a.conf;
    console.log('Widget Table', conf);
    return (react_1.default.createElement("div", { className: "card mb-4" },
        react_1.default.createElement("div", { className: "card-datatable table-responsive" },
            react_1.default.createElement("div", { id: "DataTables_Table_0_wrapper", className: "dataTables_wrapper dt-bootstrap5 no-footer" },
                react_1.default.createElement("div", { className: "card-header pb-0 pt-sm-0" },
                    react_1.default.createElement("div", { className: "head-label text-center" },
                        react_1.default.createElement("h5", { className: "card-title mb-0" }, t(conf.title))),
                    react_1.default.createElement("div", { className: "d-flex justify-content-center justify-content-md-end" },
                        react_1.default.createElement("div", { id: "DataTables_Table_0_filter", className: "dataTables_filter" },
                            react_1.default.createElement("label", null,
                                t('Search'),
                                ":",
                                react_1.default.createElement("input", { type: "search", className: "form-control", placeholder: "", "aria-controls": "DataTables_Table_0" }))))),
                react_1.default.createElement("table", { className: "datatables-projects border-top table dataTable no-footer dtr-column", id: "DataTables_Table_0", role: "grid", "aria-describedby": "DataTables_Table_0_info" },
                    react_1.default.createElement("thead", null,
                        react_1.default.createElement("tr", { role: "row" }, conf.columns.map(function (col, idx) { return (react_1.default.createElement("th", { key: idx, className: "", "aria-controls": "DataTables_Table_0" }, t(col.label))); }))),
                    react_1.default.createElement("tbody", null, conf.data && conf.data.length ? (conf.data.map(function (element, idx) { return (react_1.default.createElement("tr", { key: "row-".concat(idx) }, conf.columns.map(function (col, idx) { return (react_1.default.createElement("td", { key: "col-".concat(idx) }, element[col.key])); }))); })) : (react_1.default.createElement("td", { valign: "top", colSpan: 6, className: "dataTables_empty" }, "Loading...")))),
                react_1.default.createElement("div", { className: "row mx-2" },
                    react_1.default.createElement("div", { className: "col-sm-12 col-md-6" }),
                    react_1.default.createElement("div", { className: "col-sm-12 col-md-6" },
                        react_1.default.createElement("div", { className: "dataTables_paginate paging_simple_numbers", id: "DataTables_Table_0_paginate" },
                            react_1.default.createElement("ul", { className: "pagination" },
                                react_1.default.createElement("li", { className: "paginate_button page-item previous disabled", id: "DataTables_Table_0_previous" },
                                    react_1.default.createElement("a", { href: "#", "aria-controls": "DataTables_Table_0", "data-dt-idx": 0, tabIndex: 0, className: "page-link" }, "Previous")),
                                react_1.default.createElement("li", { className: "paginate_button page-item next disabled", id: "DataTables_Table_0_next" },
                                    react_1.default.createElement("a", { href: "#", "aria-controls": "DataTables_Table_0", "data-dt-idx": 1, tabIndex: 0, className: "page-link" }, "Next"))))))))));
};
exports.WidgetTable = WidgetTable;
