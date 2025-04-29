import React from "react";

export default function CinemaMate() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-6 sm:p-10 border-t-4 border-purple-600 transition-all duration-500 hover:shadow-2xl relative">
        {/* Subtle decorative line */}
        <div className="absolute top-0 left-0 w-16 h-1 bg-purple-300 rounded-full -translate-y-4"></div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8">
          Cinema Management Platform
        </h1>
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-poppins tracking-wide mb-6 sm:mb-8">
          The Cinema Management Platform allows cinemas to register their theaters, manage movie listings, and handle screening schedules through a secure login system. Cinemas can add, edit, and delete movie listings, update showtimes, and allocate seats for screenings. The platform also enables users to register, log in, and browse movie schedules, view showtimes, check seat availability, and book tickets. Users can further engage with the platform by leaving reviews and ratings for movies they’ve watched.
          <br /><br />
          The system uses role-based authentication and authorization to ensure that cinemas and users have access to specific functionalities. Backend APIs are developed using frameworks like Node.js or Django to handle data securely, while the frontend interfaces are tailored separately for cinemas and users. A comprehensive database schema supports cinema details, movie listings, showtimes, bookings, and user interactions, making this platform an efficient tool for managing movie screenings and providing a seamless user experience.
        </p>

        {/* GitHub Button */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <a
            href="https://github.com/Johna210/flutter-2024-CinemaMate-bloc.git"
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
