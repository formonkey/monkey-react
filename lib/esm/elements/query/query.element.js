import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
var queryClient = new QueryClient();
export var Query = function (_a) {
    var children = _a.children;
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
};
