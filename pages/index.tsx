import { Center, Stack, Title, Text, Button } from '@mantine/core';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Center>
      <Stack>
        <Title order={1} align="center" color="violet">
          Welcome to the
        </Title>
        <Title order={1} weight={700} italic align="center" color="violet">
          MetaVerse!
        </Title>
        <Title order={1} align="center" color="violet">
          Grab a soda
        </Title>
        <Text align="center" color="orange">
          {' '}
          Hello and welcome to the MetaVerse! Why dont you grab a soda while
          while we look around. You&apos;ve probably heard a lot of buzzwords
          and crazy stories, and have some questions about what it all means.
          Lets learn some basics.
        </Text>
        <Text align="center" color="pink">
          {' '}
          As you may have guessed you cant buy a soda in the MetaVerse with
          regular money. Youll money that works in the MetaVerse. Typically
          thats called cryptocurrency. There are alots of different types of
          cryptocurriences. Our money exchanger uses the Polygon Cryptocurrencie
          called MATIC. But in order to hold cryptocurrencies, your going to
          need a special wallet for the Metaverse.
        </Text>
        <Text align="center" color="lime">
          {' '}
          Just like in real life, you&apos;ll need to keep your wallet safe as
          its where your money is. Dont ever store your seed phrase on your
          computer are share it with anyone.
        </Text>
        <Button
          variant="outline"
          color="orange"
          component="a"
          target="_blank"
          href="https://metamask.io/download.html"
        >
          Download MetaMask
        </Button>
        <Text align="center" color="teal">
          {' '}
          Now that we have our new wallet for the MetaVerse, lets buy some
          cryptocurrency. Visit this exchange. I recommend starting with a small
          amount like 5-10 Matic to Start. If just want to buy a soda, youll
          only need 1 MATIC.
        </Text>
        <Text align="center" color="green">
          {' '}
          Now that you have money(cryptocurrency) for the MetaVerse in your new
          wallet, you can buy the special token that the vending machine takes.
          Somebody took the time to make these tokens look cool and spin around.
          If you want, you can keep them as a souvineer in your wallet (like an
          arcade token).
        </Text>
        <Text align="center" color="blue">
          {' '}
          With your new Tropical Cardboard Token, you can go to the vending
          machine and buy yourself a soda! Once you spend your token, it will be
          gone, but dont worry, you can buy more tokens while supplies last.
        </Text>
        <Text align="center" color="cyan">
          {' '}
          Choose which sodaphones you want, and confirm the transaction in your
          wallet.
        </Text>
        <Text align="center" color="grape">
          {' '}
          Contrats on your new Sodaphone! We hope you enjoy your soda while you
          explore the MetaVerse. You can view your soda on many different
          platoforms like Opensea and LooksRare. There are marketplaces where
          items are sold and traded. This is your soda. you can choose to sell
          it or give it away if you would like.
        </Text>
        <Button
          variant="outline"
          color="orange"
          component="a"
          target="_blank"
          href="https://opensea.io/account?tab=collected"
        >
          Go to OpenSea!
        </Button>
        <Text align="center" color="violet">
          {' '}
          Stay tuend for more things in the MetaVerse from Tropical Cardboard.
          let us know if you have any questions and we can explore together.
        </Text>
      </Stack>
    </Center>
  );
};

export default Home;
