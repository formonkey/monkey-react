import React from 'react';
export var Input = function (_a) {
    var _b;
    var t = _a.t, label = _a.label, name = _a.name, form = _a.form, focus = _a.focus, placeholder = _a.placeholder, type = _a.type, value = _a.value, onChange = _a.onChange;
    var handleChange = function (e) {
        var _a;
        onChange((_a = {}, _a[name] = e.target.value, _a));
    };
    return (React.createElement("div", { className: "mb-3" },
        React.createElement("label", { htmlFor: "email", className: "form-label" }, t(label)),
        React.createElement("input", { id: name, type: type, name: name, autoFocus: focus, value: (_b = form === null || form === void 0 ? void 0 : form[name]) !== null && _b !== void 0 ? _b : '', defaultValue: value, onChange: handleChange, className: "form-control", placeholder: t(placeholder) })));
};
