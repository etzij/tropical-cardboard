import type { NextPage } from 'next'
import MintModal from '../components/MintModal'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <nav className="flex flex-row p-5">
        <Link href={'/view-coin'}>
          <a className="text-xl">View Coin</a>
        </Link>
      </nav>
      <div className="flex justify-center items-center h-screen">
        <MintModal {...{ opened, setOpened }} />

        <button onClick={() => setOpened(true)}>
          <Image
            alt="Coin Slot Machine"
            src={'/images/coin-slot.svg'}
            width={500}
            height={500}
          ></Image>
        </button>
      </div>
    </>
  )
}

export default Home
