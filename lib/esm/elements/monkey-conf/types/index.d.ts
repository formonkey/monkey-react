/// <reference types="react" />
export declare type MonkeyConfProps = {
    children: JSX.Element;
};
export declare type MonkeyConfState = {
    name: string | undefined;
    token: string;
    myProfile: any;
    store: {
        prefix: string | undefined;
        system: string | undefined;
    };
    authenticationFlow: string[];
    login: {
        fields: string[];
        endpoint: string | undefined;
    };
    recoverPassword?: {
        fields: string[];
        endpoint: string | undefined;
    };
    resetPassword?: {
        fields: string[];
        endpoint: string | undefined;
        validateToken: string | undefined;
    };
    theme: {
        classes: {
            core: string;
            default: string;
        };
        modes: {
            name: string;
            class: string;
        }[];
    };
    notifications: {
        endpoint: string;
    };
    langs?: {
        code: string;
        name: string;
    }[];
    profile: {
        endpoint: string;
        model: {
            username: string;
            email: string;
            name: string;
            phone: string;
            description: string;
            image: string;
        };
    };
    queries: {
        system: string;
        pagination: {
            key: string;
            page: string;
            limit: string;
            total: string;
        };
        sort: {
            asc: string;
            desc: string;
        };
        filter: {
            key: string;
        };
        limit: number;
    };
    menu: {
        generic: {
            name: string;
            view: string;
            path: string;
            icon: string;
            default?: boolean;
        }[];
        privacy?: {
            name: string;
            view: string;
            path: string;
            icon: string;
            default?: boolean;
        }[];
    };
};
