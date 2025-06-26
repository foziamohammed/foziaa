import React from "react";

export default function Stock_Management() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-6 sm:p-10 border-t-4 border-purple-600 transition-all duration-500 hover:shadow-2xl relative">
        {/* Subtle decorative line */}
        <div className="absolute top-0 left-0 w-16 h-1 bg-purple-300 rounded-full -translate-y-4"></div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8">
         Stock Management System
        </h1>
        <p className="text-gray-800 text-base sm:text-xl leading-relaxed font-poppins tracking-wide mb-6 sm:mb-8">
         I developed a comprehensive Book Inventory and Sales Dashboard, a full-stack web application designed to manage book inventory, track sales orders, and visualize category-wise book distribution. This project integrates a Supabase backend for real-time data management with an Express.js API, paired with a React frontend featuring interactive charts using Chart.js. The dashboard provides an intuitive interface for monitoring total books, low stock items, and recent activities, with support for dark mode and responsive design.

Key Features: <br /><br />

<b>Inventory Management:</b>I Implemented CRUD operations (Create, Read, Update, Delete) for books and orders, with data stored and synced via Supabase.
 <br /><b>Data Visualization:</b> Created dynamic bar and pie charts to display the top 10 book categories by quantity, with an "Others" category for remaining items, ensuring scalability and readability.
 <br /><b>Real-Time Updates: </b>Integrated a 60-second refresh interval and cache-busting techniques to reflect recent activities (e.g., book additions, order updates) accurately, adjusted for EAT timezone synchronization.
 <br /><b>User Interface: </b>Designed a user-friendly dashboard with Tailwind CSS, including a sidebar navigation, summary cards, and activity logs, with toggleable dark mode for enhanced usability.
 <br /><b>Backend Optimization:</b> Developed a robust API with error handling and debugging logs to ensure data integrity and troubleshoot issues like category limit enforcement.
<br /><b>Technologies Used: </b><br></br>

Frontend: React, Chart.js, Tailwind CSS  <br />
Backend: Node.js, Express.js, Supabase <br />
Other: JavaScript, CORS, Environment Variables <br />
          <br /><br />
       
        </p>

        {/* GitHub Button */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <a
            href="https://github.com/foziamohammed/stock.git" 
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
