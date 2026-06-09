import React, { useState, useEffect } from 'react';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaPalette, FaDownload, 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt,
  FaEye, FaTimes, FaExternalLinkAlt, FaInfoCircle, FaSun, FaMoon
} from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiExpress, SiMongodb } from 'react-icons/si';
import profileImg from './assets/profile.jpg';
import bethanyImg from './assets/bethany_hs_screenshot.png';
import printersImg from './assets/arackamannil_printers_screenshot.png';
import farmsImg from './assets/arackamannil_farms_screenshot.png';
import nasaCert from './assets/nasa_space_apps_2025.jpg';
import uiuxCert from './assets/microsoft_uiux_design.jpg';
import pythonCert from './assets/nptel_python.png';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'skills', 'projects', 'certificates', 'resume', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 95; // height of fixed navbar + padding offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const skills = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Express', icon: <SiExpress />, color: '#000000' },
  ];

  const projects = [
    {
      title: 'Bethany High School',
      description: 'A modern, responsive Next.js website for Bethany High School. Designed to showcase the school\'s heritage, academic excellence, announcements, facilities, and dynamic galleries.',
      image: bethanyImg,
      tags: ['Next.js', 'Tailwind CSS', 'React', 'Dynamic UI'],
      github: 'https://github.com/reubenzzz/bethanyhs',
      demo: 'https://www.bethanyhs.in',
      details: {
        role: 'Lead Web Developer',
        duration: '2026',
        overview: 'Bethany High School is a historic educational institution (established in 1918) in Ranni-Perunad, Kerala, managed by Bethany Ashramam. This web application provides a modern, fast, and secure portal for parents, students, and alumni to explore school heritage, announcements, facilities, and dynamic teacher profiles.',
        features: [
          'Dynamic announcements and event calendar systems.',
          'Interactive galleries for both events and teaching staff.',
          'Optimized routing and code-splitting with Next.js App Router.',
          'High performance loading boundaries using React Suspense skeleton screens.',
          'Embedded local SEO schema (JSON-LD) for enhanced search engine visibility.'
        ],
        challenges: 'Integrating high-resolution media galleries while maintaining Google PageSpeed optimization. Resolved by utilizing Next.js Image component for automatic format WebP conversion and responsive source-sets.'
      }
    },
    {
      title: 'Arackamannil Printers',
      description: 'A premium, custom-tailored printing service platform since 1971. Features services for custom apparel, t-shirt printing, flex banners, offset prints, and local business digital dominance.',
      image: printersImg,
      tags: ['React', 'Vite', 'CSS3', 'Local SEO'],
      github: 'https://github.com/reubenzzz/arackamannil-print-vibe',
      demo: 'https://www.arackamannilprinters.in',
      details: {
        role: 'Full Stack Developer',
        duration: '2026',
        overview: 'Arackamannil Printers has been delivering high-quality print impressions in Ranny, Kerala since 1971. This modern single-page application serves as a service catalog showcasing custom t-shirt printing, cup sublimation, flex banners, offset prints, and custom corporate packages.',
        features: [
          'Interactive responsive layout with modern slide carousels.',
          'JSON-LD LocalBusiness Schema markup enabling direct Google Maps local search optimization.',
          'Secured customer inquiry contact forms with frontend validation rules.',
          'Smooth micro-animations and custom HSL glassmorphism accents matching the physical shop front branding.'
        ],
        challenges: 'Creating a modern single-page experience that does not feel cluttered with services. Resolved using modular section layouts and clean tab structures for corporate vs custom printing.'
      }
    },
    {
      title: 'Arackamannil Farm',
      description: 'A sustainable agri-tech poultry farming presentation website. Modern dashboard showcasing advanced biosecurity, automated feeding, environmental monitoring systems, and revenue models.',
      image: farmsImg,
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Agri-Tech'],
      github: 'https://github.com/reubenzzz/arackamannil-farms',
      demo: 'https://arackamannil-farms.vercel.app',
      details: {
        role: 'UI/UX Architect & Developer',
        duration: '2026',
        overview: 'Arackamannil Farm is a modern, sustainable poultry farming enterprise focused on natural rearing and high hygiene. This website functions as an interactive agri-tech presentation detailing farm biosecurity, automated production systems, and market feasibility.',
        features: [
          'Detailed competitor analysis matrices contrasting local and national brands.',
          'Interactive Challenges & Solutions accordion panel addressing feed costs, health, and waste management.',
          'Comprehensive revenue stream analysis and roadmap projection.',
          'Floating glass container architecture for clean readability.'
        ],
        challenges: 'Translating complex agricultural data and farming flowcharts into an engaging, clean, and easily digestible web experience. Resolved by using modular card UI patterns and descriptive icons.'
      }
    },
  ];

  const certificates = [
    {
      title: 'Galactic Problem Solver',
      issuer: 'NASA International Space Apps Challenge',
      date: 'October 2025',
      image: nasaCert,
      tags: ['NASA', 'Hackathon', 'Problem Solving'],
    },
    {
      title: 'Fundamentals of UI/UX Design',
      issuer: 'Microsoft (Coursera)',
      date: 'February 2026',
      image: uiuxCert,
      tags: ['Microsoft', 'UI/UX', 'Design'],
    },
    {
      title: 'The Joy of Computing using Python',
      issuer: 'IIT Madras (NPTEL)',
      date: 'Jan-Apr 2026',
      image: pythonCert,
      tags: ['IIT Madras', 'Python', 'Programming', 'Elite'],
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo" onClick={() => scrollTo('home')}>
            RSP<span>.</span>
          </div>
          <div className="nav-links-wrapper">
            <div className="nav-links">
              {['home', 'skills', 'projects', 'certificates', 'resume', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollTo(section)}
                  className={activeSection === section ? 'active' : ''}
                >
                  {section === 'certificates' ? 'Certifications' : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            <button className="theme-toggle-btn" onClick={toggleTheme} title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-content">
          <div className="hero-text fade-in">
            <h2 className="greeting">Hi, I'm</h2>
            <h1 className="name">Reuben Sam Philip</h1>
            <h3 className="role">Software Developer</h3>
            <p className="description">
              Crafting high-performance, beautiful web experiences with modern technologies. 
              Focused on building scalable applications and intuitive user interfaces.
            </p>
            <div className="hero-btns">
              <button className="btn btn-primary" onClick={() => scrollTo('projects')}>View My Work</button>
              <button className="btn btn-outline" onClick={() => scrollTo('contact')}>Get in Touch</button>
            </div>
          </div>
          <div className="hero-image fade-in">
            <div className="image-wrapper glass">
              <img src={profileImg} alt="Reuben Sam Philip" />
            </div>
            <div className="blob"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">My Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card glass">
                <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card glass">
                <div className="project-image" onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links" onClick={(e) => e.stopPropagation()}>
                      <a href={project.github} target="_blank" rel="noreferrer" title="View Code"><FaGithub /></a>
                      <button onClick={() => setSelectedProject(project)} title="View Details" className="project-links-btn"><FaInfoCircle /></button>
                      <a href={project.demo} target="_blank" rel="noreferrer" title="Live Website"><FaExternalLinkAlt /></a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>
                    <button onClick={() => setSelectedProject(project)} className="project-title-btn">
                      {project.title}
                    </button>
                  </h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  <button onClick={() => setSelectedProject(project)} className="btn-read-more">
                    View Details & Features →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="certificates-section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-card glass" onClick={() => setSelectedCert(cert)}>
                <div className="certificate-image">
                  <img src={cert.image} alt={cert.title} />
                  <div className="certificate-overlay">
                    <div className="view-btn">
                      <FaEye /> View Certificate
                    </div>
                  </div>
                </div>
                <div className="certificate-info">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <h3>{cert.title}</h3>
                  <div className="cert-meta">
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  <div className="project-tags">
                    {cert.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume-section">
        <div className="container">
          <h2 className="section-title">My Resume</h2>
          <div className="resume-content glass">
            <div className="resume-text">
              <h3>Let's work together</h3>
              <p>Check out my detailed work history, projects, and education in my resume.</p>
            </div>
            <a href="./resume.pdf" download="Reuben_Sam_Philip_Resume.pdf" className="btn btn-primary">
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-grid">
            <div className="contact-info glass">
              <h3>Get In Touch</h3>
              <p>I'm currently available for freelance work or full-time opportunities.</p>
              <div className="contact-item">
                <FaEnvelope /> <span>reubensamphilipofficial@gmail.com</span>
              </div>
              <div className="social-links">
                <a href="https://github.com/reubenzzz" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/reuben-sam-philip" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              </div>
            </div>
            <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Reuben Sam Philip. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/reuben-sam-philip" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/reubenzzz" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>

      {/* Lightbox / Modal for Certificate */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content glass" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
              <FaTimes />
            </button>
            <img src={selectedCert.image} alt={selectedCert.title} />
            <div className="cert-modal-info">
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.issuer} • {selectedCert.date}</p>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox / Modal for Project Details */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content glass" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={() => setSelectedProject(null)}>
              <FaTimes />
            </button>
            <div className="project-modal-grid">
              <div className="project-modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className="project-modal-actions">
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                    <FaExternalLinkAlt /> Visit Live Website
                  </a>
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
              <div className="project-modal-info-scroll">
                <span className="project-modal-role">{selectedProject.details.role} • {selectedProject.details.duration}</span>
                <h2>{selectedProject.title}</h2>
                
                <div className="project-modal-section">
                  <h4>Overview</h4>
                  <p>{selectedProject.details.overview}</p>
                </div>

                <div className="project-modal-section">
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProject.details.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-modal-section">
                  <h4>Challenges & Solutions</h4>
                  <p>{selectedProject.details.challenges}</p>
                </div>

                <div className="project-modal-section">
                  <h4>Tech Stack</h4>
                  <div className="project-tags">
                    {selectedProject.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
