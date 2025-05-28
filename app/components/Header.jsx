import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl mx-auto h-screen flex flex-col items-center justify-center text-center gap-5 px-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="Tharindi Aththanayaka"
          className="rounded-full w-24 md:w-28 shadow-md"
        />
      </div>

      <h3 className="flex items-center justify-center gap-1 text-lg md:text-xl font-Ovo text-gray-800">
        Hi, I'm Tharindi Aththanayaka
        <Image src={assets.hand_icon} alt="👋" className="w-4" />
      </h3>

      <h2 className="text-xl sm:text-3xl lg:text-4xl font-Ovo text-gray-900 leading-tight">
        UI/UX Designer & Frontend Developer
      </h2>

      <p className="text-sm md:text-base max-w-xl text-gray-600 font-Ovo">
        I design and develop clean, intuitive, and responsive user interfaces. Passionate about creating elegant digital experiences.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
        <a
          href="#contact"
          className="px-6 py-2 bg-black text-white rounded-full font-Ovo text-sm flex items-center gap-1 hover:bg-gray-800 transition"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="→" className="w-3" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-6 py-2 border border-gray-400 rounded-full font-Ovo text-sm flex items-center gap-1 hover:bg-gray-100 transition"
        >
          My Resume
          <Image src={assets.download_icon} alt="↓" className="w-3" />
        </a>
      </div>
    </div>
  );
};

export default Header;
