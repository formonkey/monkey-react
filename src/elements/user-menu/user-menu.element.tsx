import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import { useHttpClient } from "../http-client";
import { useMonkeyConf } from "../monkey-conf";
import { StoreKeys, useStore } from "../store";

export const UserMenu = () => {
    const { t } = useTranslation();
    const { profile } = useMonkeyConf();
    const { set, del } = useStore();
    const [data, setData] = useState<any>({});
    const { api, state } = useHttpClient();

    useEffect(() => {
        if (profile) {
            del(StoreKeys.Profile);
            api(profile.endpoint, "GET");
        }
    }, []);

    useEffect(() => {
        if (state.data) {
            set(StoreKeys.Profile, state.data);
            setData(state.data);
        } else if (state.error) {
            del(StoreKeys.Profile);
            del(StoreKeys.Token);
        }
    }, [state.data, state.error]);

    return (
        <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <a
                className="nav-link dropdown-toggle hide-arrow"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
            >
                <div className="avatar avatar-online">
                    <img
                        src="https://www.getbillage.com/files/user/avatar/_usuario.png"
                        alt=""
                        className="w-px-40 h-auto rounded-circle"
                    />
                </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
                <li>
                    <a
                        className="dropdown-item"
                        href="pages-account-settings-account.html"
                    >
                        <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                                <div className="avatar avatar-online">
                                    <img
                                        src="https://www.getbillage.com/files/user/avatar/_usuario.png"
                                        alt=""
                                        className="w-px-40 h-auto rounded-circle"
                                    />
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <span className="fw-semibold d-block">
                                    {data[profile.firstName]}{" "}
                                    {data[profile.lastName]}
                                </span>
                                <small className="text-muted">
                                    {data.roles?.indexOf("admin") >= 0
                                        ? "Admin"
                                        : "User"}
                                </small>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <div className="dropdown-divider"></div>
                </li>
                <li>
                    <span className="dropdown-item cursor-pointer">
                        <i className="bx bx-user me-2"></i>
                        <span className="align-middle">{t("My Profile")}</span>
                    </span>
                </li>
                <li>
                    <span className="dropdown-item cursor-pointer">
                        <i className="bx bx-cog me-2"></i>
                        <span className="align-middle">{t("Settings")}</span>
                    </span>
                </li>
                <li>
                    <div className="dropdown-divider"></div>
                </li>
                <li>
                    <span
                        className="dropdown-item cursor-pointer"
                        onClick={() => {
                            del(StoreKeys.Profile);
                            del(StoreKeys.Token);
                            window.location.reload();
                        }}
                    >
                        <i className="bx bx-power-off me-2"></i>
                        <span className="align-middle">{t("Log Out")}</span>
                    </span>
                </li>
            </ul>
        </li>
    );
};
