"use client";

import React, { useEffect, useRef } from "react";
import styles from "./AnimatedCircles.module.css";

const AnimatedCircles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const container = containerRef.current;

      const icons = [
        "https://res.cloudinary.com/dx9xdlbae/image/upload/v1732722621/Icons/xo16zjwqgwefu8srch8t.svg",
        "https://res.cloudinary.com/dx9xdlbae/image/upload/v1732722621/Icons/qx5zq2xcsww3710k81ri.svg",
        "https://res.cloudinary.com/dx9xdlbae/image/upload/v1732722621/Icons/unmjdokiugvysxqywhgc.svg",
      ];

      // Generate random circles
      const createRandomCircle = (icon, index) => {
        const circle = document.createElement("img");
        circle.src = icon;
        circle.alt = `Circle ${index + 1}`;

        // Assign random size and position
        const size = Math.random() * (50 - 20) + 20; // Random size between 20px and 50px
        const top = Math.random() * 80; // Random top position limited to 80% to prevent touching the bottom
        const left = Math.random() * 100; // Random left position
        const duration = Math.random() * (16 - 8) + 8; // Random animation duration between 8s and 16s

        // Assign random properties for motion
        circle.style.setProperty("--randomX1", Math.random().toFixed(2));
        circle.style.setProperty("--randomY1", Math.random().toFixed(2));
        circle.style.setProperty("--randomX2", Math.random().toFixed(2));
        circle.style.setProperty("--randomY2", Math.random().toFixed(2));
        circle.style.setProperty("--randomX3", Math.random().toFixed(2));

        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.top = `${top}%`;
        circle.style.left = `${left}%`;
        circle.style.animationDuration = `${duration}s`;
        circle.className = styles.circle;

        container.appendChild(circle);
      };


      // Append circles to container
      icons.forEach((icon, index) => {
        for (let i = 0; i < 3; i++) { // Generate 3 circles per icon
          createRandomCircle(icon, index + i);
        }
      });

      // Cleanup on unmount
      return () => {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      };
    }
  }, []);

  return <div ref={containerRef} className={styles.circleContainer}></div>;
};

export default AnimatedCircles;
