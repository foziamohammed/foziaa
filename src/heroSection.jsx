import { useNavigate } from "react-router-dom";
import profile from "./assets/images/img.jpg";
import portfolio from "./assets/images/portfolio.jpg";
import AI from "./assets/images/AI.jpg";
import cyber from "./assets/images/cyber.jpg";
import cyber1 from "./assets/images/cyber1.jpg";
import p from "./assets/images/p.jpg";
import signpost from "./assets/images/signpost.jpg";
import hacking from "./assets/images/hacking.png";
import photo from "./assets/images/photo.jpg";
import book from "./assets/images/book.jpg";
import partnership from "./assets/images/partnership.jpg";
import phishingImg from "./assets/images/phishing.png";
import { FaHtml5, FaJs, FaReact, FaFigma, FaNodeJs, FaUsers, FaPhone, FaLinkedin, FaGithub, FaEnvelope, FaLock, FaShieldAlt, FaTerminal } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiPrisma } from "react-icons/si";
import ContactForm from "./components/ContactForm";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";


const ProjectCarousel = ({ projects }) => {
  const navigate = useNavigate();

  const handleViewProject = (title) => {
    navigate(`/${title.replace(/\s+/g, '')}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 py-12 relative">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-white mb-8">Projects</h1>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <Swiper
          spaceBetween={20}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          modules={[Navigation]}
          className="overflow-hidden relative"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="flex flex-col bg-gray-300 p-6 rounded-lg shadow-md w-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-900">{project.title}</h3>
              <p className="text-gray-600 flex-grow">{project.description}</p>
              <button
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
                onClick={() => handleViewProject(project.title)}
              >
                See More
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="swiper-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-50 bg-purple-600 text-white p-3 rounded-full shadow-lg text-lg md:text-2xl">
          ❮
        </button>
        <button className="swiper-button-next absolute right-2 top-1/2 transform -translate-y-1/2 z-50 bg-purple-600 text-white p-3 rounded-full shadow-lg text-lg md:text-2xl">
          ❯
        </button>
      </div>

      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background-color: #9333ea;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          color: white !important;
          font-size: 24px !important;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

// Soft aesthetic security background — glowing orbs + minimal geometric shapes
const SecurityBackground = () => {
  // Soft glowing orbs — positioned with inline styles, no overflow clip needed
  const orbs = [
    { size: 400, top: "-100px", left: "-100px",  color: "rgba(147,51,234,0.18)",  blur: 90  },
    { size: 300, top: "20%",    left: "82%",     color: "rgba(139,92,246,0.15)",  blur: 70  },
    { size: 250, top: "65%",    left: "5%",      color: "rgba(168,85,247,0.14)",  blur: 60  },
    { size: 350, top: "50%",    left: "58%",     color: "rgba(109,40,217,0.13)",  blur: 80  },
    { size: 200, top: "12%",    left: "42%",     color: "rgba(192,132,252,0.12)", blur: 50  },
  ];

  // Lock SVGs — stroke only, no fill
  const locks = [
    { top: "10%",  left: "6%",   size: 36, opacity: 0.22, delay: "0s",   dur: "8s"  },
    { top: "20%",  left: "84%",  size: 28, opacity: 0.18, delay: "2s",   dur: "10s" },
    { top: "62%",  left: "3%",   size: 24, opacity: 0.16, delay: "1s",   dur: "9s"  },
    { top: "74%",  left: "87%",  size: 30, opacity: 0.20, delay: "3s",   dur: "11s" },
    { top: "40%",  left: "91%",  size: 20, opacity: 0.15, delay: "0.5s", dur: "7s"  },
    { top: "86%",  left: "28%",  size: 26, opacity: 0.17, delay: "1.5s", dur: "9s"  },
  ];

  // Shield SVGs — stroke only, no fill
  const shields = [
    { top: "7%",   left: "70%",  size: 26, opacity: 0.20, delay: "1.2s", dur: "9s"  },
    { top: "48%",  left: "13%",  size: 22, opacity: 0.16, delay: "2.5s", dur: "11s" },
    { top: "78%",  left: "53%",  size: 24, opacity: 0.18, delay: "0.8s", dur: "8s"  },
    { top: "33%",  left: "2%",   size: 28, opacity: 0.19, delay: "3.5s", dur: "10s" },
  ];

  return (
    <>
      {/* Orbs rendered outside the relative wrapper so they're never clipped */}
      {orbs.map((orb, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Lock outlines */}
      {locks.map((l, i) => (
        <div
          key={`lock-${i}`}
          className="absolute pointer-events-none animate-float-gentle"
          style={{ top: l.top, left: l.left, opacity: l.opacity, animationDelay: l.delay, animationDuration: l.dur, zIndex: 0 }}
        >
          <svg width={l.size} height={l.size * 1.25} viewBox="0 0 24 30" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="13" width="18" height="14" rx="3" />
            <path d="M7 13V9a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
      ))}

      {/* Shield outlines */}
      {shields.map((s, i) => (
        <div
          key={`shield-${i}`}
          className="absolute pointer-events-none animate-float-gentle"
          style={{ top: s.top, left: s.left, opacity: s.opacity, animationDelay: s.delay, animationDuration: s.dur, zIndex: 0 }}
        >
          <svg width={s.size} height={s.size * 1.2} viewBox="0 0 24 28" fill="none" stroke="#c084fc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L3 7v7c0 5.25 3.75 10.15 9 11.35C17.25 24.15 21 19.25 21 14V7L12 2z" />
          </svg>
        </div>
      ))}
    </>
  );
};

const projects = [
  {
    id: "01",
    title: "Portfolio",
    description: "Personal Portfolio Website",
    duration: "Personal project / 1 month",
    image: portfolio,
  },
  {
    id: "11",
    title: "Partnership",
    description: "Partnership Management Platform for AAU",
    image: partnership,
    duration: "Team project / 3 months",
  },
    {
    id: "03",
    title: "Phishing",
    description: "Phishing detection Browser Extension",
    image: phishingImg,
    duration: "Group project / 2 months",
  },
   {
    id: "12",
    title: "ModIntel",
    description: "AI-Enhanced WAF combining rule-based detection with ML inference for smart threat analysis",
    image: cyber1,
    duration: "Personal project",
  },
  {
    id: "08",
    title: "Machine_Learning",
    description: "Accident severity prediction with ML models",
    image: AI,
    duration: "Team project / 1 month",
  },
  {
    id: "02",
    title: "Cinematica",
    description: "Schedule Booking Website for Cinemas",
    duration: "Team project / 3 months",
    image: p,
  },
  {
    id: "03",
    title: "CinemaMate",
    description: "Mobile App for Cinema Scheduling",
    duration: "Team project / 3 months",
    image: photo,
  },
  {
    id: "05",
    title: "Edir",
    description: "Digital Platform for Edir Management",
    image: signpost,
    duration: "Team project / 3 months",
  },
  {
    id: "06",
    title: "DH",
    description: "Secure Client Server Communication",
    image: cyber,
    duration: "Personal project / 1 month",
  },

  
  {
    id: "09",
    title: "Secure_communication",
    description: "Secure end-to-end encrypted real-time messaging platform with authentication",
    image: hacking,
    duration: "Team project / 1 month",
  },
  {
    id: "10",
    title: "Stock_Management",
    description: "Book Inventory and Sales Dashboard",
    image: book,
    duration: "Team project / 1 month",
  },
];

const skills = [
  { id: 1,  name: "HTML / CSS",          level: "Expert",        icon: <FaHtml5 className="text-orange-500" /> },
  { id: 2,  name: "JavaScript",          level: "Experienced",   icon: <FaJs className="text-yellow-400" /> },
  { id: 3,  name: "React",               level: "Experienced",   icon: <FaReact className="text-blue-400" /> },
  { id: 4,  name: "Figma",               level: "Experienced",   icon: <FaFigma className="text-purple-500" /> },
  { id: 5,  name: "Teamwork",            level: "Strong",        icon: <FaUsers className="text-green-400" /> },
  { id: 6,  name: "MongoDB",             level: "Experienced",   icon: <SiMongodb className="text-green-400" /> },
  { id: 7,  name: "Node.js",             level: "Experienced",   icon: <FaNodeJs className="text-green-400" /> },
  { id: 8,  name: "Express.js",          level: "Experienced",   icon: <SiExpress className="text-white" /> },
  { id: 9,  name: "CyberSecurity",       level: "Intermediate",  icon: <FaLock className="text-yellow-400" /> },
  { id: 10, name: "Tailwind CSS",        level: "Experienced",   icon: <SiTailwindcss className="text-blue-400" /> },
  { id: 11, name: "Prisma",              level: "Experienced",   icon: <SiPrisma className="text-blue-400" /> },
  { id: 12, name: "Typescript",          level: "Experienced",   icon: <SiTypescript className="text-blue-400" /> },
  { id: 13, name: "Threat Intel",        level: "Intermediate",  icon: <FaShieldAlt className="text-green-400" /> },
  { id: 14, name: "Penetration Testing", level: "Beginner",      icon: <FaTerminal className="text-green-400" /> },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="home" className="relative overflow-hidden bg-gradient-to-b from-white to-purple-900 min-h-screen text-gray-900">

      {/* Security background — orbs + SVG outlines */}
      <SecurityBackground />

      {/* ── Navbar ── */}
      <nav className="relative z-10 max-w-6xl mx-auto flex justify-between items-center py-6 px-6">
          <h1 className="text-2xl font-bold">Fozia.</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-lg">
            <a href="#home"     className="hover:text-purple-600">Home</a>
            <a href="#about"    className="hover:text-purple-600">About</a>
            <a href="#projects" className="hover:text-purple-600">Projects</a>
            <a href="#skills"   className="hover:text-purple-600">Skills</a>
            <a href="#contact"  className="hover:text-purple-600">Contact Me</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl z-10" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-6 py-6 md:hidden shadow-lg z-50">
              <a href="#home"     className="hover:text-purple-600" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about"    className="hover:text-purple-600" onClick={() => setIsOpen(false)}>About</a>
              <a href="#projects" className="hover:text-purple-600" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#skills"   className="hover:text-purple-600" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#contact"  className="hover:text-purple-600" onClick={() => setIsOpen(false)}>Contact Me</a>
              <a
                href="/CV/Fozia_Mohammed_Resume_.pdf"
                download="Fozia_Mohammed_Resume_.pdf"
                className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition duration-300 mt-4"
              >
                Download CV
              </a>
            </div>
          )}

          <div className="hidden md:block">
            <a
              href="/CV/Fozia_Mohammed_Resume_.pdf"
              download="Fozia_Mohammed_Resume_.pdf"
              className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </nav>

        {/* Hero content */}
        <section className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center mt-16 px-6 pb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            I'm <span className="text-purple-600">Fozia,</span> building secure, user-friendly web apps and UI to boost your product's value.
          </h2>

          {/* Image and Skill Tags */}
          <div className="relative mt-10">
            <img
              src={profile}
              alt="Fozia"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full grayscale opacity-90 mx-auto"
            />

            {/* Floating Skill Tags */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12">
              <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                Fullstack <br /> Developer
              </div>
            </div>

            <div className="absolute right-0 top-1/4 transform -translate-y-1/2 translate-x-12">
              <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                UI Designer
              </div>
            </div>

            <div className="absolute right-10 top-[90%] transform -translate-y-1/2 translate-x-12">
              <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                Cyber Security
              </div>
            </div>
          </div>
        </section>

      {/* About Section */}
      <section id="about" className="bg-gray-900 text-white py-14 px-6 rounded-t-2xl shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold">About Me</h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Hi, I'm Fozia! A passionate and detail-oriented Software Engineer &amp; UI/UX Designer. I specialize in
            crafting scalable web applications and intuitive, visually appealing interfaces. With expertise in
            React, Tailwind CSS, MongoDB, and Figma, I blend functionality with great user experiences.
            Currently pursuing my studies at Addis Ababa University,
            I enjoy solving real-world problems through technology. Let's build something amazing together!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md w-72">
              <span className="text-purple-400 text-3xl">💻</span>
              <h3 className="text-2xl font-medium mt-3">Web Development</h3>
              <p className="text-gray-400 mt-2">
                Experienced in building modern and scalable web apps using React, Tailwind CSS, and MongoDB.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md w-72">
              <span className="text-purple-400 text-3xl">🎨</span>
              <h3 className="text-2xl font-medium mt-3">UI/UX Design</h3>
              <p className="text-gray-400 mt-2">
                Passionate about crafting elegant user interfaces with Figma, ensuring seamless user experiences.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md w-72">
              <span className="text-purple-400 text-3xl">🚀</span>
              <h3 className="text-2xl font-medium mt-3">Problem-Solving</h3>
              <p className="text-gray-400 mt-2">
                I love tackling real-world challenges by developing innovative solutions using technology.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md w-72 border border-green-900/50">
              <span className="text-green-400 text-3xl">🔐</span>
              <h3 className="text-2xl font-medium mt-3">Cybersecurity</h3>
              <p className="text-gray-400 mt-2">
                Passionate about building secure systems. From encrypted communications to phishing detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectCarousel projects={projects} />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="bg-gray-900 text-white py-16 px-6">
          <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">Know my skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.id} className="flex flex-col items-center p-6 border border-gray-700 rounded-lg hover:bg-gray-800 transition duration-300">
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-purple-500">{skill.name}</h3>
                <p className="text-gray-400">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-gray-900">
        <ContactForm />
      </section>

      {/* Separator */}
      <section className="bg-gray-900">
        <p>....</p>
        <div className="w-full h-[1.3px] bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500"></div>
        <p>....</p>
      </section>

      {/* Let's Connect Section */}
      <section id="connect" className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">Let's Connect!</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            Ready to collaborate or discuss a project? Reach out via email, phone, or connect with me on social platforms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="mailto:foziam139@gmail.com"
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition duration-300 flex items-center space-x-4"
            >
              <FaEnvelope className="text-2xl text-purple-400" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-400">foziam139@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+251944353025"
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition duration-300 flex items-center space-x-4"
            >
              <FaPhone className="text-2xl text-purple-400" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-400">+251 944 353 025</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/fozia-mohammed-50132730b/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition duration-300 flex items-center space-x-4"
            >
              <FaLinkedin className="text-2xl text-purple-400" />
              <div>
                <h3 className="text-lg font-semibold">LinkedIn</h3>
                <p className="text-gray-400">Fozia Mohammed</p>
              </div>
            </a>

            <a
              href="https://github.com/foziamohammed"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition duration-300 flex items-center space-x-4"
            >
              <FaGithub className="text-2xl text-purple-400" />
              <div>
                <h3 className="text-lg font-semibold">GitHub</h3>
                <p className="text-gray-400">foziamohammed</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
