import React from 'react';

import { Add } from '../../adds';
import { Tags } from '../../tags';
import { File } from '../../file';
import { Role } from '../../roles';
import { Multi } from '../../multi';
import { Input } from '../../inputs';
import { Radio } from '../../radios';
import { Select } from '../../selects';
import { StoreKeys } from '../../store';
import { Password } from '../../password';
import { Checkbox } from '../../checkbox';
import { TextArea } from '../../text-area';
import { Separator } from '../../separator';
import { Datepicker } from '../../datepicker';

export const GENERIC_FORM_ELEMENTS = {
    add: Add,
    file: File,
    tags: Tags,
    radio: Radio,
    select: Select,
    text: TextArea,
    permissions: Role,
    checkbox: Checkbox,
    separator: Separator,
    input: (props: any) => <Input {...props} />,
    multi: (props: any) => <Multi {...props} />,
    password: (props: any) => <Password {...props} />,
    date: (props: any) => <Datepicker {...props} type="date" />,
    range: (props: any) => <Datepicker {...props} type="range" />,
    number: (props: any) => <Input {...props} type="number" />,
};

export const GENERIC_FORM_CONFIG_PARSED = {
    REQUEST: async (get: any, field: any, token: string) => {
        const access = get(StoreKeys.Token);
        const language = get(StoreKeys.Language);

        const response = await fetch(`${process.env.REACT_APP_HOST}${field.config.endpoint}`, {
            method: field.config.method,
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

        const data = (field.config.data ? response[field.config.data] : response).map(
            (item: any) => ({
                value: item[field.config.parsed.value],
                label: item[field.config.parsed.label],
            })
        );

        field.data = data;
    },
};
