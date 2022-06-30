import React from 'react';

import { Menu, NavBar, Footer } from '../../elements';
import { PlatformRouter } from './platform.router';

export const Platform = ({ customRoutes }: any) => (
    <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
            <Menu />
            <div className="layout-page">
                <NavBar />

                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <PlatformRouter customRoutes={customRoutes} />
                    </div>

                    <Footer />

                    <div className="content-backdrop fade"></div>
                </div>
            </div>
        </div>

        <div className="layout-overlay layout-menu-toggle"></div>

        <div className="drag-target"></div>
    </div>
);
