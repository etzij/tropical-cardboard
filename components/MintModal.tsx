import { Button, Modal } from '@mantine/core';
import { FC, Dispatch, SetStateAction } from 'react';
import TropicalCardboardMint from './TropicalCardboardMint';
import WalletBalance from './WalletBalance';

interface ModalState {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

const MintModal: FC<ModalState> = ({ opened, setOpened }) => {
  return (
    <>
      <Modal
        classNames={{
          title: 'text-center w-auto'
        }}
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        title="5 Matic"
      >
        <div className="flex flex-row gap-4 justify-center">
          <TropicalCardboardMint />
          <Button variant="outline">Connect Wallet</Button>
        </div>
        <WalletBalance />
      </Modal>
    </>
  );
};

export default MintModal;
