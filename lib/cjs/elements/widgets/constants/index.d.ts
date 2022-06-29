/// <reference types="react" />
export declare const WIDGET_ELEMENTS: {
    info: ({ t, conf, idx }: any) => JSX.Element;
    list: () => JSX.Element;
    table: ({ t, conf }: any) => JSX.Element;
    double: ({ conf }: any) => JSX.Element;
    timeline: ({ conf, t }: any) => JSX.Element;
};
export declare const WIDGET_INFO_PARSED: {
    join: ({ keys, element }: any) => any;
    check: ({ key, of, value, element }: any) => "Yes" | "No";
    tags: ({ key, element }: any) => any;
    date: ({ key, element }: any) => string;
};
export declare const WIDGET_TIMELINE_PARSED: {
    days: (key: string, element: any) => string;
};
