import React from 'react';

import { GENERIC_DETAIL_PARSED_DATA } from '../constants';

export const GenericDetailInfo = ({ data, columns }: any) => {
    console.log('Generic Detail info', data, columns);
    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="info-container">
                    <ul className="list-unstyled">
                        {data
                            ? columns
                                  ?.filter((column: any) => column.label)
                                  ?.map((column: any) => (
                                      <li className="mb-3">
                                          <span className="fw-bold me-2">{column.label}:</span>
                                          <span>
                                              {column.custom
                                                  ? (GENERIC_DETAIL_PARSED_DATA as any)?.[
                                                        column.custom.type
                                                    ]
                                                      ? (GENERIC_DETAIL_PARSED_DATA as any)[
                                                            column.custom.type
                                                        ](column.custom, data[column.name])
                                                      : '--'
                                                  : data?.[column.name]}
                                          </span>
                                      </li>
                                  ))
                            : null}
                    </ul>
                </div>
            </div>
        </div>
    );
};
