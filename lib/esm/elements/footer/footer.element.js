import React from 'react';
export var Footer = function () {
    var date = new Date().getFullYear();
    return (React.createElement("footer", { className: "content-footer footer bg-footer-theme" },
        React.createElement("div", { className: "container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column" },
            React.createElement("div", { className: "mb-2 mb-md-0" },
                "\u00A9",
                date,
                " By",
                React.createElement("a", { href: "https://www.xtremis.com/", target: "_blank", className: "footer-link fw-bolder" }, "Xtremis")),
            React.createElement("div", null))));
};
