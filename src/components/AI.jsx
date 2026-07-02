import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { SiPython, SiScikitlearn, SiJupyter, SiPandas } from "react-icons/si";
import aiImg from "../assets/images/AI.jpg";

const techStack = [
  { icon: <SiPython className="text-blue-400" />, label: "Python" },
  { icon: <SiScikitlearn className="text-orange-400" />, label: "Scikit-learn" },
  { icon: <SiPandas className="text-purple-400" />, label: "Pandas" },
  { icon: <SiJupyter className="text-orange-300" />, label: "Jupyter" },
];

const highlights = [
  { emoji: "🤖", title: "Multiple ML Models", desc: "Logistic Regression, Random Forest, k-NN, and Naive Bayes models compared for accuracy." },
  { emoji: "📊", title: "RTA Dataset", desc: "Trained on real-world Road Traffic Accident data for practical, meaningful predictions." },
  { emoji: "⚖️", title: "SMOTE Balancing", desc: "Applied SMOTE to handle class imbalance across Slight, Serious, and Fatal categories." },
  { emoji: "🔍", title: "Data Preprocessing", desc: "Meticulous feature engineering and preprocessing pipeline for clean, reliable inputs." },
];

export default function Machine_Learning() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={aiImg} alt="Machine Learning" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/60 to-gray-950" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-10">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Team Project · 1 Month</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Traffic Accident Severity Prediction</h1>
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
            This project leverages machine learning to predict road traffic accident severity, integrating models such as
            Logistic Regression, Random Forest, k-Nearest Neighbors, and Naive Bayes. Using the RTA Dataset, it classifies
            accidents into Slight, Serious, and Fatal Injury categories.
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg mt-4">
            The pipeline includes meticulous data preprocessing and SMOTE for class balancing, combining analytical
            precision with practical application. The effort offers a robust solution to real-world classification
            challenges — demonstrating how machine learning can be applied to improve road safety outcomes.
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
