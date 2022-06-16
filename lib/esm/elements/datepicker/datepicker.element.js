import React from 'react';
export var Datepicker = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'date' : _b;
    return type === 'date' ? (React.createElement("div", { className: "col-md-6 col-12 mb-4" },
        React.createElement("label", { htmlFor: "flatpickr-date", className: "form-label" }, "Date Picker"),
        React.createElement("input", { type: "text", className: "form-control flatpickr-input", placeholder: "YYYY-MM-DD", id: "flatpickr-date", readOnly: true }))) : (React.createElement("div", { className: "col-md-6 col-12 mb-4" },
        React.createElement("label", { htmlFor: "flatpickr-range", className: "form-label" }, "Range Picker"),
        React.createElement("input", { type: "text", className: "form-control flatpickr-input", placeholder: "YYYY-MM-DD to YYYY-MM-DD", id: "flatpickr-range", readOnly: true })));
};
