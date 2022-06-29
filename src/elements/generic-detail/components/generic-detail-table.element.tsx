import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useHttpClient } from '../../http-client';
import { useMonkeyConf } from '../../monkey-conf';

export const GenericDetailTable = ({ key, item, params }: any) => {
    const { t } = useTranslation();
    const { queries } = useMonkeyConf();
    const [data, setData] = useState([]);
    const [meta, setMeta] = useState<any>({});
    const { api, state } = useHttpClient();

    const [searches, setSearches] = useState<any>({
        [queries.sort.key]: '',
        [queries.filter.key]: '',
        [queries.pagination.limit]: queries.limit,
        [queries.pagination.page]: queries.system === 'eve' ? 1 : 0,
    });

    const handleChange = (e: any) => {
        if (queries.system === 'eve') {
            let where = 'where={"$or":[';

            Object.keys(item.columns).forEach((column: any) => {
                where += `{"${column}":${
                    item.columns[column].type !== 'number'
                        ? `{"$regex":".*${e.target.value}.*"}`
                        : +e.target.value
                }},`;
            });

            where = `${where.slice(0, -1)}]}`;

            setSearches({ [queries.filter.key]: where });
        }
    };

    useEffect(() => {
        let path = item.endpoint;

        Object.keys(item.replace).forEach((key: string) => {
            path = path.replace(key, params[item.replace[key]]);
        });

        api(`${path}?${searches[queries.filter.key]}`, item.method);
    }, [searches]);

    useEffect(() => {
        if (state.data && !state.isLoading) {
            setData(state.data[item.data]);
            setMeta(state.data[queries.pagination.key]);
        }
    }, [state]);

    return (
        <div className="card mb-4" key={key}>
            <div className="table-responsive mb-3">
                <div
                    id="DataTables_Table_0_wrapper"
                    className="dataTables_wrapper dt-bootstrap5 no-footer"
                >
                    <div className="d-flex justify-content-between align-items-center flex-column flex-sm-row mx-4 row">
                        <div className="col-sm-4 col-12 d-flex align-items-center justify-content-sm-start justify-content-center">
                            <h5 className="">{item.title}</h5>
                        </div>
                        <div className="col-sm-8 col-12 d-flex align-items-center justify-content-sm-end justify-content-center">
                            <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                <label>
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder="Search..."
                                        onChange={handleChange}
                                        aria-controls="DataTables_Table_0"
                                    />
                                </label>
                            </div>
                            <div className="dt-buttons">
                                {' '}
                                <button
                                    className="dt-button add-new btn btn-primary mx-3"
                                    tabIndex={0}
                                    aria-controls="DataTables_Table_0"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasAddUser"
                                >
                                    <span>
                                        <i className="bx bx-plus me-0 me-sm-2" />
                                        <span className="d-none d-lg-inline-block">
                                            Add {item.label}
                                        </span>
                                    </span>
                                </button>{' '}
                            </div>
                        </div>
                    </div>
                    <table
                        className="table datatable-project border-top dataTable no-footer dtr-column"
                        id="DataTables_Table_0"
                        role="grid"
                        aria-describedby="DataTables_Table_0_info"
                    >
                        <thead>
                            <tr role="row">
                                {Object.keys(item.columns).map((key: string, idx: number) => (
                                    <th
                                        key={idx}
                                        className="text-nowrap sorting_disabled"
                                        aria-label="Total Task"
                                    >
                                        {item.columns[key].label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((e: any, idx: number) => (
                                <tr key={idx} className="odd">
                                    {Object.keys(item.columns).map((key: string) => (
                                        <td valign="top">{e[key]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-between mx-4 row">
                        <div className="col-sm-12 col-md-6">
                            <div
                                className="dataTables_info"
                                id="DataTables_Table_0_info"
                                role="status"
                                aria-live="polite"
                            >
                                {t('Showing')} {searches[queries.pagination.page]} to{' '}
                                {queries.limit * searches[queries.pagination.page] || queries.limit}{' '}
                                of {meta[queries.pagination.total]} entries
                            </div>
                        </div>
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
                                            data-dt-idx="0"
                                            className="page-link"
                                        >
                                            {t('Previous')}
                                        </a>
                                    </li>
                                    <li
                                        className="paginate_button page-item next disabled"
                                        id="DataTables_Table_0_next"
                                    >
                                        <a
                                            href="#"
                                            aria-controls="DataTables_Table_0"
                                            data-dt-idx="1"
                                            className="page-link"
                                        >
                                            {t('Next')}
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
