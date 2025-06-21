"use client";

import React, { useState } from "react";

const ProfileSections = () => {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <div className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Section Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["education", "certificates", "extra curricular activities"].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-5 py-2 rounded-full font-semibold capitalize transition text-sm sm:text-base ${
              activeSection === section
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-600"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Education Section */}
      {activeSection === "education" && (
        <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Education</h2>
          <p className="mb-2">🎓 BSc in Software Engineering – XYZ University</p>
          <p>📘 Diploma in Computer Science – ABC Institute</p>
        </div>
      )}

      {/* Certificates Section */}
      {activeSection === "certificates" && (
        <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Certificates</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>UI/UX Design – Coursera</li>
            <li>React for Beginners – Udemy</li>
            <li>Figma Mastery – LinkedIn Learning</li>
          </ul>
        </div>
      )}

      {/* Extra Curricular Activities Section */}
      {activeSection === "extra curricular activities" && (
        <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Extra Curricular Activities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Volunteered at the annual Tech Fest as a UI/UX booth coordinator</li>
            <li>Member of the University Coding Club – participated in hackathons</li>
            <li>Organized a Figma Design Workshop for new students</li>
            <li>Contributed to open source projects on GitHub</li>
            <li>Participated in inter-university design competitions</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileSections;
