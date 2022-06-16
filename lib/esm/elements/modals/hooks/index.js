import { useContext } from 'react';
import { ModalContext } from '../contexts';
export var useModal = function () {
    var context = useContext(ModalContext);
    if (!context) {
        throw new Error('[Error in Develop] useModal must be used within a ModalProvider');
    }
    return context;
};
