// import React from "react";

// export default function Cinematica() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center p-4 sm:p-8">
//       <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-10 border-t-4 sm:p-10 border-purple-600 transition-all duration-500 hover:shadow-2xl relative">
//         {/* Subtle decorative line */}
//         <div className="absolute top-0 left-0 w-16 h-1 bg-purple-300 rounded-full -translate-y-4"></div>

//         <h1 className="text-4xl sm:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8">
//           Cinema Management System
//         </h1>
//         <p className="text-gray-800 text-xl leading-relaxed font-poppins tracking-wide mb-6 sm:mb-8">
//           The Cinema Management System is a comprehensive platform designed to streamline cinema operations and enhance user experiences. Cinemas can 
//           register and log in to manage their theaters, adding, editing, or deleting movie listings while overseeing screenings, showtimes, and seat allocations.
//           Users can create accounts to browse movies, view showtimes seamlessly. Additionally, the system enables user interactions through reviews, ratings, and feedback. Built with a secure authentication and role-based authorization system, the project ensures that cinemas and users access only relevant functionalities. The backend, developed using frameworks like Node.js (Express) or Django, manages API requests, while a well-structured database stores cinema details, movie listings, showtimes, bookings, and user interactions. The frontend features distinct interfaces for cinemas and users, offering an intuitive experience for managing schedules and engaging with moviegoers. Optional payment integration can further enhance ticket booking convenience. This project showcases expertise in 
//           full-stack development, database design, API development, authentication, and user experience design.
//         </p>

//         {/* GitHub Button */}
//         <div className="mt-8 flex justify-center">
//           <a
//             href="https://github.com/Johna210/Cinema.git" 
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-purple-600 text-white py-4 px-10 rounded-lg shadow-md text-lg font-poppins tracking-wide hover:bg-purple-700 transition-all duration-300 ease-in-out"
//           >
//             Visit GitHub Repository
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function Cinematica() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-6 sm:p-10 border-t-4 border-purple-600 transition-all duration-500 hover:shadow-2xl relative">
        {/* Subtle decorative line */}
        <div className="absolute top-0 left-0 w-16 h-1 bg-purple-300 rounded-full -translate-y-4"></div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8">
          Cinema Management System
        </h1>
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-poppins tracking-wide mb-6 sm:mb-8">
        The Cinema Management System is a comprehensive platform designed to streamline cinema operations and enhance user experiences. Cinemas can register and log in to manage their theaters, adding, editing, or deleting movie listings while overseeing screenings, showtimes, and seat allocations.          
         Users can create accounts to browse movies, view showtimes seamlessly. Additionally, the system enables user interactions through reviews, ratings, and feedback. <br></br>  <br></br>Built with a secure authentication and role-based authorization system, the project ensures that cinemas and users access only relevant functionalities. The backend, developed using frameworks like Node.js (Express) or Django, manages API requests, while a well-structured database stores cinema details, movie listings, showtimes, bookings, and user interactions. The frontend features distinct interfaces for cinemas and users, offering an intuitive experience for managing schedules and engaging with moviegoers. Optional payment integration can further enhance ticket booking convenience. This project showcases expertise in 
          full-stack development, database design, API development, authentication, and user experience design.
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
