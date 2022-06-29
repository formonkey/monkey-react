import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Authentication, Platform } from '../pages';
import { HttpClient, MonkeyConf, useStore, StoreKeys } from '../elements';

export const Bootstrap = () => {
    const { get } = useStore();
    const [logged, setLogged] = useState<boolean>(false);

    useEffect(() => {
        if (get(StoreKeys.Token)) {
            setLogged(true);
        }
    }, []);

    return (
        <MonkeyConf>
            {logged ? (
                <Router>
                    <Platform />
                </Router>
            ) : (
                <Router>
                    <Authentication />
                </Router>
            )}
        </MonkeyConf>
    );
};
