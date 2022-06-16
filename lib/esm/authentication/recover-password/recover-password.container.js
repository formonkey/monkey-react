import React, { useState } from 'react';
import { RECOVER_PASSWORD_EMAIL_FORM_SCHEMA } from './constants';
import { Form, useMonkeyConf, Input, Button, useHttpClient, } from '../../elements';
import { useNavigate } from 'react-router-dom';
export var RecoverPassword = Form(RECOVER_PASSWORD_EMAIL_FORM_SCHEMA)(function (_a) {
    var onChange = _a.onChange, form = _a.form, disabled = _a.disabled;
    var navigate = useNavigate();
    var api = useHttpClient().api;
    var recoverPassword = useMonkeyConf().recoverPassword;
    var _b = useState(false), success = _b[0], setSuccess = _b[1];
    var onSubmit = function () {
        setSuccess(true);
        api(recoverPassword.endpoint, 'POST', form);
        setTimeout(function () {
            navigate('/login');
        }, 5000);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "mb-2" }, "Forgot Password? \uD83D\uDD12"),
        success && (React.createElement("div", { className: "alert alert-success", role: "alert" }, "An email has been sent with a link to change the password.")),
        React.createElement("p", { className: "mb-4" }, "Enter your email and we'll send you instructions to reset your password"),
        React.createElement("div", { className: "mb-3" },
            React.createElement(Input, { type: "text", onChange: onChange, label: recoverPassword.fields[0], name: recoverPassword.fields[0], placeholder: recoverPassword.fields[0] }),
            React.createElement(Button, { text: "Send Reset Link", onClick: onSubmit, disabled: disabled }))));
});
