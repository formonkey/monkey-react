import React, { useState, useEffect } from 'react';

import { WIDGET_ELEMENTS } from './constants';
import { useStore, StoreKeys } from '../store';
import { useMonkeyConf } from '../monkey-conf';
import { useTranslation } from 'react-i18next';

export const Widgets = ({ conf, ...props }: any) => {
    const { get } = useStore();
    const { t } = useTranslation();
    const { token } = useMonkeyConf();
    const [classNames, setClassNames] = useState([]);
    const [widgets, setWidgets] = useState<any>([]);
    const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
        if (conf?.widgets?.length > 3) {
            throw new Error('Only maximum 3 row widgets are allowed');
        }

        const temp = conf.widgets?.map((_: any, idx: number) => {
            if (conf.widgets.length === 3) {
                return 'col-xl-4 col-lg-4 col-md-4';
            } else if (conf.widgets.length === 2) {
                return idx === 0 ? 'col-xl-4 col-lg-5 col-md-5' : 'col-xl-8 col-lg-7 col-md-7';
            } else {
                return 'col-12';
            }
        });

        setClassNames(temp);
    }, []);

    useEffect(() => {
        const data: any = [];

        classNames.forEach((_: any, idx: number) => {
            const temp: any = [];
            conf.widgets[idx].forEach(async (widget: any, order: number) => {
                widget.order = order;

                if (widget.request?.method === 'STORE') {
                    const data = get(widget.request.endpoint);

                    temp[widget.order] = { ...widget, data };
                } else if (widget.request) {
                    const access = get(StoreKeys.Token);
                    const language = get(StoreKeys.Language);

                    let endpoint = widget.request.endpoint;

                    if (widget.request.replace) {
                        Object.keys(widget.request.replace).forEach((key: string) => {
                            endpoint = endpoint.replace(key, props[widget.request.replace[key]]);
                        });
                    }

                    const response = await fetch(`${process.env.REACT_APP_HOST}${endpoint}`, {
                        method: widget.request.method,
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: access ? `Bearer ${access[token]}` : '',
                            'Accept-Language': language?.code ?? 'en',
                        },
                    }).then((res: any) => {
                        if (res.status >= 200 && res.status < 300) {
                            return res.json();
                        }

                        return res.json().then((error: any) => {
                            throw error;
                        });
                    });

                    temp[widget.order] = {
                        ...widget,
                        data: widget.request.data
                            ? (response as any)[widget.request.data]
                            : response,
                    };
                } else {
                    temp[widget.order] = widget;
                }
            });

            data[idx] = temp;

            setTimeout(() => {
                if (data.length === conf.widgets.length) {
                    setWidgets([...data]);

                    setTimeout(() => setIsReady(true), 500);
                }
            }, 500);
        });
    }, [classNames]);

    return (
        <div className="row">
            {isReady
                ? classNames?.map((className: string, idx: number) => (
                      <div key={idx} className={className}>
                          {widgets[idx]?.map((widget: any) =>
                              (WIDGET_ELEMENTS as any)?.[widget.element]?.({ conf: widget, idx, t })
                          )}
                      </div>
                  ))
                : null}
        </div>
    );
};
