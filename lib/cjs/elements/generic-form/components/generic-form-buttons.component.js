"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericFormButtons = void 0;
var react_1 = __importDefault(require("react"));
var GenericFormButtons = function (_a) {
    var config = _a.config, step = _a.step, onSubmit = _a.onSubmit, onStep = _a.onStep, close = _a.close, t = _a.t;
    var nextStep = function () {
        onStep('next');
    };
    var toggleCallback = function () {
        step === 0 ? close() : onStep();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, !config.multiple || step + 1 === config.fields.length ? (react_1.default.createElement("div", { className: "g-2" },
        react_1.default.createElement("button", { type: "button", className: "btn m-2 btn-label-secondary", "data-bs-dismiss": "modal", onClick: close }, t('Cancel')),
        react_1.default.createElement("button", { type: "button", className: "btn btn-primary", onClick: onSubmit }, t('Save changes')))) : config.multiple && step + 1 < config.fields.length ? (react_1.default.createElement("div", { className: "g-2" },
        react_1.default.createElement("button", { type: "button", className: "btn m-2 btn-label-secondary", "data-bs-dismiss": "modal", onClick: toggleCallback }, t(step === 0 ? 'Cancel' : 'Prev Step')),
        !config.async ? (react_1.default.createElement("button", { type: "button", className: "btn btn-primary", onClick: nextStep }, t('Next Step'))) : (react_1.default.createElement("button", { type: "button", className: "btn btn-primary", onClick: onSubmit }, t('Save Temporal Data'))))) : (react_1.default.createElement(react_1.default.Fragment, null))));
};
exports.GenericFormButtons = GenericFormButtons;
