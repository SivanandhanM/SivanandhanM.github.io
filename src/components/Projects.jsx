import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured <span className="accent">Projects</span></h2>
                <div className="projects-grid">
                    {/* Project 1 */}
                    <div className="project-card">
                        <div className="project-content">
                            <h3>LEDZE+ – Enterprise ERP Platform</h3>
                            <p>A comprehensive ERP platform to streamline operations across procurement, sales,
                                inventory, and CBS accounting. Includes multi-level approvals, audit trails, and complete
                                transaction traceability.</p>
                            <div className="tech-stack">
                                <span>ERP Platform</span>
                                <span>Procurement & Sales</span>
                                <span>CBS Accounting</span>
                            </div>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="project-card">
                        <div className="project-content">
                            <h3>Blood Donation Website</h3>
                            <p>A responsive web application to connect blood donors and recipients. Includes donor
                                registration and request management features for smooth coordination.</p>
                            <div className="tech-stack">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                            </div>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="project-card">
                        <div className="project-content">
                            <h3>Dyeing Company E-Commerce Platform</h3>
                            <p>A full-featured web platform to digitalize order management for a dyeing company.
                                Includes online ordering, colour shade selection, cost estimation, and secure payment
                                modules.</p>
                            <div className="tech-stack">
                                <span>Web Platform</span>
                                <span>Order Management</span>
                                <span>Payments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

