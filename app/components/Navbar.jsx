"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";

export const Navbar = () => {
    
  const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen , setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home" , href:"#"},
    { name: "Portfolio" , href:"#portfolio"},
    { name: "Resume" , href:"#resume"},
    { name: "Contact" , href:"#contact"},


  ]

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
      <header className="w-full py-4 md:flex md:justify-center sticky top-0 z-50">
      <nav className="hidden min-[825px]:flex md:w-6xl items-center justify-between bg-white/10 dark:bg-gray-300/20 backdrop-blur-md px-6 py-3 rounded-2xl shadow-md">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold text-black dark:text-black hover:text-content-alter transition-all duration-300 ease-in-out"
        >
          Tia<span className="text-3xl text-purple-800">.</span>
        </Link>

        {/* Navigation Links desktop */}
        <div className="flex items-center gap-6 text-black dark:text-gray-900 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-bold hover:text-content-alter transition-all duration-300 ease-in-out"
            >
              {link.name}
            </Link>
          ))}
        </div>

         {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border-2 border-white dark:border-none bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Dark Mode">
          {darkMode ? (
            <FaRegMoon className="w-5 h-5 text-white " />
          ) : (
            <IoSunnyOutline className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          )}
      </button>
      </nav>

      {/* mobile nav */}
          <nav className="flex min-[825px]:hidden md:w-6xl items-center justify-between bg-white/10 dark:bg-gray-300/20 backdrop-blur-md px-6 py-3 rounded-2xl shadow-md">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold text-black dark:text-black hover:text-content-alter transition-all duration-300 ease-in-out"
        >
          Tia<span className="text-3xl text-purple-800">.</span>
        </Link>

        {/* Navigation Links desktop */}
        <div className="hidden items-center gap-6 text-black dark:text-gray-900 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-bold hover:text-content-alter transition-all duration-300 ease-in-out"
            >
              {link.name}
            </Link>
          ))}
        </div>

         {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-auto p-2 rounded-full border-2 border-white dark:border-none bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Dark Mode">
          {darkMode ? (
            <FaRegMoon className="w-5 h-5 text-white " />
          ) : (
            <IoSunnyOutline className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          )}
      </button>

      {/* toggle */}
      <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            {isMenuOpen ? (
              <RiCloseLine className="text-2xl" />
            ) : (
              <RiMenu4Line className="text-2xl" />
            )}
      </button>
      </nav>

      {/* Dropdown Mobile*/}
      {isMenuOpen && (
        <div className="min-[825px]:hidden fixed top-[86px] left-0 z-40 w-full px-4">
          <div className="bg-white shadow-lg rounded-2xl mx-5 mt-2 p-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-[18px] py-3 border-b font-bold border-gray-100 text-black dark:text-black hover:text-content-alter transition-all duration-300 ease-in-out"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};