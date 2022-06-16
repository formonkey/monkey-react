import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RESET_PASSWORD_FORM_SCHEMA } from './constants';
import { Password, Button, Form, useHttpClient, useMonkeyConf, } from '../../elements';
export var ResetPassword = Form(RESET_PASSWORD_FORM_SCHEMA)(function (_a) {
    var form = _a.form, onChange = _a.onChange, disabled = _a.disabled;
    var params = useParams();
    var navigate = useNavigate();
    var _b = useState(''), token = _b[0], setToken = _b[1];
    var _c = useHttpClient(), api = _c.api, state = _c.state;
    var resetPassword = useMonkeyConf().resetPassword;
    useEffect(function () {
        if (!token && params.token) {
            setToken(params.token);
        }
    }, []);
    useEffect(function () {
        if (token) {
            api(resetPassword.validateToken, 'POST', { token: token });
        }
    }, [token]);
    useEffect(function () {
        if ((state.path === resetPassword.validateToken && state.error) ||
            (state.path === resetPassword.endpoint && state.data)) {
            navigate('/');
        }
    }, [state]);
    var handleSubmit = function () {
        api(resetPassword.endpoint, 'POST', {
            token: token,
            password: form.password,
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "mb-2" }, "Reset Password \uD83D\uDD12"),
        React.createElement("div", { className: "mb-3" },
            React.createElement(Password, { name: "password", label: "New Password", onChange: onChange, placeholder: "\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7" }),
            React.createElement(Password, { onChange: onChange, name: "confirmPassword", label: "Confirm Password", placeholder: "\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7" }),
            React.createElement(Button, { disabled: disabled, text: "Set new password", onClick: handleSubmit, isLoading: !disabled && state.isLoading }),
            React.createElement("div", { className: "text-center" },
                React.createElement("a", { href: "/" },
                    React.createElement("i", { className: "bx bx-chevron-left scaleX-n1-rtl bx-sm" }),
                    "Back to login")))));
});
