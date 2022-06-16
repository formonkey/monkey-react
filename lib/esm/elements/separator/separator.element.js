import React from 'react';
export var Separator = function (_a) {
    var t = _a.t, label = _a.label;
    return (React.createElement("div", { className: "divider divider-dashed" },
        React.createElement("div", { className: "divider-text" }, t(label))));
};
