export type InputProps = {
    name: string;
    type: string;
    label: string;
    value?: string;
    placeholder?: string;
    onChange: (e: { [name: string]: string }) => void;
}