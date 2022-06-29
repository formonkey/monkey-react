/// <reference types="react" />
export declare const GENERIC_FORM_ELEMENTS: {
    add: ({ t, name, form, keys, label, onChange }: any) => JSX.Element;
    file: ({ label, accept, multiple, name, onChange, parsed, t }: any) => JSX.Element;
    tags: ({ form, name, keys }: any) => JSX.Element;
    radio: ({ t, name, label, data, value, onChange }: any) => JSX.Element;
    select: ({ t, label, name, value, onChange, data, ...props }: any) => JSX.Element;
    text: ({ t, label, form, name, placeholder, onChange }: any) => JSX.Element;
    permissions: ({ data, name, onChange, value, t }: any) => JSX.Element;
    checkbox: ({ t, label, name, onChange, value }: any) => JSX.Element;
    separator: ({ t, label }: any) => JSX.Element;
    input: (props: any) => JSX.Element;
    multi: (props: any) => JSX.Element;
    password: (props: any) => JSX.Element;
    date: (props: any) => JSX.Element;
    range: (props: any) => JSX.Element;
    number: (props: any) => JSX.Element;
};
export declare const GENERIC_FORM_CONFIG_PARSED: {
    REQUEST: (get: any, field: any, token: string) => Promise<void>;
};
