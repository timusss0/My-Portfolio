import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineViewGrid , HiDownload} from "react-icons/hi";

export const Hero = () => {
  return (
    <div className="max-w-2xl min-h-screen m-auto flex flex-col md:items-center md:justify-center lg:justify-center text-center lg:items-center pb-50 overflow-hidden">
        <div>
            <Image src="/Tia_mustika.png" width={150} height={150} className="relative z-40 mt-27 rounded-full mb-4 mx-auto object-center object-co" alt="Image profile tia" priority/>
            <h3 className="text-lg md:text-xl font-semibold flex items-center justify-center gap-2">I'm Tia Mustika</h3>
            <h1 className="text-3xl md:text-5xl font-semibold mt-3 leading-tight">Fullstack Developer</h1>
           
        </div>
        {/* button */}
        <div className="flex flex-col md:flex-row items-center gap-8 my-8  ">
          <Link href="#portfolio" className="w-full text-lg md:text-xl custom-gradient md:w-auto py-3 md:py-3 px-8 text-black rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300">My Portfolio     <HiOutlineViewGrid /></Link>
          <Link href="/resume.pdf"   className="w-full md:w-auto text-lg md:text-xl bg-gradient-to-r from-pink-100 to-blue-100 border-gray-300 border-2 py-2.5 px-8 text-gray-800 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 shadow-sm" download>My Resume  <HiDownload /></Link>
        </div>
    </div>
  )
}
