import React, { useEffect } from 'react';

import { LOGIN_FORM_EMAIL_SCHEMA } from './constants';

import {
    Form,
    Input,
    Button,
    Password,
    Checkbox,
    useMonkeyConf,
    FormElementProps,
    useHttpClient,
    useStore,
    StoreKeys,
} from '../../elements';
import { useTranslation } from 'react-i18next';

export const Login = Form(LOGIN_FORM_EMAIL_SCHEMA)(
    ({ onChange, form, disabled }: FormElementProps) => {
        const { set } = useStore();
        const { t } = useTranslation();
        const { api, state, setError } = useHttpClient();
        const { name, login, authenticationFlow } = useMonkeyConf();

        const onSubmit = () => {
            api(login.endpoint, 'POST', form);
        };

        useEffect(() => {
            if (state.error && !state.isLoading) {
                setError(null);
            }
        }, [form]);

        useEffect(() => {
            if (state.data) {
                console.log('Login Data', state.data);
                set(StoreKeys.Token, state.data);
                window.location.reload();
            }
        }, [state]);

        return (
            <>
                <h4 className="mb-2">{t('Welcome to')} {name}! 👋</h4>
                <p className="mb-2">Please sign-in to your account and start the adventure</p>

                <div className="mb-3">
                    <Input
                        t={t}
                        type="text"
                        onChange={onChange}
                        name={login.fields[0]}
                        label={login.fields[0]}
                        placeholder={login.fields[0]}
                    />

                    <Password
                        t={t}
                        onChange={onChange}
                        name={login.fields[1]}
                        label={login.fields[1]}
                        placeholder={login.fields[1]}
                        link={
                            authenticationFlow.indexOf('recover-password') > -1
                                ? '/recover-password'
                                : ''
                        }
                    />

                    <Checkbox t={t} name="remember" label="Remember me" onChange={() => null} />

                    {state.error && (
                        <div className="alert alert-danger" role="alert">
                            Incorrect username or password, try again!
                        </div>
                    )}

                    <Button
                        text="Sign in"
                        onClick={onSubmit}
                        disabled={disabled}
                        isLoading={state.isLoading}
                    />
                </div>

                {authenticationFlow.indexOf('register') > -1 && (
                    <p className="text-center">
                        <span>New on our platform?</span>
                        <a href="auth-register-basic.html">
                            <span>Create an account</span>
                        </a>
                    </p>
                )}
            </>
        );
    }
);
