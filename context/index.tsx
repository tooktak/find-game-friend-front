import CombineProvider from './CombineProvider';
import SearchProvider from './FindMatePost';
import Login from './Login';

const providers = [Login, SearchProvider];

export const ContextProvider = CombineProvider(providers);
