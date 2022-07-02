import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useParams } from 'react-router-dom';
import { useHttpClient } from '../http-client';
import { GenericDetailInfo } from './components';

export const GenericDetail = ({ ...props }: any) => {
    const params = useParams();
    const { t } = useTranslation();
    const { api, state } = useHttpClient();
    const [path, setPath] = useState<any>({});
    const [data, setData] = useState<any>({});

    useEffect(() => {
        console.log('[Generic detail] useEffect props', props);
        console.log('[Generic detail] useEffect params', params);

        const detail = props.detail;
        let endpoint = detail.request.endpoint;

        Object.keys(detail.request.replace).forEach((key: string) => {
            endpoint = endpoint.replace(key, params[detail.request.replace[key]]);
        });

        setPath({ ...path, detail: endpoint });

        api(endpoint, detail.request.method);
    }, []);

    useEffect(() => {
        const key = Object.keys(path).find((key: string) => path[key] === state.path);
        if (state.data && key) {
            delete path[key];

            setPath({ ...path });
            setData({ ...data, [key]: state.data });
        }
    }, [state.data]);

    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4">
                <span className="text-muted fw-light">
                    {t(props.name)} / {data?.detail?.name} /
                </span>{' '}
                {t('Detail')}
            </h4>
            <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
                    {/* User Card */}
                    <GenericDetailInfo data={data.detail} columns={props.config.model} />
                    {/* /User Card */}
                    {/* Plan Card */}
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <span>Complete</span>
                                <span>65%</span>
                            </div>
                            <div className="progress mb-1" style={{ height: 8 }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '65%' }}
                                />
                            </div>
                            <span>4 days remaining</span>
                        </div>
                    </div>
                    {/* /Plan Card */}
                </div>

                <div className="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
                    <ul className="nav nav-pills flex-column flex-md-row mb-3">
                        {props.detail.list.map((item: any) => (
                            <li className="nav-item">
                                <span className="nav-link cursor-pointer">
                                    <i className={`bx bx-${item.icon} me-1`} />
                                    {t(item.label)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
