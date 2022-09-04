import { Center } from '@mantine/core';
import type { NextPage } from 'next';
import Image from 'next/image';

const ViewCoin: NextPage = () => {
  return (
    <Center>
      <div className="flex flex-col justify-center">
        <Image
          alt="Front of Coin"
          id="coin-front"
          src={'/images/coin-front.png'}
          width={500}
          height={500}
        ></Image>
        <label className="text-center" htmlFor="coin-front">
          Front
        </label>
      </div>
      <div className="flex flex-col justify-center">
        <Image
          alt="Back of Coin"
          id="coin-back"
          src={'/images/coin-back.png'}
          width={500}
          height={500}
        ></Image>
        <label className="text-center" htmlFor="coin-back">
          Back
        </label>
      </div>
    </Center>
  );
};

export default ViewCoin;
