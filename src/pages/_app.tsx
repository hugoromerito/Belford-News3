import { Provider } from 'urql'
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { client, ssrCache } from '../lib/urql'
import { ThemeProvider } from "next-themes";

import '../styles/globals.css'
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <ThemeProvider attribute="class">
      <Provider value={client}>
      
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F0PR0HMS67"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-F0PR0HMS67');
          `}
        </Script>


        <Head>
          <title>Belford News</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
