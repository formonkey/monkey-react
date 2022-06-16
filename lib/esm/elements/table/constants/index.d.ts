/// <reference types="react" />
export declare const TABLE_ELEMENT_CUSTOM: {
    add: (conf: any, value: string, data: any) => string;
    parsed: (conf: any, value: string) => string;
    boolean: (_: any, value: boolean) => JSX.Element;
    tags: (conf: any, value: any[]) => JSX.Element[];
};
