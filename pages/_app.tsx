import type { AppProps } from 'next/app';
import { createContext, useEffect } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import HeaderLayout from '@/layout/HeaderLayout';
import useToggle from '@/hooks/useToggle';
import useLocalStorage from '@/hooks/useLocalStorage';
import { getClient } from '@/libs/client';

import '@/styles/globals.scss';

export type LoginContextType = {
  isLogin: boolean;
  toggleIsLogin: (state?: boolean) => void;
  userInfo: Member | '';
  setUserInfo: (data: Member | '') => void;
};

export const LoginContext = createContext<LoginContextType | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = getClient();
  const [isLogin, toggleIsLogin] = useToggle();
  const [userInfo, setUserInfo] = useLocalStorage<Member | ''>('userInfo', '');

  useEffect(() => {
    if (
      typeof userInfo === 'object' &&
      !Array.isArray(userInfo) &&
      userInfo !== null
    ) {
      toggleIsLogin(true);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LoginContext.Provider
        value={{ isLogin, toggleIsLogin, userInfo, setUserInfo }}
      >
        <HeaderLayout />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </LoginContext.Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
