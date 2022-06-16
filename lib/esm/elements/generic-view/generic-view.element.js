import React, { useState, useEffect } from 'react';
import { Table } from '../table';
import { useHttpClient } from '../http-client';
import { useMonkeyConf } from '../monkey-conf';
import { useTranslation } from 'react-i18next';
export var GenericView = function (props) {
    var _a = useState([]), data = _a[0], setData = _a[1];
    var _b = useState({}), meta = _b[0], setMeta = _b[1];
    var _c = useHttpClient(), api = _c.api, state = _c.state;
    var queries = useMonkeyConf().queries;
    var t = useTranslation().t;
    useEffect(function () {
        var _a, _b;
        if ((_a = props.config) === null || _a === void 0 ? void 0 : _a.endpoint) {
            api("".concat(props.config.endpoint, "?").concat(queries.pagination.page, "=").concat(queries.system === 'eve' ? 1 : 0, "&").concat(queries.pagination.limit, "=").concat(queries.limit, "&").concat((_b = props.config.query) !== null && _b !== void 0 ? _b : ''), 'GET');
        }
        return function () {
            if (data.length) {
                setData([]);
                setMeta({});
            }
        };
    }, [props]);
    useEffect(function () {
        if (state.data) {
            setData(state.data[props.data]);
            setMeta(queries.pagination.key ? state.data[queries.pagination.key] : state.data);
        }
    }, [state.data]);
    return props.config ? (React.createElement("div", null,
        React.createElement("h4", { className: "fw-bold py-3 mb-4" },
            React.createElement("span", { className: "text-muted fw-light" },
                t(props.config.title),
                " /"),
            " ",
            t('List')),
        React.createElement("div", { className: "card" },
            React.createElement(Table, { data: data, meta: meta, queries: queries, form: props.form, config: props.config, actions: props.actions, refresh: function (searches) {
                    var _a;
                    if (searches === void 0) { searches = "".concat(queries.pagination.page, "=").concat(queries.system === 'eve' ? 1 : 0, "&").concat(queries.pagination.limit, "=").concat(queries.limit); }
                    return api("".concat(props.config.endpoint, "?").concat(searches, "&").concat((_a = props.config.query) !== null && _a !== void 0 ? _a : ''), 'GET');
                } })))) : (React.createElement(React.Fragment, null));
};
