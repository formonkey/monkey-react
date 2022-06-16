import { useState } from 'react';
import { useMonkeyConf } from '../../monkey-conf';
import { StoreKeys, useStore } from '../../store';

export const useHttpClient = (): any => {
    const [request, setRequest] = useState<any>(null);
    const { get } = useStore();
    const { token } = useMonkeyConf();
    const [state, setState] = useState<any>({
        isLoading: false,
        error: null,
        data: null,
        setError: () => null,
    });

    const api = (path: string, method: string, body: BodyInit | null | undefined) => {
        setState({
            path: '',
            isLoading: true,
            error: null,
            data: null,
        });

        const access = get(StoreKeys.Token);
        const language = get(StoreKeys.Language);

        setRequest(
            fetch(`${process.env.REACT_APP_HOST}${path}`, {
                method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': access ? `Bearer ${access[token]}` : '',
                    'Accept-Language': language?.code ?? 'en',
                },
                body: JSON.stringify(body),
            })
                .then((response) => {
                    console.log('Response', response);
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }

                    return response.json().then((error) => {
                        throw error;
                    });
                })
                .then((data) => {
                    setState({
                        path,
                        data,
                        isLoading: false,
                        error: null,
                    });
                })
                .catch((error) => {
                    setState({
                        path,
                        error,
                        isLoading: false,
                        data: null,
                    });
                })
        );
    };

    const setError = (error: string | null) => {
        setState({
            ...state,
            error: error,
        });
    }

    return {
        state,
        request,
        api,
        setError,
    };
}