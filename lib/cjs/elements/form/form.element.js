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
exports.Form = void 0;
var react_1 = __importStar(require("react"));
var Form = function (Schema) {
    return function (Component) {
        return function (props) {
            var _a = (0, react_1.useState)({}), form = _a[0], setForm = _a[1];
            var _b = (0, react_1.useState)({}), errors = _b[0], setErrors = _b[1];
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
            return (react_1.default.createElement(Component, __assign({}, props, { form: form, onChange: onChange, disabled: Object.keys(form).length
                    ? !!Object.keys(errors).length
                    : true })));
        };
    };
};
exports.Form = Form;
