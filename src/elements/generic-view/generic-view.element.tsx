import React, { useState, useEffect } from 'react';

import { Table } from '../table';
import { useHttpClient } from '../http-client';
import { useMonkeyConf } from '../monkey-conf';
import { useTranslation } from 'react-i18next';

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
                    queries.system === 'eve' ? 1 : 0
                }&${queries.pagination.limit}=${queries.limit}&${props.config.query ?? ''}`,
                'GET'
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
            setMeta(queries.pagination.key ? state.data[queries.pagination.key] : state.data);
        }
    }, [state.data]);

    return props.config ? (
        <div>
            <h4 className="fw-bold py-3 mb-4">
                <span className="text-muted fw-light">{t(props.config.title)} /</span> {t('List')}
            </h4>

            <div className="card">
                <Table
                    data={data}
                    meta={meta}
                    queries={queries}
                    form={props.form}
                    config={props.config}
                    actions={props.actions}
                    refresh={(
                        searches = `${queries.pagination.page}=${
                            queries.system === 'eve' ? 1 : 0
                        }&${queries.pagination.limit}=${queries.limit}`
                    ) =>
                        api(
                            `${props.config.endpoint}?${searches}&${props.config.query ?? ''}`,
                            'GET'
                        )
                    }
                />
            </div>
        </div>
    ) : (
        <></>
    );
};
