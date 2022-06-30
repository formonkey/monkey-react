import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Authentication, Platform } from '../pages';
import { MonkeyConf, useStore, StoreKeys } from '../elements';
export var Bootstrap = function (_a) {
    var _b = _a.customRoutes, customRoutes = _b === void 0 ? {} : _b;
    var get = useStore().get;
    var _c = useState(false), logged = _c[0], setLogged = _c[1];
    useEffect(function () {
        if (get(StoreKeys.Token)) {
            setLogged(true);
        }
    }, []);
    return (React.createElement(MonkeyConf, null, logged ? (React.createElement(Router, null,
        React.createElement(Platform, { customRoutes: customRoutes }))) : (React.createElement(Router, null,
        React.createElement(Authentication, null)))));
};
