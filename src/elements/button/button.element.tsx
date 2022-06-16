import React from 'react';

import { useTranslation } from 'react-i18next';

import { ButtonProps } from './types';

export const Button = ({ text, onClick, disabled, isLoading }: ButtonProps) => {
    const { t } = useTranslation();

    return (
        <div className="mb-3">
            <button
                className="btn btn-primary d-grid w-100"
                type="button"
                onClick={onClick}
                disabled={disabled}
            >
                {isLoading ? (
                    <div className="spinner-border m-auto">
                        <span className="sr-only">{t('Loading ...')}</span>
                    </div>
                ) : (
                    t(text)
                )}
            </button>
        </div>
    );
};
