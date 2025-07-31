import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { LuGithub } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import "./Projects.css";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const starsRef = useRef(null);

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

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const projectsData = [
        {
            id: 1,
            title: 'Tour & Travel Web App',
            description: [
                "A web application that helps users find and book holiday vacations effortlessly. It features a user-friendly interface to explore destinations, compare packages, and make bookings with ease.",
                "Technologies Used: React.js, HTML, CSS, JavaScript"
            ],
            live_demo: 'https://tourstravell.netlify.app/',
            github_link: 'https://github.com/karthikdokiparthi/Tour-Travells-Application',
            image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
            id: 2,
            title: 'E-commerce Website',
            description: [
                'A fully functional e-commerce website featuring product listings, a shopping cart, and a secure checkout process. Ensures responsiveness for multiple screen sizes.',
                'Technologies Used: HTML, CSS, JavaScript',
            ],
            live_demo: 'https://karthikdokiparthi.github.io/ShopEaseEcommerce/',
            github_link: 'https://github.com/karthikdokiparthi/ShopEaseEcommerce',
            image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
            id: 3,
            title: "Memory Matching Game",
            description: [
                "A fun and interactive memory card matching game where players flip cards to find matching pairs. The game tracks moves and time, providing an engaging user experience.",
                "Technologies Used: HTML, CSS, JavaScript"
            ],
            live_demo: "https://karthikdokiparthi.github.io/MemoryMatchingGame/",
            github_link: "https://github.com/karthikdokiparthi/MemoryMatchingGame",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 4,
            title: 'Book My Show Web App',
            description: [
                'A web application that replicates the Book My Show platform, allowing users to browse and select movie tickets. The project ensures responsiveness and a visually appealing UI.',
                'Technologies Used: HTML, CSS',
            ],
            live_demo: 'N/A',
            github_link: 'https://github.com/karthikdokiparthi/Book-My-Show-Web-App',
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
        },
        {
            id: 5,
            title: 'Foodie CLI App',
            description: [
                'A command-line-based food ordering system where users can browse restaurant menus, add items to orders, and manage restaurant data. Uses PostgreSQL for data persistence.',
                'Technologies Used: Java, PostgreSQL, Collections Framework',
            ],
            live_demo: 'N/A',
            github_link: 'https://github.com/karthikdokiparthi/foodile-cli-app',
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1081&q=80"
        },
        {
            id: 6,
            title: 'Voting System',
            description: [
                'A JavaFX-based voting system that ensures secure and fair elections. Features include user authentication, role-based access, and real-time vote tallying.',
                'Technologies Used: Java, JavaFX',
            ],
            live_demo: 'N/A',
            github_link: 'https://github.com/karthikdokiparthi/TopperWorld-Task3',
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            {/* Night sky background with stars */}
            <div className="night-sky" ref={starsRef}></div>

            {/* Shooting stars container */}
            <div className="shooting-stars">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="shooting-star"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${Math.random() * 2 + 1}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="section-header">
                <h2 className="project-title">My Projects</h2>
                <br />
                <p className="section-subtitle">A showcase of my best work and development skills</p>
            </div>

            <div className="swiper-container">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {projectsData.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="project-card" onClick={() => openModal(project)}>
                                <div className="card-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="card-overlay">
                                        <div className="overlay-content">
                                            <h3>{project.title}</h3>
                                            <div className="tech-tags">
                                                {project.description[1].replace('Technologies Used: ', '').split(', ').map((tech, i) => (
                                                    <span key={i}>{tech.trim()}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="project-links">
                                        <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                                            <LuGithub /> Code
                                        </a>
                                        {project.live_demo !== 'N/A' && (
                                            <a href={project.live_demo} target="_blank" rel="noopener noreferrer">
                                                <TbWorld /> Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {selectedProject && (
                <div className="project-modal">
                    <div className="modal-backdrop" onClick={closeModal}></div>
                    <div className="modal-container">
                        <div className="modal-header">
                            <h3>{selectedProject.title}</h3>
                            <button className="close-btn" onClick={closeModal}>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-image">
                                <img src={selectedProject.image} alt={selectedProject.title} />
                            </div>
                            <div className="modal-content">
                                {selectedProject.description.map((para, index) => (
                                    <p key={index}>{para}</p>
                                ))}
                                <div className="modal-tech">
                                    <h4>Technologies:</h4>
                                    <div className="tech-badges">
                                        {selectedProject.description[1].replace('Technologies Used: ', '').split(', ').map((tech, i) => (
                                            <span key={i}>{tech.trim()}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a href={selectedProject.github_link} target="_blank" rel="noopener noreferrer" className="modal-link">
                                <LuGithub /> View Code
                            </a>
                            {selectedProject.live_demo !== 'N/A' && (
                                <a href={selectedProject.live_demo} target="_blank" rel="noopener noreferrer" className="modal-link">
                                    <TbWorld /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;