import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { useModal } from '../modals';
import { GenericForm } from '../generic-form';
import { useHttpClient } from '../http-client';
import { TABLE_ELEMENT_CUSTOM } from './constants';

export const Table = ({ actions, filters, form, config, meta, queries, data, refresh }: any) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { open, close } = useModal();
    const { api, state } = useHttpClient();
    const [headers, setHeaders] = useState([]);
    const [filter, setFilter] = useState<any>({});

    const [searches, setSearches] = useState<any>({
        [queries.sort.key]: '',
        [queries.pagination.limit]: queries.limit,
        [queries.pagination.page]: queries.system === 'eve' ? 1 : 0,
    });

    const handleCreateModal = () => {
        open(
            <GenericForm config={form} close={close} action={actions.create} refresh={refresh} />,
            {
                title: form.title,
                subTitle: form.subTitle,
            }
        );
    };

    const onSort = (key: string, order: string) => {
        if (queries.system === 'eve') {
            setSearches({
                ...searches,
                [queries.pagination.page]: 1,
                [queries.sort.key]: `${queries.sort[order]}${key}`,
            });
        } else if (queries.system === 'django') {
            setSearches({
                ...searches,
                [queries.pagination.page]: 0,
                [queries.sort.key]: `${queries.sort[order]}${key}`,
            });
        }
    };

    const handleAction = (action: any, element: any) => {
        let endpoint = action.endpoint;

        if (action.replace) {
            Object.keys(action.replace).forEach((key: string) => {
                endpoint = endpoint.replace(key, element[action.replace[key]]);
            });
        }

        if (action.type === 'request') {
            api(endpoint, action.method);
        } else if (action.type === 'modal') {
            open(
                <GenericForm
                    config={form}
                    close={close}
                    action={action}
                    values={element}
                    refresh={refresh}
                    endpoint={endpoint}
                />,
                {
                    title: form.title,
                    subTitle: form.subTitle,
                }
            );
        } else if (action.type === 'view') {
            // TODO: implement generic detail view for all entities
        }
    };

    useEffect(() => {
        setHeaders(config.model.filter((item: any) => item.label));

        return () => {
            setHeaders([]);
        };
    }, [config]);

    useEffect(() => {
        if (!state.isLoading) {
            refresh(new URLSearchParams(searches).toString());
        }
    }, [state.isLoading]);

    useEffect(() => {
        refresh(new URLSearchParams(searches).toString());
    }, [searches]);

    useEffect(() => {
        if (Object.keys(filter).length) {
            if (queries.system === 'eve') {
                const where = `where={"${Object.keys(filter)[0]}": {"$regex": ".*${
                    filter[Object.keys(filter)[0]]
                }.*"}}`;

                refresh(
                    `${queries.pagination.page}=1&${queries.pagination.limit}=${queries.limit}&${where}`
                );
            }
        }
    }, [filter]);

    return (
        <div className="card-datatable table-responsive">
            <div
                id="DataTables_Table_0_wrapper"
                className="dataTables_wrapper dt-bootstrap5 no-footer"
            >
                <div className="row ms-2 me-3 p-4">
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                        <div className="dataTables_length" id="DataTables_Table_0_length">
                            <label>
                                <select
                                    name="DataTables_Table_0_length"
                                    aria-controls="DataTables_Table_0"
                                    className="form-select"
                                >
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                            </label>
                        </div>
                        {actions?.create && (
                            <div className="dt-action-buttons text-xl-end text-lg-start text-md-end text-start mt-md-0 mt-3">
                                <div className="dt-buttons">
                                    <button
                                        className="dt-button btn btn-primary"
                                        tabIndex={0}
                                        onClick={handleCreateModal}
                                        aria-controls="DataTables_Table_0"
                                        type="button"
                                    >
                                        <span>
                                            <i className="bx bx-plus me-md-2"></i>
                                            <span className="d-md-inline-block d-none">
                                                {t('Create')} {t(config.title)}
                                            </span>
                                        </span>
                                    </button>{' '}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-end flex-column flex-md-row pe-3 gap-md-2">
                        {filters?.fields?.length === 1 && (
                            <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                <label>
                                    <input
                                        type="search"
                                        className="form-control"
                                        name={filters?.fields?.[0]?.name}
                                        aria-controls="DataTables_Table_0"
                                        value={filter?.[filters?.fields?.[0]?.name]}
                                        placeholder={t(
                                            filters?.fields?.[0]?.placeholder ?? 'Search...'
                                        )}
                                        onChange={(e) => {
                                            setFilter({ [e.target.name]: e.target.value });
                                        }}
                                    />
                                </label>
                            </div>
                        )}
                        <div className="invoice_status mb-3 mb-md-0" />
                    </div>
                </div>
                <table
                    className="invoice-list-table table border-top dataTable no-footer dtr-column"
                    id="DataTables_Table_0"
                    role="grid"
                    aria-describedby="DataTables_Table_0_info"
                >
                    <thead>
                        <tr role="row">
                            {headers.map((element: any, idx: number) => (
                                <th
                                    key={idx}
                                    onClick={() =>
                                        element.sorting
                                            ? onSort(
                                                  element?.name,
                                                  searches[queries.sort.key] ===
                                                      `${queries.sort.desc}${element?.name}`
                                                      ? 'asc'
                                                      : 'desc'
                                              )
                                            : null
                                    }
                                    className={`${element.sorting ? 'sorting' : ''} ${
                                        element.sorting
                                            ? searches[queries.sort.key]?.match(element?.name)
                                                ? `sorting_${
                                                      searches[queries.sort.key]?.match(/^-/)
                                                          ? 'asc'
                                                          : 'desc'
                                                  }`
                                                : ''
                                            : ''
                                    } ${element.center ? 'text-center' : ''}`}
                                    tabIndex={0}
                                    aria-controls="DataTables_Table_0"
                                    rowSpan={1}
                                    colSpan={1}
                                >
                                    {t(element.label)}
                                </th>
                            ))}
                            {actions?.edit || actions?.delete || actions?.show ? (
                                <th
                                    className="cell-fit sorting_disabled"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Actions"
                                >
                                    <div className="d-flex align-items-center">{t('Actions')}</div>
                                </th>
                            ) : null}
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data?.map((element: any, idx: number) => (
                                <tr className="odd" key={idx}>
                                    {headers &&
                                        headers?.map((header: any, idx: number) => (
                                            <td
                                                key={idx}
                                                colSpan={1}
                                                className={`${header?.center ? 'text-center' : ''}`}
                                            >
                                                {header?.custom
                                                    ? (TABLE_ELEMENT_CUSTOM as any)?.[
                                                          header?.custom?.type
                                                      ](
                                                          header?.custom,
                                                          element?.[header?.name],
                                                          element
                                                      )
                                                    : element?.[header?.name]}
                                            </td>
                                        ))}

                                    {actions?.edit || actions?.delete || actions?.show ? (
                                        <td colSpan={1} className="dataTables_empty text-center">
                                            <div className="d-flex align-items-center">
                                                {actions?.show && (
                                                    <span
                                                        data-bs-toggle="tooltip"
                                                        className="text-body cursor-pointer"
                                                        data-bs-placement="top"
                                                        title=""
                                                        data-bs-original-title="Preview Invoice"
                                                        aria-label="Preview Invoice"
                                                    >
                                                        <i className="bx bx-show mx-1"></i>
                                                    </span>
                                                )}
                                                {actions?.edit || actions?.delete ? (
                                                    <div className="dropdown">
                                                        <a
                                                            href="javascript:;"
                                                            className="btn dropdown-toggle hide-arrow text-body p-0"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            <i className="bx bx-dots-vertical-rounded"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end cursor-pointer">
                                                            {actions?.edit ? (
                                                                <>
                                                                    <span
                                                                        className="dropdown-item"
                                                                        onClick={() =>
                                                                            handleAction(
                                                                                actions.edit,
                                                                                element
                                                                            )
                                                                        }
                                                                    >
                                                                        {t('Edit')}
                                                                    </span>
                                                                    {actions?.delete &&
                                                                    !actions?.custom?.length ? (
                                                                        <div className="dropdown-divider"></div>
                                                                    ) : null}
                                                                </>
                                                            ) : null}
                                                            {actions?.custom
                                                                ? actions?.custom?.map(
                                                                      (
                                                                          action: any,
                                                                          idx: number
                                                                      ) => (
                                                                          <div key={idx}>
                                                                              <span
                                                                                  className="dropdown-item  cursor-pointer"
                                                                                  onClick={() => {
                                                                                      let path =
                                                                                          action.path;
                                                                                      Object.keys(
                                                                                          action.replace
                                                                                      ).forEach(
                                                                                          (
                                                                                              key: string
                                                                                          ) => {
                                                                                              path =
                                                                                                  path.replace(
                                                                                                      key,
                                                                                                      element[
                                                                                                          action
                                                                                                              .replace[
                                                                                                              key
                                                                                                          ]
                                                                                                      ]
                                                                                                  );
                                                                                          }
                                                                                      );

                                                                                      navigate(
                                                                                          path
                                                                                      );
                                                                                  }}
                                                                              >
                                                                                  {t(action.label)}
                                                                              </span>
                                                                              {actions?.delete ? (
                                                                                  <div className="dropdown-divider"></div>
                                                                              ) : null}
                                                                          </div>
                                                                      )
                                                                  )
                                                                : null}
                                                            {actions?.delete ? (
                                                                <span
                                                                    className="dropdown-item delete-record text-danger  cursor-pointer"
                                                                    onClick={() =>
                                                                        handleAction(
                                                                            actions.delete,
                                                                            element
                                                                        )
                                                                    }
                                                                >
                                                                    {t('Delete')}
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                ) : null}
                                            </div>
                                        </td>
                                    ) : null}
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div className="row mx-2 pt-4">
                    <div className="col-sm-12 col-md-6">
                        <div
                            className="dataTables_info"
                            id="DataTables_Table_0_info"
                            role="status"
                            aria-live="polite"
                        >
                            {t('Showing')}{' '}
                            {+searches[queries.pagination.page] ||
                                searches[queries.pagination.page] + 1}{' '}
                            {t('to')}{' '}
                            {searches[queries.pagination.page]
                                ? queries.limit * searches[queries.pagination.page]
                                : queries.limit}{' '}
                            {t('of')} {meta[queries.pagination.total]} {t('entries')}
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="DataTables_Table_0_paginate"
                        >
                            <ul className="pagination justify-content-end">
                                <li
                                    className="paginate_button page-item previous disabled"
                                    id="DataTables_Table_0_previous"
                                >
                                    <a
                                        href="#"
                                        aria-controls="DataTables_Table_0"
                                        data-dt-idx="0"
                                        tabIndex={0}
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
                                        tabIndex={0}
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
    );
};
