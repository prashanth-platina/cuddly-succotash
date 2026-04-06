export default function Resume() {
  return (
    <section className="section section-cream" id="resume">
      <div className="section-inner resume-section anim-reveal">
        <h2 className="section-heading-lg">
          From the first idea<br />to the final deploy.
        </h2>
        <p className="section-sub">
          My capabilities come to life through a fully integrated skill set — strategy, architecture, and pixel-perfect execution.
        </p>
        <a href="#" className="btn btn-cta btn-lg" download>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>
      </div>
    </section>
  );
}
