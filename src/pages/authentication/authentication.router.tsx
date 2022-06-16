import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthenticationRouterProps } from './types';
import { AUTHENTICATION_ROUTER_MAP_COMPONENTS } from './constants';

export const AuthenticationRouter = ({ flow }: AuthenticationRouterProps) => (
    <Routes>
        {flow?.map((key) => (
            <Route
                key={key}
                path={AUTHENTICATION_ROUTER_MAP_COMPONENTS[key].path}
                element={AUTHENTICATION_ROUTER_MAP_COMPONENTS[key].element}
            />
        ))}

        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
);
