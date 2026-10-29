import React from 'react';
import { motion } from 'framer-motion';

/* Animation helpers */
const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 28 },
  animate:   { opacity: 1, y: 0  },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
});

const DEV_TAGS = [
  { icon: 'fab fa-java',          label: 'Java'    },
  { icon: 'fab fa-react',         label: 'React'   },
  { icon: 'fas fa-database',      label: 'SQL'     },
  { icon: 'fas fa-plug',          label: 'REST API' },
  { icon: 'fab fa-python',        label: 'Python'  },
  { icon: 'fas fa-code-branch',   label: 'Git'     },
];

const STATS = [
  { num: '3+',  label: 'Projects' },
  { num: '6mo', label: 'Industry' },
  { num: '4+',  label: 'Certs'    },
];

const Hero = () => (
  <section id="hero" className="hero" aria-label="Hero introduction">
    {/* Ambient blobs */}
    <div className="hero-blob hero-blob-1" aria-hidden="true" />
    <div className="hero-blob hero-blob-2" aria-hidden="true" />

    <div className="container">
      <div className="hero-grid">

        {/* ── Left: Content ── */}
        <div>
          <motion.div {...fadeUp(0)}>
            <span className="hero-eyebrow" aria-label="Currently available">
              <span className="hero-eyebrow-dot" aria-hidden="true" />
              Open to Opportunities
            </span>
          </motion.div>

          <motion.h1 className="hero-name" {...fadeUp(0.08)}>
            <span className="hero-name-grad">Sivanandhan</span>
            <br />
            M.
          </motion.h1>

          <motion.p className="hero-role" {...fadeUp(0.16)}>
            &lt; Software Developer · Java · React · REST APIs /&gt;
          </motion.p>

          <motion.p className="hero-bio" {...fadeUp(0.22)}>
            A Computer Systems &amp; Design graduate building enterprise-grade web solutions
            at <strong style={{ color: 'var(--text-1)' }}>NavaNala Technologies</strong>.
            I craft scalable Java back-ends, intuitive React front-ends, and clean REST APIs
            that turn complex business workflows into elegant digital products.
          </motion.p>

          <motion.div className="hero-actions" {...fadeUp(0.28)}>
            <a href="#projects" className="btn btn-primary" aria-label="View featured projects">
              <i className="fas fa-rocket" aria-hidden="true" />
              View My Work
            </a>
            <a href="#contact" className="btn btn-ghost" aria-label="Contact me">
              Let's Connect
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div className="hero-social" {...fadeUp(0.34)} aria-label="Social links">
            <a
              href="https://github.com/SivanandhanM"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub profile"
            >
              <i className="fab fa-github" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/sivanandhan-m-653443285"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn profile"
            >
              <i className="fab fa-linkedin-in" aria-hidden="true" />
            </a>
            <a
              href="mailto:sivanandhanmanimuthu@gmail.com"
              className="hero-social-link"
              aria-label="Send email"
            >
              <i className="fas fa-envelope" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* ── Right: Floating Dev Panel ── */}
        <motion.aside
          className="dev-panel"
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0,  scale: 1     }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          aria-label="Developer tech stack panel"
        >
          <div className="dev-panel-card">
            {/* Window chrome */}
            <div className="dev-panel-bar">
              <span className="dev-panel-dot dp-red"    aria-hidden="true" />
              <span className="dev-panel-dot dp-yellow" aria-hidden="true" />
              <span className="dev-panel-dot dp-green"  aria-hidden="true" />
              <span className="dev-panel-filename">stack.config.js</span>
            </div>

            {/* Tech tags grid */}
            <div className="dp-row" role="list" aria-label="Core technologies">
              {DEV_TAGS.map(({ icon, label }) => (
                <div key={label} className="dp-tag" role="listitem">
                  <i className={icon} aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Footer strip */}
            <div className="dp-footer">
              <span>Enterprise</span>
              <span className="dp-bullet" aria-hidden="true">•</span>
              <span>ERP</span>
              <span className="dp-bullet" aria-hidden="true">•</span>
              <span>AI / ML</span>
            </div>
          </div>

          {/* Stats strip */}
          <div className="hero-stats" role="list" aria-label="Quick stats">
            {STATS.map(({ num, label }) => (
              <div key={label} className="stat-item" role="listitem">
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </motion.aside>

      </div>
    </div>
  </section>
);

export default Hero;
