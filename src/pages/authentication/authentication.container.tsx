import { useMonkeyConf } from '../../elements';
import { AuthenticationRouter } from './authentication.router';

export const Authentication = () => {
    const { name, authenticationFlow } = useMonkeyConf();

    return (
        <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner">
                    <div className="card">
                        <div className="card-body">
                            <div className="app-brand justify-content-center">
                                <a href="index.html" className="app-brand-link gap-2">
                                    <span className="app-brand-logo demo"></span>
                                    <span className="app-brand-text demo text-body fw-bolder">
                                        {name}
                                    </span>
                                </a>
                            </div>

                            <AuthenticationRouter flow={authenticationFlow} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
