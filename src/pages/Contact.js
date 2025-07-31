import React, { useRef, useEffect } from 'react';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    const starsRef = useRef(null);
    const shootingStarsRef = useRef(null);

    // Create stars effect
    useEffect(() => {
        const container = starsRef.current;
        if (!container) return;

        // Clear any existing stars
        container.innerHTML = '';

        // Create stars
        const starCount = 150;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';

            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;

            // Random size (0.5px to 2px)
            const size = Math.random() * 1.5 + 0.5;

            // Random opacity (0.3 to 1)
            const opacity = Math.random() * 0.7 + 0.3;

            // Random animation duration (3s to 8s)
            const duration = Math.random() * 5 + 3;

            // Random delay (0 to 5s)
            const delay = Math.random() * 5;

            star.style.cssText = `
                left: ${posX}%;
                top: ${posY}%;
                width: ${size}px;
                height: ${size}px;
                opacity: ${opacity};
                animation-duration: ${duration}s;
                animation-delay: ${delay}s;
            `;

            container.appendChild(star);
        }
    }, []);

    // Create shooting stars effect
    useEffect(() => {
        const container = shootingStarsRef.current;
        if (!container) return;

        // Clear existing shooting stars
        container.innerHTML = '';

        // Create shooting stars
        const shootingStarCount = 5;
        for (let i = 0; i < shootingStarCount; i++) {
            const star = document.createElement('div');
            star.className = 'shooting-star';

            // Random position
            const startY = Math.random() * 100;
            const startX = Math.random() * 100;

            // Random width (50px to 150px)
            const width = Math.random() * 100 + 50;

            // Random duration (3s to 8s)
            const duration = Math.random() * 5 + 3;

            // Random delay (0 to 10s)
            const delay = Math.random() * 10;

            star.style.cssText = `
                top: ${startY}%;
                left: ${startX}%;
                width: ${width}px;
                animation-duration: ${duration}s;
                animation-delay: ${delay}s;
            `;

            container.appendChild(star);
        }
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        formData.append("access_key", "a94843b5-0379-4239-97a3-a5b08277ede3");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            const data = await response.json();

            if (data.success) {
                form.reset();
                alert("Message sent successfully! I'll get back to you soon.");
            } else {
                alert("There was an error sending your message. Please try again.");
            }
        } catch (error) {
            alert("Network error. Please check your connection and try again.");
        }
    };

    return (
        <section id="contact" className="contact-section">
            {/* Starry background */}
            <div className="stars-container" ref={starsRef}></div>
            <div className="shooting-stars" ref={shootingStarsRef}></div>
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="contact-title">
                        Get In Touch
                    </h2>
                    <br />
                    <p className="section-subtitle">
                        Have a project in mind or want to connect? Drop me a message!
                        <span className="underline"></span>
                    </p>
                </div>

                <div className="contact-card">
                    <form onSubmit={onSubmit} className="contact-form">
                        <div className="form-group floating">
                            <FiUser className="input-icon" />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="name">Your Name</label>
                            <div className="underline-animation"></div>
                        </div>

                        <div className="form-group floating">
                            <FiMail className="input-icon" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="email">Your Email</label>
                            <div className="underline-animation"></div>
                        </div>

                        <div className="form-group floating">
                            <FiMessageSquare className="input-icon" />
                            <textarea
                                id="message"
                                name="message"
                                placeholder=" "
                                rows="5"
                                required
                            ></textarea>
                            <label htmlFor="message">Your Message</label>
                            <div className="underline-animation"></div>
                        </div>

                        <button type="submit" className="submit-button">
                            <span>Send Message</span>
                            <FiSend className="send-icon" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;