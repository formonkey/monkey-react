import React from 'react';
export var Radio = function (_a) {
    var t = _a.t, name = _a.name, label = _a.label, data = _a.data, value = _a.value, onChange = _a.onChange;
    var handleChange = function (e) {
        var _a;
        if (['true', 'false'].includes(e.target.value)) {
            e.target.value = e.target.value !== 'false';
        }
        onChange((_a = {}, _a[name] = e.target.value, _a));
    };
    var convertBooleanToString = function (e) {
        return !e ? 'false' : 'true';
    };
    return (React.createElement("div", { className: 'col-md-6 fv-plugins-icon-container' },
        React.createElement("label", { className: 'form-label' }, t(label)),
        data.map(function (element, idx) { return (React.createElement("div", { className: 'form-check custom mb-2' },
            React.createElement("input", { type: 'radio', id: "".concat(name, "-").concat(idx), name: name, value: element.value, onChange: handleChange, className: 'form-check-input', checked: typeof element.value === 'boolean'
                    ? convertBooleanToString(element.value) ===
                        (typeof value === 'boolean'
                            ? convertBooleanToString(value)
                            : value)
                    : element.value === value }),
            React.createElement("label", { className: 'form-check-label', htmlFor: "".concat(name, "-").concat(idx) }, t(element.label)))); })));
};
