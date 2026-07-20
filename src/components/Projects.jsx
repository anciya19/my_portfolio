import React from "react";
import "../styles/Project.css";

const Projects = () => {
  const projects = [
    {
      title: "Reservation Web Application",
      duration: "Website Development",
      description:
        "Developed a complete reservation management system using Django. The application supports secure user authentication, real-time booking, availability checking, booking updates, and cancellation management with a responsive user interface.",
      technologies: [
        "Python",
        "Django",
        "HTML5",
        "CSS3",
        "JavaScript",
        "SQL",
      ],
    },
    {
      title: "High Frequency Trading (HFT)",
      duration: "Machine Learning Project",
      description:
        "Built machine learning models using TensorFlow for stock market prediction. Processed large datasets using Python and MongoDB to improve trading decision making with high-speed data analysis.",
      technologies: [
        "Python",
        "TensorFlow",
        "Machine Learning",
        "MongoDB",
      ],
    },
    {
      title: "Android Mobile Application",
      duration: "Android Development",
      description:
        "Designed and developed an Android application using Kotlin with real-time data synchronization and cross-device compatibility. Focused on performance optimization and user-friendly interface.",
      technologies: [
        "Kotlin",
        "Android Studio",
        "Google Cloud Platform",
      ],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h1 className="projects-title">MY PROJECTS</h1>

        <p className="projects-subtitle">
          Some of the projects I have developed during my professional journey.
        </p>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${
              index % 2 === 0 ? "left-layout" : "right-layout"
            }`}
          >
            <div className="project-image">
              <div className="image-placeholder">
                <h2>{project.title}</h2>
              </div>
            </div>

            <div className="project-content">
              <span className="project-date">{project.duration}</span>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="projects-divider" />
    </section>
  );
};

export default Projects;