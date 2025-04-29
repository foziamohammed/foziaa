import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-6 sm:p-10 border-t-4 border-purple-600 transition-all duration-500 hover:shadow-2xl relative">
        {/* Subtle decorative line */}
        <div className="absolute top-0 left-0 w-16 h-1 bg-purple-300 rounded-full -translate-y-4"></div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8">
          My Portfolio
        </h1>
        <p className="text-gray-800 text-base sm:text-xl leading-relaxed font-poppins tracking-wide mb-6 sm:mb-8">
          My portfolio website is a modern, responsive, and visually appealing platform designed to showcase my skills, projects,
          and experience as a software engineer. It features an intuitive user interface with seamless navigation, allowing visitors 
          to explore my work, technical expertise, and achievements efficiently.  
          <br /><br />
          Built using HTML, CSS, JavaScript, and React, the website ensures fast performance and responsiveness across all devices. 
          It includes sections for about me, projects, skills, and contact information, where I share insights on software development
          and UI/UX design. With a focus on clean design, accessibility, and scalability, my portfolio serves as a 
          professional online presence, highlighting my capabilities and attracting potential collaborators, employers, or clients.
        </p>

        {/* GitHub Button */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <a
            href="https://github.com/your-repo" // Replace with your GitHub repo link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white py-3 sm:py-4 px-8 sm:px-10 rounded-lg shadow-md text-lg sm:text-xl font-poppins tracking-wide hover:bg-purple-700 transition-all duration-300 ease-in-out"
          >
            Visit GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}
