import useMagneticButton from '../hooks/useMagneticButton';
import CatScene from './CatScene';

export default function Hero() {
  const mag = useMagneticButton();

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero" id="hero">
      <div className="floating-orb orb-1" />
      <div className="floating-orb orb-2" />
      <div className="floating-orb orb-3" />
      <div className="hero-content">
        <div className="hero-text">
          <img
            src="/Adobe Express - file.png"
            alt="Prasah"
            className="hero-logo anim-reveal"
            style={{ '--delay': '0.1s' }}
          />
          <div className="hero-label anim-reveal" style={{ '--delay': '0.2s' }}>
            production-ready
          </div>
          <h1 className="hero-title">
            <span className="anim-reveal" style={{ '--delay': '0.3s' }}>Full</span>
            <span className="anim-reveal" style={{ '--delay': '0.45s' }}>Stack</span>
            <span className="hero-accent anim-reveal" style={{ '--delay': '0.6s' }}>Developer</span>
          </h1>
          <p className="hero-subtitle anim-reveal" style={{ '--delay': '0.75s' }} id="heroSubtitle">
            Building scalable web applications<br />with modern technologies.
          </p>
          <div className="hero-name anim-reveal" style={{ '--delay': '0.9s' }}>Muddaka Prasanth</div>
          <div className="hero-buttons anim-reveal" style={{ '--delay': '1.05s' }}>
            <a
              href="#projects"
              className="btn btn-primary magnetic-btn"
              onClick={(e) => scrollTo(e, 'projects')}
              onMouseMove={mag.onMouseMove}
              onMouseLeave={mag.onMouseLeave}
            >
              View Projects
            </a>
            <a
              href="/MuddakaPrasanthResume-1.pdf"
              className="btn btn-outline magnetic-btn"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={mag.onMouseMove}
              onMouseLeave={mag.onMouseLeave}
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn btn-outline magnetic-btn"
              onClick={(e) => scrollTo(e, 'contact')}
              onMouseMove={mag.onMouseMove}
              onMouseLeave={mag.onMouseLeave}
            >
              Contact Me
            </a>
          </div>
        </div>
        <CatScene />
      </div>
    </section>
  );
}
