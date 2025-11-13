'use client'

import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";

export default function Home() {
  return (
    <div className="max-w-8xl mx-auto w-[90%]">
      <div className="fixed top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-bl from-pink-400 via-purple-200 to-rose-400 rounded-b-full opacity-40 blur-2xl animate-pulse "></div>
      <div className="fixed top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-bl from-rose-300 via-purple-300 to-pink-400 rounded-b-full opacity-40 blur-3xl animate-pulse " style={{ animationDelay: "1s"}}></div>
      <Navbar/>
      <Hero/>
      <Portfolio/>
    </div>
  );
}
