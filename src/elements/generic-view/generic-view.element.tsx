import React, { useState, useEffect } from "react";

import { Table } from "../table";
import { useHttpClient } from "../http-client";
import { useMonkeyConf } from "../monkey-conf";
import { useTranslation } from "react-i18next";
import { GenericForm } from "../generic-form";
import { GenericViewResumen } from "./components";

export const GenericView = (props: any) => {
    const [data, setData] = useState([]);
    const [meta, setMeta] = useState({});
    const { api, state } = useHttpClient();
    const { queries } = useMonkeyConf();
    const { t } = useTranslation();

    useEffect(() => {
        if (props.config?.endpoint) {
            api(
                `${props.config.endpoint}?${queries.pagination.page}=${
                    queries.system === "eve" ? 1 : 0
                }&${queries.pagination.limit}=${queries.limit}&${
                    props.config.query ?? ""
                }`,
                "GET"
            );
        }

        return () => {
            if (data.length) {
                setData([]);
                setMeta({});
            }
        };
    }, [props]);

    useEffect(() => {
        if (state.data) {
            setData(state.data[props.data]);
            setMeta(
                queries.pagination.key
                    ? state.data[queries.pagination.key]
                    : state.data
            );
        }
    }, [state.data]);

    return props.config ? (
        <div>
            <h4 className="fw-bold py-3 mb-4">
                <span className="text-muted fw-light">
                    {t(props.config.title)} /
                </span>{" "}
                {t("List")}
            </h4>

            {props.resume && (
                <div className="row g-4 mb-4">
                    {props.resume.map((resume: any) => (
                        <div
                            className={`col-sm-6 col-xl-${
                                12 / props.resume.length
                            }`}
                        >
                            <GenericViewResumen resume={resume} meta={meta} />
                        </div>
                    ))}
                </div>
            )}

            <div className="card">
                {props.filters && props.filters.fields?.length > 1 && (
                    <div className="card-header border-bottom row row ms-2 me-3 p-4">
                        <h5 className="card-title">
                            {t(props.filters.title ?? "Search Filters")}
                        </h5>
                        <div className="pr-2">
                            <GenericForm
                                isFilter
                                action={{}}
                                close={() => null}
                                refresh={() => null}
                                config={props.filters}
                                filter={(
                                    searches = `${queries.pagination.page}=${
                                        queries.system === "eve" ? 1 : 0
                                    }&${queries.pagination.limit}=${
                                        queries.limit
                                    }`
                                ) =>
                                    api(
                                        `${props.config.endpoint}?${searches}&${
                                            props.config.query ?? ""
                                        }`,
                                        "GET"
                                    )
                                }
                            />
                        </div>
                    </div>
                )}
                <Table
                    data={data}
                    meta={meta}
                    queries={queries}
                    form={props.form}
                    config={props.config}
                    filters={props.filters}
                    actions={props.actions}
                    refresh={(
                        searches = `${queries.pagination.page}=${
                            queries.system === "eve" ? 1 : 0
                        }&${queries.pagination.limit}=${queries.limit}`
                    ) =>
                        api(
                            `${props.config.endpoint}?${searches}&${
                                props.config.query ?? ""
                            }`,
                            "GET"
                        )
                    }
                />
            </div>
        </div>
    ) : (
        <></>
    );
};
