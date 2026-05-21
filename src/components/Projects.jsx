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
    title: 'AI Digit Recognizer',
    sub: 'Machine Learning App',
    tags: ['React.js', 'ML API', 'Canvas API'],
    image: '/mnist.png',
    link: 'https://mnist-sable.vercel.app',
    repo: 'https://github.com/prashanth-platina/mnist',
    icon: liveIcon,
    iconLabel: 'Live Demo',
  },
  {
    title: 'AI Support Agent (Fictional Train)',
    sub: 'Intelligent Assistant',
    tags: ['React.js', 'Langbase', 'Support UI'],
    image: '/ai_support.png',
    link: 'https://fictional-train-seven.vercel.app',
    repo: 'https://github.com/prashanth-platina/fictional-train',
    icon: liveIcon,
    iconLabel: 'Live Demo',
  },
  {
    title: 'Favorite Album Explorer',
    sub: 'Music Discovery',
    tags: ['React.js', 'REST API', 'CSS3'],
    image: '/album.png',
    link: 'https://find-your-fav-album.vercel.app',
    repo: 'https://github.com/prashanth-platina/Find-Your-Fav-Album',
    icon: liveIcon,
    iconLabel: 'Live Demo',
  },
  {
    title: 'Hydronexus Dashboard',
    sub: 'Water Quality Monitoring',
    tags: ['React.js', 'Data Viz', 'Analytics'],
    image: '/hydronexus.png',
    link: 'https://hydronexus.vercel.app',
    repo: 'https://github.com/prashanth-platina/hydronexus',
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
          <div className="projects-counter">01 /04</div>
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
              <a 
                href={p.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="film-card-img" 
                style={{ backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center', textDecoration: 'none' }}
              >
                <span className="film-view-badge">VIEW</span>
                <div className="film-card-overlay">
                  {p.icon}
                  <span>{p.iconLabel}</span>
                </div>
              </a>
              <div className="film-card-info">
                <h4>{p.title}</h4>
                <p>
                  for <strong>{p.sub}</strong>
                </p>
                <div className="film-tags">
                  {p.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" style={{ background: '#24292e', color: '#fff', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '0.8rem', padding: '4px 10px', borderRadius: '20px', fontFamily: 'var(--font-mono)', fontWeight: '500' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
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
