import React from 'react';
export var GenericFormButtons = function (_a) {
    var config = _a.config, step = _a.step, onSubmit = _a.onSubmit, onStep = _a.onStep, close = _a.close, t = _a.t;
    var nextStep = function () {
        onStep('next');
    };
    var toggleCallback = function () {
        step === 0 ? close() : onStep();
    };
    return (React.createElement(React.Fragment, null, !config.multiple || step + 1 === config.fields.length ? (React.createElement("div", { className: "g-2" },
        React.createElement("button", { type: "button", className: "btn m-2 btn-label-secondary", "data-bs-dismiss": "modal", onClick: close }, t('Cancel')),
        React.createElement("button", { type: "button", className: "btn btn-primary", onClick: onSubmit }, t('Save changes')))) : config.multiple && step + 1 < config.fields.length ? (React.createElement("div", { className: "g-2" },
        React.createElement("button", { type: "button", className: "btn m-2 btn-label-secondary", "data-bs-dismiss": "modal", onClick: toggleCallback }, t(step === 0 ? 'Cancel' : 'Prev Step')),
        !config.async ? (React.createElement("button", { type: "button", className: "btn btn-primary", onClick: nextStep }, t('Next Step'))) : (React.createElement("button", { type: "button", className: "btn btn-primary", onClick: onSubmit }, t('Save Temporal Data'))))) : (React.createElement(React.Fragment, null))));
};
