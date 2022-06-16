var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState as state } from "react";
export var Form = function (Schema) {
    return function (Component) {
        return function (props) {
            var _a = state({}), form = _a[0], setForm = _a[1];
            var _b = state({}), errors = _b[0], setErrors = _b[1];
            var onChange = function (e) {
                var data = __assign(__assign({}, form), e);
                setForm(data);
                try {
                    Schema.parse(data);
                    setErrors({});
                }
                catch (err) {
                    var temp_1 = __assign({}, errors);
                    var message = JSON.parse(err.message);
                    message.forEach(function (error) {
                        var _a;
                        temp_1 = __assign(__assign({}, temp_1), (_a = {}, _a[error.path[0]] = error.code, _a));
                    });
                    setErrors(__assign(__assign({}, errors), temp_1));
                }
            };
            return (React.createElement(Component, __assign({}, props, { form: form, onChange: onChange, disabled: Object.keys(form).length
                    ? !!Object.keys(errors).length
                    : true })));
        };
    };
};
