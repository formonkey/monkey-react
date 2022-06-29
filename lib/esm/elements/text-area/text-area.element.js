import React from 'react';
export var TextArea = function (_a) {
    var t = _a.t, label = _a.label, form = _a.form, name = _a.name, placeholder = _a.placeholder, onChange = _a.onChange;
    var handleChange = function (e) {
        var _a;
        onChange((_a = {}, _a[name] = e.target.value, _a));
    };
    return (React.createElement("div", { className: "mb-3" },
        React.createElement("label", { htmlFor: name, className: "form-label" }, t(label)),
        React.createElement("textarea", { rows: 3, id: name, name: name, value: form === null || form === void 0 ? void 0 : form[name], onChange: handleChange, className: "form-control", placeholder: t(placeholder) })));
};
