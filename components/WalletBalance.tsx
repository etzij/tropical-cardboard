import { useState, FC } from 'react';
// eslint-disable-next-line node/no-unpublished-import
import { ethers } from 'ethers';
import { Button } from '@mantine/core';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    ethereum?: ethers.providers.ExternalProvider;
  }
}

const WalletBalance: FC = () => {
  const [balance, setBalance] = useState<string>('');

  const getBalance = async () => {
    const [account] = await window.ethereum!.request!({
      method: 'eth_requestAccounts'
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum!);
    const balance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(balance));
  };

  return (
    <div className="flex flex-col gap-3 p-3">
      <h5>Your Balance: {balance}</h5>
      <Button variant="outline" onClick={() => getBalance()}>
        Show My Balance
      </Button>
    </div>
  );
};

export default WalletBalance;
