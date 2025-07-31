import React, { useEffect, useRef } from 'react';
import './StarsBackground.css';

const StarsBackground = ({ count = 150, withShootingStars = false }) => {
    const starsRef = useRef(null);
    const shootingStarsRef = useRef(null);

    useEffect(() => {
        const container = starsRef.current;
        if (!container) return;

        // Clear any existing stars
        container.innerHTML = '';

        // Create stars
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'star';

            // Random properties
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const size = Math.random() * 1.5 + 0.5;
            const opacity = Math.random() * 0.7 + 0.3;
            const duration = Math.random() * 5 + 3;
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

        if (withShootingStars) {
            const shootingContainer = shootingStarsRef.current;
            if (!shootingContainer) return;

            shootingContainer.innerHTML = '';

            // Create shooting stars
            for (let i = 0; i < 5; i++) {
                const star = document.createElement('div');
                star.className = 'shooting-star';

                const startY = Math.random() * 100;
                const startX = Math.random() * 100;
                const width = Math.random() * 100 + 50;
                const duration = Math.random() * 5 + 3;
                const delay = Math.random() * 10;

                star.style.cssText = `
          top: ${startY}%;
          left: ${startX}%;
          width: ${width}px;
          animation-duration: ${duration}s;
          animation-delay: ${delay}s;
        `;

                shootingContainer.appendChild(star);
            }
        }

        return () => {
            container.innerHTML = '';
            if (withShootingStars && shootingStarsRef.current) {
                shootingStarsRef.current.innerHTML = '';
            }
        };
    }, [count, withShootingStars]);

    return (
        <>
            <div className="stars-container" ref={starsRef}></div>
            {withShootingStars && <div className="shooting-stars" ref={shootingStarsRef}></div>}
        </>
    );
};

export default StarsBackground;