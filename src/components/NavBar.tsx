"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white text-gray-900 shadow sticky top-0 z-50">
      <nav className=" relative z-10 bg-white max-w-6xl mx-auto flex items-center justify-between py-8 px-4 md:px-8 ">
        {/* Left Links */}
        <ul className="hidden lg:flex space-x-16 text-[16px] font-medium ml-40 lg:mr-8">
          <li className="">
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-600 hover:underline underline-offset-4 transition-colors duration-200"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/experience"
              className="text-gray-900 hover:text-blue-600 hover:underline underline-offset-4 transition-colors duration-200"
            >
              Experience
            </Link>
          </li>
        </ul>

        {/* Center Name */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-xl font-bold text-gray-900 ">Juan Rodriguez</h1>
          <p className="text-sm text-gray-500 -mt-1 ">
            Research & Development Engineer
          </p>
        </div>

        {/* Right Links */}
        <ul className="hidden lg:flex space-x-16 text-[16px] font-medium mr-44 lg:ml-8 ">
          <li>
            <Link
              href="/projects"
              className="text-gray-900 hover:text-blue-600 hover:underline underline-offset-4 transition-colors duration-200 "
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-blue-600 hover:underline underline-offset-4 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          className="lg:hidden text-gray-900 focus:outline-none ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-0.5 z-0">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-black/50 to-transparent"></div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col items-center space-y-4 pb-4 text-[16px] font-medium">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/experience" onClick={() => setIsOpen(false)}>
              Experience
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
