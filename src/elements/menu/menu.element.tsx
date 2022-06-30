import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';

import { useMonkeyConf } from '../monkey-conf';
import { StoreKeys, useStore } from '../store';

export const Menu = () => {
    const { get } = useStore();
    const { t } = useTranslation();
    const { pathname } = useLocation();
    const [open, setOpen] = useState('');
    const { name, menu } = useMonkeyConf();
    const [generics, setGenerics] = useState<any>([]);
    const [privacies, setPrivacies] = useState<any>([]);

    useEffect(() => {
        const { roles } = get(StoreKeys.Token);

        setPrivacies([
            ...menu.privacy.filter((privacy: any) =>
                privacy.permision
                    ? roles.find((role: string) => privacy.permision.includes(role))
                    : true
            ),
        ]);

        setGenerics([
            ...menu.generic.filter((generic: any) =>
                generic.permision
                    ? roles.find((role: string) => generic.permision.includes(role))
                    : true
            ),
        ]);
    }, []);

    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <a href="/" className="app-brand-link">
                    <span className="app-brand-logo demo"></span>
                    <span className="app-brand-text demo menu-text fw-bolder ms-2">{name}</span>
                </a>

                <div className="layout-menu-toggle menu-link text-large ms-auto">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </div>
            </div>

            <div className="menu-inner-shadow" />

            <ul className="menu-inner py-1">
                {privacies.length && generics.length ? (
                    <li className="menu-header small text-uppercase">
                        <span className="menu-header-text">{t('Privacy')}</span>
                    </li>
                ) : null}

                {privacies.map(
                    (
                        element: {
                            menu: boolean;
                            name: string;
                            path: string;
                            icon: string;
                            children: any[];
                        },
                        index: number
                    ) =>
                        element.menu !== false ? (
                            <li
                                className={`menu-item ${pathname === element.path && 'active'} ${
                                    open === element.path && 'open'
                                }`}
                                key={index}
                            >
                                {element.children ? (
                                    <>
                                        <a
                                            className="menu-link menu-toggle cursor-pointer"
                                            onClick={() =>
                                                setOpen(open !== element.path ? element.path : '')
                                            }
                                        >
                                            <i
                                                className={`menu-icon tf-icons bx ${element.icon}`}
                                            ></i>
                                            <div>{t(element.name)}</div>
                                        </a>

                                        <ul className="menu-sub">
                                            {element.children.map((child) => (
                                                <li className="menu-item">
                                                    <Link
                                                        to={`${element.path}${child.path}`}
                                                        className="menu-link"
                                                    >
                                                        <div>{t(child.name)}</div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link to={element.path} className="menu-link">
                                        <i className={`menu-icon tf-icons bx ${element.icon}`}></i>
                                        <div>{t(element.name)}</div>
                                    </Link>
                                )}
                            </li>
                        ) : null
                )}

                {generics.length && privacies.length ? (
                    <li className="menu-header small text-uppercase">
                        <span className="menu-header-text">{t('Generics')}</span>
                    </li>
                ) : null}

                {generics.map(
                    (
                        element: {
                            menu: boolean;
                            name: string;
                            path: string;
                            icon: string;
                            children: any[];
                        },
                        index: number
                    ) =>
                        element.menu !== false ? (
                            <li
                                className={`menu-item ${pathname.match(element.path) && 'active'} ${
                                    open === element.path && 'open'
                                }`}
                                key={index}
                            >
                                {element.children ? (
                                    <>
                                        <a
                                            className="menu-link menu-toggle cursor-pointer"
                                            onClick={() =>
                                                setOpen(open !== element.path ? element.path : '')
                                            }
                                        >
                                            <i
                                                className={`menu-icon tf-icons bx ${element.icon}`}
                                            ></i>
                                            <div>{t(element.name)}</div>
                                        </a>

                                        <ul className="menu-sub">
                                            {element.children.map((child) => (
                                                <li
                                                    className={`menu-item ${
                                                        pathname ===
                                                            `${element.path}${child.path}` &&
                                                        'active'
                                                    }`}
                                                >
                                                    <Link
                                                        to={`${element.path}${child.path}`}
                                                        className="menu-link"
                                                    >
                                                        <div>{t(child.name)}</div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link to={element.path} className="menu-link">
                                        <i className={`menu-icon tf-icons bx ${element.icon}`}></i>
                                        <div>{t(element.name)}</div>
                                    </Link>
                                )}
                            </li>
                        ) : null
                )}
            </ul>

            <script src="/assets/vendor/js/menu.js" />
        </aside>
    );
};
