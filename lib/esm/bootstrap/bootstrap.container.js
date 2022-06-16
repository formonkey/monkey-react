import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Authentication, Platform } from "../pages";
import { MonkeyConf, useStore, StoreKeys } from "../elements";
export var Bootstrap = function () {
    var get = useStore().get;
    var _a = useState(false), logged = _a[0], setLogged = _a[1];
    useEffect(function () {
        if (get(StoreKeys.Token)) {
            setLogged(true);
        }
    }, []);
    return (React.createElement(MonkeyConf, null, logged ? (React.createElement(Router, null,
        React.createElement(Platform, null))) : (React.createElement(Router, null,
        React.createElement(Authentication, null)))));
};
