const projects = [
  {
    label: 'INDIVIDUAL SENIOR PROJECT',
    year: '2025–2026',
    title: 'PostureGuard AI',
    subtitle: 'Computer Vision-Based Sitting Posture Monitoring System',
    description:
      'Real-time sitting posture monitoring using a webcam, designed to help users identify potentially improper sitting posture and receive feedback.',
    bullets: [
      'Computer vision-based posture analysis with Python, OpenCV, and MediaPipe.',
      'Posture assessment using body-angle measurements and classification logic.',
      'System refinement based on requirements and feedback from an academic advisor and physiotherapy domain expert.',
      'Monitoring, session records, and user feedback features.',
    ],
    tags: ['Python', 'FastAPI', 'OpenCV', 'MediaPipe', 'SQLite', 'JavaScript', 'Raspberry Pi 5'],
    link: 'https://github.com/patsakornmkp/posture-guard-ai',
  },
]

const academic = [
  { year: '2025', title: 'X-ray Analysis with CNN & LLM', desc: 'Course project in Artificial Intelligence. Details of individual contribution can be discussed.', tag: 'Artificial Intelligence' },
  { year: '2025', title: 'Library Management System', desc: 'Course project associated with Web Service coursework.', tag: 'Web Service' },
  { year: '2024', title: 'Recruitment System', desc: 'Course project associated with System Analysis and Design coursework.', tag: 'System Analysis' },
  { year: '2025', title: 'Restaurant Review Classification', desc: 'Course project focused on data processing and review topic classification.', tag: 'Data Processing' },
]

const skills = [
  { title: 'Programming', items: 'Python · Java · PHP · JavaScript', note: 'Academic & project exposure' },
  { title: 'Web & Backend', items: 'HTML · CSS · FastAPI · Web Services', note: 'Coursework & project exposure' },
  { title: 'Database', items: 'SQL · SQLite · MySQL', note: 'Academic & project exposure' },
  { title: 'Computer Vision', items: 'OpenCV · MediaPipe', note: 'Senior project' },
  { title: 'Foundations', items: 'OOP · Data Structures · Software Testing', note: 'Coursework' },
  { title: 'Tools', items: 'Git · GitHub · Figma · Linux · Raspberry Pi 5', note: 'Coursework & project exposure' },
]

export default function Home() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="logo" href="#home">PM<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#education">Education</a></nav>
        <a className="topCta" href="mailto:patsakorn.mongkonporn@gmail.com">Contact ↗</a>
      </header>

      <section className="hero" id="home">
        <div className="heroCopy">
          <p className="eyebrow"><span className="dot" /> OPEN TO OPPORTUNITIES</p>
          <h1>Hi, I&apos;m <span>Patsakorn.</span><br />IT graduate &amp; aspiring<br />software developer.</h1>
          <p className="intro">I enjoy turning ideas and requirements into working software. Currently building my development skills through projects, experimentation, and continuous learning.</p>
          <div className="actions"><a className="button primary" href="#projects">Explore my work <span>↓</span></a><a className="button secondary" href="mailto:patsakorn.mongkonporn@gmail.com">Let&apos;s connect ↗</a></div>
          <div className="socials"><a href="https://github.com/patsakornmkp/posture-guard-ai" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/patsakorn-mongkonporn-22994a422/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
        <div className="heroArt" aria-label="Decorative software developer card"><div className="orb" /><div className="heroCard"><div className="cardLabel">CURRENT FOCUS</div><div className="cardMain">Software<br />Development</div><div className="cardFooter"><span>Python</span><span>Web APIs</span><span>Problem solving</span></div></div><div className="floating f1">01 / BUILD</div><div className="floating f2">02 / LEARN</div></div>
      </section>

      <div className="ticker"><span>PYTHON</span><span>COMPUTER VISION</span><span>WEB DEVELOPMENT</span><span>DATABASES</span><span>CONTINUOUS LEARNING</span></div>

      <section className="section" id="about"><div className="sectionHead"><span className="number">01</span><h2>About me</h2></div><div className="aboutGrid"><p className="aboutLead">A recent Information Technology graduate, motivated to grow into a capable software developer.</p><div className="aboutBody"><p>I graduated from the Faculty of Science, Silpakorn University. My senior project gave me experience working on a computer vision-based sitting posture monitoring system, refining its functionality with feedback from an academic advisor and a physiotherapy domain expert.</p><p>I use AI-assisted coding tools as part of my workflow while actively strengthening my ability to understand, debug, and implement code independently.</p><div className="facts"><div><small>DEGREE</small><b>B.Sc. Information Technology</b></div><div><small>UNIVERSITY</small><b>Silpakorn University</b></div><div><small>LOCATION</small><b>Bangkok, Thailand</b></div></div></div></div></section>

      <section className="section" id="projects"><div className="sectionHead"><span className="number">02</span><h2>Selected projects</h2></div>
        {projects.map((p) => <article className="project featured" key={p.title}><div className="projectMeta"><span>{p.label}</span><span>{p.year}</span></div><h3>{p.title}</h3><p className="projectSub">{p.subtitle}</p><p>{p.description}</p><ul>{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul><div className="tags">{p.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="projectLink" href={p.link} target="_blank" rel="noreferrer">View repository ↗</a></article>)}
        <div className="projectGrid">{academic.map((p) => <article className="project small" key={p.title}><div className="projectMeta"><span>ACADEMIC PROJECT</span><span>{p.year}</span></div><h3>{p.title}</h3><p>{p.desc}</p><span className="tagMuted">{p.tag}</span></article>)}</div><p className="note">Academic project descriptions are intentionally concise; details can be added after confirming individual responsibilities.</p>
      </section>

      <section className="section" id="skills"><div className="sectionHead"><span className="number">03</span><h2>Technical skills</h2></div><div className="skillGrid">{skills.map((s) => <div className="skill" key={s.title}><h4>{s.title}</h4><p>{s.items}</p><small>{s.note}</small></div>)}</div></section>

      <section className="section" id="education"><div className="sectionHead"><span className="number">04</span><h2>Education</h2></div><div className="education"><div><h3>Silpakorn University</h3><p>Faculty of Science · Information Technology</p></div><div className="eduRight"><span>2021 — 2026</span><b>GPA 2.56</b></div></div></section>

      <section className="contact"><p className="eyebrow">HAVE AN OPPORTUNITY?</p><h2>Let&apos;s build something<br /><span>and learn along the way.</span></h2><a className="button primary" href="mailto:patsakorn.mongkonporn@gmail.com">Email me ↗</a><p className="contactLinks">093-447-6961 · patsakorn.mongkonporn@gmail.com</p></section>
      <footer><span>© 2026 Patsakorn Mongkonporn</span><span>Designed for growth, built with intention.</span><a href="#home">Back to top ↑</a></footer>
    </main>
  )
}
