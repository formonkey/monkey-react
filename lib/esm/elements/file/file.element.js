import React from 'react';
export var File = function (_a) {
    var label = _a.label, accept = _a.accept, multiple = _a.multiple, name = _a.name, t = _a.t;
    return (React.createElement("div", { className: "mb-3" },
        React.createElement("label", { htmlFor: "file-".concat(name), className: "btn btn btn-outline-primary" },
            React.createElement("i", { className: "bx-upload bx bx-pie-chart-alt" }),
            React.createElement("span", { className: "px-2 pt-2" }, t(label))),
        React.createElement("input", { type: "file", accept: accept, id: "file-".concat(name), multiple: multiple, style: { display: 'none' } })));
};
