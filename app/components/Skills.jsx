import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-20 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          I've worked with a variety of technologies and tools throughout my career. Here are some of my key skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-white">
              <span className="w-10 h-10 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3">
                <i className="fas fa-code text-indigo-400"></i>
              </span>
              Development
            </h3>
            <div className="space-y-4">
              {[
                { name: "HTML/CSS", level: 95 },
                { name: "JavaScript", level: 90 },
                { name: "React", level: 85 },
                { name: "Next js", level: 80 },
                
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UI/UX */}
          
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-white">
              <span className="w-10 h-10 rounded-full bg-purple-500 bg-opacity-20 flex items-center justify-center mr-3">
                <i className="fas fa-palette text-purple-400"></i>
              </span>
              UI/UX
            </h3>
            <div className="space-y-4">
              {[
                { name: "Figma", level: 90 },
                { name: "Canva", level: 90 },
                { name: "Photoshop", level: 80 },
                { name: "Draw.io", level: 85 },
             
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-white">
              <span className="w-10 h-10 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3">
                <i className="fas fa-screwdriver-wrench text-indigo-400"></i>
              </span>
              Toolset
            </h3>
            <div className="space-y-4">
              {[
                { name: "VS Code", level: 95 },
                { name: "Git", level: 80 },
                { name: "GitHub", level: 85 },
                { name: "Postman", level: 75 },
             
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
           

            {/**
             * <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center text-white">Other Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git", "Figma", "Adobe XD", "Responsive Design",
              "UI/UX", "RESTful APIs", "Agile", 
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
             */}
           
        </div>

        {/* Other Skills */}
        
      </div>
    </section>
  );
};

export default Skills;