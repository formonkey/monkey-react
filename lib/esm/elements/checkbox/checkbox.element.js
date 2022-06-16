import React from 'react';
export var Checkbox = function (_a) {
    var t = _a.t, label = _a.label, name = _a.name, onChange = _a.onChange, value = _a.value;
    var handleChange = function (e) {
        var _a;
        onChange((_a = {}, _a[name] = !!e.target.checked, _a));
    };
    return (React.createElement("div", { className: "mb-3" },
        React.createElement("div", { className: "form-check" },
            React.createElement("input", { id: name, name: name, type: "checkbox", onChange: handleChange, defaultChecked: !!value, className: "form-check-input" }),
            React.createElement("label", { className: "form-check-label", htmlFor: name },
                ' ',
                t(label),
                ' '))));
};
