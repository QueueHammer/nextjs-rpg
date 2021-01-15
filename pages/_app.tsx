// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head';
import '../styles/site.scss';


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
    </Head>
    <Component {...pageProps} />
  </>;
}
