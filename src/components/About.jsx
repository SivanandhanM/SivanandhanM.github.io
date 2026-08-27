import React from 'react';

const About = () => {
    const technicalSkills = [
        'Java',
        'Python',
        'SQL',
        'Web Development',
        'REST APIs',
        'ERP Systems',
        'AI Concepts'
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About <span className="accent">Me</span></h2>
                <div className="about-content">
                    <p className="about-intro">
                        I am a Computer Systems and Design graduate with a strong foundation in Java, Python, SQL, web
                        development, and API integration. I enjoy building practical software solutions, developing
                        responsive web applications, and exploring AI-driven technologies to solve real-world problems. I
                        continuously enhance my technical skills through hands-on projects, certifications, and practical
                        development experience.
                    </p>

                    <div className="about-grid">
                        {/* Column 1: Education */}
                        <div className="about-col-card">
                            <div className="about-col-header">
                                <i className="fas fa-graduation-cap"></i>
                                <h3>Education</h3>
                            </div>
                            <div className="about-col-body">
                                <h4 className="edu-degree">B.Sc. Computer Systems and Design</h4>
                                <p className="edu-institution">Kongu Engineering College</p>
                                <div className="edu-meta-tags">
                                    <span className="edu-year-badge">2023 – 2026</span>
                                    <span className="edu-grade-badge">CGPA: 7.34</span>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Technical Profile */}
                        <div className="about-col-card">
                            <div className="about-col-header">
                                <i className="fas fa-code"></i>
                                <h3>Technical Profile</h3>
                            </div>
                            <div className="about-col-body">
                                <div className="about-pills-wrap">
                                    {technicalSkills.map((skill, index) => (
                                        <span key={index} className="about-pill">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Location */}
                        <div className="about-col-card">
                            <div className="about-col-header">
                                <i className="fas fa-map-marker-alt"></i>
                                <h3>Location</h3>
                            </div>
                            <div className="about-col-body location-content">
                                <h4 className="location-city">Kangayam, Tamil Nadu</h4>
                                <p className="location-country">India</p>
                            </div>
                        </div>
                    </div>

                    {/* Academic Background */}
                    <div className="academic-section">
                        <h4 className="academic-heading">Academic Background</h4>
                        <div className="academic-grid">
                            <div className="academic-card">
                                <div className="academic-card-header">
                                    <h5>HSC</h5>
                                    <span className="academic-period">2022 – 2023</span>
                                </div>
                                <p className="academic-institute">Vivekananda Vidyalaya Matric Higher Secondary School</p>
                                <div className="academic-score-tag">72.33%</div>
                            </div>
                            <div className="academic-card">
                                <div className="academic-card-header">
                                    <h5>SSLC</h5>
                                    <span className="academic-period">2020 – 2021</span>
                                </div>
                                <p className="academic-institute">Vivekananda Vidyalaya Matric Higher Secondary School</p>
                                <div className="academic-score-tag">Passed (All Pass)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
