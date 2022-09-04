import type { NextPage } from 'next';
import MintModal from '../components/MintModal';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Install from '../components/Install';
import { Center, LoadingOverlay } from '@mantine/core';

declare let window: any;

const Home: NextPage = () => {
  const [onServer, setOnServer] = useState(true);
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    if (window) setOnServer(false);
  }, []);

  if (onServer) return <LoadingOverlay visible={onServer} />;

  if (!window.ethereum) {
    return <Install />;
  }

  return (
    <Center>
      <MintModal {...{ opened, setOpened }} />
      <button onClick={() => setOpened(true)}>
        <Image
          alt="Coin Slot Machine"
          src={'/images/coin-slot.svg'}
          width={500}
          height={500}
        ></Image>
      </button>
    </Center>
  );
};

export default Home;
