import React from 'react';

const skillCategories = [
    {
        title: 'Programming',
        skills: [
            'Java',
            'Python',
            'C',
            'SQL',
            'OOP',
            'Data Structures & Algorithms'
        ]
    },
    {
        title: 'Web Development',
        skills: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'React.js (Basic)',
            'REST APIs',
            'JSON'
        ]
    },
    {
        title: 'Tools & Technologies',
        skills: [
            'Git',
            'GitHub',
            'VS Code',
            'Swagger / OpenAPI',
            'Postman',
            'OCR',
            'AI Concepts',
            'Prompt Engineering'
        ]
    },
    {
        title: 'Soft Skills',
        skills: [
            'Communication',
            'Teamwork',
            'Problem Solving',
            'Adaptability',
            'Time Management'
        ]
    },
    {
        title: 'Areas of Interest',
        skills: [
            'DBMS',
            'UI/UX Design',
            'Web Development',
            'ERP Systems',
            'API Integration',
            'Artificial Intelligence'
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">My <span className="accent">Skills</span></h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div className="skill-category" key={index}>
                            <h3>{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, sIndex) => (
                                    <span key={sIndex}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

