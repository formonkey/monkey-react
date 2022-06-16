import React from 'react';

export const Switch = () => {
    return (
        <div className="form-check form-switch mb-2">
            <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked={false}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                Checked switch checkbox input
            </label>
        </div>
    );
};
