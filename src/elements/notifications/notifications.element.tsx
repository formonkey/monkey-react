import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import { useHttpClient } from "../http-client";
import { useMonkeyConf } from "../monkey-conf";

export const Notifications = () => {
    const [data] = useState([]);
    const { t } = useTranslation();
    const { api } = useHttpClient();
    const { notifications } = useMonkeyConf();

    useEffect(() => {
        if (notifications) {
            api(notifications.endpoint, "GET");
        }
    }, []);

    return (
        <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
            <a
                className="nav-link dropdown-toggle hide-arrow"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
                <i className="bx bx-bell bx-sm"></i>
                {data.length ? (
                    <span className="badge bg-danger rounded-pill badge-notifications">
                        {data.length}
                    </span>
                ) : (
                    <></>
                )}
            </a>
            {data.length ? (
                <ul className="dropdown-menu dropdown-menu-end py-0">
                    <li className="dropdown-menu-header border-bottom">
                        <div className="dropdown-header d-flex align-items-center py-3">
                            <h5 className="text-body mb-0 me-auto">
                                {t("Notification")}
                            </h5>
                            <a
                                href="javascript:void(0)"
                                className="dropdown-notifications-all text-body"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                            >
                                <i className="bx fs-4 bx-envelope-open"></i>
                            </a>
                        </div>
                    </li>
                    <li className="dropdown-notifications-list scrollable-container">
                        <ul className="list-group list-group-flush">
                            {data.map((_, idx) => (
                                <li
                                    key={idx}
                                    className="list-group-item list-group-item-action dropdown-notifications-item"
                                >
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 me-3">
                                            <div className="avatar">
                                                <img
                                                    src="../../assets/img/avatars/1.png"
                                                    alt=""
                                                    className="w-px-40 h-auto rounded-circle"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">
                                                Congratulation Lettie 🎉
                                            </h6>
                                            <p className="mb-0">
                                                Won the monthly best seller gold
                                                badge
                                            </p>
                                            <small className="text-muted">
                                                1h ago
                                            </small>
                                        </div>
                                        <div className="flex-shrink-0 dropdown-notifications-actions">
                                            <a
                                                href="javascript:void(0)"
                                                className="dropdown-notifications-read"
                                            >
                                                <span className="badge badge-dot"></span>
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="dropdown-notifications-archive"
                                            >
                                                <span className="bx bx-x"></span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </li>
                    {data.length > 5 ? (
                        <li className="dropdown-menu-footer border-top">
                            <a
                                href="javascript:void(0);"
                                className="dropdown-item d-flex justify-content-center p-3"
                            >
                                {t("View all notifications")}
                            </a>
                        </li>
                    ) : (
                        <></>
                    )}
                </ul>
            ) : (
                <></>
            )}
        </li>
    );
};
