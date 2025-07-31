import React, { useEffect, useState, useRef } from 'react';
import "./AboutMe.css";
import portfolioImage from '../assets/portfolioImage.jpg';

const AboutMe = () => {
    const [photoLoaded, setPhotoLoaded] = useState(false);
    const containerRef = useRef(null);
    const starsRef = useRef([]);

    useEffect(() => {
        const container = containerRef.current;
        const starCount = 200;

        // Clear any existing stars
        starsRef.current.forEach(star => star.remove());
        starsRef.current = [];

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'about-star'; // Unique class name

            // Random star properties
            const size = Math.random() * 2 + 1;
            const opacity = Math.random() * 0.5 + 0.3;
            const animationDuration = Math.random() * 5 + 3;
            const delay = Math.random() * 5;

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.opacity = opacity;
            star.style.animationDuration = `${animationDuration}s`;
            star.style.animationDelay = `${delay}s`;

            container.appendChild(star);
            starsRef.current.push(star); // Store reference
        }

        return () => {
            // Only remove stars we created
            starsRef.current.forEach(star => star.remove());
            starsRef.current = [];
        };
    }, []);

    return (
        <div className="about-container" id='about' ref={containerRef}>
            <div className="about-content">
                <div className="header-section">
                    <h1 className="about-title">About Me</h1>
                </div>

                <div className="profile-section">
                    <div className="profile-photo-frame">
                        {photoLoaded ? null : (
                            <div className="photo-placeholder">
                                <i className="fas fa-user"></i>
                            </div>
                        )}
                        <img
                            src={portfolioImage}
                            alt="Karthik Dokiparthi"
                            className="profile-photo"
                            onLoad={() => setPhotoLoaded(true)}
                        />
                        <div className="photo-border"></div>
                        <div className="photo-corner top-left"></div>
                        <div className="photo-corner top-right"></div>
                        <div className="photo-corner bottom-left"></div>
                        <div className="photo-corner bottom-right"></div>
                    </div>

                    <div className="profile-details">
                        <h2 className="intro">
                            Hi, I'm <span className="highlight">Karthik Dokiparthi</span>
                        </h2>
                        <h3 className="title">Passionate Full Stack Java Developer</h3>
                        <h4 className="subtitle">Specializing in Scalable Web Solutions</h4>

                        <p className="description">
                            I design and build robust full-stack applications using Java, Spring Boot, React,
                            and optimized PostgreSQL/MySQL databases. Proven expertise in developing secure
                            RESTful APIs and cloud-native solutions on AWS.
                        </p>
                    </div>
                </div>

                <div className="proposition-section">
                    <h3 className="proposition-title">Technical Expertise</h3>
                    <div className="expertise-grid">
                        <div className="expertise-card">
                            <div className="expertise-icon">
                                <i className="fas fa-server"></i>
                            </div>
                            <h4>Backend Engineering</h4>
                            <p>High-performance Spring Boot systems achieving 40%+ latency reduction</p>
                        </div>
                        <div className="expertise-card">
                            <div className="expertise-icon">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <h4>Frontend Development</h4>
                            <p>Responsive React interfaces with state-driven UX</p>
                        </div>
                        <div className="expertise-card">
                            <div className="expertise-icon">
                                <i className="fas fa-database"></i>
                            </div>
                            <h4>Database Optimization</h4>
                            <p>PostgreSQL/MySQL performance tuning and migrations</p>
                        </div>
                        <div className="expertise-card">
                            <div className="expertise-icon">
                                <i className="fas fa-cloud"></i>
                            </div>
                            <h4>Cloud Solutions</h4>
                            <p>AWS infrastructure with automated CI/CD pipelines</p>
                        </div>
                    </div>
                </div>

                <div className="closing-section">
                    <p>
                        Continuously advancing skills through certifications and open-source contributions.
                        Driven by clean code principles to transform complex requirements into maintainable solutions.
                    </p>
                    <div className="availability">
                        <div className="pulse-dot"></div>
                        <div>Open to challenging full-stack opportunities and technical collaborations</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;