"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { navLinks } from "@/constants/data";

import logo from "../images/logo.png";

import { Search } from "lucide-react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";

const NavItems = ({ closeMenu }) => (
  <ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-11 relative z-20 w-full">
    {navLinks.map(({ id, href, name }) => (
      <li
        key={id}
        className="text-link uppercase font-bold text-base hover:text-white duration-500 transition-colors">
        <Link href={href} onClick={closeMenu} className="block w-full">
          {name}
        </Link>
      </li>
    ))}
    <form className="relative">
      <input
        type="text"
        placeholder="Buscar..."
        className="bg-input focus:bg-inputDark outline-none transition-colors duration-500 rounded-3xl px-4 py-2 text-inputText"
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white" />
    </form>

  </ul>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-header">
      <div className="container">
        <div className="flex justify-between lg:relative items-center py-4">

          <Link href="/" title="Go to AnimeFlv homepage" aria-label="AnimeFlv homepage">
            <Image src={logo} width={100} height={35} alt="Logo" priority />
          </Link>

          <nav className="lg:flex hidden">
            <NavItems closeMenu={null} />
          </nav>

          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center gap-x-2"
            aria-label="Toggle Menu"
          >
            <span className="text-white font-bold uppercase text-sm">Menu</span>

            {isOpen ? (
              <div className="bg-danger rounded-full p-3">
                <X className="h-5 w-5 text-white" />
              </div>

            ) : (
              <div className="bg-primary rounded-full p-3">
                <Menu className="h-5 w-5 text-white" />
              </div>
            )}
          </button>

        </div>
      </div>


      {isOpen && (
        <div className="absolute z-40 inset-y-0 left-0 lg:hidden block w-[270px] h-screen bg-navbar navbar-shadow">
          <div className="py-10 px-5">
            <nav>
              <NavItems closeMenu={closeMenu} />
            </nav>
          </div>
          <div className="h-1 bg-primary w-full absolute bottom-0"></div>
        </div>
      )}


    </header>
  )
}

export default Header;