import React from 'react';

export const WidgetList = () => {
    return (
        <div className="card card-action mb-4">
            <div className="card-header align-items-center">
                <h5 className="card-action-title mb-0">Connections</h5>
                <div className="card-action-element">
                    <div className="dropdown">
                        <button
                            type="button"
                            className="btn dropdown-toggle hide-arrow p-0"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <a className="dropdown-item" href="javascript:void(0);">
                                    Share connections
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="javascript:void(0);">
                                    Suggest edits
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="javascript:void(0);">
                                    Report bug
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                        <div className="d-flex align-items-start">
                            <div className="d-flex align-items-start">
                                <div className="avatar me-3">
                                    <img
                                        src="../../assets/img/avatars/2.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                    />
                                </div>
                                <div className="me-2">
                                    <h6 className="mb-0">Cecilia Payne</h6>
                                    <small className="text-muted">45 Connections</small>
                                </div>
                            </div>
                            <div className="ms-auto">
                                <button className="btn btn-label-primary btn-icon btn-sm">
                                    <i className="bx bx-user" />
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="d-flex align-items-start">
                            <div className="d-flex align-items-start">
                                <div className="avatar me-3">
                                    <img
                                        src="../../assets/img/avatars/3.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                    />
                                </div>
                                <div className="me-2">
                                    <h6 className="mb-0">Curtis Fletcher</h6>
                                    <small className="text-muted">1.32k Connections</small>
                                </div>
                            </div>
                            <div className="ms-auto">
                                <button className="btn btn-primary btn-icon btn-sm">
                                    <i className="bx bx-user" />
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="d-flex align-items-start">
                            <div className="d-flex align-items-start">
                                <div className="avatar me-3">
                                    <img
                                        src="../../assets/img/avatars/10.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                    />
                                </div>
                                <div className="me-2">
                                    <h6 className="mb-0">Alice Stone</h6>
                                    <small className="text-muted">125 Connections</small>
                                </div>
                            </div>
                            <div className="ms-auto">
                                <button className="btn btn-primary btn-icon btn-sm">
                                    <i className="bx bx-user" />
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="d-flex align-items-start">
                            <div className="d-flex align-items-start">
                                <div className="avatar me-3">
                                    <img
                                        src="../../assets/img/avatars/7.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                    />
                                </div>
                                <div className="me-2">
                                    <h6 className="mb-0">Darrell Barnes</h6>
                                    <small className="text-muted">456 Connections</small>
                                </div>
                            </div>
                            <div className="ms-auto">
                                <button className="btn btn-label-primary btn-icon btn-sm">
                                    <i className="bx bx-user" />
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="d-flex align-items-start">
                            <div className="d-flex align-items-start">
                                <div className="avatar me-3">
                                    <img
                                        src="../../assets/img/avatars/12.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                    />
                                </div>
                                <div className="me-2">
                                    <h6 className="mb-0">Eugenia Moore</h6>
                                    <small className="text-muted">1.2k Connections</small>
                                </div>
                            </div>
                            <div className="ms-auto">
                                <button className="btn btn-label-primary btn-icon btn-sm">
                                    <i className="bx bx-user" />
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="text-center">
                        <a href="javascript:;">View all connections</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
