import React, { useEffect } from 'react';
import { LOGIN_FORM_EMAIL_SCHEMA } from './constants';
import { Form, Input, Button, Password, Checkbox, useMonkeyConf, useHttpClient, useStore, StoreKeys, } from '../../elements';
import { useTranslation } from 'react-i18next';
export var Login = Form(LOGIN_FORM_EMAIL_SCHEMA)(function (_a) {
    var onChange = _a.onChange, form = _a.form, disabled = _a.disabled;
    var set = useStore().set;
    var t = useTranslation().t;
    var _b = useHttpClient(), api = _b.api, state = _b.state, setError = _b.setError;
    var _c = useMonkeyConf(), name = _c.name, login = _c.login, authenticationFlow = _c.authenticationFlow;
    var onSubmit = function () {
        api(login.endpoint, 'POST', form);
    };
    useEffect(function () {
        if (state.error && !state.isLoading) {
            setError(null);
        }
    }, [form]);
    useEffect(function () {
        if (state.data) {
            set(StoreKeys.Token, state.data);
            window.location.reload();
        }
    }, [state]);
    return (React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "mb-2" },
            t('Welcome to'),
            " ",
            name,
            "! \uD83D\uDC4B"),
        React.createElement("p", { className: "mb-2" }, "Please sign-in to your account and start the adventure"),
        React.createElement("div", { className: "mb-3" },
            React.createElement(Input, { t: t, type: "text", form: form, onChange: onChange, name: login.fields[0], label: login.fields[0], placeholder: login.fields[0] }),
            React.createElement(Password, { t: t, onChange: onChange, name: login.fields[1], label: login.fields[1], placeholder: login.fields[1], link: authenticationFlow.indexOf('recover-password') > -1
                    ? '/recover-password'
                    : '' }),
            React.createElement(Checkbox, { t: t, name: "remember", label: "Remember me", onChange: function () { return null; } }),
            state.error && (React.createElement("div", { className: "alert alert-danger", role: "alert" }, "Incorrect username or password, try again!")),
            React.createElement(Button, { text: "Sign in", onClick: onSubmit, disabled: disabled, isLoading: state.isLoading })),
        authenticationFlow.indexOf('register') > -1 && (React.createElement("p", { className: "text-center" },
            React.createElement("span", null, "New on our platform?"),
            React.createElement("a", { href: "auth-register-basic.html" },
                React.createElement("span", null, "Create an account"))))));
});
