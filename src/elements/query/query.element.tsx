import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

import { QueryProps } from './types';

const queryClient = new QueryClient();

export const Query = ({ children }: QueryProps) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
