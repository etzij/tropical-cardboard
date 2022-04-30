import type { NextPage } from 'next'
import Image from 'next/image'

const ViewCoin: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center">
        <Image
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
          id="coin-back"
          src={'/images/coin-back.png'}
          width={500}
          height={500}
        ></Image>
        <label className="text-center" htmlFor="coin-back">
          Back
        </label>
      </div>
    </div>
  )
}

export default ViewCoin
