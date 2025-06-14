const ProjectMore = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
      {/* Project 1 */}
      <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-6">
        <div className="h-36 bg-indigo-900 flex items-center justify-center">
          {/* Icon for the project */}
          <svg
            className="w-24 h-24 text-indigo-300"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21 3H3C1.9 3 1 3.9 1 5v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h14v2H5zm0-4h14v2H5zm0 8h9v2H5z" />
          </svg>
        </div>
        <div className="p-6 ">
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
        <div className="h-36 bg-purple-900 flex items-center justify-center">
          {/* Icon for the project */}
          <svg
            className="w-24 h-24 text-purple-300"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" />
          </svg>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Landing Page</h3>
          <p className="text-gray-400 mb-4">
            Responsive landing page with modern design, smooth animations, and
            optimized for conversions.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-purple-900 bg-opacity-40 text-purple-300 rounded-full text-sm">
              Html
            </span>
            <span className="px-3 py-1 bg-purple-900 bg-opacity-40 text-purple-300 rounded-full text-sm">
              CSS
            </span>
            <span className="px-3 py-1 bg-purple-900 bg-opacity-40 text-purple-300 rounded-full text-sm">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-6">
        <div className="h-36 bg-blue-900 flex items-center justify-center">
          {/* Icon for the project */}
          <svg
            className="w-24 h-24 text-blue-300"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Music Streaming App</h3>
          <p className="text-gray-400 mb-4">
            A music platform with playlist creation, artist discovery, and
            personalized recommendations.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-900 bg-opacity-40 text-blue-300 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-blue-900 bg-opacity-40 text-blue-300 rounded-full text-sm">
              Express
            </span>
            <span className="px-3 py-1 bg-blue-900 bg-opacity-40 text-blue-300 rounded-full text-sm">
              SQL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMore;
