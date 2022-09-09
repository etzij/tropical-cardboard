import MintModal from './MintModal';
import { useState, useEffect, FC } from 'react';
import Image from 'next/image';
import Install from './Install';
import { Center, LoadingOverlay } from '@mantine/core';

declare let window: any;

const CoinMachine: FC = () => {
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
          src={'/images/coin-exchange.jpeg'}
          width={500}
          height={500}
        ></Image>
      </button>
    </Center>
  );
};

export default CoinMachine;
