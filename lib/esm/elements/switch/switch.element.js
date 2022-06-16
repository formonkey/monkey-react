import React from 'react';
export var Switch = function () {
    return (React.createElement("div", { className: "form-check form-switch mb-2" },
        React.createElement("input", { className: "form-check-input", type: "checkbox", id: "flexSwitchCheckChecked", checked: false }),
        React.createElement("label", { className: "form-check-label", htmlFor: "flexSwitchCheckChecked" }, "Checked switch checkbox input")));
};
