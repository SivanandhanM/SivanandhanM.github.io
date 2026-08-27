import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get In <span className="accent">Touch</span></h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <p>I'm currently opening to new opportunities. Whether you have a question or just want to say
                            hi, I'll try my best to get back to you!</p>
                        <a href="mailto:sivanandhanmanimuthu@gmail.com" className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>sivanandhanmanimuthu@gmail.com</span>
                        </a>
                        <div className="social-links">
                            <a href="https://github.com/SivanandhanM" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/sivanandhan-m-653443285" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
