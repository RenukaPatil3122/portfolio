import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  BarChart3,
  FileText,
  ChevronDown,
  Menu,
  X,
  Youtube,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollY >= offsetTop - 100 &&
            scrollY < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "SkillVerse",
      description:
        "A comprehensive skill development platform with interactive learning modules, progress tracking, and personalized recommendations.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://skillverse-kappa.vercel.app",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Finance Tracker",
      description:
        "Personal finance management application with expense tracking, budget planning, and financial analytics dashboard.",
      tech: ["React", "Chart.js", "Local Storage", "Tailwind CSS"],
      link: "https://finance-tracker-gamma-eight.vercel.app",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Document Management System",
      description:
        "Enterprise-level document management system developed during 6-month internship, featuring secure file storage, user authentication, and document collaboration features.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      link: "#",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Indian Namkeen Market Analysis",
      description:
        "Market research project analyzing the Indian namkeen industry trends, consumer preferences, and growth opportunities using data collection and analysis techniques.",
      tech: ["Python", "Data Analysis", "Research", "Documentation"],
      link: "#",
      icon: <FileText className="w-6 h-6" />,
    },
  ];

  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "Java",
    "Python",
    "C",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "Docker",
    "GitHub",
    "API Testing",
    "Android Development",
    "Web Development",
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Renuka Patil
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase() ? "text-blue-400" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {["Home", "About", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block px-3 py-2 text-base font-medium hover:text-blue-400 transition-colors w-full text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Renuka Patil
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full Stack Web Developer & Android Developer
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
            Passionate about creating innovative web and mobile solutions with 6
            months of internship experience
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/RenukaPatil3122"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/renuka-patil123/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@DevVision"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="mailto:renukap3122@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm a dedicated full-stack developer with expertise in web and
              Android development. With 6 months of internship experience, I
              specialize in creating robust applications using modern
              technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-colors"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                What I Do
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Code className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Web Development</h4>
                    <p className="text-gray-400">
                      Building responsive web applications using React, Node.js,
                      and modern frameworks
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Android Development</h4>
                    <p className="text-gray-400">
                      Creating native Android applications with Java and modern
                      development practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Database className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Backend Development</h4>
                    <p className="text-gray-400">
                      Developing RESTful APIs, database management, and
                      server-side applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300">
              Here are some of my recent projects that showcase my skills and
              experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300">
              I'm always open to discussing new opportunities and interesting
              projects
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <a href="mailto:renukap3122@gmail.com" className="group">
                <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400 group-hover:text-blue-300" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-400 text-sm break-all">
                    renukap3122@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/renuka-patil123/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105">
                  <Linkedin className="w-8 h-8 mx-auto mb-4 text-purple-400 group-hover:text-purple-300" />
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-gray-400">Connect with me</p>
                </div>
              </a>
              <a
                href="https://github.com/RenukaPatil3122"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105">
                  <Github className="w-8 h-8 mx-auto mb-4 text-green-400 group-hover:text-green-300" />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-gray-400">View my code</p>
                </div>
              </a>
              <a
                href="https://www.youtube.com/@DevVision"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105">
                  <Youtube className="w-8 h-8 mx-auto mb-4 text-red-400 group-hover:text-red-300" />
                  <h3 className="font-semibold mb-2">YouTube</h3>
                  <p className="text-gray-400">DevVision</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Renuka Patil. Built with React and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
