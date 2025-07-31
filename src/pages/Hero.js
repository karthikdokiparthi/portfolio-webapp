import React, { useState, useEffect } from 'react';
import './Hero.css';
import StarsBackground from './StarsBackground';

const Hero = () => {
    const [showSpiderMan, setShowSpiderMan] = useState(true);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const spiderTimer = setTimeout(() => {
            setShowSpiderMan(false);
        }, 3200);

        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 3300);

        return () => {
            clearTimeout(spiderTimer);
            clearTimeout(textTimer);
        };
    }, []);

    return (
        <section id="home" className="hero-container">
            <StarsBackground count={150} />

            {/* Spider-Man animation */}
            {showSpiderMan && (
                <div className="spider-man-container">
                    <div className="spider-man">
                        <img
                            src="https://media.tenor.com/fOD0TBLKQg8AAAAi/spider-man-no-way-home-marvel-studios.gif"
                            alt="Spider-Man"
                        />
                    </div>
                </div>
            )}

            {/* Text animation */}
            {showText && (
                <div className="hero-text-container">
                    <h1 className="hero-name">Karthik Dokiparthi</h1>
                    <h2 className="hero-title">Full Stack Java Developer</h2>
                    <p className="hero-specialization">
                        I craft high-performance, scalable web applications with a strong focus on clean code, intuitive user experiences, and modern design principles.</p>
                    <div className="hero-cta">
                        <button className="btn" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                            View My Work
                        </button>
                        <button className="btn btn-outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                            Contact Me
                        </button>
                    </div>
                </div>
            )}

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <div className="scroll-downs">
                    <div className="mousey">
                        <div className="scroller"></div>
                    </div>
                    <span>Scroll down</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;