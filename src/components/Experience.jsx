import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const EXPERIENCES = [
  {
    id:       'navanala',
    title:    'Software Developer (Trainee)',
    company:  'NavaNala Technologies',
    period:   'April 2026 – Present',
    active:   true,
    type:     'Full-time · On-site',
    location: 'Erode, Tamil Nadu',
    description:
      'Contributing to enterprise-grade ERP and workflow automation platforms as a core team member, working across the full stack — Java Spring backend, React frontend, and REST API layer.',
    highlights: [
      'Developed and maintained scalable Java modules powering procurement, inventory, and accounting workflows in the LEDZE+ ERP system.',
      'Designed RESTful API endpoints consumed by the React frontend, reducing data fetch latency by standardising response contracts.',
      'Participated in multi-level approval workflow implementation, ensuring audit trail integrity for enterprise transactions.',
      'Collaborated with cross-functional teams in Agile sprints, conducting code reviews and writing technical documentation.',
    ],
    techs: ['Java', 'Spring Boot', 'React.js', 'REST APIs', 'SQL', 'Postman', 'Git', 'GitHub'],
  },
];

const Experience = () => {
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
    <motion.section
      id="experience"
      className="section"
      aria-labelledby="exp-heading"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container fade-up" ref={ref}>
        <span className="section-label" aria-hidden="true">Career</span>
        <h2 className="section-title" id="exp-heading">
          Work <span className="accent">Experience</span>
        </h2>
        <p className="section-sub">
          Where I've applied my skills to build real-world enterprise software.
        </p>

        <div className="timeline" role="list" aria-label="Work history">
          {EXPERIENCES.map((exp) => (
            <article className="timeline-item" key={exp.id} role="listitem">
              {/* Animated timeline dot */}
              <div
                className={`timeline-dot${exp.active ? ' active' : ''}`}
                aria-label={exp.active ? 'Current role' : 'Past role'}
              />

              <div className="exp-card glass-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <p className="exp-company">
                      <i className="fas fa-building" aria-hidden="true" style={{ marginRight: '0.4rem', fontSize: '0.8rem' }} />
                      {exp.company}
                    </p>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">
                      <i className="fas fa-calendar-alt" aria-hidden="true" style={{ marginRight: '0.35rem' }} />
                      {exp.period}
                    </span>
                    {exp.active && (
                      <span className="exp-badge">
                        <span className="exp-badge-dot" aria-hidden="true" />
                        Active
                      </span>
                    )}
                    <span className="pill" style={{ fontSize: '0.72rem' }}>
                      <i className="fas fa-map-pin" aria-hidden="true" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="exp-description">{exp.description}</p>

                <h4
                  style={{
                    fontSize: '0.75rem', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    color: 'var(--text-3)', marginBottom: '0.75rem',
                  }}
                >
                  Key Contributions
                </h4>
                <ul className="exp-highlights" aria-label="Key contributions">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="exp-highlight">
                      <span className="exp-highlight-icon" aria-hidden="true">
                        <i className="fas fa-check" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <h4
                  style={{
                    fontSize: '0.75rem', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    color: 'var(--text-3)', marginBottom: '0.6rem',
                  }}
                >
                  Tech Stack
                </h4>
                <div className="exp-techs" role="list" aria-label="Technologies used">
                  {exp.techs.map((t) => (
                    <span key={t} className="pill pill-accent" role="listitem">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
