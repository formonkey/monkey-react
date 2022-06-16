import React from 'react';

import { Store } from '../store';
import { Modal } from '../modals';
import { MonkeyConfProps } from './types';
import { HttpClient } from '../http-client';

export const MonkeyConf = ({ children }: MonkeyConfProps) => {
    return (
        <Modal>
            <Store>
                <HttpClient>{children}</HttpClient>
            </Store>
        </Modal>
    );
};
