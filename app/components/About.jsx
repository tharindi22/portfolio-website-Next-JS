import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-20 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile SVG */}
          <div className="md:w-2/5 mb-8 md:mb-0">
            <div className="relative">
              <div className="w-full h-80 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-gray-700"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg"></div>
            </div>
          </div>

          {/* Info Section */}
          <div className="md:w-3/5 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              I’m an enthusiastic undergraduate student passionate about web development. 
              I have been learning and building modern, responsive websites, focusing on front-end development and UI UX designs. 
              I enjoy creating user-friendly designs with an emphasis on accessibility and great user experience.
            </p>
            <p className="text-gray-300 mb-6">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor
              activities to maintain a healthy work-life balance.
            </p>

            {/* Skills / Info Pills */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3">
                  <i className="fas fa-map-marker-alt text-indigo-400"></i>
                </div>
                <span className="text-gray-300">Higher diploma in software engineering </span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3">
                  <i className="fas fa-graduation-cap text-indigo-400"></i>
                </div>
                <span className="text-gray-300">Best Performances </span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3">
                  <i className="fas fa-briefcase text-indigo-400"></i>
                </div>
                <span className="text-gray-300">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
