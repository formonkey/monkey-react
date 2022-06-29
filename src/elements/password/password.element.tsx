import React, { useState } from 'react';

export const Password = ({ t, label, link, name, placeholder, onChange }: any) => {
    const [show, setShow] = useState<boolean>(false);

    const handleChange = (e: { target: { value: string } }) => {
        onChange({ [name]: e.target.value });
    };

    return (
        <div className="mb-3 form-password-toggle">
            <div className="d-flex justify-content-between">
                <label className="form-label" htmlFor="password">
                    {t(label)}
                </label>
                {link && (
                    <a href={link}>
                        <small>{t('Forgot Password?')}</small>
                    </a>
                )}
            </div>
            <div className="input-group input-group-merge">
                <input
                    id={name}
                    name={name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder={t(placeholder)}
                    aria-describedby="password"
                    type={show ? 'text' : 'password'}
                />
                <span className="input-group-text cursor-pointer" onClick={() => setShow(!show)}>
                    <i className={`bx bx-${show ? 'show' : 'hide'}`}></i>
                </span>
            </div>
        </div>
    );
};
