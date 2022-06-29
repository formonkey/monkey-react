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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multi = void 0;
var react_1 = __importStar(require("react"));
var Multi = function (_a) {
    var _b;
    var t = _a.t, name = _a.name, form = _a.form, config = _a.config, onChange = _a.onChange, label = _a.label, data = _a.data, value = _a.value;
    var _c = (0, react_1.useState)(), ref = _c[0], setRef = _c[1];
    var _d = (0, react_1.useState)(0), top = _d[0], setTop = _d[1];
    var _e = (0, react_1.useState)(false), open = _e[0], setOpen = _e[1];
    var _f = (0, react_1.useState)(0), focused = _f[0], setFocused = _f[1];
    var _g = (0, react_1.useState)([]), selecteds = _g[0], setSelecteds = _g[1];
    var _h = (0, react_1.useState)(value || []), values = _h[0], setValues = _h[1];
    var handleClick = function (element) {
        if (!selecteds.includes(element.label)) {
            setValues(__spreadArray(__spreadArray([], values, true), [element.value], false));
        }
        else {
            setValues(values.filter(function (value) { return value !== element.value; }));
        }
    };
    var handleConfirm = function () {
        var _a;
        setOpen(false);
        onChange(__assign(__assign({}, form), (_a = {}, _a[name] = values, _a)));
    };
    var onRemove = function (idx) {
        setSelecteds(selecteds.filter(function (_, i) { return i !== idx; }));
        setOpen(false);
    };
    (0, react_1.useEffect)(function () {
        if (ref) {
            setTop(ref.offsetHeight);
        }
    }, [ref]);
    (0, react_1.useEffect)(function () {
        data.map(function (element) {
            if (values.includes(element.value)) {
                setSelecteds(__spreadArray(__spreadArray([], selecteds, true), [element.label], false));
            }
        });
        setTimeout(function () { return setTop(ref.offsetHeight); }, 200);
    }, [values]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("label", { htmlFor: "".concat(name, "-multi-select"), className: "form-label" }, t(label)),
        react_1.default.createElement("div", { onMouseLeave: handleConfirm, onClick: function () { return setOpen(true); }, className: "position-relative" },
            react_1.default.createElement("span", { ref: function (ref) { return setRef(ref); }, className: open
                    ? 'select2 select2-container select2-container--default select2-container--focus select2-container--below select2-container--open'
                    : 'select2 select2-container select2-container--default select2-container select2-container--below select2-container' },
                react_1.default.createElement("span", { className: "selection" },
                    react_1.default.createElement("span", { className: "select2-selection select2-selection--multiple", role: "combobox", "aria-haspopup": "true", "aria-expanded": "true", tabIndex: -1, "aria-disabled": "false", "aria-owns": "select2-select2Multiple-results", "aria-activedescendant": "select2-select2Multiple-result-ob06-CO" },
                        react_1.default.createElement("ul", { className: "select2-selection__rendered" }, selecteds.map(function (selected, idx) { return (react_1.default.createElement("li", { key: idx, title: "Colorado", className: "select2-selection__choice" },
                            react_1.default.createElement("span", { className: "select2-selection__choice__remove", onClick: function () { return onRemove(idx); } }, "\u00D7"),
                            selected)); })))),
                react_1.default.createElement("span", { className: "dropdown-wrapper", "aria-hidden": "true" })),
            react_1.default.createElement("span", { className: "select2-container select2-container--default select2-container--open", style: {
                    top: top,
                    position: 'absolute',
                    display: open ? 'block' : 'none',
                    left: 0,
                } },
                react_1.default.createElement("span", { className: "select2-dropdown select2-dropdown--below" },
                    react_1.default.createElement("span", { className: "select2-results" },
                        react_1.default.createElement("ul", { className: "select2-results__options", role: "listbox", "aria-multiselectable": "true", id: "select2-select2Multiple-results", "aria-expanded": "true", "aria-hidden": "false" },
                            react_1.default.createElement("li", { className: "select2-results__option", role: "group", "aria-label": "Alaskan/Hawaiian Time Zone", "data-select2-id": 101 },
                                react_1.default.createElement("ul", { className: "select2-results__options select2-results__options--nested" }, data.length ? (data === null || data === void 0 ? void 0 : data.map(function (element, idx) { return (react_1.default.createElement("li", { key: idx, onMouseEnter: function () { return setFocused(idx); }, onClick: function () { return handleClick(element); }, "aria-selected": selecteds.includes(element.label), className: focused === idx
                                        ? 'select2-results__option select2-results__option--highlighted'
                                        : 'select2-results__option' }, element.label)); })) : (react_1.default.createElement("li", { className: "select2-results__option" }, t(((_b = config.error) === null || _b === void 0 ? void 0 : _b.message) || 'No data found'))))))))))));
};
exports.Multi = Multi;
