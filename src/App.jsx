import React, { useEffect, useRef } from 'react';
import './App.css';
import CustomCursor   from './components/CustomCursor';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import Experience     from './components/Experience';
import Skills         from './components/Skills';
import Projects       from './components/Projects';
import Certifications from './components/Certifications';
import Contact        from './components/Contact';
import Footer         from './components/Footer';

function App() {
  const observerRef = useRef(null);

  useEffect(() => {
    // Scroll reveal for .fade-up elements
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const targets = document.querySelectorAll('.fade-up');
    targets.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
