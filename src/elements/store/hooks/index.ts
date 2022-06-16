import { useMonkeyConf } from '../../monkey-conf'

export const useStore = () => {
    const { store: { prefix } } = useMonkeyConf();

    return {
        get: (key: string) => {
            const value = localStorage.getItem(`${prefix}${key}`);

            return value ? JSON.parse(value) : null;
        },
        del: (key: string) => localStorage.removeItem(`${prefix}${key}`),
        set: (key: string, value: any) => localStorage.setItem(`${prefix}${key}`, JSON.stringify(value)),
    }
}