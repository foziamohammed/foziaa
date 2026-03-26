import React from "react";

export default function Phishing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-6 sm:p-10 border-t-4 border-purple-600 transition-all duration-500 hover:shadow-2xl relative">
        {/* Subtle decorative line */}
        <div className="absolute top-0 left-0 w-16 h-1 bg-purple-300 rounded-full -translate-y-4"></div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8">
          Phishing Detection Browser Extension
        </h1>
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-poppins tracking-wide mb-6 sm:mb-8">
          The Phishing Detection Browser Extension is a robust security tool designed to protect users from malicious
          websites and phishing attempts in real-time. Built as a lightweight browser extension, it analyzes URLs
          and website features to identify suspicious patterns, warning users before they interact with potentially
          harmful pages. <br></br> <br></br>
          Leveraging advanced heuristic analysis and machine learning models, the extension evaluates site reputation
          and security indicators, providing a seamless layer of protection without impacting browsing speed. The
          extension features an intuitive user interface that displays immediate security status and provides insights
          into detected threats. This project showcases expertise in browser extension development, web security,
          real-time threat analysis, and user-centric safety design.
        </p>

        {/* GitHub Button */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <a
            href="https://github.com/natanim-kemal/hook"
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
