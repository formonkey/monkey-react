"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
var react_1 = __importDefault(require("react"));
var Role = function (_a) {
    var data = _a.data, name = _a.name, onChange = _a.onChange, value = _a.value, t = _a.t;
    var handleChange = function (e, option) {
        var _a;
        value = value || [];
        var temp = __spreadArray(__spreadArray([], value, true), e.target.value.split(','), true).filter(function (key) { var _a; return (_a = option.remove) === null || _a === void 0 ? void 0 : _a.indexOf(key); });
        onChange((_a = {}, _a[name] = temp.filter(function (e) { return temp.includes(e); }), _a));
    };
    return (react_1.default.createElement("div", { className: "mb-3" },
        react_1.default.createElement("label", { className: "form-label" }, t('Role Permissions')),
        react_1.default.createElement("div", { className: "table-responsive" },
            react_1.default.createElement("table", { className: "table table-flush-spacing" },
                react_1.default.createElement("tbody", null, data.map(function (item) { return (react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", { className: "text-nowrap fw-semibold" }, t(item.label)),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("div", { className: "d-flex" }, item.options.map(function (option) { return (react_1.default.createElement("div", { className: "form-check me-3 me-lg-5" },
                            react_1.default.createElement("input", { name: item.label + '-permission', className: "form-check-input", type: "radio", value: option.value, onChange: function (e) { return handleChange(e, option); }, disabled: !!option.disabled }),
                            react_1.default.createElement("label", { className: "form-check-label", htmlFor: "userManagementRead" }, t(option.label)))); }))))); }))))));
};
exports.Role = Role;
