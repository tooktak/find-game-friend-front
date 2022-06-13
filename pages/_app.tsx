import Button from '@/components/Button';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Search from '@/components/Search';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header left={<Logo />} center={<Search />} right={<Button />} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
