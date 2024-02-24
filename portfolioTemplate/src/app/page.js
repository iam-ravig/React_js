"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (

    <div className={darkMode ?"dark":""}>
      <Head>
        <title>Ravi Gupta Portfolio</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
    <main className="bg-white px-10 md:text-center md:px-20 lg:px-40 dark:bg-gray-900">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <h1 className="text-xl font-burtons">developedbyravi</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer text-xl" />
            </li>
            <li>
              <a
                href="#"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
            Ravi Gupta
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Full Stack Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
            Software Developer having multiple domain experiences and team
            managing. Always being a student and having a learner attitude.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-20  overflow-hidden md:h-96 md:w-96">
          <Image src={deved} layout="fill" objectFit="cover" />
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-2 dark:text-white"> Work Experiences </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a software developer, I've done
            work for multiple domain which include{" "}
            <span className="text-teal-500">
              {" "}
              Tele-communication, Healthcare, Sports and Consulting Services.
            </span>{" "}
            and collaborated with talented people to create digital products for
            business and consumer use.
          </p>
        </div>
      </section>
    </main>
    </div>
  );
}
