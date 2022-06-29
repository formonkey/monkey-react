import React, { useEffect } from 'react';
import { useStore } from '../../store';
import { WIDGET_INFO_PARSED } from '../constants';

export const WidgetInfo = ({ t, conf, idx }: any) => {
    return (
        <div className="card mb-4" key={`widget-info-${idx}`}>
            <div className="card-body">
                {conf.data && conf.sections
                    ? conf.sections?.map((section: any, idx: number) => (
                          <div key={idx}>
                              <small className="text-muted text-uppercase">
                                  {t(section.title)}
                              </small>
                              <ul className="list-unstyled mb-4 mt-3">
                                  {section.columns.map((column: any, childIndex: number) =>
                                      column?.parsed?.type !== 'tags' ? (
                                          <li
                                              className="d-flex align-items-center mb-3"
                                              key={`widget-${section.title}-${childIndex}`}
                                          >
                                              <i className={`bx bx-${column.icon}`} />
                                              <span className="fw-semibold mx-2">
                                                  {t(column.label)}:
                                              </span>
                                              <span>
                                                  {column.parsed
                                                      ? (WIDGET_INFO_PARSED as any)?.[
                                                            column.parsed.type
                                                        ]?.({
                                                            ...column.parsed,
                                                            element: conf.data,
                                                        })
                                                      : t(conf.data[column.key])}
                                              </span>
                                          </li>
                                      ) : (
                                          <div className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                              {(WIDGET_INFO_PARSED as any)?.[column.parsed.type]?.({
                                                  ...column.parsed,
                                                  element: conf.data,
                                              })}
                                          </div>
                                      )
                                  )}
                              </ul>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};
