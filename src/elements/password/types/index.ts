export type PasswordProps = {
    link?: string;
    name: string;
    label: string;
    placeholder: string;
    onChange: (e: { [name: string]: string }) => void;
}