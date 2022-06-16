import { File } from '../../file';
import React from 'react';

import { Role } from '../../roles';
import { Input } from '../../inputs';
import { Radio } from '../../radios';
import { Select } from '../../selects';
import { StoreKeys } from '../../store';
import { Password } from '../../password';
import { Checkbox } from '../../checkbox';
import { TextArea } from '../../text-area';
import { Separator } from '../../separator';

export const GENERIC_FORM_ELEMENTS = {
    file: File,
    input: Input,
    radio: Radio,
    select: Select,
    text: TextArea,
    permissions: Role,
    checkbox: Checkbox,
    password: Password,
    separator: Separator,
    number: (props: any) => <Input type="number" {...props} />,
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
