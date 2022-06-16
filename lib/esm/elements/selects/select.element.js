var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
export var Select = function (_a) {
    var t = _a.t, label = _a.label, name = _a.name, value = _a.value, onChange = _a.onChange, _b = _a.data, data = _b === void 0 ? [] : _b, props = __rest(_a, ["t", "label", "name", "value", "onChange", "data"]);
    var handleChange = function (e) {
        var _a;
        onChange((_a = {}, _a[name] = e.target.value, _a));
    };
    return (React.createElement("div", { className: "mb-3" },
        React.createElement("label", { className: "form-label", htmlFor: name }, t(label)),
        React.createElement("select", { id: name, name: name, className: "form-select", onChange: handleChange },
            React.createElement("option", { selected: !value }, t('Selected value')),
            data.map(function (item) {
                var _a, _b;
                return (React.createElement("option", { value: item.value, selected: ((_b = (_a = props.config) === null || _a === void 0 ? void 0 : _a.parsed) === null || _b === void 0 ? void 0 : _b.value)
                        ? (value === null || value === void 0 ? void 0 : value[props.config.parsed.value]) === item.value
                        : value === item.value }, t(item.label)));
            }))));
};
