import { useState } from 'react';

import { RECOVER_PASSWORD_EMAIL_FORM_SCHEMA } from './constants';
import {
    Form,
    useMonkeyConf,
    Input,
    FormElementProps,
    Button,
    useHttpClient,
} from '../../elements';
import { useNavigate } from 'react-router-dom';

export const RecoverPassword = Form(RECOVER_PASSWORD_EMAIL_FORM_SCHEMA)(
    ({ onChange, form, disabled }: FormElementProps) => {
        const navigate = useNavigate();
        const { api } = useHttpClient();
        const { recoverPassword } = useMonkeyConf();
        const [success, setSuccess] = useState<boolean>(false);

        const onSubmit = () => {
            setSuccess(true);
            api(recoverPassword.endpoint, 'POST', form);

            setTimeout(() => {
                navigate('/login');
            }, 5000);
        };

        return (
            <>
                <h4 className="mb-2">Forgot Password? 🔒</h4>

                {success && (
                    <div className="alert alert-success" role="alert">
                        An email has been sent with a link to change the password.
                    </div>
                )}

                <p className="mb-4">
                    Enter your email and we'll send you instructions to reset your password
                </p>
                <div className="mb-3">
                    <Input
                        type="text"
                        onChange={onChange}
                        label={recoverPassword.fields[0]}
                        name={recoverPassword.fields[0]}
                        placeholder={recoverPassword.fields[0]}
                    />

                    <Button text="Send Reset Link" onClick={onSubmit} disabled={disabled} />
                </div>
            </>
        );
    }
);
