"use client";

import { useState } from "react";

const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/patsakorn-portfolio" : "";

const assetPath = (path: string) => `${BASE_PATH}${path}`;

const projects = [
  {
    label: "INDIVIDUAL SENIOR PROJECT",
    year: "2025–2026",
    title: "PostureGuard AI",
    subtitle: "Computer Vision-Based Sitting Posture Monitoring System",
    image: assetPath("/images/projects/postureguard/history.png"),
    description:
      "Real-time sitting posture monitoring using a webcam, designed to help users identify potentially improper sitting posture and receive feedback.",
    bullets: [
      "Computer vision-based posture analysis with Python, OpenCV, and MediaPipe.",
      "Posture assessment using body-angle measurements and classification logic.",
      "System refinement based on requirements and feedback from an academic advisor and physiotherapy domain expert.",
      "Monitoring, session records, and user feedback features.",
    ],
    tags: [
      "Python",
      "FastAPI",
      "OpenCV",
      "MediaPipe",
      "SQLite",
      "JavaScript",
      "Raspberry Pi 5",
    ],
    link: "https://github.com/patsakornmkp/posture-guard-ai",
  },
];

const galleryImages = [
  {
    src: assetPath("/images/projects/postureguard/login.png"),
    title: "Login",
  },
  {
    src: assetPath("/images/projects/postureguard/register.png"),
    title: "Register",
  },
  {
    src: assetPath("/images/projects/postureguard/setup.png"),
    title: "Setup",
  },
  {
    src: assetPath("/images/projects/postureguard/monitor.png"),
    title: "Monitor",
  },
  {
    src: assetPath("/images/projects/postureguard/summary.png"),
    title: "Summary",
  },
  {
    src: assetPath("/images/projects/postureguard/history.png"),
    title: "History Dashboard",
  },
];

const academic = [
  {
    year: "2025",
    title: "X-ray Analysis with CNN & LLM",
    desc: "Course project in Artificial Intelligence. Details of individual contribution can be discussed.",
    tag: "Artificial Intelligence",
  },
  {
    year: "2025",
    title: "Library Management System",
    desc: "Course project associated with Web Service coursework.",
    tag: "Web Service",
  },
  {
    year: "2024",
    title: "Recruitment System",
    desc: "Course project associated with System Analysis and Design coursework.",
    tag: "System Analysis",
  },
  {
    year: "2025",
    title: "Restaurant Review Classification",
    desc: "Course project focused on data processing and review topic classification.",
    tag: "Data Processing",
  },
];

const skills = [
  {
    title: "Programming",
    items: "Python · Java · PHP · JavaScript",
    note: "Academic & project exposure",
  },
  {
    title: "Web & Backend",
    items: "HTML · CSS · FastAPI · Web Services",
    note: "Coursework & project exposure",
  },
  {
    title: "Database",
    items: "SQL · SQLite · MySQL",
    note: "Academic & project exposure",
  },
  {
    title: "Computer Vision",
    items: "OpenCV · MediaPipe",
    note: "Senior project",
  },
  {
    title: "Foundations",
    items: "OOP · Data Structures · Software Testing",
    note: "Coursework",
  },
  {
    title: "Tools",
    items: "Git · GitHub · Figma · Linux · Raspberry Pi 5",
    note: "Coursework & project exposure",
  },
];

export default function Home() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(4);

  const openGallery = (index: number) => {
    setCurrentImage(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <main className="page">
      <header className="topbar">
        <a className="logo" href="#home">
          PM<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
        </nav>

        <div className="contactDropdown">
          <button className="topCta" type="button">
            Contact ↗
          </button>

          <div className="contactMenu">
            <a href="tel:0934476961" aria-label="Phone" title="Phone">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.34 1.77.65 2.6a2 2 0 0 1-.45 2.11L9.09 10.6a16 16 0 0 0 4.31 4.31l1.17-1.17a2 2 0 0 1 2.11-.45c.83.31 1.7.53 2.6.65a2 2 0 0 1 1.72 1.98z" />
              </svg>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&to=patsakorn.mongkonporn@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              title="Email"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>

            <a
              href="https://line.me/ti/p/~aoeykub"
              target="_blank"
              rel="noreferrer"
              aria-label="LINE"
              title="LINE"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.5 11.5c0 4.2-4.3 7.6-9.5 7.6-1.1 0-2.2-.2-3.2-.5L3 20l1.3-3.3A7.1 7.1 0 0 1 2.5 12c0-4.2 4.3-7.6 9.5-7.6s8.5 3 8.5 7.1z" />
                <path d="M8 9v5" />
                <path d="M8 14h2" />
                <path d="M12 9v5l3-5v5" />
                <path d="M17 9h2m-2 2h2m-2 3h2" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="heroCopy">
          <p className="eyebrow">
            <span className="dot" /> OPEN TO OPPORTUNITIES
          </p>

          <h1>
            Hi, I&apos;m <span>Patsakorn.</span>
            <br />
            IT graduate &amp; aspiring
            <br />
            software developer.
          </h1>

          <p className="intro">
            I enjoy turning ideas and requirements into working software.
            Currently building my development skills through projects,
            experimentation, and continuous learning.
          </p>

          <div className="actions">
            <a className="button primary" href="#projects">
              Explore my work <span>↓</span>
            </a>

            <a
              className="button secondary"
              href="https://mail.google.com/mail/?view=cm&to=patsakorn.mongkonporn@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Let's connect ↗
            </a>
          </div>

          <div className="socials">
            <a
              href="https://github.com/patsakornmkp/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/patsakorn-mongkonporn-22994a422/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div
          className="heroArt"
          aria-label="Patsakorn software developer portrait"
        >
          <div className="orb">
            <img src={assetPath("/images/profile.jpg")} alt="Patsakorn" />
          </div>

          <div className="floating f1">01 / BUILD</div>
          <div className="floating f2">02 / LEARN</div>
        </div>
      </section>

      <div className="ticker">
        <span>PYTHON</span>
        <span>COMPUTER VISION</span>
        <span>WEB DEVELOPMENT</span>
        <span>DATABASES</span>
        <span>CONTINUOUS LEARNING</span>
      </div>

      <section className="section" id="about">
        <div className="sectionHead">
          <span className="number">01</span>
          <h2>About me</h2>
        </div>

        <div className="aboutGrid">
          <p className="aboutLead">
            A recent Information Technology graduate, motivated to grow into a
            capable software developer.
          </p>

          <div className="aboutBody">
            <p>
              I graduated from the Faculty of Science, Silpakorn University. My
              senior project gave me experience working on a computer
              vision-based sitting posture monitoring system, refining its
              functionality with feedback from an academic advisor and a
              physiotherapy domain expert.
            </p>

            <p>
              I use AI-assisted coding tools as part of my workflow while
              actively strengthening my ability to understand, debug, and
              implement code independently.
            </p>

            <div className="facts">
              <div>
                <small>DEGREE</small>
                <b>B.Sc. Information Technology</b>
              </div>

              <div>
                <small>UNIVERSITY</small>
                <b>Silpakorn University</b>
              </div>

              <div>
                <small>LOCATION</small>
                <b>Nakhon Pathom, Thailand</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="sectionHead">
          <span className="number">02</span>
          <h2>Selected projects</h2>
        </div>

        {projects.map((p) => (
          <article className="project featured" key={p.title}>
            <div className="projectMeta">
              <span>{p.label}</span>
              <span>{p.year}</span>
            </div>

            <button
              type="button"
              className="projectPreviewButton"
              onClick={() => openGallery(4)}
              aria-label="Open PostureGuard AI image gallery"
            >
              <img
                src={p.image}
                alt={`${p.title} preview`}
                className="projectPreview"
              />
              <span className="previewHint">View screenshots ↗</span>
            </button>

            <h3>{p.title}</h3>

            <p className="projectSub">{p.subtitle}</p>
            <p>{p.description}</p>

            <ul>
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="tags">
              {p.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <a
              className="projectLink"
              href={p.link}
              target="_blank"
              rel="noreferrer"
            >
              View repository ↗
            </a>
          </article>
        ))}

        <div className="projectGrid">
          {academic.map((p) => (
            <article className="project small" key={p.title}>
              <div className="projectMeta">
                <span>ACADEMIC PROJECT</span>
                <span>{p.year}</span>
              </div>

              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="tagMuted">{p.tag}</span>
            </article>
          ))}
        </div>

        <p className="note">
          Academic project descriptions are intentionally concise; details can
          be added after confirming individual responsibilities.
        </p>
      </section>

      <section className="section" id="skills">
        <div className="sectionHead">
          <span className="number">03</span>
          <h2>Technical skills</h2>
        </div>

        <div className="skillGrid">
          {skills.map((s) => (
            <div className="skill" key={s.title}>
              <h4>{s.title}</h4>
              <p>{s.items}</p>
              <small>{s.note}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="education">
        <div className="sectionHead">
          <span className="number">04</span>
          <h2>Education</h2>
        </div>

        <div className="education">
          <div>
            <h3>Silpakorn University</h3>
            <p>Faculty of Science · Information Technology</p>
          </div>

          <div className="eduRight">
            <span>2021 — 2026</span>
            <b>GPA 2.56</b>
          </div>
        </div>

        <div className="education">
          <div>
            <h3>Sri Ayudhya School under Royal Patronage</h3>
            <p>Science–Mathematics Program · Secondary Education</p>
          </div>

          <div className="eduRight">
            <span>2016 — 2021</span>
            <b>GPA 2.75</b>
          </div>
        </div>

        <div className="education">
          <div>
            <h3>Sawanwok Prachasan Municipal School</h3>
            <p>Elementary Education</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <p className="eyebrow">HAVE AN OPPORTUNITY?</p>

        <h2>
          Let&apos;s build something
          <br />
          <span>and learn along the way.</span>
        </h2>

        <a
          className="button primary"
          href="https://mail.google.com/mail/?view=cm&to=patsakorn.mongkonporn@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email me ↗
        </a>

        <p className="contactLinks">
          093-447-6961 · patsakorn.mongkonporn@gmail.com
        </p>
      </section>

      <footer>
        <span>© 2026 Patsakorn Mongkonporn</span>
        <span>Designed for growth, built with intention.</span>
        <a href="#home">Back to top ↑</a>
      </footer>

      {/* Gallery Overlay */}
      {isGalleryOpen && (
        <div className="galleryOverlay" onClick={closeGallery}>
          <div
            className="galleryModal"
            role="dialog"
            aria-modal="true"
            aria-label="PostureGuard AI image gallery"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="galleryClose"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              ×
            </button>

            <div className="galleryHeader">
              <span>POSTUREGUARD AI</span>
              <p>
                {galleryImages[currentImage].title}
                {" · "}
                {currentImage + 1} / {galleryImages.length}
              </p>
            </div>

            <div className="galleryImageContainer">
              <button
                type="button"
                className="galleryArrow"
                onClick={prevImage}
                aria-label="Previous image"
              >
                ‹
              </button>

              <img
                src={galleryImages[currentImage].src}
                alt={galleryImages[currentImage].title}
                className="galleryImage"
              />

              <button
                type="button"
                className="galleryArrow"
                onClick={nextImage}
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            <div className="galleryThumbnails">
              {galleryImages.map((image, index) => (
                <button
                  type="button"
                  key={image.src}
                  className={`galleryThumbnail ${
                    currentImage === index ? "active" : ""
                  }`}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`View ${image.title}`}
                  aria-current={currentImage === index ? "true" : undefined}
                >
                  <img src={image.src} alt="" />
                  <span>{image.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
