import React from 'react';

import { useTranslation } from 'react-i18next';

export const NoData = () => {
    const { t } = useTranslation();

    return (
        <div className="layout-demo-wrapper">
            <div className="layout-demo-info">
                <h4>{t('Error 404')}</h4>
                <p>{t('This page was not found, you should try another menu option')}</p>
            </div>
        </div>
    );
};
