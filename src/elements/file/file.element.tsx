import React from 'react';

export const File = ({ label, accept, multiple, name, t }: any) => {

    return (
        <div className="mb-3">
            <label htmlFor={`file-${name}`} className="btn btn btn-outline-primary">
                <i className="bx-upload bx bx-pie-chart-alt" />
                <span className="px-2 pt-2">{t(label)}</span>
            </label>
            <input
                type="file"
                accept={accept}
                id={`file-${name}`}
                multiple={multiple}
                style={{ display: 'none' }}
            />
        </div>
    );
};
