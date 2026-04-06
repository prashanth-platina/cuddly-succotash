import ProfileCard from './ProfileCard';
import useMagneticButton from '../hooks/useMagneticButton';

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
              href="#resume"
              className="btn btn-outline magnetic-btn"
              onClick={(e) => scrollTo(e, 'resume')}
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
        <div className="hero-profile-card anim-reveal" style={{ '--delay': '0.4s' }}>
          <ProfileCard
            avatarUrl="/prasah-avatar.png"
            name="Prasah"
            title="Full Stack Developer"
            handle="prashanth-platina"
            status="Available for work"
            contactText="Let's Talk"
            showUserInfo={true}
            enableTilt={true}
            behindGlowColor="rgba(232, 168, 124, 0.5)"
            innerGradient="linear-gradient(145deg, #1a1a1a88 0%, #e8a87c44 100%)"
            onContactClick={handleContactClick}
          />
        </div>
      </div>
    </section>
  );
}
