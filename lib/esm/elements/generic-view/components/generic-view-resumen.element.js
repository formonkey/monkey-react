import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHttpClient } from "../../http-client";
import { useMonkeyConf } from "../../monkey-conf";
export var GenericViewResumen = function (_a) {
    var resume = _a.resume, meta = _a.meta;
    var t = useTranslation().t;
    var _b = useHttpClient(), api = _b.api, state = _b.state;
    var _c = useState([]), data = _c[0], setData = _c[1];
    var queries = useMonkeyConf().queries;
    useEffect(function () {
        if (resume.endpoint) {
            api("".concat(resume.endpoint), "GET");
        }
        return function () {
            if (data.length) {
                setData([]);
            }
        };
    }, []);
    useEffect(function () {
        if (state.data) {
            setData(state.data[resume.data]);
        }
    }, [state.data]);
    return (React.createElement("div", { className: "card" },
        React.createElement("div", { className: "card-body" },
            React.createElement("div", { className: "d-flex align-items-start justify-content-between" },
                React.createElement("div", { className: "content-left" },
                    React.createElement("span", null, t(resume.title)),
                    React.createElement("div", { className: "d-flex align-items-end mt-2" },
                        React.createElement("h2", { className: "mb-0 me-2" }, data.length),
                        React.createElement("small", { className: "text-primary sm" },
                            "(",
                            ((data.length * 100) /
                                meta[queries.pagination.total]).toFixed(2),
                            "%)")),
                    React.createElement("small", null, t(resume.label))),
                React.createElement("span", { className: "badge bg-label-primary rounded p-2" },
                    React.createElement("i", { className: "bx ".concat(resume.icon, " bx-sm") }))))));
};
