import React from 'react';

export const WidgetTable = ({ t, conf }: any) => {
    console.log('Widget Table', conf);
    return (
        <div className="card mb-4">
            <div className="card-datatable table-responsive">
                <div
                    id="DataTables_Table_0_wrapper"
                    className="dataTables_wrapper dt-bootstrap5 no-footer"
                >
                    <div className="card-header pb-0 pt-sm-0">
                        <div className="head-label text-center">
                            <h5 className="card-title mb-0">{t(conf.title)}</h5>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-end">
                            <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                <label>
                                    {t('Search')}:
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder=""
                                        aria-controls="DataTables_Table_0"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <table
                        className="datatables-projects border-top table dataTable no-footer dtr-column"
                        id="DataTables_Table_0"
                        role="grid"
                        aria-describedby="DataTables_Table_0_info"
                    >
                        <thead>
                            <tr role="row">
                                {conf.columns.map((col: any, idx: number) => (
                                    <th key={idx} className="" aria-controls="DataTables_Table_0">
                                        {t(col.label)}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {conf.data && conf.data.length ? (
                                conf.data.map((element: any, idx: number) => (
                                    <tr key={`row-${idx}`}>
                                        {conf.columns.map((col: any, idx: number) => (
                                            <td key={`col-${idx}`}>{element[col.key]}</td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <td valign="top" colSpan={6} className="dataTables_empty">
                                    Loading...
                                </td>
                            )}
                        </tbody>
                    </table>
                    <div className="row mx-2">
                        <div className="col-sm-12 col-md-6"></div>
                        <div className="col-sm-12 col-md-6">
                            <div
                                className="dataTables_paginate paging_simple_numbers"
                                id="DataTables_Table_0_paginate"
                            >
                                <ul className="pagination">
                                    <li
                                        className="paginate_button page-item previous disabled"
                                        id="DataTables_Table_0_previous"
                                    >
                                        <a
                                            href="#"
                                            aria-controls="DataTables_Table_0"
                                            data-dt-idx={0}
                                            tabIndex={0}
                                            className="page-link"
                                        >
                                            Previous
                                        </a>
                                    </li>
                                    <li
                                        className="paginate_button page-item next disabled"
                                        id="DataTables_Table_0_next"
                                    >
                                        <a
                                            href="#"
                                            aria-controls="DataTables_Table_0"
                                            data-dt-idx={1}
                                            tabIndex={0}
                                            className="page-link"
                                        >
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
