import React from 'react';

export const Separator = ({ t, label }: any) => {
    return (
        <div className="divider divider-dashed">
            <div className="divider-text">{t(label)}</div>
        </div>
    );
}
