import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaArrowLeft, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import pImg from "../assets/images/p.jpg";

const techStack = [
  { icon: <FaNodeJs className="text-green-400" />, label: "Node.js" },
  { icon: <SiExpress className="text-gray-300" />, label: "Express" },
  { icon: <FaReact className="text-cyan-400" />, label: "React" },
  { icon: <SiMongodb className="text-green-400" />, label: "MongoDB" },
  { icon: <SiTailwindcss className="text-blue-400" />, label: "Tailwind CSS" },
];

const highlights = [
  { emoji: "🎬", title: "Cinema Management", desc: "Cinemas can register, manage theaters, add/edit/delete movie listings and showtimes." },
  { emoji: "🔐", title: "Role-Based Auth", desc: "Secure authentication ensuring cinemas and users access only relevant features." },
  { emoji: "🎟️", title: "Seat Allocation", desc: "Real-time seat availability tracking and booking management for screenings." },
  { emoji: "⭐", title: "Reviews & Ratings", desc: "Users can leave reviews and ratings for movies they've watched." },
];

export default function Cinematica() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={pImg} alt="Cinematica" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/60 to-gray-950" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-10">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Team Project · 3 Months</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Cinema Management System</h1>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 flex items-center gap-2 text-gray-300 hover:text-white bg-gray-900/70 hover:bg-gray-800 px-4 py-2 rounded-full transition-all duration-200 text-sm"
        >
          <FaArrowLeft /> Back
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-10">
          {techStack.map((t) => (
            <span key={t.label} className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm font-medium text-gray-200">
              {t.icon} {t.label}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            The Cinema Management System is a comprehensive platform designed to streamline cinema operations and enhance
            user experiences. Cinemas can register and log in to manage their theaters, adding, editing, or deleting movie
            listings while overseeing screenings, showtimes, and seat allocations.
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg mt-4">
            Users can create accounts to browse movies and view showtimes seamlessly. The system enables user interactions
            through reviews, ratings, and feedback. Built with a secure authentication and role-based authorization system,
            the project ensures that cinemas and users access only relevant functionalities — showcasing expertise in
            full-stack development, database design, API development, and user experience design.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-purple-400 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h.title} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-600 transition-colors duration-200">
                <span className="text-2xl">{h.emoji}</span>
                <h3 className="text-white font-semibold mt-2 mb-1">{h.title}</h3>
                <p className="text-gray-400 text-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="https://github.com/Johna210/Cinema.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-purple-900/40"
          >
            <FaGithub className="text-xl" /> View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
