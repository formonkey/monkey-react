import React from 'react';

export const TABLE_ELEMENT_CUSTOM = {
    add: (conf: any, value: string, data: any) => `${value} ${data[conf.key]}`,
    // parsed: (conf: any, value: string) => `${value[conf.key]}`,
    parsed: (conf: any, value: string) => `${(value && value[conf.key]) || '-'}`,
    boolean: (_: any, value: boolean) =>
        value ? (
            <span className='badge badge-center rounded-pill bg-success'>
                <i className='bx bx-check'/>
            </span>
        ) : (
            <span className='badge badge-center rounded-pill bg-danger'>
                <i className='bx bx-x'/>
            </span>
        ),
    tags: (conf: any, value: any[]) =>
        value.map((tag: any, idx: number) => (
            <span key={idx} className="badge rounded-pill bg-label-primary">
                {tag[conf.key]}
            </span>
        )),
};
