import React from 'react';

export const TextArea = ({ t, label, form, name, placeholder, onChange }: any) => {
    const handleChange = (e: { target: { value: string } }) => {
        onChange({ [name]: e.target.value });
    };

    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {t(label)}
            </label>
            <textarea
                rows={3}
                id={name}
                name={name}
                value={form?.[name]}
                onChange={handleChange}
                className="form-control"
                placeholder={t(placeholder)}
            />
        </div>
    );
};
