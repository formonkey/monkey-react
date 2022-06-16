import React from 'react';

export const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div className="mb-2 mb-md-0">
                    ©{date} By
                    <a
                        href="https://www.xtremis.com/"
                        target="_blank"
                        className="footer-link fw-bolder"
                    >
                        Xtremis
                    </a>
                </div>
                <div />
            </div>
        </footer>
    );
};
