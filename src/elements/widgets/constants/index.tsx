import React from 'react';

import { WidgetDouble, WidgetInfo, WidgetList, WidgetTable, WidgetTimeline } from '../components';

export const WIDGET_ELEMENTS = {
    info: WidgetInfo,
    list: WidgetList,
    table: WidgetTable,
    double: WidgetDouble,
    timeline: WidgetTimeline,
};

export const WIDGET_INFO_PARSED = {
    join: ({ keys, element }: any) => keys.map((key: string) => element[key]).join(' '),
    check: ({ key, of, value, element }: any) => {
        if (of === 'array') {
            return element[key].includes(value) ? 'Yes' : 'No';
        } else {
            return element[key] === value ? 'Yes' : 'No';
        }
    },
    tags: ({ key, element }: any) =>
        element[key].map((tag: any, idx: number) => (
            <span key={idx} className="badge bg-label-secondary">
                {tag}
            </span>
        )),
    date: ({ key, element }: any) => new Date(element[key]).toLocaleDateString(),
};

export const WIDGET_TIMELINE_PARSED = {
    days: (key: string, element: any) => {
        const date = new Date(element[key]);
        const now = new Date();
        const diff = Math.abs(now.getTime() - date.getTime());

        const days = Math.ceil(diff / (1000 * 3600 * 24));

        return days > 1 ? `${days} Days ago` : 'Today';
    },
};
