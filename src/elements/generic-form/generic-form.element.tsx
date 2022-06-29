import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { useStore } from '../store';
import { useHttpClient } from '../http-client';
import { useMonkeyConf } from '../monkey-conf';
import { GenericFormButtons } from './components';
import { GENERIC_FORM_ELEMENTS, GENERIC_FORM_CONFIG_PARSED } from './constants';

export const GenericForm = ({
    isFilter,
    config,
    close,
    endpoint,
    values = {},
    action,
    refresh,
    filter,
}: any) => {
    const { get } = useStore();
    const { t } = useTranslation();
    const { token, queries } = useMonkeyConf();
    const [step, setStep] = useState(0);
    const [form, setForm] = useState<any>(values);
    const { api, state } = useHttpClient();
    const [fields, setFields] = useState([]);

    const onChange = (e: any) => {
        const formData = { ...form, ...e };

        setForm(formData);

        if (isFilter) {
            if (queries.system === 'eve') {
                let search = `${queries.pagination.page}=1&${queries.pagination.limit}=${queries.limit}&where={`;
                let where = '';

                Object.keys(formData).forEach((key) => {
                    if (formData[key]) {
                        where += `"${key}":"${formData[key]}",`;
                    }
                });

                search += where.slice(0, -1) + '}';

                filter(search);
            } else if (queries.system === 'django') {
                let search = `${queries.pagination.page}=0&${queries.pagination.limit}=${
                    queries.limit
                }&${new URLSearchParams(formData).toString()}`;

                filter(search);
            }
        }
    };

    const onStep = (type?: string) => {
        if (type === 'next') {
            setStep(step + 1);
        } else if (step > 0) {
            setStep(step - 1);
        }
    };

    const onSubmit = () => {
        if (config.requests?.length) {
            let endpoint = config.requests[step].endpoint;

            if (config.requests[step].replace) {
                Object.keys(config.requests[step].replace).forEach((key: string) => {
                    endpoint = endpoint.replace(key, form[config.requests[step].replace[key]]);
                });
            }

            if (config.requests[step].model?.length) {
                let data = config.requests[step].type === 'array' ? [] : {};

                config.requests[step].model.map((key: string) => {
                    if (config.requests[step].type === 'array') {
                        data = [...(data as any[]), ...form[key]];
                    } else {
                        (data as any)[key] = form[key];
                    }
                });

                api(endpoint, config.requests[step].method, data);
            } else {
                api(endpoint, config.requests[step].method, form);
            }
        } else {
            api(endpoint || action.endpoint, action.method, form);
        }
    };

    const setCustomFields = (fields: any) => {
        let tempFields = fields;

        if (['PUT', 'PATCH'].includes(action.method)) {
            tempFields = fields.filter((field: any) => field.editable !== false);
        }

        if (tempFields) {
            tempFields.forEach(async (field: any, idx: number) => {
                if (['select', 'multi'].includes(field.element) && field.config) {
                    await GENERIC_FORM_CONFIG_PARSED.REQUEST(get, field, token);
                }

                setTimeout(() => {
                    if (idx === tempFields.length - 1) {
                        setFields(tempFields);
                    }
                }, 1000);
            });
        }
    };

    useEffect(() => {
        if (!config.multiple) {
            setCustomFields(config.fields);
        }
    }, []);

    useEffect(() => {
        if (config.multiple) {
            setForm({ ...form });
            setCustomFields(config.fields[step]);
        }
    }, [step]);

    useEffect(() => {
        if ((state.path === endpoint || action.endpoint) && state.data && !state.isLoading) {
            if (!config.async) {
                refresh();
                close();
            } else {
                if (step + 1 === config.fields.length) {
                    refresh();
                    close();
                } else {
                    setForm({ ...form, [config.key]: state.data[config.key] });
                    onStep('next');
                }
            }
        }
    }, [state]);

    return (
        <div className="row fv-plugins-bootstrap5 fv-plugins-framework">
            {fields.map((item: any, index: number) => (
                <div className={`col-12 col-md-${item.row}`} key={index}>
                    {(GENERIC_FORM_ELEMENTS as any)[item.element] ? (
                        (GENERIC_FORM_ELEMENTS as any)[item.element]({
                            ...item,
                            t,
                            onChange,
                            form: { ...form },
                            value: (form as any)[item.name] || values?.[item.name],
                        })
                    ) : (
                        <></>
                    )}
                </div>
            ))}

            {!isFilter && (
                <GenericFormButtons
                    t={t}
                    step={step}
                    close={close}
                    config={config}
                    onStep={onStep}
                    onSubmit={onSubmit}
                />
            )}
        </div>
    );
};
