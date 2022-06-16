import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AUTHENTICATION_ROUTER_MAP_COMPONENTS } from './constants';
export var AuthenticationRouter = function (_a) {
    var flow = _a.flow;
    return (React.createElement(Routes, null, flow === null || flow === void 0 ? void 0 :
        flow.map(function (key) { return (React.createElement(Route, { key: key, path: AUTHENTICATION_ROUTER_MAP_COMPONENTS[key].path, element: AUTHENTICATION_ROUTER_MAP_COMPONENTS[key].element })); }),
        React.createElement(Route, { path: "*", element: React.createElement(Navigate, { to: "/", replace: true }) })));
};
