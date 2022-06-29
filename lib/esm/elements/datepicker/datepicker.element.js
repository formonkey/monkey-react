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
import React, { useEffect } from 'react';
import { StoreKeys, useStore } from '../store';
export var Datepicker = function (_a) {
    var t = _a.t, name = _a.name, form = _a.form, _b = _a.type, type = _b === void 0 ? 'date' : _b, onChange = _a.onChange, format = _a.format, label = _a.label;
    var get = useStore().get;
    var handleChange = function (data) { return function (e) {
        var _a;
        var date = e.map(function (d) {
            return format ? window.moment(new Date(d)).format(format) : new Date(d).toISOString();
        });
        onChange(__assign(__assign({}, data), (_a = {}, _a[name] = type === 'range' ? date : date[0], _a)));
    }; };
    useEffect(function () {
        var locale = 'en';
        var store = get(StoreKeys.Language);
        var element = document.querySelector("#".concat(name, "-flatpickr-").concat(type));
        if (store.code !== 'en' && store.i18n) {
            var language = require("flatpickr/dist/l10n/".concat(store.code, ".js"));
            locale = language[store.i18n];
        }
        if (element) {
            if (type === 'range') {
                element.flatpickr({
                    locale: locale,
                    mode: 'range',
                    onChange: handleChange(form),
                    dateFormat: 'Y-m-d',
                });
            }
            else if (type === 'date') {
                element.flatpickr({
                    locale: locale,
                    dateFormat: 'Y-m-d',
                    monthSelectorType: 'static',
                    onChange: handleChange(form),
                });
            }
        }
    }, [form]);
    return type === 'date' ? (React.createElement("div", { className: "mb-4" },
        React.createElement("label", { htmlFor: "".concat(name, "-flatpickr-").concat(type), className: "form-label" }, t(label)),
        React.createElement("input", { type: "date", className: "form-control flatpickr-input", placeholder: "YYYY-MM-DD", onChange: handleChange, id: "".concat(name, "-flatpickr-").concat(type), readOnly: false }))) : (React.createElement("div", { className: "mb-4" },
        React.createElement("label", { htmlFor: "".concat(name, "-flatpickr-").concat(type), className: "form-label" }, t(label)),
        React.createElement("input", { type: "text", className: "form-control flatpickr-input", placeholder: "YYYY-MM-DD to YYYY-MM-DD", id: "".concat(name, "-flatpickr-").concat(type), onChange: handleChange, readOnly: true })));
};
