import { Button } from '@mantine/core';
// eslint-disable-next-line node/no-unpublished-import
import { ethers } from 'ethers';
import TropicalCardboardCoin from '../artifacts/contracts/TropicalCardboardCoin.sol/TropicalCardboardCoin.json';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    ethereum?: ethers.providers.ExternalProvider;
  }
}

const TropicalCardboardMint = () => {
  const mintToken = async () => {
    // TropicalCardboardCoin
    const contractAddress = '0xE1BaF4fE79fa56B6200c2D6bdf077EBa483b7658';

    const provider = new ethers.providers.Web3Provider(window.ethereum!);

    // get the end user
    const signer = provider.getSigner();

    // get the smart contract
    const tropicalContract = new ethers.Contract(
      contractAddress,
      TropicalCardboardCoin.abi,
      signer
    );

    // const connection = tropicalContract.connect(signer);
    const addr = await signer.getAddress();

    const result = await tropicalContract.payToMint(addr, 0, 1, '0x', {
      value: ethers.utils.parseEther('0.05')
    });

    await result.wait();
  };

  return (
    <Button variant="outline" onClick={() => mintToken()}>
      Mint!
    </Button>
  );
};

export default TropicalCardboardMint;
