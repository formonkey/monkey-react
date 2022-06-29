import React, { useState, useEffect } from 'react';
import { Table } from '../table';
import { useHttpClient } from '../http-client';
import { useMonkeyConf } from '../monkey-conf';
import { useTranslation } from 'react-i18next';
import { GenericForm } from '../generic-form';
import { GenericViewResumen } from './components';
export var GenericView = function (props) {
    var _a, _b;
    var _c = useState([]), data = _c[0], setData = _c[1];
    var _d = useState({}), meta = _d[0], setMeta = _d[1];
    var _e = useHttpClient(), api = _e.api, state = _e.state;
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
        props.resume && (React.createElement("div", { className: "row g-4 mb-4" }, props.resume.map(function (resume) { return (React.createElement("div", { className: "col-sm-6 col-xl-".concat(12 / props.resume.length) },
            React.createElement(GenericViewResumen, { resume: resume, meta: meta }))); }))),
        React.createElement("div", { className: "card" },
            props.filters && ((_a = props.filters.fields) === null || _a === void 0 ? void 0 : _a.length) > 1 && (React.createElement("div", { className: "card-header border-bottom row row ms-2 me-3 p-4" },
                React.createElement("h5", { className: "card-title" }, t((_b = props.filters.title) !== null && _b !== void 0 ? _b : 'Search Filters')),
                React.createElement("div", { className: "pr-2" },
                    React.createElement(GenericForm, { isFilter: true, action: {}, close: function () { return null; }, refresh: function () { return null; }, config: props.filters, filter: function (searches) {
                            var _a;
                            if (searches === void 0) { searches = "".concat(queries.pagination.page, "=").concat(queries.system === 'eve' ? 1 : 0, "&").concat(queries.pagination.limit, "=").concat(queries.limit); }
                            return api("".concat(props.config.endpoint, "?").concat(searches, "&").concat((_a = props.config.query) !== null && _a !== void 0 ? _a : ''), 'GET');
                        } }),
                    ","))),
            React.createElement(Table, { data: data, meta: meta, queries: queries, form: props.form, config: props.config, filters: props.filters, actions: props.actions, refresh: function (searches) {
                    var _a;
                    if (searches === void 0) { searches = "".concat(queries.pagination.page, "=").concat(queries.system === 'eve' ? 1 : 0, "&").concat(queries.pagination.limit, "=").concat(queries.limit); }
                    return api("".concat(props.config.endpoint, "?").concat(searches, "&").concat((_a = props.config.query) !== null && _a !== void 0 ? _a : ''), 'GET');
                } })))) : (React.createElement(React.Fragment, null));
};
