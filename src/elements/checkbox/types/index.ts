export type CheckboxProps = {
    name: string;
    label: string;
    value?: boolean;
    onChange: (e: { [name: string]: boolean }) => void;
}