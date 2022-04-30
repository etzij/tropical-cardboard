import type { NextPage } from 'next'
import MintModal from '../components/MintModal'
import { useState } from 'react'
import Image from 'next/image'

const Home: NextPage = () => {
  const [opened, setOpened] = useState(false)
  return (
    <div className="flex justify-center items-center h-screen">
      <MintModal {...{ opened, setOpened }} />

      <button onClick={() => setOpened(true)}>
        <Image src={'/images/coin-slot.svg'} width={500} height={500}></Image>
      </button>
    </div>
  )
}

export default Home
