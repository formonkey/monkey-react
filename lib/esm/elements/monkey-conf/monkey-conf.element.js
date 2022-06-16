import React from 'react';
import { Store } from '../store';
import { Modal } from '../modals';
import { HttpClient } from '../http-client';
export var MonkeyConf = function (_a) {
    var children = _a.children;
    return (React.createElement(Modal, null,
        React.createElement(Store, null,
            React.createElement(HttpClient, null, children))));
};
