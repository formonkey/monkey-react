import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useMonkeyConf } from '../monkey-conf';
import { StoreKeys, useStore } from '../store';

export const Language = () => {
    const { t, i18n } = useTranslation();
    const { get, set } = useStore();
    const { langs } = useMonkeyConf();
    const [lang, setLang] = useState<{ code: string; name: string; icon?: string }>();

    useEffect(() => {
        if (!lang) {
            const storeLang = get(StoreKeys.Language);

            setLang(storeLang ?? langs[0]);
        }
    }, []);

    useEffect(() => {
        if (lang) {
            i18n.changeLanguage(lang?.code);
            set(StoreKeys.Language, lang);
        }
    }, [lang]);

    return (
        <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
            <a
                data-bs-toggle="dropdown"
                className="nav-link dropdown-toggle cursor-pointer hide-arrow"
            >
                <i className={`fi fi-${lang?.icon ?? lang?.code} fis rounded-circle fs-3 me-1`} />
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
                {langs?.map(
                    (lang: { code: string; name: string; icon?: string }, index: number) => (
                        <li key={index}>
                            <div className="dropdown-item" onClick={() => setLang(lang)}>
                                <i
                                    className={`fi fi-${
                                        lang?.icon ?? lang?.code
                                    } fis rounded-circle fs-4 me-1`}
                                />
                                <span className="align-middle">{t(lang.name)}</span>
                            </div>
                        </li>
                    )
                )}
            </ul>
        </li>
    );
};
