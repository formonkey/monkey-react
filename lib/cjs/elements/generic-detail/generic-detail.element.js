"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericDetail = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var http_client_1 = require("../http-client");
var constants_1 = require("./constants");
var GenericDetail = function (_a) {
    var _b, _c, _d, _e, _f;
    var action = _a.action, config = _a.config;
    var params = (0, react_router_dom_1.useParams)();
    var _g = (0, http_client_1.useHttpClient)(), api = _g.api, state = _g.state;
    var _h = (0, react_1.useState)({}), paths = _h[0], setPaths = _h[1];
    var _j = (0, react_1.useState)({}), detail = _j[0], setDetail = _j[1];
    (0, react_1.useEffect)(function () {
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
    (0, react_1.useEffect)(function () {
        if (state.path === paths.detail) {
            console.log('Set Detail Data', state.data);
            setDetail(state.data);
        }
    }, [state]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "container-xxl flex-grow-1 container-p-y" },
            react_1.default.createElement("h4", { className: "fw-bold py-3 mb-4" },
                react_1.default.createElement("span", { className: "text-muted fw-light" },
                    config.name,
                    " / Detail / ", detail === null || detail === void 0 ? void 0 :
                    detail[(_b = action === null || action === void 0 ? void 0 : action.detail) === null || _b === void 0 ? void 0 : _b.key])),
            react_1.default.createElement("div", { className: "row" },
                ((_d = (_c = action.detail) === null || _c === void 0 ? void 0 : _c.elements) === null || _d === void 0 ? void 0 : _d.length) ? (react_1.default.createElement("div", { className: "col-xl-4 col-lg-5 col-md-5 order-1 order-md-0" })) : null,
                react_1.default.createElement("div", { className: ((_f = (_e = action.detail) === null || _e === void 0 ? void 0 : _e.elements) === null || _f === void 0 ? void 0 : _f.length)
                        ? 'col-xl-8 col-lg-7 col-md-7 order-0 order-md-1'
                        : 'col-12 order-0' },
                    action.list.length > 1 && (react_1.default.createElement("ul", { className: "nav nav-pills flex-column flex-md-row mb-3" }, action.list.map(function (item) { return (react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement("a", { className: "nav-link active", href: "javascript:void(0);" },
                            react_1.default.createElement("i", { className: "bx bx-user me-1" }),
                            " ",
                            item.label))); }))),
                    action.list.length
                        ? action.list.map(function (item, idx) {
                            return constants_1.GENERIC_DETAIL_ELEMENTS[item.element] &&
                                constants_1.GENERIC_DETAIL_ELEMENTS[item.element]({
                                    action: action,
                                    config: config,
                                    item: item,
                                    params: params,
                                    key: idx,
                                });
                        })
                        : null)),
            react_1.default.createElement("div", { className: "modal fade", id: "editUser", "aria-hidden": "true" },
                react_1.default.createElement("div", { className: "modal-dialog modal-lg modal-simple modal-edit-user" },
                    react_1.default.createElement("div", { className: "modal-content p-3 p-md-5" },
                        react_1.default.createElement("div", { className: "modal-body" },
                            react_1.default.createElement("button", { type: "button", className: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" }),
                            react_1.default.createElement("div", { className: "text-center mb-4" },
                                react_1.default.createElement("h3", null, "Edit User Information"),
                                react_1.default.createElement("p", null, "Updating user details will receive a privacy audit.")),
                            react_1.default.createElement("form", { id: "editUserForm", className: "row g-3 fv-plugins-bootstrap5 fv-plugins-framework" },
                                react_1.default.createElement("div", { className: "col-12 col-md-6 fv-plugins-icon-container" },
                                    react_1.default.createElement("label", { className: "form-label", htmlFor: "modalEditUserFirstName" }, "First Name"),
                                    react_1.default.createElement("input", { type: "text", id: "modalEditUserFirstName", name: "modalEditUserFirstName", className: "form-control", placeholder: "John" }),
                                    react_1.default.createElement("div", { className: "fv-plugins-message-container invalid-feedback" })),
                                react_1.default.createElement("div", { className: "col-12 col-md-6 fv-plugins-icon-container" },
                                    react_1.default.createElement("label", { className: "form-label", htmlFor: "modalEditUserLastName" }, "Last Name"),
                                    react_1.default.createElement("input", { type: "text", id: "modalEditUserLastName", name: "modalEditUserLastName", className: "form-control", placeholder: "Doe" }),
                                    react_1.default.createElement("div", { className: "fv-plugins-message-container invalid-feedback" })),
                                react_1.default.createElement("div", { className: "col-12 fv-plugins-icon-container" },
                                    react_1.default.createElement("label", { className: "form-label", htmlFor: "modalEditUserName" }, "Username"),
                                    react_1.default.createElement("input", { type: "text", id: "modalEditUserName", name: "modalEditUserName", className: "form-control", placeholder: "john.doe.007" }),
                                    react_1.default.createElement("div", { className: "fv-plugins-message-container invalid-feedback" })),
                                react_1.default.createElement("div", { className: "col-12 col-md-6" },
                                    react_1.default.createElement("label", { className: "form-label", htmlFor: "modalEditUserEmail" }, "Email"),
                                    react_1.default.createElement("input", { type: "text", id: "modalEditUserEmail", name: "modalEditUserEmail", className: "form-control", placeholder: "example@domain.com" })),
                                react_1.default.createElement("div", { className: "col-12 col-md-6" },
                                    react_1.default.createElement("label", { className: "form-label", htmlFor: "modalEditUserStatus" }, "Status"),
                                    react_1.default.createElement("select", { id: "modalEditUserStatus", name: "modalEditUserStatus", className: "form-select", "aria-label": "Default select example" },
                                        react_1.default.createElement("option", { selected: true }, "Status"),
                                        react_1.default.createElement("option", { value: "1" }, "Active"),
                                        react_1.default.createElement("option", { value: "2" }, "Inactive"),
                                        react_1.default.createElement("option", { value: "3" }, "Suspended"))),
                                react_1.default.createElement("div", { className: "col-12 col-md-6" },
                                    react_1.default.createElement("label", { className: "form-label", htmlFor: "modalEditTaxID" }, "Tax ID"),
                                    react_1.default.createElement("input", { type: "text", id: "modalEditTaxID", name: "modalEditTaxID", className: "form-control modal-edit-tax-id", placeholder: "123 456 7890" })),
                                react_1.default.createElement("div", { className: "col-12 col-md-6" },
                                    react_1.default.createElement("label", { className: "form-label", htmlFor: "modalEditUserPhone" }, "Phone Number"),
                                    react_1.default.createElement("div", { className: "input-group input-group-merge" },
                                        react_1.default.createElement("span", { className: "input-group-text" }, "+1"),
                                        react_1.default.createElement("input", { type: "text", id: "modalEditUserPhone", name: "modalEditUserPhone", className: "form-control phone-number-mask", placeholder: "202 555 0111" }))),
                                react_1.default.createElement("div", { className: "col-12 col-md-6" },
                                    react_1.default.createElement("label", { className: "form-label", htmlFor: "modalEditUserLanguage" }, "Language"),
                                    react_1.default.createElement("div", { className: "position-relative" },
                                        react_1.default.createElement("select", { id: "modalEditUserLanguage", name: "modalEditUserLanguage", className: "select2 form-select select2-hidden-accessible", "data-select2-id": "modalEditUserLanguage", "aria-hidden": "true" },
                                            react_1.default.createElement("option", { value: "" }, "Select"),
                                            react_1.default.createElement("option", { value: "english", selected: true, "data-select2-id": "2" }, "English"),
                                            react_1.default.createElement("option", { value: "spanish" }, "Spanish"),
                                            react_1.default.createElement("option", { value: "french" }, "French"),
                                            react_1.default.createElement("option", { value: "german" }, "German"),
                                            react_1.default.createElement("option", { value: "dutch" }, "Dutch"),
                                            react_1.default.createElement("option", { value: "hebrew" }, "Hebrew"),
                                            react_1.default.createElement("option", { value: "sanskrit" }, "Sanskrit"),
                                            react_1.default.createElement("option", { value: "hindi" }, "Hindi")),
                                        react_1.default.createElement("span", { className: "select2 select2-container select2-container--default", dir: "ltr", "data-select2-id": "1" },
                                            react_1.default.createElement("span", { className: "selection" },
                                                react_1.default.createElement("span", { className: "select2-selection select2-selection--multiple", role: "combobox", "aria-haspopup": "true", "aria-expanded": "false", "aria-disabled": "false" },
                                                    react_1.default.createElement("ul", { className: "select2-selection__rendered" },
                                                        react_1.default.createElement("li", { className: "select2-selection__choice", title: "English", "data-select2-id": "3" },
                                                            react_1.default.createElement("span", { className: "select2-selection__choice__remove", role: "presentation" }, "\u00D7"),
                                                            "English"),
                                                        react_1.default.createElement("li", { className: "select2-search select2-search--inline" },
                                                            react_1.default.createElement("input", { className: "select2-search__field", type: "search", role: "searchbox", "aria-autocomplete": "list", placeholder: "" }))))),
                                            react_1.default.createElement("span", { className: "dropdown-wrapper", "aria-hidden": "true" })))),
                                react_1.default.createElement("div", { className: "col-12 col-md-6" },
                                    react_1.default.createElement("label", { className: "form-label", htmlFor: "modalEditUserCountry" }, "Country"),
                                    react_1.default.createElement("div", { className: "position-relative" },
                                        react_1.default.createElement("select", { id: "modalEditUserCountry", name: "modalEditUserCountry", className: "select2 form-select select2-hidden-accessible", "data-allow-clear": "true", "data-select2-id": "modalEditUserCountry", "aria-hidden": "true" },
                                            react_1.default.createElement("option", { value: "", "data-select2-id": "5" }, "Select"),
                                            react_1.default.createElement("option", { value: "Australia" }, "Australia"),
                                            react_1.default.createElement("option", { value: "Bangladesh" }, "Bangladesh"),
                                            react_1.default.createElement("option", { value: "Belarus" }, "Belarus"),
                                            react_1.default.createElement("option", { value: "Brazil" }, "Brazil"),
                                            react_1.default.createElement("option", { value: "Canada" }, "Canada"),
                                            react_1.default.createElement("option", { value: "China" }, "China"),
                                            react_1.default.createElement("option", { value: "France" }, "France"),
                                            react_1.default.createElement("option", { value: "Germany" }, "Germany"),
                                            react_1.default.createElement("option", { value: "India" }, "India"),
                                            react_1.default.createElement("option", { value: "Indonesia" }, "Indonesia"),
                                            react_1.default.createElement("option", { value: "Israel" }, "Israel"),
                                            react_1.default.createElement("option", { value: "Italy" }, "Italy"),
                                            react_1.default.createElement("option", { value: "Japan" }, "Japan"),
                                            react_1.default.createElement("option", { value: "Korea" }, "Korea, Republic of"),
                                            react_1.default.createElement("option", { value: "Mexico" }, "Mexico"),
                                            react_1.default.createElement("option", { value: "Philippines" }, "Philippines"),
                                            react_1.default.createElement("option", { value: "Russia" }, "Russian Federation"),
                                            react_1.default.createElement("option", { value: "South Africa" }, "South Africa"),
                                            react_1.default.createElement("option", { value: "Thailand" }, "Thailand"),
                                            react_1.default.createElement("option", { value: "Turkey" }, "Turkey"),
                                            react_1.default.createElement("option", { value: "Ukraine" }, "Ukraine"),
                                            react_1.default.createElement("option", { value: "United Arab Emirates" }, "United Arab Emirates"),
                                            react_1.default.createElement("option", { value: "United Kingdom" }, "United Kingdom"),
                                            react_1.default.createElement("option", { value: "United States" }, "United States")),
                                        react_1.default.createElement("span", { className: "select2 select2-container select2-container--default", dir: "ltr", "data-select2-id": "4" },
                                            react_1.default.createElement("span", { className: "selection" },
                                                react_1.default.createElement("span", { className: "select2-selection select2-selection--single", role: "combobox", "aria-haspopup": "true", "aria-expanded": "false", "aria-disabled": "false", "aria-labelledby": "select2-modalEditUserCountry-container" },
                                                    react_1.default.createElement("span", { className: "select2-selection__rendered", id: "select2-modalEditUserCountry-container", role: "textbox", "aria-readonly": "true" },
                                                        react_1.default.createElement("span", { className: "select2-selection__placeholder" }, "Select value")),
                                                    react_1.default.createElement("span", { className: "select2-selection__arrow", role: "presentation" },
                                                        react_1.default.createElement("b", { role: "presentation" })))),
                                            react_1.default.createElement("span", { className: "dropdown-wrapper", "aria-hidden": "true" })))),
                                react_1.default.createElement("div", { className: "col-12" },
                                    react_1.default.createElement("label", { className: "switch" },
                                        react_1.default.createElement("input", { type: "checkbox", className: "switch-input" }),
                                        react_1.default.createElement("span", { className: "switch-toggle-slider" },
                                            react_1.default.createElement("span", { className: "switch-on" }),
                                            react_1.default.createElement("span", { className: "switch-off" })),
                                        react_1.default.createElement("span", { className: "switch-label" }, "Use as a billing address?"))),
                                react_1.default.createElement("div", { className: "col-12 text-center" },
                                    react_1.default.createElement("button", { type: "submit", className: "btn btn-primary me-sm-3 me-1" }, "Submit"),
                                    react_1.default.createElement("button", { type: "reset", className: "btn btn-label-secondary", "data-bs-dismiss": "modal", "aria-label": "Close" }, "Cancel")),
                                react_1.default.createElement("div", null),
                                react_1.default.createElement("input", { type: "hidden" })))))),
            react_1.default.createElement("div", { className: "modal fade", id: "upgradePlanModal", "aria-hidden": "true" },
                react_1.default.createElement("div", { className: "modal-dialog modal-dialog-centered modal-simple modal-upgrade-plan" },
                    react_1.default.createElement("div", { className: "modal-content p-3 p-md-5" },
                        react_1.default.createElement("div", { className: "modal-body" },
                            react_1.default.createElement("button", { type: "button", className: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" }),
                            react_1.default.createElement("div", { className: "text-center mb-4" },
                                react_1.default.createElement("h3", null, "Upgrade Plan"),
                                react_1.default.createElement("p", null, "Choose the best plan for user.")),
                            react_1.default.createElement("form", { id: "upgradePlanForm", className: "row g-3" },
                                react_1.default.createElement("div", { className: "col-sm-9" },
                                    react_1.default.createElement("label", { className: "form-label", htmlFor: "choosePlan" }, "Choose Plan"),
                                    react_1.default.createElement("select", { id: "choosePlan", name: "choosePlan", className: "form-select", "aria-label": "Choose Plan" },
                                        react_1.default.createElement("option", { selected: true }, "Choose Plan"),
                                        react_1.default.createElement("option", { value: "standard" }, "Standard - $99/month"),
                                        react_1.default.createElement("option", { value: "exclusive" }, "Exclusive - $249/month"),
                                        react_1.default.createElement("option", { value: "Enterprise" }, "Enterprise - $499/month"))),
                                react_1.default.createElement("div", { className: "col-sm-3 d-flex align-items-end" },
                                    react_1.default.createElement("button", { type: "submit", className: "btn btn-primary" }, "Upgrade")))),
                        react_1.default.createElement("hr", { className: "mx-md-n5 mx-n3" }),
                        react_1.default.createElement("div", { className: "modal-body" },
                            react_1.default.createElement("h6", { className: "mb-0" }, "User current plan is standard plan"),
                            react_1.default.createElement("div", { className: "d-flex justify-content-between align-items-center flex-wrap" },
                                react_1.default.createElement("div", { className: "d-flex justify-content-center me-2 mt-3" },
                                    react_1.default.createElement("sup", { className: "h5 pricing-currency pt-1 mt-3 mb-0 me-1 text-primary" }, "$"),
                                    react_1.default.createElement("h1", { className: "display-3 mb-0 text-primary" }, "99"),
                                    react_1.default.createElement("sub", { className: "h5 pricing-duration mt-auto mb-2" }, "/month")),
                                react_1.default.createElement("button", { className: "btn btn-label-danger cancel-subscription mt-3" }, "Cancel Subscription")))))))));
};
exports.GenericDetail = GenericDetail;
