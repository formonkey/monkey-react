import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHttpClient } from "../../http-client";
import { useMonkeyConf } from "../../monkey-conf";

export const GenericViewResumen = ({ resume, meta }: any) => {
    const { t } = useTranslation();
    const { api, state } = useHttpClient();
    const [data, setData] = useState([]);
    const { queries } = useMonkeyConf();

    useEffect(() => {
        if (resume.endpoint) {
            api(`${resume.endpoint}`, "GET");
        }

        return () => {
            if (data.length) {
                setData([]);
            }
        };
    }, []);

    useEffect(() => {
        if (state.data) {
            setData(state.data[resume.data]);
        }
    }, [state.data]);

    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                    <div className="content-left">
                        <span>{t(resume.title)}</span>
                        <div className="d-flex align-items-end mt-2">
                            <h2 className="mb-0 me-2">{data.length}</h2>
                            <small className="text-primary sm">
                                (
                                {(
                                    (data.length * 100) /
                                    meta[queries.pagination.total]
                                ).toFixed(2)}
                                %)
                            </small>
                        </div>
                        <small>{t(resume.label)}</small>
                    </div>
                    <span className="badge bg-label-primary rounded p-2">
                        <i className={`bx ${resume.icon} bx-sm`} />
                    </span>
                </div>
            </div>
        </div>
    );
};
