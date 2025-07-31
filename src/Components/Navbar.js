import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Check if user has scrolled down
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const navLinks = [
        { id: 'home', text: 'Home' },
        { id: 'about', text: 'About' },
        { id: 'skills', text: 'Skills' },
        { id: 'projects', text: 'Projects' },
        { id: 'contact', text: 'Contact' },
    ];

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="logo" onClick={() => scrollToSection('home')}>
                    <span className="logo-highlight">&lt;D</span>ev<span className="logo-highlight">/&gt;</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    className={activeSection === link.id ? 'active' : ''}
                                    onClick={() => scrollToSection(link.id)}
                                >
                                    {link.text}
                                    <span className="nav-indicator"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Resume Button */}
                <a
                    href="https://drive.google.com/file/d/1XHCzbieUHSsg64z6449xO0hyYScHxEQf/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn"
                >
                    Resume
                    <span className="resume-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                    </span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    className={`mobile-menu-btn ${isOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                <div className="mobile-nav-content">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    className={activeSection === link.id ? 'active' : ''}
                                    onClick={() => scrollToSection(link.id)}
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1XHCzbieUHSsg64z6449xO0hyYScHxEQf/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resume-mobile"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;