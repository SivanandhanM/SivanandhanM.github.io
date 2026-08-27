import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <p className="greeting">Hello, I'm</p>
                    <h1 className="name">Sivananthan M<span className="accent">.</span></h1>
                    <h2 className="title">Software Developer | Java Developer | Frontend Developer</h2>
                    <p className="tagline">
                        A Computer Systems and Design graduate passionate about building practical software solutions,
                        responsive web applications, and AI-driven applications.
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn-primary" aria-label="View Projects">View Projects</a>
                        <a href="#contact" className="btn-secondary" aria-label="Contact Me">Contact Me</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="blob"></div>
                    <div className="dev-card">
                        <div className="dev-card-header">
                            <div className="dev-card-dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <span className="dev-card-title">&lt; Developer /&gt;</span>
                        </div>
                        <div className="dev-card-grid">
                            <div className="dev-tag">
                                <i className="fab fa-java"></i>
                                <span>Java</span>
                            </div>
                            <div className="dev-tag">
                                <i className="fab fa-react"></i>
                                <span>React</span>
                            </div>
                            <div className="dev-tag">
                                <i className="fas fa-database"></i>
                                <span>SQL</span>
                            </div>
                            <div className="dev-tag">
                                <i className="fas fa-network-wired"></i>
                                <span>API</span>
                            </div>
                        </div>
                        <div className="dev-card-footer">
                            <span>AI</span>
                            <span className="bullet">•</span>
                            <span>ERP</span>
                            <span className="bullet">•</span>
                            <span>Web</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
