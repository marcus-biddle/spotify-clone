import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Recents from '../components/Recents'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const background = [
    "z-0 absolute w-full h-64 bg-gradient-to-b from-cyan-900/50 to-neutral-900",
    "z-0 absolute w-full h-64 bg-gradient-to-b from-fuchsia-900/50 to-neutral-900",
    "z-0 absolute w-full h-64 bg-gradient-to-b from-rose-900/50 to-neutral-900",
    "z-0 absolute w-full h-64 bg-gradient-to-b from-emerald-900/50 to-neutral-900",
  ];
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v === 3? 0 : v+1));
    }, 60000*2)
  }, []);


  return (
    <div className=' flex flex-row h-screen h-'>
      <Head>
        <title>Spotify</title>
      </Head>
      
      {/* Sidebar */}
      <div className=''>
        <Sidebar />
      </div>

      {/* Main Body */}
      <div className='w-full bg-neutral-900'>
        <div className={background[value]}>
        </div>
        <div className='mx-6'>
          {/* have section for nav buttons */}
          <section>
            <Header />
          </section>
          {/* Recents */}
          <section>
            <Recents />
          </section>
        </div>
      </div>

      {/* Footer - Song playing */}
    </div>
  )
}

export default Home
