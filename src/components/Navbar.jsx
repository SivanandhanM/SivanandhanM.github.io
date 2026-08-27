import React, { useState } from 'react';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <a href="#" className="logo" onClick={closeMenu}>Sivanandhan M<span className="accent">.</span></a>
                <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" className="btn-primary" onClick={closeMenu}>Contact Me</a></li>
                </ul>
                <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
