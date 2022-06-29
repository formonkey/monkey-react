import { t } from 'i18next';
import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useHttpClient } from '../http-client';
import { GENERIC_DETAIL_ELEMENTS } from './constants';

export const GenericDetail = ({ action, config }: any) => {
    const params = useParams();
    const { api, state } = useHttpClient();
    const [paths, setPaths] = useState<any>({});
    const [detail, setDetail] = useState<any>({});

    useEffect(() => {
        if (action.detail) {
            let detailPath = action.detail.endpoint;
            Object.keys(action.detail.replace).forEach((key: string) => {
                detailPath = detailPath.replace(key, params[action.detail.replace[key]]);
            });

            setPaths({
                detail: detailPath,
            });

            api(detailPath, action.detail.method);
        }
    }, []);

    useEffect(() => {
        if (state.path === paths.detail) {
            setDetail(state.data);
        }
    }, [state]);

    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                    <span className="text-muted fw-light">
                        {`${t(config.name)}/${t('Detail')}/${t(detail?.[action?.detail?.key])}`}
                    </span>
                </h4>
                <div className="row">
                    {action.detail?.elements?.length ? (
                        <div className="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0"></div>
                    ) : null}
                    <div
                        className={
                            action.detail?.elements?.length
                                ? 'col-xl-8 col-lg-7 col-md-7 order-0 order-md-1'
                                : 'col-12 order-0'
                        }
                    >
                        {action.list.length > 1 && (
                            <ul className="nav nav-pills flex-column flex-md-row mb-3">
                                {action.list.map((item: any) => (
                                    <li className="nav-item">
                                        <a className="nav-link active" href="javascript:void(0);">
                                            <i className="bx bx-user me-1"></i> {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {action.list.length
                            ? action.list.map(
                                  (item: any, idx: number) =>
                                      (GENERIC_DETAIL_ELEMENTS as any)[item.element] &&
                                      (GENERIC_DETAIL_ELEMENTS as any)[item.element]({
                                          action,
                                          config,
                                          item,
                                          params,
                                          key: idx,
                                      })
                              )
                            : null}
                    </div>
                </div>
                <div className="modal fade" id="editUser" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-simple modal-edit-user">
                        <div className="modal-content p-3 p-md-5">
                            <div className="modal-body">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                                <div className="text-center mb-4">
                                    <h3>Edit User Information</h3>
                                    <p>Updating user details will receive a privacy audit.</p>
                                </div>
                                <form
                                    id="editUserForm"
                                    className="row g-3 fv-plugins-bootstrap5 fv-plugins-framework"
                                >
                                    <div className="col-12 col-md-6 fv-plugins-icon-container">
                                        <label
                                            className="form-label"
                                            htmlFor="modalEditUserFirstName"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="modalEditUserFirstName"
                                            name="modalEditUserFirstName"
                                            className="form-control"
                                            placeholder="John"
                                        />
                                        <div className="fv-plugins-message-container invalid-feedback"></div>
                                    </div>
                                    <div className="col-12 col-md-6 fv-plugins-icon-container">
                                        <label
                                            className="form-label"
                                            htmlFor="modalEditUserLastName"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="modalEditUserLastName"
                                            name="modalEditUserLastName"
                                            className="form-control"
                                            placeholder="Doe"
                                        />
                                        <div className="fv-plugins-message-container invalid-feedback"></div>
                                    </div>
                                    <div className="col-12 fv-plugins-icon-container">
                                        <label className="form-label" htmlFor="modalEditUserName">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            id="modalEditUserName"
                                            name="modalEditUserName"
                                            className="form-control"
                                            placeholder="john.doe.007"
                                        />
                                        <div className="fv-plugins-message-container invalid-feedback"></div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label" htmlFor="modalEditUserEmail">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            id="modalEditUserEmail"
                                            name="modalEditUserEmail"
                                            className="form-control"
                                            placeholder="example@domain.com"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label" htmlFor="modalEditUserStatus">
                                            Status
                                        </label>
                                        <select
                                            id="modalEditUserStatus"
                                            name="modalEditUserStatus"
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option selected>Status</option>
                                            <option value="1">Active</option>
                                            <option value="2">Inactive</option>
                                            <option value="3">Suspended</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label" htmlFor="modalEditTaxID">
                                            Tax ID
                                        </label>
                                        <input
                                            type="text"
                                            id="modalEditTaxID"
                                            name="modalEditTaxID"
                                            className="form-control modal-edit-tax-id"
                                            placeholder="123 456 7890"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label" htmlFor="modalEditUserPhone">
                                            Phone Number
                                        </label>
                                        <div className="input-group input-group-merge">
                                            <span className="input-group-text">+1</span>
                                            <input
                                                type="text"
                                                id="modalEditUserPhone"
                                                name="modalEditUserPhone"
                                                className="form-control phone-number-mask"
                                                placeholder="202 555 0111"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label
                                            className="form-label"
                                            htmlFor="modalEditUserLanguage"
                                        >
                                            Language
                                        </label>
                                        <div className="position-relative">
                                            <select
                                                id="modalEditUserLanguage"
                                                name="modalEditUserLanguage"
                                                className="select2 form-select select2-hidden-accessible"
                                                data-select2-id="modalEditUserLanguage"
                                                aria-hidden="true"
                                            >
                                                <option value="">Select</option>
                                                <option
                                                    value="english"
                                                    selected
                                                    data-select2-id="2"
                                                >
                                                    English
                                                </option>
                                                <option value="spanish">Spanish</option>
                                                <option value="french">French</option>
                                                <option value="german">German</option>
                                                <option value="dutch">Dutch</option>
                                                <option value="hebrew">Hebrew</option>
                                                <option value="sanskrit">Sanskrit</option>
                                                <option value="hindi">Hindi</option>
                                            </select>
                                            <span
                                                className="select2 select2-container select2-container--default"
                                                dir="ltr"
                                                data-select2-id="1"
                                            >
                                                <span className="selection">
                                                    <span
                                                        className="select2-selection select2-selection--multiple"
                                                        role="combobox"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        aria-disabled="false"
                                                    >
                                                        <ul className="select2-selection__rendered">
                                                            <li
                                                                className="select2-selection__choice"
                                                                title="English"
                                                                data-select2-id="3"
                                                            >
                                                                <span
                                                                    className="select2-selection__choice__remove"
                                                                    role="presentation"
                                                                >
                                                                    ×
                                                                </span>
                                                                English
                                                            </li>
                                                            <li className="select2-search select2-search--inline">
                                                                <input
                                                                    className="select2-search__field"
                                                                    type="search"
                                                                    role="searchbox"
                                                                    aria-autocomplete="list"
                                                                    placeholder=""
                                                                />
                                                            </li>
                                                        </ul>
                                                    </span>
                                                </span>
                                                <span
                                                    className="dropdown-wrapper"
                                                    aria-hidden="true"
                                                ></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label
                                            className="form-label"
                                            htmlFor="modalEditUserCountry"
                                        >
                                            Country
                                        </label>
                                        <div className="position-relative">
                                            <select
                                                id="modalEditUserCountry"
                                                name="modalEditUserCountry"
                                                className="select2 form-select select2-hidden-accessible"
                                                data-allow-clear="true"
                                                data-select2-id="modalEditUserCountry"
                                                aria-hidden="true"
                                            >
                                                <option value="" data-select2-id="5">
                                                    Select
                                                </option>
                                                <option value="Australia">Australia</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="Canada">Canada</option>
                                                <option value="China">China</option>
                                                <option value="France">France</option>
                                                <option value="Germany">Germany</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Korea">Korea, Republic of</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Philippines">Philippines</option>
                                                <option value="Russia">Russian Federation</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Emirates">
                                                    United Arab Emirates
                                                </option>
                                                <option value="United Kingdom">
                                                    United Kingdom
                                                </option>
                                                <option value="United States">United States</option>
                                            </select>
                                            <span
                                                className="select2 select2-container select2-container--default"
                                                dir="ltr"
                                                data-select2-id="4"
                                            >
                                                <span className="selection">
                                                    <span
                                                        className="select2-selection select2-selection--single"
                                                        role="combobox"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        aria-disabled="false"
                                                        aria-labelledby="select2-modalEditUserCountry-container"
                                                    >
                                                        <span
                                                            className="select2-selection__rendered"
                                                            id="select2-modalEditUserCountry-container"
                                                            role="textbox"
                                                            aria-readonly="true"
                                                        >
                                                            <span className="select2-selection__placeholder">
                                                                Select value
                                                            </span>
                                                        </span>
                                                        <span
                                                            className="select2-selection__arrow"
                                                            role="presentation"
                                                        >
                                                            <b role="presentation"></b>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span
                                                    className="dropdown-wrapper"
                                                    aria-hidden="true"
                                                ></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label className="switch">
                                            <input type="checkbox" className="switch-input" />
                                            <span className="switch-toggle-slider">
                                                <span className="switch-on"></span>
                                                <span className="switch-off"></span>
                                            </span>
                                            <span className="switch-label">
                                                Use as a billing address?
                                            </span>
                                        </label>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-primary me-sm-3 me-1"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="reset"
                                            className="btn btn-label-secondary"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                    <div></div>
                                    <input type="hidden" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="upgradePlanModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-simple modal-upgrade-plan">
                        <div className="modal-content p-3 p-md-5">
                            <div className="modal-body">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                                <div className="text-center mb-4">
                                    <h3>Upgrade Plan</h3>
                                    <p>Choose the best plan for user.</p>
                                </div>
                                <form id="upgradePlanForm" className="row g-3">
                                    <div className="col-sm-9">
                                        <label className="form-label" htmlFor="choosePlan">
                                            Choose Plan
                                        </label>
                                        <select
                                            id="choosePlan"
                                            name="choosePlan"
                                            className="form-select"
                                            aria-label="Choose Plan"
                                        >
                                            <option selected>Choose Plan</option>
                                            <option value="standard">Standard - $99/month</option>
                                            <option value="exclusive">
                                                Exclusive - $249/month
                                            </option>
                                            <option value="Enterprise">
                                                Enterprise - $499/month
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3 d-flex align-items-end">
                                        <button type="submit" className="btn btn-primary">
                                            Upgrade
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <hr className="mx-md-n5 mx-n3" />
                            <div className="modal-body">
                                <h6 className="mb-0">User current plan is standard plan</h6>
                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                    <div className="d-flex justify-content-center me-2 mt-3">
                                        <sup className="h5 pricing-currency pt-1 mt-3 mb-0 me-1 text-primary">
                                            $
                                        </sup>
                                        <h1 className="display-3 mb-0 text-primary">99</h1>
                                        <sub className="h5 pricing-duration mt-auto mb-2">
                                            /month
                                        </sub>
                                    </div>
                                    <button className="btn btn-label-danger cancel-subscription mt-3">
                                        Cancel Subscription
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
