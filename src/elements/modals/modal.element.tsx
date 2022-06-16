import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { ModalProvider } from './contexts';

export const Modal = ({ children }: any) => {
    const { t } = useTranslation();
    const [config, setConfig] = useState<any>({});
    const [open, setOpen] = useState<boolean>(false);
    const [Component, setComponent] = useState<JSX.Element>(<></>);

    const handleOpen = (Element: JSX.Element, config: { title: string; subTitle: string }) => {
        setComponent(Element);
        setConfig(config);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setConfig({});
        setComponent(<></>);
    };

    return (
        <ModalProvider value={{ close: handleClose, open: handleOpen }}>
            {children}

            <div
                className={`modal fade ${open ? 'show' : ''}`}
                tabIndex={-1}
                style={{ display: open ? 'block' : 'none', paddingLeft: '0px' }}
                aria-modal="true"
                role="dialog"
            >
                <div className="modal-dialog modal-lg modal-simple modal-edit-user">
                    <div className="modal-content p-3 p-md-5">
                        <div className="modal-body">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="btn-close"
                            ></button>
                            <div className="text-center mb-4">
                                <h3>{t(config.title)}</h3>
                                <p>{t(config.subTitle)}</p>
                            </div>

                            {Component}
                        </div>
                    </div>
                </div>
            </div>

            {open ? <div className={`modal-backdrop fade show`} onClick={handleClose} /> : <></>}
        </ModalProvider>
    );
};
