import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FK94KZNMM3"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-FK94KZNMM3');`}
      </Script>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
