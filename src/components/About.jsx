import useMagneticButton from '../hooks/useMagneticButton';

const circles = [
  { label: 'Frontend', color: '#98c1d9' },
  { label: 'Backend', color: '#ffb7b2' },
  { label: 'Database', color: '#ffdac1' },
  { label: 'DevOps', color: '#e8a87c' },
  { label: 'API', color: '#98c1d9' },
  { label: 'UI/UX', color: '#ffb7b2' },
];

export default function About() {
  const mag = useMagneticButton();

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="section section-dark" id="about">
      <div className="floating-orb orb-4" />
      <div className="section-inner about-grid">
        <div className="about-text anim-reveal anim-slide-right">
          <h2 className="section-heading shimmer-text">
            I'm more<br />than a developer.
          </h2>
          <p className="about-desc">
            I'm a passionate full-stack developer who thrives on building scalable web applications and solving complex
            problems. From idea to deployment, I bring strategy, clean architecture, and pixel-perfect UI together —
            under one roof.
          </p>
          <a
            href="#contact"
            className="btn btn-cta magnetic-btn"
            onClick={(e) => scrollTo(e, 'contact')}
            onMouseMove={mag.onMouseMove}
            onMouseLeave={mag.onMouseLeave}
          >
            Let's chat
          </a>
        </div>
        <div className="about-circles anim-reveal anim-slide-left">
          {circles.map((c) => (
            <div key={c.label} className="circle-item" style={{ '--c': c.color }}>
              {c.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
