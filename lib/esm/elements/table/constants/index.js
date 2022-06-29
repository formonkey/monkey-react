var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { Avatar, AvatarGroups } from '../../avatars';
export var TABLE_ELEMENT_CUSTOM = {
    add: function (conf, value, data) { return "".concat(value, " ").concat(data[conf.key]); },
    // parsed: (conf: any, value: string) => `${value[conf.key]}`,
    parsed: function (conf, value) { return "".concat((value && value[conf.key]) || '-'); },
    boolean: function (_, value) {
        return value ? (React.createElement("span", { className: "badge badge-center rounded-pill bg-success" },
            React.createElement("i", { className: "bx bx-check" }))) : (React.createElement("span", { className: "badge badge-center rounded-pill bg-danger" },
            React.createElement("i", { className: "bx bx-x" })));
    },
    tags: function (conf, value) {
        return value === null || value === void 0 ? void 0 : value.map(function (tag, idx) { return (React.createElement("span", { key: idx, className: "badge rounded-pill bg-label-primary" }, tag[conf.key])); });
    },
    avatar: function (conf, value, data) {
        if (Array.isArray(value)) {
            return React.createElement(AvatarGroups, { conf: conf, data: value });
        }
        else {
            return React.createElement(Avatar, __assign({}, data));
        }
    },
};
