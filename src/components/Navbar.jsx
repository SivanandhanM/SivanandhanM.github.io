import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience'  },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Contact',    href: '#contact'     },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeId, setActiveId]   = useState('');
  const [theme, setTheme]         = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'light';
  });

  /* Sync Theme with Document ------------------------------------------- */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  /* Scroll detection --------------------------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Highlight active section
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
      });
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu open ----------------------------- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="container">
          <nav className="navbar-inner" aria-label="Primary navigation">
            {/* Logo */}
            <a href="#hero" className="nav-logo" onClick={close} aria-label="Go to top">
              {'<S'}<span>M</span>{' />'}
            </a>

            {/* Desktop links */}
            <ul className="nav-links" role="list">
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`nav-link${activeId === href.slice(1) ? ' active' : ''}`}
                    aria-current={activeId === href.slice(1) ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              {/* Theme Toggle Button */}
              <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'} aria-hidden="true" />
              </button>

              {/* Resume CTA */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm nav-resume"
                aria-label="Download Resume PDF"
              >
                <i className="fas fa-download" aria-hidden="true" />
                Resume
              </a>
            </div>

            {/* Hamburger */}
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <span />
              <span />
              <span />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <nav
        id="mobile-nav"
        className={`nav-mobile${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        {NAV_ITEMS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="nav-link"
            onClick={close}
          >
            {label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          onClick={close}
          aria-label="Download Resume PDF"
        >
          <i className="fas fa-download" aria-hidden="true" />
          Download Resume
        </a>
        <button
          className="btn btn-ghost"
          style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}
          onClick={() => { toggleTheme(); close(); }}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'} aria-hidden="true" />
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
