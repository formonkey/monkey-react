import React from 'react';

export const Radio = ({t, name, label, data, value, onChange}: any) => {
    const handleChange = (e: { target: { value: any } }) => {
        if (['true', 'false'].includes(e.target.value)) {
            e.target.value = e.target.value !== 'false';
        }

        onChange({[name]: e.target.value});
    };

    const convertBooleanToString = (e: boolean) => {
        return !e ? 'false' : 'true';
    };

    return (
        <div className='col-md-6 fv-plugins-icon-container'>
            <label className='form-label'>{t(label)}</label>
            {data.map((element: any, idx: number) => (
                <div className='form-check custom mb-2'>
                    <input
                        type='radio'
                        id={`${name}-${idx}`}
                        name={name}
                        value={element.value}
                        onChange={handleChange}
                        className='form-check-input'
                        checked={
                            typeof element.value === 'boolean'
                                ? convertBooleanToString(element.value) ===
                                  (typeof value === 'boolean'
                                      ? convertBooleanToString(value)
                                      : value)
                                : element.value === value
                        }
                    />
                    <label className='form-check-label' htmlFor={`${name}-${idx}`}>
                        {t(element.label)}
                    </label>
                </div>
            ))}
        </div>
    );
};