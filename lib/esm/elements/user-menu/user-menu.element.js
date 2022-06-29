import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '../avatars';
import { useHttpClient } from '../http-client';
import { useMonkeyConf } from '../monkey-conf';
import { StoreKeys, useStore } from '../store';
export var UserMenu = function () {
    var _a;
    var t = useTranslation().t;
    var profile = useMonkeyConf().profile;
    var _b = useStore(), set = _b.set, del = _b.del;
    var navigate = useNavigate();
    var _c = useState({}), data = _c[0], setData = _c[1];
    var _d = useHttpClient(), api = _d.api, state = _d.state;
    useEffect(function () {
        if (profile) {
            del(StoreKeys.Profile);
            api(profile.endpoint, 'GET');
        }
    }, []);
    useEffect(function () {
        if (state.data) {
            set(StoreKeys.Profile, state.data);
            setData(state.data);
        }
        else if (state.error) {
            del(StoreKeys.Profile);
            del(StoreKeys.Token);
        }
    }, [state.data, state.error]);
    return (React.createElement("li", { className: "nav-item navbar-dropdown dropdown-user dropdown" },
        React.createElement("a", { className: "nav-link dropdown-toggle hide-arrow", href: "javascript:void(0);", "data-bs-toggle": "dropdown" },
            React.createElement(Avatar, { name: data === null || data === void 0 ? void 0 : data[profile.firstName], lastName: data === null || data === void 0 ? void 0 : data[profile.lastName] })),
        React.createElement("ul", { className: "dropdown-menu dropdown-menu-end" },
            React.createElement("li", null,
                React.createElement("a", { className: "dropdown-item", href: "pages-account-settings-account.html" },
                    React.createElement("div", { className: "d-flex" },
                        React.createElement("div", { className: "flex-shrink-0 me-3" },
                            React.createElement(Avatar, { name: data === null || data === void 0 ? void 0 : data[profile.firstName], lastName: data === null || data === void 0 ? void 0 : data[profile.lastName] })),
                        React.createElement("div", { className: "flex-grow-1" },
                            React.createElement("span", { className: "fw-semibold d-block" },
                                data[profile.firstName],
                                " ",
                                data[profile.lastName]),
                            React.createElement("small", { className: "text-muted" }, ((_a = data.roles) === null || _a === void 0 ? void 0 : _a.indexOf(profile.administrator)) >= 0
                                ? t('Admin')
                                : t('User')))))),
            React.createElement("li", null,
                React.createElement("div", { className: "dropdown-divider" })),
            React.createElement("li", { onClick: function () { return navigate('/my-profile'); } },
                React.createElement("span", { className: "dropdown-item cursor-pointer" },
                    React.createElement("i", { className: "bx bx-user me-2" }),
                    React.createElement("span", { className: "align-middle" }, t('My Profile')))),
            React.createElement("li", null,
                React.createElement("span", { className: "dropdown-item cursor-pointer" },
                    React.createElement("i", { className: "bx bx-cog me-2" }),
                    React.createElement("span", { className: "align-middle" }, t('Settings')))),
            React.createElement("li", null,
                React.createElement("div", { className: "dropdown-divider" })),
            React.createElement("li", null,
                React.createElement("span", { className: "dropdown-item cursor-pointer", onClick: function () {
                        del(StoreKeys.Profile);
                        del(StoreKeys.Token);
                        window.location.reload();
                    } },
                    React.createElement("i", { className: "bx bx-power-off me-2" }),
                    React.createElement("span", { className: "align-middle" }, t('Log Out')))))));
};
