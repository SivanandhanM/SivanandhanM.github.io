import React from 'react';

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" aria-label="Site footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">
            © {year} Sivanandhan M — Built with{' '}
            <span aria-label="love">♥</span>{' '}
            using React &amp; Vite
          </p>

          <nav className="footer-links" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="footer-link"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
