import React from "react";

import { useTranslation } from "react-i18next";

import { Theme } from "../theme";
import { UserMenu } from "../user-menu";
import { Language } from "../languages";
import { Notifications } from "../notifications";

export const NavBar = () => {
    const { t } = useTranslation();

    return (
        <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
        >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a className="nav-item nav-link px-0 me-xl-4">
                    <i className="bx bx-menu bx-sm"></i>
                </a>
            </div>

            <div
                className="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
            >
                <div className="navbar-nav align-items-center">
                    <div className="nav-item navbar-search-wrapper mb-0">
                        <a className="nav-item nav-link search-toggler px-0">
                            <i className="bx bx-search bx-sm"></i>
                            <span className="d-none d-md-inline-block text-muted">
                                {t("Search")} (Ctrl+/)
                            </span>
                        </a>
                    </div>
                </div>

                <ul className="navbar-nav flex-row align-items-center ms-auto">
                    <Language />

                    <Theme />

                    <Notifications />

                    <UserMenu />
                </ul>
            </div>

            <div className="navbar-search-wrapper search-input-wrapper d-none">
                <input
                    type="text"
                    aria-label={t("Search...")}
                    placeholder={t("Search...")}
                    className="form-control search-input container-xxl border-0"
                />
                <i className="bx bx-x bx-sm search-toggler cursor-pointer"></i>
            </div>
        </nav>
    );
};
