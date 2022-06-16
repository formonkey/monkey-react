import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { useStore } from '../store';
import { useHttpClient } from '../http-client';
import { useMonkeyConf } from '../monkey-conf';
import { GenericFormButtons } from './components';
import { GENERIC_FORM_ELEMENTS, GENERIC_FORM_CONFIG_PARSED } from './constants';

export const GenericForm = ({ config, close, endpoint, values, action, refresh }: any) => {
    const { get } = useStore();
    const { t } = useTranslation();
    const { token } = useMonkeyConf();
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({});
    const { api, state } = useHttpClient();
    const [fields, setFields] = useState([]);

    const onChange = (e: any) => {
        setForm({ ...form, ...e });
    };

    const onStep = (type?: string) => {
        if (type === 'next') {
            setStep(step + 1);
        } else if (step > 0) {
            setStep(step - 1);
        }
    };

    const onSubmit = () => {
        api(endpoint || action.endpoint, action.method, form);
    };

    const setCustomFields = (fields: any) => {
        let tempFields = fields;

        if (['PUT', 'PATCH'].includes(action.method)) {
            tempFields = fields.filter((field: any) => field.editable !== false);
        }

        if (tempFields) {
            tempFields.forEach(async (field: any, idx: number) => {
                if (field.element === 'select' && field.config) {
                    await GENERIC_FORM_CONFIG_PARSED.REQUEST(get, field, token);
                }

                if (idx === tempFields.length - 1) {
                    setFields(tempFields);
                }
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
                            value: (form as any)[item.name] || values?.[item.name],
                        })
                    ) : (
                        <></>
                    )}
                </div>
            ))}

            <GenericFormButtons
                t={t}
                step={step}
                close={close}
                config={config}
                onStep={onStep}
                onSubmit={onSubmit}
            />
        </div>
    );
};
