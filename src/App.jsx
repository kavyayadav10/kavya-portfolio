import {
  ArrowUpRight,
  Mail,
  ExternalLink,
  Code2,
  Brain,
  Database,
  Server,
} from "lucide-react";
import "./index.css";

const projects = [
  {
    number: "01",
    title: "AgencyBrain AI",
    description:
      "AI-powered marketing intelligence platform for agencies. It combines SEO analysis, content optimization, keyword intelligence, competitor analysis, AI insights, and automated reporting.",
    tech: ["Python", "FastAPI", "React", "MongoDB", "JWT" , "NLP", "AI/ML"],
    github: "https://github.com/kavyayadav10/AgencyBrainAI",
    featured: true,
  },
  {
    number: "02",
    title: "Footie Bay",
    description:
      "A football e-commerce website where users can browse and purchase football T-shirts across different ages and sizes.",
    tech: ["React", "Express.js", "JavaScript"],
    github:
      "https://github.com/kavyayadav10/Footie-bay-ecommerce-web-using-react-and-express-js-",
  },
  {
    number: "03",
    title: "EcoCart",
    description:
      "Django-based e-commerce application built around a structured online shopping experience with product browsing and purchasing functionality.",
    tech: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/kavyayadav10/EcoCart-Django-based-Ecommerce-",
  },
];

const skills = [
  {
    icon: <Brain size={24} />,
    title: "AI & Machine Learning",
    items: ["Python", "Generative AI", "NLP", "Machine Learning"],
  },
  {
    icon: <Code2 size={24} />,
    title: "Development",
    items: ["React", "JavaScript", "Django", "FastAPI"],
  },
  {
    icon: <Server size={24} />,
    title: "Backend & APIs",
    items: ["REST APIs", "Node.js", "Express.js", "JWT"],
  },
  {
    icon: <Database size={24} />,
    title: "Data & Tools",
    items: ["MongoDB", "SQLite", "Git", "GitHub"],
  },
];

const certifications = [
  "Building Generative AI-Powered Applications with Python — IBM",
  "Exploratory Data Analysis for Machine Learning — IBM",
  "Back-End Development with .NET — Microsoft",
  "Introduction to HTML, CSS, & JavaScript",
  "Inheritance and Data Structures in Java",
  "Introduction to Java",
];

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          K<span>.</span>Y
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="nav-github"
          href="https://github.com/kavyayadav10"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <img src="/github.png" alt="GitHub" className="social-icon" />
        </a>
      </nav>

      {/* HERO */}
      <main id="home" className="hero">
        <div className="hero-content">
          <p className="eyebrow">AI / ML DEVELOPER</p>

          <h1>
            Python, AI &
            <span> building real products.</span>
          </h1>

          <p className="hero-description">
            I'm Kavya Yadav, an Artificial Intelligence & Machine Learning
            student focused on Python, Generative AI, backend development,
            and building practical applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
              <ArrowUpRight size={16} />
            </a>
                    <a
  href="/kavya-resume-2026.pdf"
  download="Kavya-Yadav-Resume.pdf"
  className="secondary-btn"
>
  Download Resume
  <ArrowUpRight size={16} />
</a>
          View Resume
          <ArrowUpRight size={16} />
        </a>

            <a href="#contact" className="secondary-btn">
              Get in touch
            </a>
          </div>

          <div className="hero-stack">
            <span>Python</span>
            <span>Generative AI</span>
            <span>FastAPI</span>
            <span>React</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="hero-orbit">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="orbit-core">
            <Brain size={42} />
          </div>
        </div>
      </main>

      {/* ABOUT */}
      <section id="about" className="section about">
        <p className="section-label">01 / ABOUT</p>

        <div className="about-grid">
          <h2>
            Building things
            <span> to learn how they work.</span>
          </h2>

          <div>
            <p>
              I'm an Artificial Intelligence & Machine Learning student who
              enjoys building applications and learning by actually working
              on them.
            </p>

            <p>
              I've worked with Python, Generative AI, FastAPI, Django, React,
              MongoDB and REST APIs, with a current focus on AI-powered
              applications and backend development.
            </p>

            <p>
              I like taking an idea, turning it into a working application,
              and understanding what happens behind the scenes.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">02 / SKILLS</p>
            <h2>What I work with.</h2>
          </div>

          <p>Technologies I've used in projects.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>
              {skill.icon}

              <h3>{skill.title}</h3>

              <div className="skill-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">03 / PROJECTS</p>
            <h2>Things I've built.</h2>
          </div>

          <p>Selected work from my GitHub.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "featured" : ""
              }`}
              key={project.title}
            >
              <div className="project-number">{project.number}</div>

              <div className="project-top">
                <h3>{project.title}</h3>

                {project.featured && (
                  <span className="featured-tag">FEATURED</span>
                )}
              </div>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
                <ExternalLink size={14} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section certifications">
        <div className="section-heading">
          <div>
            <p className="section-label">04 / CERTIFICATIONS</p>
            <h2>Courses completed.</h2>
          </div>
        </div>

        <div>
          {certifications.map((certificate, index) => (
            <div className="cert-item" key={certificate}>
              <span>0{index + 1}</span>
              <p>{certificate}</p>
              <ArrowUpRight size={15} />
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <p className="section-label">05 / EDUCATION</p>

        <div className="education-card">
          <div>
            <p className="small-label">CURRENTLY STUDYING</p>

            <h2>
              Bachelor of Engineering
              <br />
              <span>Artificial Intelligence & Machine Learning</span>
            </h2>

            <p className="hero-description">
              LJ University
            </p>
          </div>

          <div className="education-mark">AI/ML</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <p className="section-label">06 / CONTACT</p>

        <h2>
          Let's build
          <span> something.</span>
        </h2>

        <div className="contact-links">
          <a href="mailto:kavyahyadav10@gmail.com">
            <Mail size={16} />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/kavya-yadav-116531305/"
            target="_blank"
            rel="noreferrer"
          >
            in LinkedIn
          </a>

          <a
            href="https://github.com/kavyayadav10"
            target="_blank"
            rel="noreferrer"
          >
            GH GitHub
          </a>
        </div>
      </section>
      

      {/* FOOTER */}
      <footer>
        <span>© 2026 KAVYA YADAV</span>
        <span>BUILT WITH REACT</span>
      </footer>
    </div>
  );
}

export default App;