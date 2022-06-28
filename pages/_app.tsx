import type { AppProps } from 'next/app';
import { createContext } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import HeaderLayout from '@/layout/HeaderLayout';
import useToggle from '@/hooks/useToggle';
import { getClient } from 'libs/client';

import '@/styles/globals.scss';

export type LoginContextType = {
  isLogin: boolean;
  toggleIsLogin: () => void;
};

export const LoginContext = createContext<LoginContextType | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = getClient();
  const [isLogin, toggleIsLogin] = useToggle();

  return (
    <QueryClientProvider client={queryClient}>
      <LoginContext.Provider value={{ isLogin, toggleIsLogin }}>
        <HeaderLayout />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </LoginContext.Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
