import React from 'react';

export const GenericFormButtons = ({ config, step, onSubmit, onStep, close, t }: any) => {
    const nextStep = () => {
        onStep('next');
    };

    const toggleCallback = () => {
        step === 0 ? close() : onStep();
    };

    return (
        <>
            {!config.multiple || step + 1 === config.fields.length ? (
                <div className="g-2">
                    {config.multiple && step > 0 ? (
                        <button
                            type="button"
                            className="btn m-2 btn-label-secondary"
                            data-bs-dismiss="modal"
                            onClick={onStep}
                        >
                            {t('Previous Step')}
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="btn m-2 btn-label-secondary"
                            data-bs-dismiss="modal"
                            onClick={close}
                        >
                            {t('Cancel')}
                        </button>
                    )}
                    <button type="button" className="btn btn-primary" onClick={onSubmit}>
                        {t('Save changes')}
                    </button>
                </div>
            ) : config.multiple && step + 1 < config.fields.length ? (
                <div className="g-2">
                    <button
                        type="button"
                        className="btn m-2 btn-label-secondary"
                        data-bs-dismiss="modal"
                        onClick={toggleCallback}
                    >
                        {t(step === 0 ? 'Cancel' : 'Prev Step')}
                    </button>
                    {!config.async ? (
                        <button type="button" className="btn btn-primary" onClick={nextStep}>
                            {t('Next Step')}
                        </button>
                    ) : (
                        <button type="button" className="btn btn-primary" onClick={onSubmit}>
                            {t('Save Temporal Data')}
                        </button>
                    )}
                </div>
            ) : (
                <></>
            )}
        </>
    );
};
