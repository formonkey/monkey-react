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
import { useState } from 'react';
import { useMonkeyConf } from '../../monkey-conf';
import { StoreKeys, useStore } from '../../store';
export var useHttpClient = function () {
    var get = useStore().get;
    var token = useMonkeyConf().token;
    var _a = useState({
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
        var access = get(StoreKeys.Token);
        var language = get(StoreKeys.Language);
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
            console.log('Response', response);
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
