const skillData = [
  {
    title: 'Frontend',
    color: '#98c1d9',
    delay: '0.1s',
    anim: 'anim-slide-right',
    skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap', 'Responsive Design', 'UI/UX Principles'],
  },
  {
    title: 'Backend',
    color: '#ffb7b2',
    delay: '0.25s',
    anim: 'anim-slide-up',
    skills: ['Node.js', 'Express.js', 'Java', 'Python', 'REST APIs', 'Authentication & Security'],
  },
  {
    title: 'Tools & Data',
    color: '#ffdac1',
    delay: '0.4s',
    anim: 'anim-slide-left',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git & GitHub', 'Postman', 'VS Code'],
  },
];

export default function Skills() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="section section-cream" id="skills">
      <div className="section-inner">
        <div className="section-header anim-reveal">
          <h2 className="section-heading-lg">
            Faster decisions.<br />Cleaner code. Better results.
          </h2>
          <p className="section-sub">
            As a horizontally skilled developer, I bring frontend, backend, and database capabilities together in one place.
          </p>
        </div>

        <div className="skills-columns">
          {skillData.map((col) => (
            <div
              key={col.title}
              className={`skill-column anim-reveal ${col.anim}`}
              style={{ '--col-color': col.color, '--delay': col.delay }}
            >
              <h3 className="skill-column-title">{col.title}</h3>
              <ul className="skill-list">
                {col.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills-cta anim-reveal">
          <a href="#projects" className="btn btn-outline-dark" onClick={(e) => scrollTo(e, 'projects')}>
            My projects
          </a>
        </div>

        <p className="skills-tagline anim-reveal">
          I code with precision, but collaborate like family. The internet deserves better, and so do the people I build for.
        </p>
      </div>
    </section>
  );
}
