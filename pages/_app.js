import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Shadows+Into+Light&family=Unna:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="Make the switch, one cup at a time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Titli Foundation" />
        <meta
          property="og:description"
          content="Make the switch, one cup at a time"
        />
        <meta
          property="og:image"
          content="https://www.titlifoundation.in/images/groupCups.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Titli Foundation"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@titlifdn" />
        <meta name="twitter:title" content="Titli Foundation" />
        <meta
          name="twitter:description"
          content="Make the switch, one cup at a time"
        />
        <meta
          name="twitter:image"
          content="https://www.titlifoundation.in/images/groupCups.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
