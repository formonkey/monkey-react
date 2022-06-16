import { useContext } from 'react'

import { ModalContext } from '../contexts'

export const useModal = (): any => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('[Error in Develop] useModal must be used within a ModalProvider');
    }

    return context;
}