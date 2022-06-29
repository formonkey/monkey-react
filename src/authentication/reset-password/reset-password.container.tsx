import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { RESET_PASSWORD_FORM_SCHEMA } from './constants';

import {
    Password,
    Button,
    Form,
    FormElementProps,
    useHttpClient,
    useMonkeyConf,
} from '../../elements';

export const ResetPassword = Form(RESET_PASSWORD_FORM_SCHEMA)(
    ({ form, onChange, disabled }: FormElementProps) => {
        const params = useParams();
        const navigate = useNavigate();
        const [token, setToken] = useState('');
        const { api, state } = useHttpClient();
        const { resetPassword } = useMonkeyConf();

        useEffect(() => {
            if (!token && params.token) {
                setToken(params.token);
            }
        }, []);

        useEffect(() => {
            if (token) {
                api(resetPassword.validateToken, 'POST', { token });
            }
        }, [token]);

        useEffect(() => {
            if (
                (state.path === resetPassword.validateToken && state.error) ||
                (state.path === resetPassword.endpoint && state.data)
            ) {
                navigate('/');
            }
        }, [state]);

        const handleSubmit = () => {
            api(resetPassword.endpoint, 'POST', {
                token,
                password: form.password,
            });
        };

        return (
            <>
                <h4 className="mb-2">Reset Password 🔒</h4>

                <div className="mb-3">
                    <Password
                        name="password"
                        label="New Password"
                        onChange={onChange}
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    />

                    <Password
                        onChange={onChange}
                        name="confirmPassword"
                        label="Confirm Password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    />

                    <Button
                        disabled={disabled}
                        text="Set new password"
                        onClick={handleSubmit}
                        isLoading={!disabled && state.isLoading}
                    />

                    <div className="text-center">
                        <a href="/">
                            <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                            Back to login
                        </a>
                    </div>
                </div>
            </>
        );
    }
);
