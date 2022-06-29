import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useFileUpload } from "use-file-upload";
import { useMonkeyConf, useStore, StoreKeys, Widgets } from "../../elements";
import { Avatar } from "../../elements/avatars";
export var MyProfile = function () {
    var _a, _b, _c;
    var conf = useMonkeyConf().myProfile;
    var get = useStore().get;
    var t = useTranslation().t;
    var _d = useState({}), data = _d[0], setData = _d[1];
    var _e = useFileUpload(), file = _e[0], selectFile = _e[1];
    var _f = useState((_a = conf.tabs[0]) === null || _a === void 0 ? void 0 : _a.name), current = _f[0], setCurrent = _f[1];
    var _g = useState(conf.tabs[0]), widgetConf = _g[0], setWidgetConf = _g[1];
    useEffect(function () {
        var profile = get(StoreKeys.Profile);
        if (profile) {
            setData(profile);
        }
    }, []);
    useEffect(function () {
        console.log("My profile file", file);
    }, [file]);
    return (React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "fw-bold py-3 mb-4" },
            React.createElement("span", { className: "text-muted fw-light" }, t(conf.title))),
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-12" },
                React.createElement("div", { className: "card mb-4" },
                    React.createElement("div", { className: "user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-3" },
                        React.createElement("div", { className: "flex-shrink-0 mt-n2 mx-sm-0 mx-auto" },
                            React.createElement("div", { className: "d-block h-auto ms-0 ms-sm-4 rounded user-profile-img mt-sm-4" },
                                React.createElement(Avatar, { name: data === null || data === void 0 ? void 0 : data[conf.name], lastName: data === null || data === void 0 ? void 0 : data[conf.lastName], size: "xl", url: file === null || file === void 0 ? void 0 : file.source }))),
                        React.createElement("div", { className: "flex-grow-1 mt-3 mt-sm-3" },
                            React.createElement("div", { className: "d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4" },
                                React.createElement("div", { className: "user-profile-info" },
                                    React.createElement("h4", null, "".concat(data[conf.name], " ").concat(data[conf.lastName])),
                                    React.createElement("div", { className: "list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2" }, (_b = conf.actions) === null || _b === void 0 ? void 0 : _b.map(function (action, idx) {
                                        return action.type === "upload" ? (React.createElement("button", { key: idx, type: "button", onClick: function () {
                                                return selectFile(action.accept, action.multiple);
                                            }, className: "btn btn-sm btn-outline-secondary" },
                                            React.createElement("span", { className: "tf-icons bx bx-image" }),
                                            "\u00A0",
                                            " ",
                                            t(action.label))) : null;
                                    }))))))))),
        conf.tabs.length > 1 ? (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("ul", { className: "nav nav-pills flex-column flex-sm-row mb-4" }, (_c = conf.tabs) === null || _c === void 0 ? void 0 : _c.map(function (tab, idx) { return (React.createElement("li", { key: idx, className: "nav-item", onClick: function () {
                        setWidgetConf(tab);
                        setCurrent(tab.name);
                    } },
                    React.createElement("span", { className: "nav-link cursor-pointer ".concat(current === tab.name ? "active" : "") },
                        React.createElement("i", { className: "bx bx-".concat(tab.icon) }),
                        t(tab.label)))); }))))) : null,
        (widgetConf === null || widgetConf === void 0 ? void 0 : widgetConf.widgets) && (React.createElement(Widgets, { id: data[conf.id], conf: widgetConf }))));
};
