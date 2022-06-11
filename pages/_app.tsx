import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

const Menu = () => {
  return (
    <div>
      <ul>
        <li><Link href="/">main</Link></li>
        <li><Link href="/about">about</Link></li>
      </ul>
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return <><Menu /><Component {...pageProps} /></>
}

export default MyApp
