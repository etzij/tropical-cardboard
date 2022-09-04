import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import Navigation from '../components/Navigation';

const NAV_LINKS = [
  {
    label: 'View Coin',
    link: '/view-coin'
  }
];

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Tropical Cardboard</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light'
        }}
      >
        <Navigation links={NAV_LINKS} />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
