import React, { useEffect } from 'react';

import { StoreKeys, useStore } from '../store';

export const Datepicker = ({ t, name, form, type = 'date', onChange, format, label }: any) => {
    const { get } = useStore();

    const handleChange = (data: any) => (e: any) => {
        const date = e.map((d: string) =>
            format ? (window as any).moment(new Date(d)).format(format) : new Date(d).toISOString()
        );

        onChange({ ...data, [name]: type === 'range' ? date : date[0] });
    };

    useEffect(() => {
        let locale = 'en';

        const store = get(StoreKeys.Language);
        const element = document.querySelector(`#${name}-flatpickr-${type}`);

        if (store.code !== 'en' && store.i18n) {
            const language = require(`flatpickr/dist/l10n/${store.code}.js`);

            locale = language[store.i18n];
        }

        if (element) {
            if (type === 'range') {
                (element as any).flatpickr({
                    locale,
                    mode: 'range',
                    onChange: handleChange(form),
                    dateFormat: 'Y-m-d',
                });
            } else if (type === 'date') {
                (element as any).flatpickr({
                    locale,
                    dateFormat: 'Y-m-d',
                    monthSelectorType: 'static',
                    onChange: handleChange(form),
                });
            }
        }
    }, [form]);

    return type === 'date' ? (
        <div className="mb-4">
            <label htmlFor={`${name}-flatpickr-${type}`} className="form-label">
                {t(label)}
            </label>
            <input
                type="date"
                className="form-control flatpickr-input"
                placeholder="YYYY-MM-DD"
                onChange={handleChange}
                id={`${name}-flatpickr-${type}`}
                readOnly={false}
            />
        </div>
    ) : (
        <div className="mb-4">
            <label htmlFor={`${name}-flatpickr-${type}`} className="form-label">
                {t(label)}
            </label>
            <input
                type="text"
                className="form-control flatpickr-input"
                placeholder="YYYY-MM-DD to YYYY-MM-DD"
                id={`${name}-flatpickr-${type}`}
                onChange={handleChange}
                readOnly={true}
            />
        </div>
    );
};
