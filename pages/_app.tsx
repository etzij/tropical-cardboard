import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import Navigation from '../components/Navigation';

const NAV_LINKS = [
  {
    label: 'Main Page',
    link: '/'
  },
  {
    label: 'About',
    link: '/about'
  },
  {
    label: 'Coin Exchange',
    link: '/coin-exchange'
  },
  {
    label: 'Soda Machine',
    link: '/soda-machine'
  },
  {
    label: 'Meet The Team',
    link: '/meet-the-team'
  },
  {
    label: 'References',
    link: '/references'
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
          colorScheme: 'light',
          fontFamily: 'Gill Sans',
          primaryColor: 'grape'
        }}
      >
        <Navigation links={NAV_LINKS} />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
