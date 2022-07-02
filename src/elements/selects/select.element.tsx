import React from 'react';

export const Select = ({ t, label, name, value, onChange, data = [], ...props }: any) => {
    const handleChange = (e: { target: { value: string } }) => {
        onChange({ [name]: e.target.value });
    };

    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={name}>
                {t(label)}
            </label>
            <select id={name} name={name} className="form-select" onChange={handleChange}>
                <option value="" selected={!value}>{t('Selected value')}</option>
                {data.map((item: any) => (
                    <option
                        value={item.value}
                        selected={
                            props.config?.parsed?.value
                                ? value?.[props.config.parsed.value] === item.value
                                : value === item.value
                        }
                    >
                        {t(item.label)}
                    </option>
                ))}
            </select>
        </div>
    );
};
