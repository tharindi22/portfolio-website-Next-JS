import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-base md:text-lg font-Ovo ">
        Introduction
      </h4>
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-Ovo mb-8">
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10">
        <div className="w-36 sm:w-48 md:w-56 lg:w-64 xl:w-80 rounded-3xl max-w-full flex-shrink-0 mx-auto">
          <Image
            src={assets.user_image}
            alt="User"
            className="rounded-3xl shadow-lg object-cover w-full h-auto"
            width={320}
            height={320}
            priority
          />
        </div>

        <div className="flex-1 w-full">
          <p className="mb-8 max-w-2xl mx-auto text-gray-700 font-Ovo text-base sm:text-lg leading-relaxed text-center lg:text-left">
           I am a passionate UI/UX
            Designer & Frontend Developer dedicated to crafting beautiful and
            functional digital experiences. My focus is on clean, intuitive, and
            responsive interfaces that delight users and drive results.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400  rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition-all duration-500 hover:shadow-black"
                key={index}
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-7 h-8 mb-3"
                  width={32}
                  height={32}
                />
                <h3 className="mb-2 font-semibold text-gray-800 text-base">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-ovo">Tools I use</h4>
          <ul className="flex items-centergap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li className="flex item-center justify-center w-8 sm:w-14 aspect-square border-x-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 transition-all duration-500" 
              key={index}>
                <Image src={tool} alt="Tools" className="w-3 sm:w-7"/>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default About;
