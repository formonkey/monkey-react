var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from 'react';
export var Role = function (_a) {
    var data = _a.data, name = _a.name, onChange = _a.onChange, value = _a.value, t = _a.t;
    var handleChange = function (e, option) {
        var _a;
        value = value || [];
        var temp = __spreadArray(__spreadArray([], value, true), e.target.value.split(','), true).filter(function (key) { var _a; return (_a = option.remove) === null || _a === void 0 ? void 0 : _a.indexOf(key); });
        onChange((_a = {}, _a[name] = temp.filter(function (e) { return temp.includes(e); }), _a));
    };
    return (React.createElement("div", { className: "mb-3" },
        React.createElement("label", { className: "form-label" }, t('Role Permissions')),
        React.createElement("div", { className: "table-responsive" },
            React.createElement("table", { className: "table table-flush-spacing" },
                React.createElement("tbody", null, data.map(function (item) { return (React.createElement("tr", null,
                    React.createElement("td", { className: "text-nowrap fw-semibold" }, t(item.label)),
                    React.createElement("td", null,
                        React.createElement("div", { className: "d-flex" }, item.options.map(function (option) { return (React.createElement("div", { className: "form-check me-3 me-lg-5" },
                            React.createElement("input", { name: item.label + '-permission', className: "form-check-input", type: "radio", value: option.value, onChange: function (e) { return handleChange(e, option); }, disabled: !!option.disabled }),
                            React.createElement("label", { className: "form-check-label", htmlFor: "userManagementRead" }, t(option.label)))); }))))); }))))));
};
