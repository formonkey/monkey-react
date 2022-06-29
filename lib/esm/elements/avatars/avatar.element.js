import React, { useEffect, useState } from 'react';
import { AvatarSize, AvatarType } from './enums';
export var Avatar = function (_a) {
    var _b = _a.size, size = _b === void 0 ? AvatarSize.Normal : _b, url = _a.url, name = _a.name, lastName = _a.lastName, _c = _a.type, type = _c === void 0 ? AvatarType.Circle : _c;
    var _d = useState(''), image = _d[0], setImage = _d[1];
    var _e = useState(''), initials = _e[0], setInitials = _e[1];
    useEffect(function () {
        if (name && lastName) {
            setInitials("".concat(name[0]).concat(lastName[0]));
        }
    }, [name, lastName]);
    useEffect(function () {
        setImage(url || '');
    }, [url]);
    return image || initials ? (image ? (React.createElement("div", { className: "avatar avatar-".concat(size) },
        React.createElement("img", { src: image, alt: "Avatar", className: type }))) : (React.createElement("div", { className: "avatar avatar-".concat(size, " me-2") },
        React.createElement("span", { className: "avatar-initial ".concat(type, " bg-label-info") }, initials)))) : null;
};
