import { createContext } from 'react';

import { MonkeyConfState } from '../types';

export const MonkeyConfContext = createContext({} as MonkeyConfState);
export const MonkeyConfProvider = MonkeyConfContext.Provider;