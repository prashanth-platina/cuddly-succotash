import { useRef } from 'react';
import useMagneticButton from '../hooks/useMagneticButton';

const githubIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const liveIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const projects = [
  {
    title: 'E-Commerce Platform',
    sub: 'Full Stack Project',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #98c1d9, #3d5a80)',
    icon: githubIcon,
    iconLabel: 'GitHub',
  },
  {
    title: 'Task Manager App',
    sub: 'Productivity Suite',
    tags: ['React.js', 'Express', 'PostgreSQL'],
    gradient: 'linear-gradient(135deg, #ffb7b2, #c06c84)',
    icon: liveIcon,
    iconLabel: 'Live Demo',
  },
  {
    title: 'Weather Dashboard',
    sub: 'API Integration',
    tags: ['JavaScript', 'REST API', 'CSS3'],
    gradient: 'linear-gradient(135deg, #ffdac1, #e8a87c)',
    icon: githubIcon,
    iconLabel: 'GitHub',
  },
  {
    title: 'Chat Application',
    sub: 'Real-time Project',
    tags: ['Node.js', 'Socket.io', 'React'],
    gradient: 'linear-gradient(135deg, #c3aed6, #7c5cbf)',
    icon: liveIcon,
    iconLabel: 'Live Demo',
  },
  {
    title: 'Blog Platform',
    sub: 'Content Management',
    tags: ['Python', 'Django', 'MySQL'],
    gradient: 'linear-gradient(135deg, #a8e6cf, #3b7d5e)',
    icon: githubIcon,
    iconLabel: 'GitHub',
  },
  {
    title: 'Portfolio Website',
    sub: 'Personal Brand',
    tags: ['HTML', 'CSS', 'Three.js'],
    gradient: 'linear-gradient(135deg, #f6c667, #d4a03e)',
    icon: liveIcon,
    iconLabel: 'Live Demo',
  },
];

export default function Projects() {
  const trackRef = useRef(null);
  const mag = useMagneticButton();

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 400, behavior: 'smooth' });
  };

  return (
    <section className="section section-cream" id="projects">
      <div className="section-inner">
        <div className="projects-header anim-reveal">
          <div className="projects-counter">01 /06</div>
          <div>
            <h2 className="section-heading-lg">Feed on my latest work</h2>
            <p className="section-sub">(see how I stop the scroll)</p>
          </div>
          <a
            href="https://github.com/prashanth-platina"
            className="btn btn-outline-dark magnetic-btn"
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={mag.onMouseMove}
            onMouseLeave={mag.onMouseLeave}
          >
            All projects
          </a>
        </div>
      </div>

      <div className="filmstrip">
        <div className="filmstrip-perf" />
        <div className="filmstrip-track" id="filmstripTrack" ref={trackRef}>
          {projects.map((p) => (
            <div className="film-card" key={p.title}>
              <div className="film-card-img" style={{ background: p.gradient }}>
                <span className="film-view-badge">VIEW</span>
                <div className="film-card-overlay">
                  {p.icon}
                  <span>{p.iconLabel}</span>
                </div>
              </div>
              <div className="film-card-info">
                <h4>{p.title}</h4>
                <p>
                  for <strong>{p.sub}</strong>
                </p>
                <div className="film-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="filmstrip-perf" />
      </div>

      <div className="filmstrip-nav">
        <button className="filmstrip-btn" id="filmPrev" aria-label="Previous" onClick={() => scroll(-1)}>
          ←
        </button>
        <button className="filmstrip-btn" id="filmNext" aria-label="Next" onClick={() => scroll(1)}>
          →
        </button>
      </div>
    </section>
  );
}
