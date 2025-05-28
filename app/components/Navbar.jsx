import React, { useRef } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translate(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translate(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <div>
        <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
          <a href="">
            <Image
              src={assets.logo}
              alt=""
              className="w-28 cursor-pointer mr-14"
            />
          </a>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
            <li className="font-Ovo">
              <a href="#top">Home</a>
            </li>
            <li className="font-Ovo ">
              <a href="#about">About Me</a>
            </li>
            <li className="font-Ovo">
              <a href="#services">Services</a>
            </li>
            <li className="font-Ovo">
              <a href="#work">My Work</a>
            </li>
            <li className="font-Ovo">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button>
              <Image src={assets.moon_icon} alt="" className="w-4" />
            </button>

            <a
              href="#contact"
              className="hidden lg:flex items-center gap-3 px-5 py-1.5 border border-gray-500 rounded-full ml-4 font-Ovo"
            >
              Contact Me
            </a>

            <button className="block md:hidden ml-3" onClick={openMenu}>
              <Image src={assets.menu_black} alt="" className="w-5" />
            </button>
          </div>

          {/* Mobile Menu */}
          <ul
            ref={sideMenuRef}
            className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
          >
            <div className="absolute top-6 right-6" onClick={closeMenu}>
              <Image src={assets.close_black} alt="" className="w-4" />
            </div>

            <li>
              <a className="font-Ovo" onClick={closeMenu} href="#top">
                Home
              </a>
            </li>
            <li>
              <a className="font-Ovo" onClick={closeMenu} href="#about">
                About Me
              </a>
            </li>
            <li>
              <a className="font-Ovo" onClick={closeMenu} href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="font-Ovo" onClick={closeMenu} href="#work">
                My Work
              </a>
            </li>
            <li>
              <a className="font-Ovo" onClick={closeMenu} href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
