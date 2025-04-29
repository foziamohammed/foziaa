import React from "react";

export default function Edir() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-6 sm:p-10 border-t-4 border-purple-600 transition-all duration-500 hover:shadow-2xl relative">
        {/* Subtle decorative line */}
        <div className="absolute top-0 left-0 w-16 h-1 bg-purple-300 rounded-full -translate-y-4"></div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8">
          Idir Management Platform
        </h1>
        <p className="text-gray-800 text-base sm:text-xl leading-relaxed font-poppins tracking-wide mb-6 sm:mb-8">
          The Idir Management Platform is a comprehensive solution designed to streamline the operations of an Idir community. 
          It allows members to register, manage their profiles, and make digital contributions to the Idir fund, with a transparent history of their contributions.
          Administrators can schedule meetings and events, automatically notifying all members, while also managing funeral fund requests. The platform provides secure 
          financial transactions, generating receipts and transaction histories for members. Communication is facilitated through secure messaging and discussion forums, ensuring privacy. 
          Built with scalability, security, and performance in mind, the platform ensures data protection and reliability, even during high-demand periods. 
          Its intuitive interface caters to users of varying technical abilities, offering a seamless and efficient experience for both members and administrators.
        </p>

        {/* GitHub Button */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <a
            href="https://github.com/Efamamo/DigitalizedIdir.git" 
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
