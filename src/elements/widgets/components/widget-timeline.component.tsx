import React from 'react';

import { WIDGET_TIMELINE_PARSED } from '../constants';

export const WidgetTimeline = ({ conf, t }: any) => {
    return (
        <div className="card card-action mb-4">
            <div className="card-header align-items-center">
                <h5 className="card-action-title mb-0">
                    <i className="bx bx-list-ul me-2" />
                    {t(conf.title)}
                </h5>
                <div className="card-action-element" />
            </div>
            <div className="card-body">
                <ul className="timeline ms-2">
                    {conf.data.slice(0, 8).map((item: any, i: number) => (
                        <li className="timeline-item timeline-item-transparent" key={i}>
                            <span className="timeline-point timeline-point-primary" />
                            <div className="timeline-event">
                                <div className="timeline-header">
                                    <h6 className="mb-0">{item.action}</h6>
                                    <small className="text-muted">
                                        {conf?.parsed?.today &&
                                            (WIDGET_TIMELINE_PARSED as any)[conf.parsed.today.type](
                                                conf.parsed.today.key,
                                                item
                                            )}
                                    </small>
                                </div>
                                <p className="mb-0">{`${item.action_arguments?.resource ?? ''} ${
                                    item.action_arguments?.resource_id ?? ''
                                }`}</p>
                            </div>
                        </li>
                    ))}
                    <li className="timeline-end-indicator">
                        <i className="bx bx-check-circle" />
                    </li>
                </ul>
            </div>
        </div>
    );
};
