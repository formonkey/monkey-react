import React from 'react';
export var Password = function (_a) {
    var t = _a.t, label = _a.label, link = _a.link, name = _a.name, placeholder = _a.placeholder, onChange = _a.onChange;
    var handleChange = function (e) {
        var _a;
        onChange((_a = {}, _a[name] = e.target.value, _a));
    };
    return (React.createElement("div", { className: "mb-3 form-password-toggle" },
        React.createElement("div", { className: "d-flex justify-content-between" },
            React.createElement("label", { className: "form-label", htmlFor: "password" }, t(label)),
            link && (React.createElement("a", { href: link },
                React.createElement("small", null, t('Forgot Password?'))))),
        React.createElement("div", { className: "input-group input-group-merge" },
            React.createElement("input", { id: name, name: name, type: "password", onChange: handleChange, className: "form-control", placeholder: t(placeholder), "aria-describedby": "password" }),
            React.createElement("span", { className: "input-group-text cursor-pointer" },
                React.createElement("i", { className: "bx bx-hide" })))));
};
