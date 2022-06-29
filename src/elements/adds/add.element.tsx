import React, { useEffect } from 'react';

export const Add = ({ t, name, form, keys, label, onChange }: any) => {
    const handleClick = () => {
        form[name] = form[name] ?? [];
        let items = form[name].length ? form[name] : [];
        const temp: any = {};
        const tempVoid: any = {};

        keys.map((key: string) => {
            tempVoid[key] = '';
            temp[key] = form[key];
        });

        items = [...items, temp];

        onChange({ [name]: items, ...tempVoid });
    };

    return (
        <div className="mb-0">
            <button className="btn btn-primary" onClick={handleClick}>
                <i className="bx bx-plus"></i>
                <span className="align-middle">{t(label)}</span>
            </button>
        </div>
    );
};
