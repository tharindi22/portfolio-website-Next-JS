import { assets } from "@/assets/assets";
import Image from "next/image";

const ProjectMore = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-24 py-12">
      {/* Project 1 */}
      <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-6">
        {/* Image  */}
        <div className="h-36 bg-purple-900 relative">
          <Image
            src={assets.Doctor}
            alt="Landing Icon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            Doctor Appointment Booking System frontend
          </h3>

          <p className="text-gray-400 mb-4">
            A fully responsive doctor appointment booking system with
            user-friendly interface.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              Html
            </span>
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              CSS
            </span>
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              React
            </span>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-6">
        {/* Image  */}
        <div className="h-36 bg-purple-900 relative">
          <Image
            src={assets.landing}
            alt="Landing Icon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            Landing Page
          </h3>

          <p className="text-gray-400 mb-4">
            A modern and responsive landing page designed to capture user
            attention and drive conversions.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              Html
            </span>
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              CSS
            </span>
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-6">
        {/* Image  */}
        <div className="h-36 bg-purple-900 relative">
          <Image
            src={assets.Amazone}
            alt="Landing Icon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details*/}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            Amazone Clone
          </h3>

          <p className="text-gray-400 mb-4">
            A clone of the popular e-commerce platform, featuring product listings,
            user authentication, and a shopping cart.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              Html
            </span>
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              CSS
            </span>
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              JavaScript
            </span>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-6">
        {/* Image  */}
        <div className="h-36 bg-purple-900 relative">
          <Image
            src={assets.LMS}
            alt="Landing Icon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            Lerning Management System 
          </h3>

          <p className="text-gray-400 mb-4">
            A comprehensive learning management system for online courses,
            including user registration, course management, and progress tracking.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              Html
            </span>
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              CSS
            </span>
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              React
            </span>
          </div>
        </div>
      </div>

      {/* Project 5 */}
      <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-6">
        {/* Image  */}
        <div className="h-36 bg-purple-900 relative">
          <Image
            src={assets.ToDo}
            alt="Landing Icon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            To Do List App
          </h3>

          <p className="text-gray-400 mb-4">
            A simple and intuitive To Do List application to help users manage their tasks
            efficiently.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              Html
            </span>
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              CSS
            </span>
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              React
            </span>
          </div>
        </div>
      </div>

      {/* Project 6 */}
      <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-6">
        {/* Image  */}
        <div className="h-36 bg-purple-900 relative">
          <Image
            src={assets.eventBook}
            alt="Landing Icon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            Event Booking System Frontend Design
          </h3>

          <p className="text-gray-400 mb-4">
            A user-friendly event booking system with a clean and modern design,
            allowing users to browse and book events easily.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              Figma
            </span>
            
          </div>
        </div>
      </div>

      {/* Project 7 */}
      <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-6">
        {/* Image  */}
        <div className="h-36 bg-purple-900 relative">
          <Image
            src={assets.Mobile}
            alt="Landing Icon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            Mobile Food Odering App
          </h3>

          <p className="text-gray-400 mb-4">
            A mobile application for food ordering, featuring a user-friendly interface
            and seamless navigation.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              Figma
            </span>
            
          </div>
        </div>
      </div>

      {/* Project 8 */}
      <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-6">
        {/* Image  */}
        <div className="h-36 bg-purple-900 relative">
          <Image
            src={assets.Website}
            alt="Landing Icon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            Simple Website Design
          </h3>

          <p className="text-gray-400 mb-4">
            A clean and minimalistic website design that focuses on user experience
            and easy navigation.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              Figma
            </span>
            
          </div>
        </div>
      </div>

      {/* Project 9 */}
      <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-6">
        {/* Image  */}
        <div className="h-36 bg-purple-900 relative">
          <Image
            src={assets.animation}
            alt="Landing Icon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            3D Animation Design
          </h3>

          <p className="text-gray-400 mb-4">
            A stunning 3D animation project showcasing advanced animation techniques
            and visual effects.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 text-indigo-300 rounded-full text-sm">
              Figma
            </span>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectMore;
