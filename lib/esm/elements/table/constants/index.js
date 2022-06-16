import React from 'react';
export var TABLE_ELEMENT_CUSTOM = {
    add: function (conf, value, data) { return "".concat(value, " ").concat(data[conf.key]); },
    // parsed: (conf: any, value: string) => `${value[conf.key]}`,
    parsed: function (conf, value) { return "".concat((value && value[conf.key]) || '-'); },
    boolean: function (_, value) {
        return value ? (React.createElement("span", { className: 'badge badge-center rounded-pill bg-success' },
            React.createElement("i", { className: 'bx bx-check' }))) : (React.createElement("span", { className: 'badge badge-center rounded-pill bg-danger' },
            React.createElement("i", { className: 'bx bx-x' })));
    },
    tags: function (conf, value) {
        return value.map(function (tag, idx) { return (React.createElement("span", { key: idx, className: "badge rounded-pill bg-label-primary" }, tag[conf.key])); });
    },
};
