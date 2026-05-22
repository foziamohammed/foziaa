import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaArrowLeft, FaJs, FaShieldAlt } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import phishingImg from "../assets/images/phishing.png";

const techStack = [
  { icon: <FaJs className="text-yellow-400" />, label: "JavaScript" },
  { icon: <SiPython className="text-blue-400" />, label: "Python" },
  { icon: <FaShieldAlt className="text-green-400" />, label: "ML Models" },
  { icon: <span className="text-purple-400 font-bold text-xs">EXT</span>, label: "Browser Extension" },
];

const highlights = [
  { emoji: "🛡️", title: "Real-Time Protection", desc: "Analyzes URLs and website features instantly to detect phishing attempts as you browse." },
  { emoji: "🤖", title: "ML-Powered", desc: "Leverages machine learning models and heuristic analysis to evaluate site reputation." },
  { emoji: "⚡", title: "Zero Latency", desc: "Lightweight extension that provides protection without impacting browsing speed." },
  { emoji: "🔔", title: "Instant Alerts", desc: "Displays immediate security status and detailed insights into detected threats." },
];

export default function Phishing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={phishingImg} alt="Phishing Detection" className="w-full h-full object-cover object-top opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/60 to-gray-950" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-10">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Group Project · 2 Months</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Phishing Detection Extension</h1>
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
            The Phishing Detection Browser Extension is a robust security tool designed to protect users from malicious
            websites and phishing attempts in real-time. Built as a lightweight browser extension, it analyzes URLs and
            website features to identify suspicious patterns, warning users before they interact with potentially harmful pages.
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg mt-4">
            Leveraging advanced heuristic analysis and machine learning models, the extension evaluates site reputation
            and security indicators, providing a seamless layer of protection without impacting browsing speed. This
            project showcases expertise in browser extension development, web security, real-time threat analysis, and
            user-centric safety design.
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
            href="https://github.com/natanim-kemal/hook"
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
