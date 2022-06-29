"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datepicker = void 0;
var react_1 = __importStar(require("react"));
var store_1 = require("../store");
var Datepicker = function (_a) {
    var t = _a.t, name = _a.name, form = _a.form, _b = _a.type, type = _b === void 0 ? 'date' : _b, onChange = _a.onChange, format = _a.format, label = _a.label;
    var get = (0, store_1.useStore)().get;
    var handleChange = function (data) { return function (e) {
        var _a;
        var date = e.map(function (d) {
            return format ? window.moment(new Date(d)).format(format) : new Date(d).toISOString();
        });
        onChange(__assign(__assign({}, data), (_a = {}, _a[name] = type === 'range' ? date : date[0], _a)));
    }; };
    (0, react_1.useEffect)(function () {
        var locale = 'en';
        var store = get(store_1.StoreKeys.Language);
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
    return type === 'date' ? (react_1.default.createElement("div", { className: "mb-4" },
        react_1.default.createElement("label", { htmlFor: "".concat(name, "-flatpickr-").concat(type), className: "form-label" }, t(label)),
        react_1.default.createElement("input", { type: "date", className: "form-control flatpickr-input", placeholder: "YYYY-MM-DD", onChange: handleChange, id: "".concat(name, "-flatpickr-").concat(type), readOnly: false }))) : (react_1.default.createElement("div", { className: "mb-4" },
        react_1.default.createElement("label", { htmlFor: "".concat(name, "-flatpickr-").concat(type), className: "form-label" }, t(label)),
        react_1.default.createElement("input", { type: "text", className: "form-control flatpickr-input", placeholder: "YYYY-MM-DD to YYYY-MM-DD", id: "".concat(name, "-flatpickr-").concat(type), onChange: handleChange, readOnly: true })));
};
exports.Datepicker = Datepicker;
