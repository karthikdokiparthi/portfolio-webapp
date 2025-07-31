import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
    const [activeSkill, setActiveSkill] = useState(null);

    const skillsData = [
        {
            name: 'HTML',
            image: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
            description: 'The foundation of all web content. I craft semantic structure that powers the digital universe.'
        },
        {
            name: 'CSS',
            image: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
            description: 'Weaving dimensional styles that bend reality. Creating responsive designs that work across all multiverses.'
        },
        {
            name: 'JavaScript',
            image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
            description: 'The arcane language of interactivity. Manipulating reality through code incantations.'
        },
        {
            name: 'React',
            image: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
            description: 'Mastering component-based reality manipulation. Building UI dimensions through reusable magic.'
        },
        {
            name: 'Java',
            image: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
            description: 'The ancient language of enterprise sorcery. Crafting powerful backend enchantments.'
        },
        {
            name: 'Spring Boot',
            image: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
            description: 'Conjuring RESTful portals and microservice dimensions with mystical efficiency.'
        },
        {
            name: 'MySQL',
            image: 'https://pngimg.com/uploads/mysql/mysql_PNG1.png',
            description: 'Organizing chaotic data into structured dimensions. Keeper of relational knowledge.'
        },
        {
            name: 'Git',
            image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3209316/git-icon-md.png',
            description: 'Master of time manipulation and version control. Preserving reality across all code timelines.'
        }
    ];

    const [stars, setStars] = useState([]);

    useEffect(() => {
        const newStars = [];
        for (let i = 0; i < 150; i++) {
            newStars.push({
                id: i,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                size: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.7 + 0.3,
                animationDelay: `${Math.random() * 5}s`
            });
        }
        setStars(newStars);
    }, []);

    return (
        <div className="skills-section" id="skills">
            <div className="star-field">
                {stars.map(star => (
                    <div
                        key={star.id}
                        className="star"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: star.size,
                            height: star.size,
                            opacity: star.opacity,
                            animationDelay: star.animationDelay
                        }}
                    ></div>
                ))}
            </div>

            <h2 className="title-header">Mystic Skills</h2>

            <div className="reality-container">
                <div className="strange-center">
                    <img
                        src="https://media.tenor.com/v-joYYQ4D4oAAAAi/doctor-strange-in-the-multiverse-of-madness-doctor-strange.gif"
                        alt="Doctor Strange"
                        className="strange-gif"
                    />

                    <div className={`skill-reveal ${activeSkill ? 'active' : ''}`}>
                        {activeSkill && (
                            <>
                                <img
                                    src={activeSkill.image}
                                    alt={activeSkill.name}
                                    className="revealed-skill"
                                />
                                <div className="skill-description">
                                    <h3>{activeSkill.name}</h3>
                                    <p>{activeSkill.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className="orbital-skills">
                    {skillsData.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`skill-orb ${activeSkill?.name === skill.name ? 'active' : ''}`}
                            style={{
                                '--angle': `${(360 / skillsData.length) * index}deg`,
                                '--rotation': `${-(360 / skillsData.length) * index}deg`
                            }}
                            onMouseEnter={() => setActiveSkill(skill)}
                            onMouseLeave={() => setActiveSkill(null)}
                        >
                            <div className="skill-icon-container">
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="skill-icon"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="spell-text">
                <p>Hover over the mystic artifacts to reveal their powers</p>
            </div>
        </div>
    );
};

export default Skills;