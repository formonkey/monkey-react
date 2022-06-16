export declare type FormElementProps = {
    onChange: () => void;
    disabled: boolean;
    form: {
        [key: string]: string | object | number | boolean | undefined | string[] | object[] | number[] | boolean[] | undefined;
    };
    [key: string]: string | object | number | boolean | undefined | string[] | object[] | number[] | boolean[] | undefined;
};
