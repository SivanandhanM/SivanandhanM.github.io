import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const CERTS = [
  {
    id:     'oracle',
    icon:   'fas fa-database',
    name:   'Oracle Database Developer',
    issuer: 'Oracle Corporation',
    year:   '2024',
    tag:    'Database',
  },
  {
    id:     'powerbi',
    icon:   'fas fa-chart-bar',
    name:   'Power BI Certification',
    issuer: 'ICT Academy',
    year:   '2024',
    tag:    'Data Analytics',
  },
  {
    id:     'java',
    icon:   'fab fa-java',
    name:   'Java Inplant Training',
    issuer: 'EMGlitz Technologies',
    year:   '2023',
    tag:    'Backend',
  },
  {
    id:     'ai',
    icon:   'fas fa-robot',
    name:   'AI Prompt Engineering',
    issuer: 'Credit Course · College',
    year:   '2024',
    tag:    'Artificial Intelligence',
  },
];

const Certifications = () => {
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
    <section id="certifications" className="section" aria-labelledby="cert-heading">
      <div className="container fade-up" ref={ref}>
        <span className="section-label" aria-hidden="true">Credentials</span>
        <h2 className="section-title" id="cert-heading">
          Certifications &amp; <span className="accent">Training</span>
        </h2>
        <p className="section-sub">
          Formal credentials that back up my hands-on experience.
        </p>

        <div className="cert-grid" role="list" aria-label="Certifications">
          {CERTS.map((cert, i) => (
            <motion.article
              key={cert.id}
              className="cert-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              role="listitem"
              aria-label={`${cert.name} from ${cert.issuer}`}
            >
              <div className="cert-icon" aria-hidden="true">
                <i className={cert.icon} />
              </div>
              <div>
                <p className="cert-name">{cert.name}</p>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <span className="pill pill-accent">{cert.tag}</span>
                <span className="cert-year">{cert.year}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
