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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useStore } from '../store';
import { useHttpClient } from '../http-client';
import { useMonkeyConf } from '../monkey-conf';
import { GenericFormButtons } from './components';
import { GENERIC_FORM_ELEMENTS, GENERIC_FORM_CONFIG_PARSED } from './constants';
export var GenericForm = function (_a) {
    var isFilter = _a.isFilter, config = _a.config, close = _a.close, endpoint = _a.endpoint, _b = _a.values, values = _b === void 0 ? {} : _b, action = _a.action, refresh = _a.refresh, filter = _a.filter;
    var get = useStore().get;
    var t = useTranslation().t;
    var _c = useMonkeyConf(), token = _c.token, queries = _c.queries;
    var _d = useState(0), step = _d[0], setStep = _d[1];
    var _e = useState(values), form = _e[0], setForm = _e[1];
    var _f = useHttpClient(), api = _f.api, state = _f.state;
    var _g = useState([]), fields = _g[0], setFields = _g[1];
    var onChange = function (e) {
        var formData = __assign(__assign({}, form), e);
        setForm(formData);
        if (isFilter) {
            if (queries.system === 'eve') {
                var search = "".concat(queries.pagination.page, "=1&").concat(queries.pagination.limit, "=").concat(queries.limit, "&where={");
                var where_1 = '';
                Object.keys(formData).forEach(function (key) {
                    if (formData[key]) {
                        where_1 += "\"".concat(key, "\":\"").concat(formData[key], "\",");
                    }
                });
                search += where_1.slice(0, -1) + '}';
                filter(search);
            }
            else if (queries.system === 'django') {
                var search = "".concat(queries.pagination.page, "=0&").concat(queries.pagination.limit, "=").concat(queries.limit, "&").concat(new URLSearchParams(formData).toString());
                filter(search);
            }
        }
    };
    var onStep = function (type) {
        if (type === 'next') {
            setStep(step + 1);
        }
        else if (step > 0) {
            setStep(step - 1);
        }
    };
    var onSubmit = function () {
        var _a, _b;
        if ((_a = config.requests) === null || _a === void 0 ? void 0 : _a.length) {
            var endpoint_1 = config.requests[step].endpoint;
            if (config.requests[step].replace) {
                Object.keys(config.requests[step].replace).forEach(function (key) {
                    endpoint_1 = endpoint_1.replace(key, form[config.requests[step].replace[key]]);
                });
            }
            if ((_b = config.requests[step].model) === null || _b === void 0 ? void 0 : _b.length) {
                var data_1 = config.requests[step].type === 'array' ? [] : {};
                config.requests[step].model.map(function (key) {
                    if (config.requests[step].type === 'array') {
                        data_1 = __spreadArray(__spreadArray([], data_1, true), form[key], true);
                    }
                    else {
                        data_1[key] = form[key];
                    }
                });
                api(endpoint_1, config.requests[step].method, data_1);
            }
            else {
                api(endpoint_1, config.requests[step].method, form);
            }
        }
        else {
            api(endpoint || action.endpoint, action.method, form);
        }
    };
    var setCustomFields = function (fields) {
        var tempFields = fields;
        if (['PUT', 'PATCH'].includes(action.method)) {
            tempFields = fields.filter(function (field) { return field.editable !== false; });
        }
        if (tempFields) {
            tempFields.forEach(function (field, idx) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(['select', 'multi'].includes(field.element) && field.config)) return [3 /*break*/, 2];
                            return [4 /*yield*/, GENERIC_FORM_CONFIG_PARSED.REQUEST(get, field, token)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            setTimeout(function () {
                                if (idx === tempFields.length - 1) {
                                    setFields(tempFields);
                                }
                            }, 1000);
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    useEffect(function () {
        if (!config.multiple) {
            setCustomFields(config.fields);
        }
    }, []);
    useEffect(function () {
        if (config.multiple) {
            setForm(__assign({}, form));
            setCustomFields(config.fields[step]);
        }
    }, [step]);
    useEffect(function () {
        var _a;
        if ((state.path === endpoint || action.endpoint) && state.data && !state.isLoading) {
            if (!config.async) {
                refresh();
                close();
            }
            else {
                if (step + 1 === config.fields.length) {
                    refresh();
                    close();
                }
                else {
                    setForm(__assign(__assign({}, form), (_a = {}, _a[config.key] = state.data[config.key], _a)));
                    onStep('next');
                }
            }
        }
    }, [state]);
    return (React.createElement("div", { className: "row fv-plugins-bootstrap5 fv-plugins-framework" },
        fields.map(function (item, index) { return (React.createElement("div", { className: "col-12 col-md-".concat(item.row), key: index }, GENERIC_FORM_ELEMENTS[item.element] ? (GENERIC_FORM_ELEMENTS[item.element](__assign(__assign({}, item), { t: t, onChange: onChange, form: __assign({}, form), value: form[item.name] || (values === null || values === void 0 ? void 0 : values[item.name]) }))) : (React.createElement(React.Fragment, null)))); }),
        !isFilter && (React.createElement(GenericFormButtons, { t: t, step: step, close: close, config: config, onStep: onStep, onSubmit: onSubmit }))));
};
