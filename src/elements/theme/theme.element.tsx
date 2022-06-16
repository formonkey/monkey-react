import React, { useEffect, useState } from 'react';

import { StoreKeys, useStore } from '../store';
import { useMonkeyConf } from '../monkey-conf';

export const Theme = () => {
    const { get, set } = useStore();
    const { theme } = useMonkeyConf();
    const [mode, setMode] = useState<{
        name: string;
        icon: string;
        styles: { core: string; default: string };
    }>();

    const changeClassByName = (className: string, style: string) => {
        const element = document.getElementsByClassName(className)[0];

        if (element) {
            const href = element.getAttribute('href')?.split('/');

            href?.pop();

            element.setAttribute('href', `${href?.join('/')}/${style}.css`);
        }
    };

    const onToggleMode = () => {
        if (mode) {
            setMode(mode.icon === 'sun' ? theme.modes[0] : theme.modes[1]);
        }
    };

    useEffect(() => {
        const temp = get(StoreKeys.Theme);

        setMode(temp ?? theme.modes[0]);
    }, []);

    useEffect(() => {
        if (mode) {
            set(StoreKeys.Theme, mode);
            changeClassByName(theme.classes.core, mode.styles.core);
            changeClassByName(theme.classes.default, mode.styles.default);
        }
    }, [mode]);

    return (
        <li className="nav-item me-2 me-xl-0">
            <span
                className="nav-link style-switcher-toggle cursor-pointer hide-arrow"
                onClick={onToggleMode}
            >
                <i className={`bx bx-sm bx-${mode?.icon}`}></i>
            </span>
        </li>
    );
};
