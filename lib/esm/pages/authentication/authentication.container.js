import React from 'react';
import { useMonkeyConf } from '../../elements';
import { AuthenticationRouter } from './authentication.router';
export var Authentication = function () {
    var _a = useMonkeyConf(), name = _a.name, authenticationFlow = _a.authenticationFlow;
    return (React.createElement("div", { className: "container-xxl" },
        React.createElement("div", { className: "authentication-wrapper authentication-basic container-p-y" },
            React.createElement("div", { className: "authentication-inner" },
                React.createElement("div", { className: "card" },
                    React.createElement("div", { className: "card-body" },
                        React.createElement("div", { className: "app-brand justify-content-center" },
                            React.createElement("a", { href: "index.html", className: "app-brand-link gap-2" },
                                React.createElement("span", { className: "app-brand-logo demo" }),
                                React.createElement("span", { className: "app-brand-text demo text-body fw-bolder" }, name))),
                        React.createElement(AuthenticationRouter, { flow: authenticationFlow })))))));
};
