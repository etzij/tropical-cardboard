import { Center, Stack } from '@mantine/core';
import type { NextPage } from 'next';
import CoinMachine from '../components/CoinMachine';
import ViewCoin from '../components/ViewCoin';

const CoinExchange: NextPage = () => {
  return (
    <Stack>
      <Center>
        <ViewCoin />
      </Center>
      <Center>
        <CoinMachine />
      </Center>
    </Stack>
  );
};

export default CoinExchange;
