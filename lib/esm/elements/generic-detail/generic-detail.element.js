import { t } from 'i18next';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../http-client';
import { GENERIC_DETAIL_ELEMENTS } from './constants';
export var GenericDetail = function (_a) {
    var _b, _c, _d, _e, _f;
    var action = _a.action, config = _a.config;
    var params = useParams();
    var _g = useHttpClient(), api = _g.api, state = _g.state;
    var _h = useState({}), paths = _h[0], setPaths = _h[1];
    var _j = useState({}), detail = _j[0], setDetail = _j[1];
    useEffect(function () {
        if (action.detail) {
            var detailPath_1 = action.detail.endpoint;
            Object.keys(action.detail.replace).forEach(function (key) {
                detailPath_1 = detailPath_1.replace(key, params[action.detail.replace[key]]);
            });
            setPaths({
                detail: detailPath_1,
            });
            api(detailPath_1, action.detail.method);
        }
    }, []);
    useEffect(function () {
        if (state.path === paths.detail) {
            setDetail(state.data);
        }
    }, [state]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "container-xxl flex-grow-1 container-p-y" },
            React.createElement("h4", { className: "fw-bold py-3 mb-4" },
                React.createElement("span", { className: "text-muted fw-light" }, "".concat(t(config.name), "/").concat(t('Detail'), "/").concat(t(detail === null || detail === void 0 ? void 0 : detail[(_b = action === null || action === void 0 ? void 0 : action.detail) === null || _b === void 0 ? void 0 : _b.key])))),
            React.createElement("div", { className: "row" },
                ((_d = (_c = action.detail) === null || _c === void 0 ? void 0 : _c.elements) === null || _d === void 0 ? void 0 : _d.length) ? (React.createElement("div", { className: "col-xl-4 col-lg-5 col-md-5 order-1 order-md-0" })) : null,
                React.createElement("div", { className: ((_f = (_e = action.detail) === null || _e === void 0 ? void 0 : _e.elements) === null || _f === void 0 ? void 0 : _f.length)
                        ? 'col-xl-8 col-lg-7 col-md-7 order-0 order-md-1'
                        : 'col-12 order-0' },
                    action.list.length > 1 && (React.createElement("ul", { className: "nav nav-pills flex-column flex-md-row mb-3" }, action.list.map(function (item) { return (React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link active", href: "javascript:void(0);" },
                            React.createElement("i", { className: "bx bx-user me-1" }),
                            " ",
                            item.label))); }))),
                    action.list.length
                        ? action.list.map(function (item, idx) {
                            return GENERIC_DETAIL_ELEMENTS[item.element] &&
                                GENERIC_DETAIL_ELEMENTS[item.element]({
                                    action: action,
                                    config: config,
                                    item: item,
                                    params: params,
                                    key: idx,
                                });
                        })
                        : null)),
            React.createElement("div", { className: "modal fade", id: "editUser", "aria-hidden": "true" },
                React.createElement("div", { className: "modal-dialog modal-lg modal-simple modal-edit-user" },
                    React.createElement("div", { className: "modal-content p-3 p-md-5" },
                        React.createElement("div", { className: "modal-body" },
                            React.createElement("button", { type: "button", className: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" }),
                            React.createElement("div", { className: "text-center mb-4" },
                                React.createElement("h3", null, "Edit User Information"),
                                React.createElement("p", null, "Updating user details will receive a privacy audit.")),
                            React.createElement("form", { id: "editUserForm", className: "row g-3 fv-plugins-bootstrap5 fv-plugins-framework" },
                                React.createElement("div", { className: "col-12 col-md-6 fv-plugins-icon-container" },
                                    React.createElement("label", { className: "form-label", htmlFor: "modalEditUserFirstName" }, "First Name"),
                                    React.createElement("input", { type: "text", id: "modalEditUserFirstName", name: "modalEditUserFirstName", className: "form-control", placeholder: "John" }),
                                    React.createElement("div", { className: "fv-plugins-message-container invalid-feedback" })),
                                React.createElement("div", { className: "col-12 col-md-6 fv-plugins-icon-container" },
                                    React.createElement("label", { className: "form-label", htmlFor: "modalEditUserLastName" }, "Last Name"),
                                    React.createElement("input", { type: "text", id: "modalEditUserLastName", name: "modalEditUserLastName", className: "form-control", placeholder: "Doe" }),
                                    React.createElement("div", { className: "fv-plugins-message-container invalid-feedback" })),
                                React.createElement("div", { className: "col-12 fv-plugins-icon-container" },
                                    React.createElement("label", { className: "form-label", htmlFor: "modalEditUserName" }, "Username"),
                                    React.createElement("input", { type: "text", id: "modalEditUserName", name: "modalEditUserName", className: "form-control", placeholder: "john.doe.007" }),
                                    React.createElement("div", { className: "fv-plugins-message-container invalid-feedback" })),
                                React.createElement("div", { className: "col-12 col-md-6" },
                                    React.createElement("label", { className: "form-label", htmlFor: "modalEditUserEmail" }, "Email"),
                                    React.createElement("input", { type: "text", id: "modalEditUserEmail", name: "modalEditUserEmail", className: "form-control", placeholder: "example@domain.com" })),
                                React.createElement("div", { className: "col-12 col-md-6" },
                                    React.createElement("label", { className: "form-label", htmlFor: "modalEditUserStatus" }, "Status"),
                                    React.createElement("select", { id: "modalEditUserStatus", name: "modalEditUserStatus", className: "form-select", "aria-label": "Default select example" },
                                        React.createElement("option", { selected: true }, "Status"),
                                        React.createElement("option", { value: "1" }, "Active"),
                                        React.createElement("option", { value: "2" }, "Inactive"),
                                        React.createElement("option", { value: "3" }, "Suspended"))),
                                React.createElement("div", { className: "col-12 col-md-6" },
                                    React.createElement("label", { className: "form-label", htmlFor: "modalEditTaxID" }, "Tax ID"),
                                    React.createElement("input", { type: "text", id: "modalEditTaxID", name: "modalEditTaxID", className: "form-control modal-edit-tax-id", placeholder: "123 456 7890" })),
                                React.createElement("div", { className: "col-12 col-md-6" },
                                    React.createElement("label", { className: "form-label", htmlFor: "modalEditUserPhone" }, "Phone Number"),
                                    React.createElement("div", { className: "input-group input-group-merge" },
                                        React.createElement("span", { className: "input-group-text" }, "+1"),
                                        React.createElement("input", { type: "text", id: "modalEditUserPhone", name: "modalEditUserPhone", className: "form-control phone-number-mask", placeholder: "202 555 0111" }))),
                                React.createElement("div", { className: "col-12 col-md-6" },
                                    React.createElement("label", { className: "form-label", htmlFor: "modalEditUserLanguage" }, "Language"),
                                    React.createElement("div", { className: "position-relative" },
                                        React.createElement("select", { id: "modalEditUserLanguage", name: "modalEditUserLanguage", className: "select2 form-select select2-hidden-accessible", "data-select2-id": "modalEditUserLanguage", "aria-hidden": "true" },
                                            React.createElement("option", { value: "" }, "Select"),
                                            React.createElement("option", { value: "english", selected: true, "data-select2-id": "2" }, "English"),
                                            React.createElement("option", { value: "spanish" }, "Spanish"),
                                            React.createElement("option", { value: "french" }, "French"),
                                            React.createElement("option", { value: "german" }, "German"),
                                            React.createElement("option", { value: "dutch" }, "Dutch"),
                                            React.createElement("option", { value: "hebrew" }, "Hebrew"),
                                            React.createElement("option", { value: "sanskrit" }, "Sanskrit"),
                                            React.createElement("option", { value: "hindi" }, "Hindi")),
                                        React.createElement("span", { className: "select2 select2-container select2-container--default", dir: "ltr", "data-select2-id": "1" },
                                            React.createElement("span", { className: "selection" },
                                                React.createElement("span", { className: "select2-selection select2-selection--multiple", role: "combobox", "aria-haspopup": "true", "aria-expanded": "false", "aria-disabled": "false" },
                                                    React.createElement("ul", { className: "select2-selection__rendered" },
                                                        React.createElement("li", { className: "select2-selection__choice", title: "English", "data-select2-id": "3" },
                                                            React.createElement("span", { className: "select2-selection__choice__remove", role: "presentation" }, "\u00D7"),
                                                            "English"),
                                                        React.createElement("li", { className: "select2-search select2-search--inline" },
                                                            React.createElement("input", { className: "select2-search__field", type: "search", role: "searchbox", "aria-autocomplete": "list", placeholder: "" }))))),
                                            React.createElement("span", { className: "dropdown-wrapper", "aria-hidden": "true" })))),
                                React.createElement("div", { className: "col-12 col-md-6" },
                                    React.createElement("label", { className: "form-label", htmlFor: "modalEditUserCountry" }, "Country"),
                                    React.createElement("div", { className: "position-relative" },
                                        React.createElement("select", { id: "modalEditUserCountry", name: "modalEditUserCountry", className: "select2 form-select select2-hidden-accessible", "data-allow-clear": "true", "data-select2-id": "modalEditUserCountry", "aria-hidden": "true" },
                                            React.createElement("option", { value: "", "data-select2-id": "5" }, "Select"),
                                            React.createElement("option", { value: "Australia" }, "Australia"),
                                            React.createElement("option", { value: "Bangladesh" }, "Bangladesh"),
                                            React.createElement("option", { value: "Belarus" }, "Belarus"),
                                            React.createElement("option", { value: "Brazil" }, "Brazil"),
                                            React.createElement("option", { value: "Canada" }, "Canada"),
                                            React.createElement("option", { value: "China" }, "China"),
                                            React.createElement("option", { value: "France" }, "France"),
                                            React.createElement("option", { value: "Germany" }, "Germany"),
                                            React.createElement("option", { value: "India" }, "India"),
                                            React.createElement("option", { value: "Indonesia" }, "Indonesia"),
                                            React.createElement("option", { value: "Israel" }, "Israel"),
                                            React.createElement("option", { value: "Italy" }, "Italy"),
                                            React.createElement("option", { value: "Japan" }, "Japan"),
                                            React.createElement("option", { value: "Korea" }, "Korea, Republic of"),
                                            React.createElement("option", { value: "Mexico" }, "Mexico"),
                                            React.createElement("option", { value: "Philippines" }, "Philippines"),
                                            React.createElement("option", { value: "Russia" }, "Russian Federation"),
                                            React.createElement("option", { value: "South Africa" }, "South Africa"),
                                            React.createElement("option", { value: "Thailand" }, "Thailand"),
                                            React.createElement("option", { value: "Turkey" }, "Turkey"),
                                            React.createElement("option", { value: "Ukraine" }, "Ukraine"),
                                            React.createElement("option", { value: "United Arab Emirates" }, "United Arab Emirates"),
                                            React.createElement("option", { value: "United Kingdom" }, "United Kingdom"),
                                            React.createElement("option", { value: "United States" }, "United States")),
                                        React.createElement("span", { className: "select2 select2-container select2-container--default", dir: "ltr", "data-select2-id": "4" },
                                            React.createElement("span", { className: "selection" },
                                                React.createElement("span", { className: "select2-selection select2-selection--single", role: "combobox", "aria-haspopup": "true", "aria-expanded": "false", "aria-disabled": "false", "aria-labelledby": "select2-modalEditUserCountry-container" },
                                                    React.createElement("span", { className: "select2-selection__rendered", id: "select2-modalEditUserCountry-container", role: "textbox", "aria-readonly": "true" },
                                                        React.createElement("span", { className: "select2-selection__placeholder" }, "Select value")),
                                                    React.createElement("span", { className: "select2-selection__arrow", role: "presentation" },
                                                        React.createElement("b", { role: "presentation" })))),
                                            React.createElement("span", { className: "dropdown-wrapper", "aria-hidden": "true" })))),
                                React.createElement("div", { className: "col-12" },
                                    React.createElement("label", { className: "switch" },
                                        React.createElement("input", { type: "checkbox", className: "switch-input" }),
                                        React.createElement("span", { className: "switch-toggle-slider" },
                                            React.createElement("span", { className: "switch-on" }),
                                            React.createElement("span", { className: "switch-off" })),
                                        React.createElement("span", { className: "switch-label" }, "Use as a billing address?"))),
                                React.createElement("div", { className: "col-12 text-center" },
                                    React.createElement("button", { type: "submit", className: "btn btn-primary me-sm-3 me-1" }, "Submit"),
                                    React.createElement("button", { type: "reset", className: "btn btn-label-secondary", "data-bs-dismiss": "modal", "aria-label": "Close" }, "Cancel")),
                                React.createElement("div", null),
                                React.createElement("input", { type: "hidden" })))))),
            React.createElement("div", { className: "modal fade", id: "upgradePlanModal", "aria-hidden": "true" },
                React.createElement("div", { className: "modal-dialog modal-dialog-centered modal-simple modal-upgrade-plan" },
                    React.createElement("div", { className: "modal-content p-3 p-md-5" },
                        React.createElement("div", { className: "modal-body" },
                            React.createElement("button", { type: "button", className: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" }),
                            React.createElement("div", { className: "text-center mb-4" },
                                React.createElement("h3", null, "Upgrade Plan"),
                                React.createElement("p", null, "Choose the best plan for user.")),
                            React.createElement("form", { id: "upgradePlanForm", className: "row g-3" },
                                React.createElement("div", { className: "col-sm-9" },
                                    React.createElement("label", { className: "form-label", htmlFor: "choosePlan" }, "Choose Plan"),
                                    React.createElement("select", { id: "choosePlan", name: "choosePlan", className: "form-select", "aria-label": "Choose Plan" },
                                        React.createElement("option", { selected: true }, "Choose Plan"),
                                        React.createElement("option", { value: "standard" }, "Standard - $99/month"),
                                        React.createElement("option", { value: "exclusive" }, "Exclusive - $249/month"),
                                        React.createElement("option", { value: "Enterprise" }, "Enterprise - $499/month"))),
                                React.createElement("div", { className: "col-sm-3 d-flex align-items-end" },
                                    React.createElement("button", { type: "submit", className: "btn btn-primary" }, "Upgrade")))),
                        React.createElement("hr", { className: "mx-md-n5 mx-n3" }),
                        React.createElement("div", { className: "modal-body" },
                            React.createElement("h6", { className: "mb-0" }, "User current plan is standard plan"),
                            React.createElement("div", { className: "d-flex justify-content-between align-items-center flex-wrap" },
                                React.createElement("div", { className: "d-flex justify-content-center me-2 mt-3" },
                                    React.createElement("sup", { className: "h5 pricing-currency pt-1 mt-3 mb-0 me-1 text-primary" }, "$"),
                                    React.createElement("h1", { className: "display-3 mb-0 text-primary" }, "99"),
                                    React.createElement("sub", { className: "h5 pricing-duration mt-auto mb-2" }, "/month")),
                                React.createElement("button", { className: "btn btn-label-danger cancel-subscription mt-3" }, "Cancel Subscription")))))))));
};
