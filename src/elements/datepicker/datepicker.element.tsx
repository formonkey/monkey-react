import React from 'react';

export const Datepicker = ({ type = 'date' }: any) => {
    return type === 'date' ? (
        <div className="col-md-6 col-12 mb-4">
            <label htmlFor="flatpickr-date" className="form-label">
                Date Picker
            </label>
            <input
                type="text"
                className="form-control flatpickr-input"
                placeholder="YYYY-MM-DD"
                id="flatpickr-date"
                readOnly={true}
            />
        </div>
    ) : (
        <div className="col-md-6 col-12 mb-4">
            <label htmlFor="flatpickr-range" className="form-label">
                Range Picker
            </label>
            <input
                type="text"
                className="form-control flatpickr-input"
                placeholder="YYYY-MM-DD to YYYY-MM-DD"
                id="flatpickr-range"
                readOnly={true}
            />
        </div>
    );
};
