import React from 'react';
import { useTranslation } from 'react-i18next';
export var NoData = function () {
    var t = useTranslation().t;
    return (React.createElement("div", { className: "layout-demo-wrapper" },
        React.createElement("div", { className: "layout-demo-info" },
            React.createElement("h4", null, t('Error 404')),
            React.createElement("p", null, t('This page was not found, you should try another menu option')))));
};
