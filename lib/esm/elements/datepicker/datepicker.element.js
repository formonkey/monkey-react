import React, { useEffect } from 'react';
export var Datepicker = function (_a) {
    var name = _a.name, _b = _a.type, type = _b === void 0 ? 'date' : _b, onChange = _a.onChange, format = _a.format, label = _a.label;
    var handleChange = function (e) {
        var _a;
        var date = e.map(function (d) {
            return format ? window.moment(new Date(d)).format(format) : new Date(d).toISOString();
        });
        onChange((_a = {}, _a[name] = type === 'range' ? date : date[0], _a));
    };
    useEffect(function () {
        var element = document.querySelector("#".concat(name, "-flatpickr-").concat(type));
        if (element) {
            if (type === 'range') {
                element.flatpickr({
                    mode: 'range',
                    onChange: handleChange,
                    dateFormat: 'Y-m-d',
                });
            }
            else if (type === 'date') {
                element.flatpickr({
                    monthSelectorType: 'static',
                    onChange: handleChange,
                    dateFormat: 'Y-m-d',
                });
            }
        }
    }, []);
    return type === 'date' ? (React.createElement("div", { className: "mb-4" },
        React.createElement("label", { htmlFor: "".concat(name, "-flatpickr-").concat(type), className: "form-label" }, label),
        React.createElement("input", { type: "date", className: "form-control flatpickr-input", placeholder: "YYYY-MM-DD", onChange: handleChange, id: "".concat(name, "-flatpickr-").concat(type), readOnly: false }))) : (React.createElement("div", { className: "mb-4" },
        React.createElement("label", { htmlFor: "".concat(name, "-flatpickr-").concat(type), className: "form-label" }, label),
        React.createElement("input", { type: "text", className: "form-control flatpickr-input", placeholder: "YYYY-MM-DD to YYYY-MM-DD", id: "".concat(name, "-flatpickr-").concat(type), onChange: handleChange, readOnly: true })));
};
