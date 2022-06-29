import React from 'react';

export const Tags = ({ form, name, keys }: any) => {
    return (
        <div className="mb-4">
            {form?.[name]?.length &&
                form?.[name].map((element: any) => (
                    <span className="badge bg-label-secondary me-1 mb-1">
                        {keys.map((key: string) => element[key]).join(';')}
                    </span>
                ))}
        </div>
    );
};
