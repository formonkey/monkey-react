import React from 'react';

import { WIDGET_ELEMENTS } from '../constants';

export const WidgetDouble = ({ conf }: any) => {
    return (
        <div className="row">
            {conf?.widgets.map((widget: any, idx: number) => (
                <div className="col-lg-12 col-xl-6" key={idx}>
                    {(WIDGET_ELEMENTS as any)[widget.element]?.({ conf: widget, idx })}
                </div>
            ))}
        </div>
    );
};
