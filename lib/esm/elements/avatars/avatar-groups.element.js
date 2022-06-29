import React, { useEffect } from 'react';
export var AvatarGroups = function (_a) {
    var conf = _a.conf, data = _a.data;
    var getRandomColor = function () {
        var colors = conf.randomColors || ['dark'];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    useEffect(function () {
        setTimeout(function () {
            [].slice
                .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                .map(function (tooltipTriggerEl) {
                return new window.bootstrap.Tooltip(tooltipTriggerEl);
            });
        }, 200);
    }, []);
    return (React.createElement("ul", { className: "list-unstyled m-0 d-flex align-items-center avatar-group" }, data === null || data === void 0 ? void 0 :
        data.slice(0, 3).map(function (item, idx) {
            var _a, _b, _c;
            return (React.createElement("li", { key: idx, "data-bs-toggle": "tooltip", "data-popup": "tooltip-custom", "data-bs-placement": "top", title: "".concat(item === null || item === void 0 ? void 0 : item[conf.name], " ").concat(item === null || item === void 0 ? void 0 : item[conf.lastName]), className: "avatar pull-up" }, item.avatar ? (React.createElement("img", { className: "rounded-circle", src: "../../assets/img/avatars/5.png", alt: "Avatar" })) : (React.createElement("span", { className: "avatar-initial rounded-circle bg-label-".concat(getRandomColor()) }, ((_a = item === null || item === void 0 ? void 0 : item[conf.name]) === null || _a === void 0 ? void 0 : _a[0]) + ((_b = item === null || item === void 0 ? void 0 : item[conf.lastName]) === null || _b === void 0 ? void 0 : _b[0]) ||
                ((_c = item === null || item === void 0 ? void 0 : item[conf.name]) === null || _c === void 0 ? void 0 : _c[1])))));
        }),
        data.length > 3 && (React.createElement("div", { className: "avatar" },
            React.createElement("span", { className: "avatar-initial rounded-circle pull-up bg-secondary" }, "+".concat(data.length - 3))))));
};
