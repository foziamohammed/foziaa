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
         Secure Real-Time Messaging System
I developed an end-to-end encrypted chat application that enables secure communication between users. The system features AES-256 encryption 
for all messages, with unique initialization vectors for each transmission to ensure maximum security. Built on a Node.js/Express backend with 
WebSocket integration, it provides real-time messaging capabilities while maintaining message persistence through MongoDB. The platform includes 
JWT authentication for secure access control and a responsive React frontend with intuitive chat interfaces. Designed with security as the top 
priority, the architecture prevents message interception by encrypting all data before transmission and only decrypting it at the recipient's device. 
This project demonstrates my ability to implement complex security protocols while maintaining usability and performance in real-time communication systems.
          <br /><br />
       
        </p>

        {/* GitHub Button */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <a
            href="https://github.com/foziamohammed/secure-communication.git" 
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
