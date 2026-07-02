import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaArrowLeft, FaShieldAlt, FaDocker, FaDatabase } from "react-icons/fa";
import { SiPython, SiGo, SiFastapi, SiMongodb, SiScikitlearn } from "react-icons/si";
import cyberImg from "../assets/images/cyber.jpg";

const techStack = [
  { icon: <SiGo className="text-cyan-400" />, label: "Go (Gin)" },
  { icon: <SiPython className="text-blue-400" />, label: "Python" },
  { icon: <SiFastapi className="text-teal-400" />, label: "FastAPI" },
  { icon: <SiScikitlearn className="text-orange-400" />, label: "Scikit-learn" },
  { icon: <SiMongodb className="text-green-400" />, label: "MongoDB" },
  { icon: <FaShieldAlt className="text-yellow-400" />, label: "Coraza WAF" },
  { icon: <FaDocker className="text-blue-500" />, label: "Docker Compose" },
];

const highlights = [
  {
    emoji: "⚖️",
    title: "Hybrid Detection Architecture",
    desc: "Combines rule-based WAF (Coraza + OWASP CRS) with ML inference to balance precision and nuance. Rules detect → ML judges → Humans verify.",
  },
  {
    emoji: "🧠",
    title: "ML-Powered Threat Analysis",
    desc: "Random Forest model (F1 98.9%) with SHAP explainability, calibrated predictions, and priority bands (P1/P2/P3) for actionable alerts.",
  },
  {
    emoji: "📊",
    title: "17-Page Admin Dashboard",
    desc: "Real-time alert streaming (SSE), analyst review queue, WAF rule management, model training, and comprehensive audit logging.",
  },
  {
    emoji: "🔐",
    title: "Enterprise-Grade Security",
    desc: "JWT authentication with token rotation, RBAC, TOTP 2FA, bcrypt hashing, and sliding-window rate limiting for secure access control.",
  },
  {
    emoji: "🐳",
    title: "Microservices Architecture",
    desc: "12-service Docker Compose orchestration with health monitoring, metrics aggregation, and real-time event streaming.",
  },
  {
    emoji: "🚨",
    title: "Multi-Layer Blocking",
    desc: "Layer-1 rule-based blocking via Coraza WAF + Layer-2 ML-based blocking with configurable threshold (85-100%) via Docker iptables.",
  },
];

export default function ModIntel() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={cyberImg}
          alt="ModIntel"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/60 to-gray-950" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-10">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Personal Project · Web Application Firewall + ML
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            ModIntel — AI-Enhanced WAF
          </h1>
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
            <span
              key={t.label}
              className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm font-medium text-gray-200"
            >
              {t.icon} {t.label}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            ModIntel is a hybrid Web Application Firewall that combines traditional rule-based detection with machine
            learning inference. Built on the philosophy that <strong>Rules detect → ML judges → Humans verify</strong>,
            it addresses the inherent weaknesses of both approaches: rules catch known attacks but create false positives,
            while ML handles nuance but is dangerous if allowed to block traffic blindly.
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg mt-4">
            The platform uses <strong>Coraza WAF with OWASP CRS (Paranoia 4) + 26 custom rules</strong> for Layer-1
            detection, feeding audit logs to a <strong>Random Forest model (F1 98.9%)</strong> that provides advisory
            predictions with SHAP explainability. A second enforcement layer applies ML-based blocking at a configurable
            confidence threshold. The system orchestrates <strong>12 microservices</strong> via Docker Compose, including
            6 Go services, 2 Python ML engines, and a 17-page static dashboard with real-time SSE streaming.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-purple-400 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-600 transition-colors duration-200"
              >
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
            href="https://github.com/foziamohammed"
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
