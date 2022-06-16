import React from 'react';
export var Input = function (_a) {
    var t = _a.t, label = _a.label, name = _a.name, focus = _a.focus, placeholder = _a.placeholder, type = _a.type, value = _a.value, onChange = _a.onChange;
    var handleChange = function (e) {
        var _a;
        onChange((_a = {}, _a[name] = e.target.value, _a));
    };
    return (React.createElement("div", { className: "mb-3" },
        React.createElement("label", { htmlFor: "email", className: "form-label" }, t(label)),
        React.createElement("input", { id: name, type: type, name: name, autoFocus: focus, defaultValue: value, onChange: handleChange, className: "form-control", placeholder: t(placeholder) })));
};
