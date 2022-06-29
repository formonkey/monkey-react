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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHttpClient = void 0;
var react_1 = require("react");
var monkey_conf_1 = require("../../monkey-conf");
var store_1 = require("../../store");
var useHttpClient = function () {
    var get = (0, store_1.useStore)().get;
    var token = (0, monkey_conf_1.useMonkeyConf)().token;
    var _a = (0, react_1.useState)({
        isLoading: false,
        error: null,
        data: null,
        setError: function () { return null; },
    }), state = _a[0], setState = _a[1];
    var api = function (path, method, body) {
        var _a;
        setState({
            path: '',
            isLoading: true,
            error: null,
            data: null,
        });
        var access = get(store_1.StoreKeys.Token);
        var language = get(store_1.StoreKeys.Language);
        fetch("".concat(process.env.REACT_APP_HOST).concat(path), {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': access ? "Bearer ".concat(access[token]) : '',
                'Accept-Language': (_a = language === null || language === void 0 ? void 0 : language.code) !== null && _a !== void 0 ? _a : 'en',
            },
            body: JSON.stringify(body),
        })
            .then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            return response.json().then(function (error) {
                throw error;
            });
        })
            .then(function (data) {
            setState({
                path: path,
                data: data,
                isLoading: false,
                error: null,
            });
        })
            .catch(function (error) {
            setState({
                path: path,
                error: error,
                isLoading: false,
                data: null,
            });
        });
    };
    var setError = function (error) {
        setState(__assign(__assign({}, state), { error: error }));
    };
    return {
        state: state,
        api: api,
        setError: setError,
    };
};
exports.useHttpClient = useHttpClient;
