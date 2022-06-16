import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalProvider } from './contexts';
export var Modal = function (_a) {
    var children = _a.children;
    var t = useTranslation().t;
    var _b = useState({}), config = _b[0], setConfig = _b[1];
    var _c = useState(false), open = _c[0], setOpen = _c[1];
    var _d = useState(React.createElement(React.Fragment, null)), Component = _d[0], setComponent = _d[1];
    var handleOpen = function (Element, config) {
        setComponent(Element);
        setConfig(config);
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
        setConfig({});
        setComponent(React.createElement(React.Fragment, null));
    };
    return (React.createElement(ModalProvider, { value: { close: handleClose, open: handleOpen } },
        children,
        React.createElement("div", { className: "modal fade ".concat(open ? 'show' : ''), tabIndex: -1, style: { display: open ? 'block' : 'none', paddingLeft: '0px' }, "aria-modal": "true", role: "dialog" },
            React.createElement("div", { className: "modal-dialog modal-lg modal-simple modal-edit-user" },
                React.createElement("div", { className: "modal-content p-3 p-md-5" },
                    React.createElement("div", { className: "modal-body" },
                        React.createElement("button", { type: "button", onClick: handleClose, className: "btn-close" }),
                        React.createElement("div", { className: "text-center mb-4" },
                            React.createElement("h3", null, t(config.title)),
                            React.createElement("p", null, t(config.subTitle))),
                        Component)))),
        open ? React.createElement("div", { className: "modal-backdrop fade show", onClick: handleClose }) : React.createElement(React.Fragment, null)));
};
