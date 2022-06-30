import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { Authentication, Platform } from '../pages';
import { MonkeyConf, useStore, StoreKeys } from '../elements';

export const Bootstrap = ({ customRoutes = {} }: { [name: string]: any }) => {
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
                    <Platform customRoutes={customRoutes} />
                </Router>
            ) : (
                <Router>
                    <Authentication />
                </Router>
            )}
        </MonkeyConf>
    );
};
