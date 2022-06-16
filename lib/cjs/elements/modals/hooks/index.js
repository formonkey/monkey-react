"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = void 0;
var react_1 = require("react");
var contexts_1 = require("../contexts");
var useModal = function () {
    var context = (0, react_1.useContext)(contexts_1.ModalContext);
    if (!context) {
        throw new Error('[Error in Develop] useModal must be used within a ModalProvider');
    }
    return context;
};
exports.useModal = useModal;
