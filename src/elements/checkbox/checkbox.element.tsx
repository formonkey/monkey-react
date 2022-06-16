import React from 'react';

export const Checkbox = ({ t, label, name, onChange, value }: any) => {
    const handleChange = (e: { target: { checked: any } }) => {
        onChange({ [name]: !!e.target.checked });
    };

    return (
        <div className="mb-3">
            <div className="form-check">
                <input
                    id={name}
                    name={name}
                    type="checkbox"
                    onChange={handleChange}
                    defaultChecked={!!value}
                    className="form-check-input"
                />
                <label className="form-check-label" htmlFor={name}>
                    {' '}
                    {t(label)}{' '}
                </label>
            </div>
        </div>
    );
};
