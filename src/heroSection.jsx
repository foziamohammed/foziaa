import { useNavigate } from "react-router-dom";
import profile from "./assets/images/img.jpg"; 
import portfolio from "./assets/images/portfolio.jpg";
import  AI from "./assets/images/AI.jpg";
import cyber from "./assets/images/cyber.jpg";
import p from "./assets/images/p.jpg";
import signpost from "./assets/images/signpost.jpg";
import photo from "./assets/images/photo.jpg";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaNodeJs, FaUsers, FaPhone, FaLinkedin, FaGit, FaEnvelope, FaLock } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import ContactForm from "./components/ContactForm";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";



const ProjectCarousel = ({ projects }) => {
const navigate = useNavigate();

  return (
    <div  className="bg-gray-900 py-12 relative">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-white mb-8">Projects</h1>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <Swiper
          spaceBetween={20}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          modules={[Navigation]}
          className="overflow-hidden relative"
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile
            640: { slidesPerView: 1.5 }, // Small tablets
            768: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 3 }, // Desktops
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
                onClick={() => navigate(`/${project.title.replace(/\s+/g, '')}`)}
              >
                See More
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button
          className="swiper-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-50 bg-purple-600 text-white p-3 rounded-full shadow-lg text-lg md:text-2xl"
        >
          ❮
        </button>
        <button
          className="swiper-button-next absolute right-2 top-1/2 transform -translate-y-1/2 z-50 bg-purple-600 text-white p-3 rounded-full shadow-lg text-lg md:text-2xl"
        >
          ❯
        </button>
      </div>

      {/* Custom Styling for Swiper Arrows */}
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
  color: white !important;  /* Force arrow color to white */
  font-size: 24px !important;  /* Adjust size if needed */
  font-weight: bold;
}

      `}</style>
    </div>
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
      id: "02",
      title: "Cinematica",
      description: "Schedule Booking Website for Cinemas",
      duration: "Team project / 3 months",
      image:p,
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
        description: "Digital Platform for Edir Management ",
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
        id: "07",
        title: "Machine_Learning",
        description: "Accident severity prediction with ML models",
        image: AI,
        duration: "Team project / 1 month", 
      },
       {
        id: "08",
        title: "Secure_communication",
        description: "Secure end-to-end encrypted real-time messaging platform with authentication",
        image: AI,
        duration: "Team project / 1 month", 
      },
    
  ];
  
  const skills = [
    { id: 1, name: "HTML / CSS", level: "Expert", icon: <FaHtml5 className="text-orange-500" /> },
    { id: 2, name: "JavaScript", level: "Experienced", icon: <FaJs className="text-yellow-400" /> },
    { id: 3, name: "React", level: "Experienced", icon: <FaReact className="text-blue-400" /> },
    { id: 4, name: "Figma", level: "Experienced", icon: <FaFigma className="text-purple-500" /> },
    { id: 5, name: "Teamwork", level: "Strong", icon: <FaUsers className ="text-green-400" /> },
    { id: 6, name: "MongoDB", level: "Experienced", icon: <SiMongodb className="text-green-400" /> },
    { id: 7, name: "Node.js", level: "Experienced", icon: <FaNodeJs className="text-green-400" /> },
    { id: 8, name: "Express.js", level: "Experienced", icon: <SiExpress className="text-white" /> },
    { id: 9, name: "CyberSecurity", level: "Intermediate", icon: <FaLock className="text-yellow-400" /> },
  ];

  
  export default function HeroSection() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    return (
      
      
      <div id='home'className="bg-gradient-to-b from-white to-purple-900 min-h-screen text-gray-900">
        {/* Navbar */}
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6 relative">
      <h1 className="text-2xl font-bold">Fozia.</h1>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-lg">
        <a href="#home" className="hover:text-purple-600">Home</a>
        <a href="#about" className="hover:text-purple-600">About</a>
        <a href="#projects" className="hover:text-purple-600">Projects</a>
        <a href="#skills" className="hover:text-purple-600">Skills</a>
        <a href="#contact" className="hover:text-purple-600">Contact Me</a>
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-6 py-6 md:hidden shadow-lg z-50">
          <a href="#home" className="hover:text-purple-600" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="hover:text-purple-600" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className="hover:text-purple-600" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#skills" className="hover:text-purple-600" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#contact" className="hover:text-purple-600" onClick={() => setIsOpen(false)}>Contact Me</a>
          <a
      href="/CV/Fozia_Mohammed.pdf"
      download="Fozia Mohammed.pdf"
      className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition duration-300 mt-4"
    >
      Download CV
    </a>
        </div>
      )}
      
      <div id='home' className="hidden md:block">
        <a
          href="/CV/Fozia_Mohammed.pdf"
          download="Fozia Mohammed.pdf"
          className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition duration-300"
        >
          Download CV
        </a>
      </div>
    </nav>
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto flex flex-col items-center text-center mt-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            I'm <span className="text-purple-600">Fozia,</span>building secure, user-friendly web apps and UI to boost your product's value.
          </h2>
  
          {/* Image and Skills */}
          <div className="relative mt-10">
            <img
              src={profile}
              alt="Fozia"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full grayscale opacity-90 mx-auto"
            />
  
            {/* Floating Skill Tags */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12">
              <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                Fullstack <br /> Developer <br />
                {/* <span className="text-gray-500 text-xs">4 Years</span> */}
              </div>
            </div>
  
            <div className="absolute right-0 top-1/4 transform -translate-y-1/2 translate-x-12">
              <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                UI Designer <br />
                {/* <span className="text-gray-500 text-xs">8 Years</span> */}
              </div>
            </div>
            
            <div className="absolute right-10 top-[90%] transform -translate-y-1/2 translate-x-12">
              <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                Cyber Security<br />
                {/* <span className="text-gray-500 text-xs">8 Years</span> */}
              </div>
            </div>
          </div>

          
        </section>
  
        {/* Experience Section */}
        <section id='about' className="bg-gray-900 text-white mt-16 py-14 px-6 rounded-t-2xl shadow-lg">
  <div className="max-w-6xl mx-auto text-center">
 

    {/* Main Introduction */}
    <h2 className="text-4xl font-semibold">About Me</h2>
    <p className="text-gray-300 mt-4 leading-relaxed">
      Hi, I'm Fozia! A passionate and detail-oriented Software Engineer & UI/UX Designer. I specialize in 
      crafting scalable web applications and intuitive, visually appealing interfaces. With expertise in 
      React, Tailwind CSS, MongoDB, and Figma, I blend functionality with great user experiences. 
      Currently pursuing my studies at Addis Ababa University, 
      I enjoy solving real-world problems through technology. Let's build something amazing together!
    </p>

    {/* Experience Highlights */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
      
      {/* Development Experience */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-md w-72">
        <span className="text-purple-400 text-3xl">💻</span>
        <h3 className="text-2xl font-medium mt-3">Web Development</h3>
        <p className="text-gray-400 mt-2">
          Experienced in building modern and scalable web apps using React, Tailwind CSS, and MongoDB.
        </p>
      </div>

      {/* UI/UX Design Experience */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-md w-72">
        <span className="text-purple-400 text-3xl">🎨</span>
        <h3 className="text-2xl font-medium mt-3">UI/UX Design</h3>
        <p className="text-gray-400 mt-2">
          Passionate about crafting elegant user interfaces with Figma, ensuring seamless user experiences.
        </p>
      </div>

      {/* Problem-Solving & Innovation */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-md w-72">
        <span className="text-purple-400 text-3xl">🚀</span>
        <h3 className="text-2xl font-medium mt-3">Problem-Solving</h3>
        <p className="text-gray-400 mt-2">
          I love tackling real-world challenges by developing innovative solutions using technology.
        </p>
      </div>

    </div>

    {/* Fun Fact or Personal Touch */}
   
  </div>
</section>

        {/* projects section */}
     
  {/* Projects */}
  <section id='projects'>
  <ProjectCarousel projects={projects} />
  </section>
      
      
      <section id='skills'>
      <div className="bg-gray-900 text-white py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">Know my skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.id} className="flex flex-col items-center p-6 border border-gray-700 rounded-lg hover:bg-gray-900 transition duration-300">
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-purple-500">{skill.name}</h3>
              <p className="text-gray-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
      </section>
       
       {/* Contact Me */}
       <section id='contact'className="bg-gray-900">
     
  
        
       <ContactForm />
      
  
      </section>
     
      <section className="bg-gray-900">
        <p>....</p>
  <div className="w-full h-[1.3px] bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500"></div>
  <p>....</p>
</section>
</div>
    );
  }
  