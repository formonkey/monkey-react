import React from 'react';
import { useTranslation } from 'react-i18next';
export var Button = function (_a) {
    var text = _a.text, onClick = _a.onClick, disabled = _a.disabled, isLoading = _a.isLoading;
    var t = useTranslation().t;
    return (React.createElement("div", { className: "mb-3" },
        React.createElement("button", { className: "btn btn-primary d-grid w-100", type: "button", onClick: onClick, disabled: disabled }, isLoading ? (React.createElement("div", { className: "spinner-border m-auto" },
            React.createElement("span", { className: "sr-only" }, t('Loading ...')))) : (t(text)))));
};
