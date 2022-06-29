var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from 'react';
export var File = function (_a) {
    var label = _a.label, accept = _a.accept, multiple = _a.multiple, name = _a.name, onChange = _a.onChange, t = _a.t;
    var handleChange = function (e) {
        var data = [];
        if (e.target.files) {
            var totalFiles_1 = Array.from(e.target.files);
            totalFiles_1.forEach(function (_, idx) {
                var file = e.target.files.item(idx);
                file.text().then(function (txt) {
                    var _a;
                    data = __spreadArray(__spreadArray([], data, true), txt.split('\n').slice(0, txt.split('\n').length - 1), true);
                    if (idx === totalFiles_1.length - 1) {
                        onChange((_a = {}, _a[name] = data.filter(function (e) { return data.includes(e); }), _a));
                    }
                });
            });
        }
    };
    return (React.createElement("div", { className: "mb-3" },
        React.createElement("label", { htmlFor: "file-".concat(name), className: "btn btn btn-outline-primary" },
            React.createElement("i", { className: "bx-upload bx bx-pie-chart-alt" }),
            React.createElement("span", { className: "px-2 pt-2" }, t(label))),
        React.createElement("input", { type: "file", accept: accept, id: "file-".concat(name), multiple: multiple, onChange: handleChange, style: { display: 'none' } })));
};
