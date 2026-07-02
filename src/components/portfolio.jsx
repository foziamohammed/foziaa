import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaArrowLeft, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import portfolioImg from "../assets/images/portfolio.jpg";

const techStack = [
  { icon: <FaHtml5 className="text-orange-400" />, label: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-400" />, label: "CSS3" },
  { icon: <FaJs className="text-yellow-400" />, label: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, label: "React" },
];

const highlights = [
  { emoji: "🎨", title: "Modern Design", desc: "Clean, responsive UI with smooth animations and a professional aesthetic." },
  { emoji: "📱", title: "Fully Responsive", desc: "Optimized for all screen sizes from mobile to large desktop displays." },
  { emoji: "⚡", title: "Fast Performance", desc: "Built with Vite for lightning-fast load times and optimal performance." },
  { emoji: "🔗", title: "Easy Navigation", desc: "Intuitive sections for About, Projects, Skills, and Contact." },
];

export default function Portfolio() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={portfolioImg} alt="Portfolio" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/60 to-gray-950" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-10">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Personal Project · 1 Month</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">My Portfolio</h1>
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
            My portfolio website is a modern, responsive, and visually appealing platform designed to showcase my skills,
            projects, and experience as a software engineer. It features an intuitive user interface with seamless navigation,
            allowing visitors to explore my work, technical expertise, and achievements efficiently.
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg mt-4">
            Built using HTML, CSS, JavaScript, and React, the website ensures fast performance and responsiveness across all
            devices. It includes sections for About Me, Projects, Skills, and Contact — serving as a professional online
            presence that highlights my capabilities and attracts potential collaborators, employers, or clients.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-purple-400 mb-6">Key Highlights</h2>
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
            href="https://github.com/foziamohammed/portfolio.git"
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
