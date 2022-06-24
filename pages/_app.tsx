import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import HeaderLayout from '@/layout/HeaderLayout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { getClient } from 'libs/client';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HeaderLayout />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
