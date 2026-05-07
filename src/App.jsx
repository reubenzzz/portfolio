import React, { useState, useEffect } from 'react';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaPalette, FaDownload, 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt 
} from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiExpress, SiMongodb } from 'react-icons/si';
import profileImg from './assets/profile.jpg';
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';
import project3 from './assets/project3.png';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'skills', 'projects', 'resume', 'contact'];
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
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
      title: 'AI Smart Assistant',
      description: 'A cutting-edge AI companion built with React and OpenAI API, featuring real-time natural language processing and a futuristic UI.',
      image: project1,
      tags: ['React', 'OpenAI', 'Framer Motion'],
      github: 'https://github.com/reubenzzz',
      demo: '#',
    },
    {
      title: 'E-commerce Elite',
      description: 'A premium online shopping platform with a focus on minimalist design and seamless user experience, including a custom cart system.',
      image: project2,
      tags: ['Node.js', 'React', 'MongoDB'],
      github: 'https://github.com/reubenzzz',
      demo: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'High-performance data visualization dashboard for monitoring complex metrics with real-time updates and interactive charts.',
      image: project3,
      tags: ['React', 'Chart.js', 'Express'],
      github: 'https://github.com/reubenzzz',
      demo: '#',
    },
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo" onClick={() => scrollTo('home')}>
            RSP<span>.</span>
          </div>
          <div className="nav-links">
            {['home', 'skills', 'projects', 'resume', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollTo(section)}
                className={activeSection === section ? 'active' : ''}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
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
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /></a>
                      <a href={project.demo} target="_blank" rel="noreferrer"><FaCode /></a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
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
            <a href="#" className="btn btn-primary">
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
    </div>
  );
};

export default App;
