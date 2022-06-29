import React from 'react';

export const Input = ({ t, label, name, form, focus, placeholder, type, value, onChange }: any) => {
    const handleChange = (e: { target: { value: string } }) => {
        onChange({ [name]: e.target.value });
    };

    return (
        <div className="mb-3">
            <label htmlFor="email" className="form-label">
                {t(label)}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                autoFocus={focus}
                value={form?.[name] ?? ''}
                defaultValue={value}
                onChange={handleChange}
                className="form-control"
                placeholder={t(placeholder)}
            />
        </div>
    );
};
