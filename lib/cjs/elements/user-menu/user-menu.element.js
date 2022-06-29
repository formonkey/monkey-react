"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMenu = void 0;
var react_1 = __importStar(require("react"));
var react_i18next_1 = require("react-i18next");
var react_router_dom_1 = require("react-router-dom");
var avatars_1 = require("../avatars");
var http_client_1 = require("../http-client");
var monkey_conf_1 = require("../monkey-conf");
var store_1 = require("../store");
var UserMenu = function () {
    var _a;
    var t = (0, react_i18next_1.useTranslation)().t;
    var profile = (0, monkey_conf_1.useMonkeyConf)().profile;
    var _b = (0, store_1.useStore)(), set = _b.set, del = _b.del;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _c = (0, react_1.useState)({}), data = _c[0], setData = _c[1];
    var _d = (0, http_client_1.useHttpClient)(), api = _d.api, state = _d.state;
    (0, react_1.useEffect)(function () {
        if (profile) {
            del(store_1.StoreKeys.Profile);
            api(profile.endpoint, 'GET');
        }
    }, []);
    (0, react_1.useEffect)(function () {
        if (state.data) {
            set(store_1.StoreKeys.Profile, state.data);
            setData(state.data);
        }
        else if (state.error) {
            del(store_1.StoreKeys.Profile);
            del(store_1.StoreKeys.Token);
        }
    }, [state.data, state.error]);
    return (react_1.default.createElement("li", { className: "nav-item navbar-dropdown dropdown-user dropdown" },
        react_1.default.createElement("a", { className: "nav-link dropdown-toggle hide-arrow", href: "javascript:void(0);", "data-bs-toggle": "dropdown" },
            react_1.default.createElement(avatars_1.Avatar, { name: data === null || data === void 0 ? void 0 : data[profile.firstName], lastName: data === null || data === void 0 ? void 0 : data[profile.lastName] })),
        react_1.default.createElement("ul", { className: "dropdown-menu dropdown-menu-end" },
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { className: "dropdown-item", href: "pages-account-settings-account.html" },
                    react_1.default.createElement("div", { className: "d-flex" },
                        react_1.default.createElement("div", { className: "flex-shrink-0 me-3" },
                            react_1.default.createElement(avatars_1.Avatar, { name: data === null || data === void 0 ? void 0 : data[profile.firstName], lastName: data === null || data === void 0 ? void 0 : data[profile.lastName] })),
                        react_1.default.createElement("div", { className: "flex-grow-1" },
                            react_1.default.createElement("span", { className: "fw-semibold d-block" },
                                data[profile.firstName],
                                " ",
                                data[profile.lastName]),
                            react_1.default.createElement("small", { className: "text-muted" }, ((_a = data.roles) === null || _a === void 0 ? void 0 : _a.indexOf(profile.administrator)) >= 0
                                ? t('Admin')
                                : t('User')))))),
            react_1.default.createElement("li", null,
                react_1.default.createElement("div", { className: "dropdown-divider" })),
            react_1.default.createElement("li", { onClick: function () { return navigate('/my-profile'); } },
                react_1.default.createElement("span", { className: "dropdown-item cursor-pointer" },
                    react_1.default.createElement("i", { className: "bx bx-user me-2" }),
                    react_1.default.createElement("span", { className: "align-middle" }, t('My Profile')))),
            react_1.default.createElement("li", null,
                react_1.default.createElement("span", { className: "dropdown-item cursor-pointer" },
                    react_1.default.createElement("i", { className: "bx bx-cog me-2" }),
                    react_1.default.createElement("span", { className: "align-middle" }, t('Settings')))),
            react_1.default.createElement("li", null,
                react_1.default.createElement("div", { className: "dropdown-divider" })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("span", { className: "dropdown-item cursor-pointer", onClick: function () {
                        del(store_1.StoreKeys.Profile);
                        del(store_1.StoreKeys.Token);
                        window.location.reload();
                    } },
                    react_1.default.createElement("i", { className: "bx bx-power-off me-2" }),
                    react_1.default.createElement("span", { className: "align-middle" }, t('Log Out')))))));
};
exports.UserMenu = UserMenu;
