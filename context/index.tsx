import CombineProvider from './CombineProvider';
import LoginProvider from './Login';

const providers = [LoginProvider];

export const ContextProvider = CombineProvider(providers);
