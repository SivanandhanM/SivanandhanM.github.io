import React, { useRef, useEffect } from 'react';

const TECH_PILLS = [
  'Java', 'Python', 'JavaScript', 'React.js',
  'REST APIs', 'SQL', 'Git', 'AI Prompting',
];

const BENTO_ITEMS = [
  {
    col:   'span-2',
    icon:  'fas fa-user',
    cls:   'violet',
    label: 'Profile',
    content: 'bio',
  },
  {
    col:   '',
    icon:  'fas fa-graduation-cap',
    cls:   'sky',
    label: 'Degree',
    big:   'B.Sc. CS&D',
    sub:   'Kongu Engineering College · 2023–2026',
    extra: 'CGPA: 7.34',
  },
  {
    col:   '',
    icon:  'fas fa-briefcase',
    cls:   'violet',
    label: 'Current Role',
    big:   'Software Developer',
    sub:   'NavaNala Technologies',
    extra: 'April 2026 – Present',
  },
  {
    col:   '',
    icon:  'fas fa-map-marker-alt',
    cls:   'em',
    label: 'Based In',
    big:   'Kangayam, TN',
    sub:   'India',
    extra: 'Open to Remote',
  },
  {
    col:   '',
    icon:  'fas fa-certificate',
    cls:   'sky',
    label: 'Certifications',
    big:   '4',
    sub:   'Oracle · ICT Academy · AI',
    extra: '+ More',
  },
];

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container fade-up" ref={ref}>

        {/* Section header */}
        <span className="section-label" aria-hidden="true">Who I Am</span>
        <h2 className="section-title" id="about-heading">
          About <span className="accent">Me</span>
        </h2>
        <p className="section-sub">
          A developer who bridges backend logic and polished UI to ship products people love.
        </p>

        <div className="about-wrapper">

          {/* Left – Bio prose card */}
          <article className="about-bio-card">
            <p>
              I'm a <strong>Computer Systems &amp; Design</strong> graduate with hands-on industry experience
              at <strong>NavaNala Technologies</strong>, where I contribute to enterprise ERP platforms,
              REST API design, and full-stack Java/React development.
            </p>
            <p>
              My engineering philosophy is simple: write code that is readable, testable, and purposeful.
              I enjoy translating complex business requirements into clean software architecture — whether
              that's a multi-module procurement system or a responsive client-facing web app.
            </p>
            <p>
              Outside work, I explore AI prompt engineering, UI/UX design principles, and database
              optimisation. I believe continuous learning is the best career investment.
            </p>

            <div className="about-pills" role="list" aria-label="Key technical skills">
              {TECH_PILLS.map((skill) => (
                <span key={skill} className="pill" role="listitem">{skill}</span>
              ))}
            </div>
          </article>

          {/* Right – Bento info cards */}
          <div className="bento-grid" role="list" aria-label="Profile highlights">
            {BENTO_ITEMS.map((item) => {
              if (item.content === 'bio') return null; // rendered left
              return (
                <div
                  key={item.label}
                  className={`bento-card card-${item.cls}${item.col ? ` ${item.col}` : ''}`}
                  role="listitem"
                >
                  <div className={`bento-icon ${item.cls}`} aria-hidden="true">
                    <i className={item.icon} />
                  </div>
                  <h4>{item.label}</h4>
                  <p className="big">{item.big}</p>
                  <p className="sub">{item.sub}</p>
                  {item.extra && (
                    <span className="pill pill-accent" style={{ marginTop: '0.6rem' }}>
                      {item.extra}
                    </span>
                  )}
                </div>
              );
            })}

            {/* Academic Background card */}
            <div className="bento-card card-sky span-2" role="listitem">
              <div className="bento-icon sky" aria-hidden="true">
                <i className="fas fa-school" />
              </div>
              <h4>Academic Background</h4>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <div>
                  <p className="big" style={{ fontSize: '1rem' }}>HSC</p>
                  <p className="sub">Vivekananda Vidyalaya · 2022–2023 · 72.33%</p>
                </div>
                <div style={{ width: '1px', background: 'var(--border)' }} aria-hidden="true" />
                <div>
                  <p className="big" style={{ fontSize: '1rem' }}>SSLC</p>
                  <p className="sub">Vivekananda Vidyalaya · 2020–2021 · All Pass</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
