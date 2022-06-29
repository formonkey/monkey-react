import React from 'react';
export var Tags = function (_a) {
    var _b;
    var form = _a.form, name = _a.name, keys = _a.keys;
    return (React.createElement("div", { className: "mb-4" }, ((_b = form === null || form === void 0 ? void 0 : form[name]) === null || _b === void 0 ? void 0 : _b.length) &&
        (form === null || form === void 0 ? void 0 : form[name].map(function (element) { return (React.createElement("span", { className: "badge bg-label-secondary me-1 mb-1" }, keys.map(function (key) { return element[key]; }).join(';'))); }))));
};
