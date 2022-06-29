import React from "react";

export const GenericDetailTimeline = () => {
    return (
        <div className="card mb-4">
            <h5 className="card-header">User Activity Timeline</h5>
            <div className="card-body">
                <ul className="timeline">
                    <li className="timeline-item timeline-item-transparent">
                        <span className="timeline-point timeline-point-primary"></span>
                        <div className="timeline-event">
                            <div className="timeline-header mb-1">
                                <h6 className="mb-0">
                                    12 Invoices have been paid
                                </h6>
                                <small className="text-muted">12 min ago</small>
                            </div>
                            <p className="mb-2">
                                Invoices have been paid to the company
                            </p>
                            <div className="d-flex">
                                <a href="javascript:void(0)" className="me-3">
                                    <img
                                        src="../../assets/img/icons/misc/pdf.png"
                                        alt="PDF image"
                                        width="15"
                                        className="me-2"
                                    />
                                    <span className="fw-bold text-body">
                                        invoices.pdf
                                    </span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-item timeline-item-transparent">
                        <span className="timeline-point timeline-point-warning"></span>
                        <div className="timeline-event">
                            <div className="timeline-header mb-1">
                                <h6 className="mb-0">Client Meeting</h6>
                                <small className="text-muted">45 min ago</small>
                            </div>
                            <p className="mb-2">
                                Project meeting with john @10:15am
                            </p>
                            <div className="d-flex flex-wrap">
                                <div className="avatar me-3">
                                    <img
                                        src="../../assets/img/avatars/3.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                    />
                                </div>
                                <div>
                                    <h6 className="mb-0">
                                        Lester McCarthy (Client)
                                    </h6>
                                    <span className="text-muted">
                                        CEO of ThemeSelection
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-item timeline-item-transparent">
                        <span className="timeline-point timeline-point-info"></span>
                        <div className="timeline-event">
                            <div className="timeline-header mb-1">
                                <h6 className="mb-0">
                                    Create a new project for client
                                </h6>
                                <small className="text-muted">2 Day Ago</small>
                            </div>
                            <p className="mb-2">5 team members in a project</p>
                            <div className="d-flex align-items-center avatar-group">
                                <div
                                    className="avatar pull-up"
                                    data-bs-toggle="tooltip"
                                    data-popup="tooltip-custom"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Vinnie Mostowy"
                                >
                                    <img
                                        src="../../assets/img/avatars/5.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                    />
                                </div>
                                <div
                                    className="avatar pull-up"
                                    data-bs-toggle="tooltip"
                                    data-popup="tooltip-custom"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Marrie Patty"
                                >
                                    <img
                                        src="../../assets/img/avatars/12.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                    />
                                </div>
                                <div
                                    className="avatar pull-up"
                                    data-bs-toggle="tooltip"
                                    data-popup="tooltip-custom"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Jimmy Jackson"
                                >
                                    <img
                                        src="../../assets/img/avatars/9.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                    />
                                </div>
                                <div
                                    className="avatar pull-up"
                                    data-bs-toggle="tooltip"
                                    data-popup="tooltip-custom"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Kristine Gill"
                                >
                                    <img
                                        src="../../assets/img/avatars/6.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                    />
                                </div>
                                <div
                                    className="avatar pull-up"
                                    data-bs-toggle="tooltip"
                                    data-popup="tooltip-custom"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Nelson Wilson"
                                >
                                    <img
                                        src="../../assets/img/avatars/14.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-item timeline-item-transparent">
                        <span className="timeline-point timeline-point-success"></span>
                        <div className="timeline-event">
                            <div className="timeline-header mb-1">
                                <h6 className="mb-0">Design Review</h6>
                                <small className="text-muted">5 days Ago</small>
                            </div>
                            <p className="mb-0">
                                Weekly review of freshly prepared design for our
                                new app.
                            </p>
                        </div>
                    </li>
                    <li className="timeline-end-indicator">
                        <i className="bx bx-check-circle"></i>
                    </li>
                </ul>
            </div>
        </div>
    );
};
