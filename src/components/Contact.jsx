import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────
   IMPORTANT: Replace the value below with your own Formspree
   endpoint after signing up at https://formspree.io
   Steps:
   1. Go to https://formspree.io and sign up (free)
   2. Click "New Form" → name it "Portfolio Contact"
   3. Copy the endpoint URL (e.g. https://formspree.io/f/xpwzabcd)
   4. Paste it below
───────────────────────────────────────────────────────────── */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkjjbwkz';

const CONTACT_LINKS = [
  {
    id:       'email',
    icon:     'fas fa-envelope',
    label:    'Email',
    value:    'sivanandhanmanimuthu@gmail.com',
    href:     'mailto:sivanandhanmanimuthu@gmail.com',
    external: false,
  },
  {
    id:       'linkedin',
    icon:     'fab fa-linkedin-in',
    label:    'LinkedIn',
    value:    'linkedin.com/in/sivanandhan-m',
    href:     'https://linkedin.com/in/sivanandhan-m-653443285',
    external: true,
  },
  {
    id:       'github',
    icon:     'fab fa-github',
    label:    'GitHub',
    value:    'github.com/SivanandhanM',
    href:     'https://github.com/SivanandhanM',
    external: true,
  },
];

/* ── Status banner colours ────────────────────────────────── */
const STATUS_STYLES = {
  success: {
    bg:     'rgba(52, 211, 153, 0.08)',
    border: 'rgba(52, 211, 153, 0.3)',
    color:  '#34d399',
    icon:   'fas fa-circle-check',
    text:   "Message sent! I'll get back to you within 24 hours. 🙌",
  },
  error: {
    bg:     'rgba(251, 113, 133, 0.08)',
    border: 'rgba(251, 113, 133, 0.3)',
    color:  '#fb7185',
    icon:   'fas fa-circle-exclamation',
    text:   'Something went wrong. Please email me directly at sivanandhanmanimuthu@gmail.com',
  },
};

/* ── Input field wrapper ──────────────────────────────────── */
const Field = ({ id, label, type = 'text', as = 'input', value, onChange, required }) => {
  const Tag = as;
  return (
    <div className="cf-field">
      <label className="cf-label" htmlFor={id}>{label}</label>
      <Tag
        id={id}
        name={id}
        type={as === 'input' ? type : undefined}
        className={`cf-input${as === 'textarea' ? ' cf-textarea' : ''}`}
        value={value}
        onChange={onChange}
        required={required}
        aria-required={required}
        rows={as === 'textarea' ? 5 : undefined}
        placeholder={
          id === 'name'    ? 'Your full name'               :
          id === 'email'   ? 'your@email.com'               :
          id === 'subject' ? 'What is this about?'          :
                             'Tell me about your project or opportunity…'
        }
      />
    </div>
  );
};

/* ── Main Contact Section ─────────────────────────────────── */
const Contact = () => {
  const ref = useRef(null);
  const [status, setStatus]   = useState('idle'); // idle | sending | success | error
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' });

  /* Scroll reveal */
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

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const isSending = status === 'sending';
  const statusInfo = STATUS_STYLES[status];

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container fade-up" ref={ref}>
        <span className="section-label" aria-hidden="true">Get In Touch</span>
        <h2 className="section-title" id="contact-heading">
          Let's <span className="accent">Work Together</span>
        </h2>
        <p className="section-sub">
          Whether it's a job opportunity, a project collab, or just saying hi — my inbox is always open.
        </p>

        <div className="contact-wrapper">

          {/* ── Left: contact info + social ── */}
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="contact-heading">Say Hello 👋</h3>
            <p className="contact-sub">
              I'm a Software Developer based in Tamil Nadu, India, currently working at
              NavaNala Technologies. Actively exploring new opportunities to grow and
              contribute to innovative products.
            </p>

            <div className="contact-links" role="list" aria-label="Contact channels">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="contact-link-item"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  aria-label={`${link.label}: ${link.value}`}
                  role="listitem"
                >
                  <div className="contact-link-icon" aria-hidden="true">
                    <i className={link.icon} />
                  </div>
                  <div>
                    <div className="contact-link-label">{link.label}</div>
                    <div className="contact-link-value">{link.value}</div>
                  </div>
                  <i
                    className="fas fa-arrow-right"
                    aria-hidden="true"
                    style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--text-3)' }}
                  />
                </a>
              ))}
            </div>

            <div className="contact-social-row" aria-label="Social links">
              <a href="https://github.com/SivanandhanM" target="_blank" rel="noopener noreferrer" className="social-btn">
                <i className="fab fa-github" aria-hidden="true" /> GitHub
              </a>
              <a href="https://linkedin.com/in/sivanandhan-m-653443285" target="_blank" rel="noopener noreferrer" className="social-btn">
                <i className="fab fa-linkedin-in" aria-hidden="true" /> LinkedIn
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="social-btn">
                <i className="fas fa-file-pdf" aria-hidden="true" /> Resume
              </a>
            </div>
          </motion.div>

          {/* ── Right: contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <h3 className="cf-title">Send a Message</h3>
              <p className="cf-subtitle">
                Fill in the form and I'll respond within 24 hours.
              </p>

              {/* Status banner */}
              {statusInfo && (
                <div
                  className="cf-status"
                  role="alert"
                  style={{
                    background:   statusInfo.bg,
                    border:       `1px solid ${statusInfo.border}`,
                    color:        statusInfo.color,
                  }}
                >
                  <i className={statusInfo.icon} aria-hidden="true" />
                  <span>{statusInfo.text}</span>
                </div>
              )}

              {/* Fields */}
              <div className="cf-row">
                <Field
                  id="name"
                  label="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Field
                  id="email"
                  label="Email Address"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Field
                id="subject"
                label="Subject"
                value={form.subject}
                onChange={handleChange}
                required
              />

              <Field
                id="message"
                label="Message"
                as="textarea"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="btn btn-primary cf-submit"
                disabled={isSending}
                aria-label={isSending ? 'Sending message…' : 'Send message'}
              >
                {isSending ? (
                  <>
                    <i className="fas fa-spinner fa-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
