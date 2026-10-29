import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/* ── Skill Data ─────────────────────────────────────────────── */
const SKILL_GROUPS = [
  {
    id:     'languages',
    icon:   'fas fa-code',
    title:  'Languages',
    col:    'wide',
    skills: ['Java', 'Python', 'JavaScript', 'C', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    id:     'frontend',
    icon:   'fab fa-react',
    title:  'Frontend',
    col:    '',
    skills: ['React.js', 'HTML5', 'CSS3', 'Responsive Design', 'JSON'],
  },
  {
    id:     'backend',
    icon:   'fas fa-server',
    title:  'Backend & APIs',
    col:    '',
    skills: ['Java Spring', 'REST APIs', 'OOP', 'Data Structures', 'Algorithms'],
  },
  {
    id:     'tools',
    icon:   'fas fa-wrench',
    title:  'Tools & DevOps',
    col:    '',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Swagger / OpenAPI', 'OCR'],
  },
  {
    id:     'ai',
    icon:   'fas fa-robot',
    title:  'AI & Data',
    col:    '',
    skills: ['AI Prompt Engineering', 'Power BI', 'DBMS', 'Data Analysis'],
  },
  {
    id:     'soft',
    icon:   'fas fa-users',
    title:  'Soft Skills',
    col:    'full',
    skills: ['Communication', 'Team Collaboration', 'Problem Solving', 'Adaptability', 'Time Management', 'Agile / Scrum'],
  },
];

/* ── Reusable SkillBadge ─────────────────────────────────────── */
const SkillBadge = ({ skill }) => (
  <span className="pill" role="listitem" aria-label={skill}>{skill}</span>
);

/* ── Main Section ───────────────────────────────────────────── */
const Skills = () => {
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
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container fade-up" ref={ref}>
        <span className="section-label" aria-hidden="true">Expertise</span>
        <h2 className="section-title" id="skills-heading">
          Technical <span className="accent">Skills</span>
        </h2>
        <p className="section-sub">
          A curated stack of technologies and tools I use to build reliable, scalable software.
        </p>

        <div className="skills-bento" role="list" aria-label="Skill categories">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.id}
              className={`skill-card${group.col ? ` ${group.col}` : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
              role="listitem"
            >
              <div className={`skill-card-inner skill-cat-${group.id}`}>
                <div className="skill-card-title">
                  <i className={group.icon} aria-hidden="true" />
                  {group.title}
                </div>
                <div className="skill-tags" role="list" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
