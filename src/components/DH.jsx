import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaArrowLeft, FaJava, FaLock } from "react-icons/fa";
import cyberImg from "../assets/images/cyber.jpg";

const techStack = [
  { icon: <FaJava className="text-orange-400" />, label: "Java" },
  { icon: <FaLock className="text-yellow-400" />, label: "AES Encryption" },
  { icon: <span className="text-purple-400 font-bold text-xs">DH</span>, label: "Diffie-Hellman" },
];

const highlights = [
  { emoji: "🔑", title: "Key Exchange", desc: "Implements Diffie-Hellman protocol for secure shared secret key generation between parties." },
  { emoji: "🔐", title: "AES Encryption", desc: "All messages are encrypted with AES before transmission, ensuring full confidentiality." },
  { emoji: "🖥️", title: "GUI Client", desc: "A graphical DHClientGUI interface for seamless user interaction with the secure channel." },
  { emoji: "⚠️", title: "Vulnerability Analysis", desc: "Identifies MITM attack risks and discusses the importance of public key validation." },
];

export default function DH() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={cyberImg} alt="DH" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/60 to-gray-950" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-10">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Personal Project · 1 Month</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Diffie-Hellman & AES Encryption</h1>
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
            This project demonstrates secure client-server communication by implementing the Diffie-Hellman key exchange
            protocol for shared secret key generation and AES encryption for message confidentiality. It consists of a
            server (DHServer), a client (DHClient), and a graphical interface (DHClientGUI) that facilitates seamless
            user interaction.
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg mt-4">
            The server initializes a secure key exchange upon client connection, enabling encrypted message transmission.
            The client encrypts user-inputted messages before sending them, while the server decrypts and logs them —
            ensuring protocol correctness. The project also identifies vulnerabilities such as man-in-the-middle attack
            risks, serving as a foundational step in understanding secure communication protocols.
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
            href="https://github.com/foziamohammed/DH-AES.git"
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
