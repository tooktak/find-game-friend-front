import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import HeaderLayout from '@/layout/HeaderLayout';
import { getClient } from '@/libs/client';

import '@/styles/globals.scss';
import { ContextProvider } from 'context';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <HeaderLayout />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
