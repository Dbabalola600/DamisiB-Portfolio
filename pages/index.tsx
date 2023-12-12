import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import Typewriter from "typewriter-effect";
import programming from "../public/programming.svg"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home- Babalola Damisi</title>

        <link rel="icon" href="/logo.ico" />
      </Head>


      <div className="flex h-full">
        <div className="my-auto">
          <div className="mx-6 lg:grid lg:grid-cols-2 lg:items-center lg:mx-24">
            <div>
              <h1 className="font-medium text-center text-xl text-gray-700 lg:text-left">
                Hello, I&apos;m <span className="block mt-3 font-bold text-primary text-3xl">Damisi Babalola</span>
              </h1>
              <div className="font-ligth text-center text-xl text-gray-700 mt-3 lg:text-left">
                <Typewriter
                  options={{
                    strings: ["Full-Stack Developer", "FE-Heavy Dev", "Lover of Christ"],
                    autoStart: true,
                    loop: true
                  }}
                />
              </div>
            </div>

            <div className="w-full mt-8 md:mt-12 lg:mt-0">
              <Image src={programming} alt="programming" priority />
            </div>
          </div>

          

          <div className="flex mt-8 lg:mt-10">
            <div className="m-auto">
              <a href="/Damisi resume.pdf" download>
                <button className="bg-primary font-bold text-white text-xl rounded px-8 py-6 hover:text-primary hover:bg-white hover:ring-2 hover:ring-primary">
                  <div className="flex items-center space-x-4">
                    <AiOutlineCloudDownload />
                    <div>Download Resume</div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
