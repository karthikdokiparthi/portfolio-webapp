import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import ToolTip from '../components/ToolTip';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3 className="footer-title">Karthik Dokiparthi</h3>
                        <p className="footer-subtitle">Full Stack Developer | UI/UX Enthusiast</p>
                        <p className="footer-description">
                            Passionate about building scalable web applications and creating seamless user experiences.
                        </p>

                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-heading">
                            <FiMail className="footer-icon" />
                            Contact Me
                        </h4>
                        <ul className="contact-info">
                            <li>
                                <FiMail />
                                <a href="mailto:dokiparthikarthik@gmail.com">dokiparthikarthik@gmail.com</a>
                            </li>
                            <li>
                                <FiPhone />
                                <a href="tel:+918464911426">+91 8464911426</a>
                            </li>
                        </ul>
                        <div className="footer-social">
                            <ToolTip />
                        </div>
                    </div>
                </div>

                <div className="footer-divider">
                    <div className="divider-line"></div>
                </div>

                <div className="footer-copyright">
                    <p>
                        &copy; {new Date().getFullYear()} Karthik Dokiparthi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;