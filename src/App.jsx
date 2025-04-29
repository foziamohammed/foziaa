import { Routes, Route } from "react-router-dom";
import HeroSection from "./heroSection";
import Cinematica from "./components/cinematica";
import CinemaMate from "./components/cinemaMate";
import Edir from "./components/edir";
import Portfolio from "./components/portfolio";
import DH from "./components/DH";
import Machine_Learning from "./components/AI";
import Threat_Modeling from "./components/threat-model";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/cinematica" element={<Cinematica />} />
      <Route path="/CinemaMate" element={<CinemaMate />} />
      <Route path="/Edir" element={<Edir />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/DH" element={<DH />} />
      <Route path="/Machine_Learning" element={<Machine_Learning />} />
      <Route path="/Threat_Modeling" element={<Threat_Modeling />} />
    </Routes>
  );
}
