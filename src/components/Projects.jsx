import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/* ── Project data ───────────────────────────────────────────── */
const PROJECTS = [
  {
    id:        'ledze',
    num:       '01',
    title:     'LEDZE+ – Enterprise ERP Platform',
    icon:      'fas fa-cubes',
    iconCls:   'violet',
    barCls:    '',
    colCls:    'col-7',
    desc:      'A full-featured ERP platform streamlining procurement, sales, inventory management, and CBS accounting for enterprise clients. Designed with multi-level approval workflows, audit trails, and complete transaction traceability to meet compliance requirements.',
    impact:    'Replaced fragmented spreadsheet workflows — cutting processing time by ~60% across procurement cycles.',
    techs:     ['Java', 'Spring Boot', 'React.js', 'REST APIs', 'SQL', 'Postman', 'Git'],
    github:    'https://github.com/SivanandhanM',
    demo:      null,
    featured:  true,
  },
  {
    id:        'dyeing',
    num:       '02',
    title:     'Fabric Dyeing E-Commerce Platform',
    icon:      'fas fa-palette',
    iconCls:   'sky',
    barCls:    'sky',
    colCls:    'col-5',
    desc:      'A web platform to digitise order management for a fabric dyeing company. Features online client registration, automated quote generation based on fabric type and shade selection, and real-time order tracking with secure payment modules.',
    impact:    'Automated quote generation reduced manual estimation effort from hours to seconds.',
    techs:     ['HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'SQL'],
    github:    'https://github.com/SivanandhanM',
    demo:      null,
    featured:  true,
  },
  {
    id:        'blood',
    num:       '03',
    title:     'Blood Donation Web Application',
    icon:      'fas fa-heart-pulse',
    iconCls:   'rose',
    barCls:    'rose',
    colCls:    'col-12',
    desc:      'A full-stack coordination web platform connecting voluntary blood donors with recipients and hospitals in real time. Features donor profile management, blood group & location filtering, urgent request broadcasts, and automated notifications.',
    impact:    'Built with a reactive React frontend and scalable Python backend to ensure low-latency request matching and high availability during medical emergencies.',
    techs:     ['React.js', 'Python', 'REST APIs', 'SQL', 'CSS3', 'Responsive Design'],
    github:    'https://github.com/SivanandhanM',
    demo:      null,
    featured:  true,
  },
];

/* ── Sub-component: ProjectCard ─────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const { num, title, icon, iconCls, barCls, colCls, desc, impact, techs, github, demo } = project;

  return (
    <motion.article
      className={`project-card ${colCls}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      aria-label={`Project: ${title}`}
    >
      <div className={`project-header-bar${barCls ? ` ${barCls}` : ''}`} aria-hidden="true" />

      <div className="project-body">
        <div className={`project-icon ${iconCls}`} aria-hidden="true">
          <i className={icon} />
        </div>

        <p className="project-num" aria-hidden="true">{num} / 03</p>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{desc}</p>

        {/* Impact callout */}
        <div className="project-impact" role="note" aria-label="Impact">
          <i className="fas fa-chart-line" aria-hidden="true" />
          <span>{impact}</span>
        </div>

        {/* Tech stack pills */}
        <div className="project-techs" role="list" aria-label="Technologies used">
          {techs.map((t) => (
            <span key={t} className="pill" role="listitem">{t}</span>
          ))}
        </div>

        {/* Action links */}
        <div className="project-links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
              aria-label={`View ${title} on GitHub`}
            >
              <i className="fab fa-github" aria-hidden="true" />
              GitHub
            </a>
          )}
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label={`Live demo of ${title}`}
            >
              <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
              Live Demo
            </a>
          ) : (
            <span className="pill" style={{ padding: '0.5rem 0.8rem', fontSize: '0.78rem' }}>
              <i className="fas fa-lock" aria-hidden="true" />
              &nbsp;Private / NDA
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

/* ── Main section ───────────────────────────────────────────── */
const Projects = () => (
  <section id="projects" className="section" aria-labelledby="projects-heading">
    <div className="container">
      <span className="section-label" aria-hidden="true">Portfolio</span>
      <h2 className="section-title" id="projects-heading">
        Featured <span className="accent">Projects</span>
      </h2>
      <p className="section-sub">
        Real-world applications built with production-quality architecture, clean code,
        and measurable business impact.
      </p>

      <div className="projects-bento" role="list" aria-label="Featured projects">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
