import HeaderLayout from '@/layout/HeaderLayout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderLayout />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
