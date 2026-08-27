import React from 'react';

const Certifications = () => {
    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <h2 className="section-title">Certifications & <span className="accent">Training</span></h2>
                <div className="cert-grid">
                    <div className="cert-card">
                        <i className="fas fa-database"></i>
                        <h3>Database Developer</h3>
                        <p>Oracle Certification</p>
                    </div>
                    <div className="cert-card">
                        <i className="fas fa-chart-bar"></i>
                        <h3>Power BI Certification</h3>
                        <p>ICT Academy</p>
                    </div>
                    <div className="cert-card">
                        <i className="fas fa-code"></i>
                        <h3>Java Inplant Training</h3>
                        <p>EMGlitz Technologies</p>
                    </div>
                    <div className="cert-card">
                        <i className="fas fa-robot"></i>
                        <h3>AI Prompt Engineering</h3>
                        <p>Credit Course</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
