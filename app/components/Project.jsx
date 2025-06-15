import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one presented unique
          challenges and opportunities for growth.
        </p>

        <p className="text-slate-300 text-left mb-12">Individual Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            <div className="h-36 bg-purple-900 relative">
              <Image
                src={assets.Doctor}
                alt="Landing Icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 ">
              <h3 className="text-xl font-semibold mb-2">
                Doctor Booking System
              </h3>

              <div className="flex justify-between">
                <a
                  href="/ProjectMore"
                  className="text-indigo-400 hover:text-indigo-300 transition flex items-center"
                >
                  <span>View Project</span>
                </a>

                <a
                  href="https://github.com/tharindi22/React_Project-Doctor-Appoinment--frontend"
                  className="text-blue-400 hover:text-blue-300 transition flex items-center gap-2"
                >
                  <Image src={assets.github} alt="github" className="w-6" />
                  <p>Code</p>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            {/* Purple Top Section with Full-Size Background-like Image */}
            <div className="h-36 bg-purple-900 relative">
              <Image
                src={assets.landing}
                alt="Landing Icon"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gray Bottom Section with Text */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Landing Page
              </h3>

              <div className="flex justify-between">
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition flex items-center"
                >
                  <span>View Project</span>
                </a>
                <a
                  href="https://github.com/tharindi22/React_Project-Doctor-Appoinment--frontend"
                  className="text-blue-400 hover:text-blue-300 transition flex items-center gap-2"
                >
                  <Image src={assets.github} alt="github" className="w-6" />
                  <p>Code</p>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            <div className="h-36 bg-purple-900 relative">
              <Image
                src={assets.Amazone}
                alt="Landing Icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Amazone Clone</h3>
              <div className="flex justify-between">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition flex items-center gap-2"
                >
                  <span>View Project</span>
                </a>
               <a
                  href="https://github.com/tharindi22/React_Project-Doctor-Appoinment--frontend"
                  className="text-blue-400 hover:text-blue-300 transition flex items-center gap-2"
                >
                  <Image src={assets.github} alt="github" className="w-6" />
                  <p>Code</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-slate-300 text-left mb-12">Individual Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-24 ">
          {/* Project 4 */}
          <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            {/* Purple Top Section with Full-Size Background-like Image */}
            <div className="h-36 bg-purple-900 relative">
              <Image
                src={assets.LMS}
                alt="Landing Icon"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gray Bottom Section with Text */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">LMS</h3>

              <div className="flex justify-between">
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition flex items-center"
                >
                  <span>View Project</span>
                </a>
                <a
                  href="https://github.com/tharindi22/React_Project-Doctor-Appoinment--frontend"
                  className="text-blue-400 hover:text-blue-300 transition flex items-center gap-2"
                >
                  <Image src={assets.github} alt="github" className="w-6" />
                  <p>Code</p>
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            <div className="h-36 bg-purple-900 relative">
              <Image
                src={assets.ToDo}
                alt="Landing Icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 ">
              <h3 className="text-xl font-semibold mb-2">TO DO list app</h3>

              <div className="flex justify-between">
                <a
                  href="/ProjectMore"
                  className="text-indigo-400 hover:text-indigo-300 transition flex items-center"
                >
                  <span>View Project</span>
                </a>

                <a
                  href="https://github.com/tharindi22/React_Project-Doctor-Appoinment--frontend"
                  className="text-blue-400 hover:text-blue-300 transition flex items-center gap-2"
                >
                  <Image src={assets.github} alt="github" className="w-6" />
                  <p>Code</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-slate-300 text-left mb-12">UI / UX Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Project 6 */}
          <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            {/* Purple Top Section with Full-Size Background-like Image */}
            <div className="h-36 bg-purple-900 relative">
              <Image
                src={assets.eventBook}
                alt="Landing Icon"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gray Bottom Section with Text */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Event Booking System
              </h3>

              <div className="flex justify-between">
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition flex items-center"
                >
                  <span>View Project</span>
                </a>
                <a
                  href="https://github.com/tharindi22/React_Project-Doctor-Appoinment--frontend"
                  className="text-blue-400 hover:text-blue-300 transition flex items-center gap-2"
                >
                  <Image src={assets.github} alt="github" className="w-6" />
                  <p>Code</p>
                </a>
              </div>
            </div>
          </div>

          {/* Project 7 */}
          <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            <div className="h-36 bg-purple-900 relative">
              <Image
                src={assets.Mobile}
                alt="Landing Icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 ">
              <h3 className="text-xl font-semibold mb-2">
                Mobile Food Odering App
              </h3>

              <div className="flex justify-between">
                <a
                  href="/ProjectMore"
                  className="text-indigo-400 hover:text-indigo-300 transition flex items-center"
                >
                  <span>View Project</span>
                </a>

                <a
                  href="https://github.com/tharindi22/React_Project-Doctor-Appoinment--frontend"
                  className="text-blue-400 hover:text-blue-300 transition flex items-center gap-2"
                >
                  <Image src={assets.github} alt="github" className="w-6" />
                  <p>Code</p>
                </a>
              </div>
            </div>
          </div>

          {/* Project 8 */}
          <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            {/* Purple Top Section with Full-Size Background-like Image */}
            <div className="h-36 bg-purple-900 relative">
              <Image
                src={assets.Website}
                alt="Landing Icon"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gray Bottom Section with Text */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Website Design
              </h3>

              <div className="flex justify-between">
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition flex items-center"
                >
                  <span>View Project</span>
                </a>
                <a
                  href="https://github.com/tharindi22/React_Project-Doctor-Appoinment--frontend"
                  className="text-blue-400 hover:text-blue-300 transition flex items-center gap-2"
                >
                  <Image src={assets.github} alt="github" className="w-6" />
                  <p>Code</p>
                </a>
              </div>
            </div>
          </div>

          {/* Project 9 */}
          <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            <div className="h-36 bg-purple-900 relative">
              <Image
                src={assets.animation}
                alt="Landing Icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 ">
              <h3 className="text-xl font-semibold mb-2">3D Animation</h3>

              <div className="flex justify-between">
                <a
                  href="/ProjectMore"
                  className="text-indigo-400 hover:text-indigo-300 transition flex items-center"
                >
                  <span>View Project</span>
                </a>

                <a
                  href="https://github.com/tharindi22/React_Project-Doctor-Appoinment--frontend"
                  className="text-blue-400 hover:text-blue-300 transition flex items-center gap-2"
                >
                  <Image src={assets.github} alt="github" className="w-6" />
                  <p>Code</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/ProjectMore"
            className="inline-flex items-center px-6 py-3 border border-indigo-500 text-indigo-400 font-medium rounded-lg hover:bg-indigo-500 hover:bg-opacity-10 transition"
          >
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
