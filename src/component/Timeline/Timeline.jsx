import React from "react";
import styles from "./Timeline.module.css";

const Timeline = () => {
  const timelineData = [
    {
       title: "Planning",
       description: "The Planning phase defines objectives, scope, timelines, resources, and risks to ensure successful project execution.",
       icon: "✏️"
    },
    {
        title: "Designing",
        description: "The Designing phase involves creating detailed layouts and prototypes. It ensures alignment with project goals and user needs.",
        icon: "🎨"
      },            
      {
        title: "Developing",
        description: "The Developing phase focuses on coding and building the project based on the design specifications. It involves testing, debugging, and ensuring functionality.",
        icon: "💻"
      },      
      {
        title: "Testing",
        description: "The Testing phase involves verifying the project's functionality, performance, and security. It includes identifying bugs and ensuring quality standards are met.",
        icon: "🧪"
      },
      {
        title: "Launch",
        description: "The Launch phase involves deploying the project to production. It ensures that everything is live and accessible to users, with final checks and monitoring.",
        icon: "🚀"
      }
      ,
  ];

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.topCircle}></div>
      <div className={styles.bottomCircle}></div>
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`${styles.timelineItem} ${
            index % 2 === 0 ? styles.left : styles.right
          }`}
        >
          <div className={styles.content}>

            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.description}>{item.description}</p>
          </div>
          <div className={styles.icon}>
            <span>{item.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
