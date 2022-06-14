import Header from '@/components/Header';
import HeaderRight from '@/components/HeaderRight';
import Logo from '@/components/Logo';
import Search from '@/components/Search';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header left={<Logo />} center={<Search />} right={<HeaderRight />} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
