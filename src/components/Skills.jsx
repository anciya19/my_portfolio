import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      date: "Core Skills",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6)",
        "React.js",
        "MUI",
      ],
    },
    {
      title: "Backend Development",
      date: "Programming",
      technologies: [
        "Python",
        "Django",
        "REST APIs",
        "FastAPI",
      ],
    },
    {
      title: "Database",
      date: "Storage",
      technologies: [
        "SQL",
        "MongoDB"
      ],
    },
    {
      title: "Tools & Others",
      date: "Development",
      technologies: [
        "Git",
        "GitHub",
        "VS Code",        
        "Google Cloud Platform",
      ],
    },
  ];

  const education = [
    {
      title: "Bachelor of Engineering",
      place: "Rohini College of Engineering & Technology",
      year: "2019 - 2023",
      description:
        "Electronics & Communication Engineering\nCGPA : 8.72 / 10",
    },
    {
      title: "Higher Secondary School Certificate",
      place: "LMPC Higher Secondary School",
      year: "2017 - 2019",
      description: "Percentage : 71%",
    },
    {
      title: "Secondary School Leaving Certificate",
      place: "Little Flower High School",
      year: "2016 - 2017",
      description: "Percentage : 91%",
    },
  ];

  return (
    <section className="career-container" id="skills">
      <h1 className="section-title">SKILLS</h1>

      <div className="timeline">
        {skills.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="content">
              <span className="card-tag">{item.date}</span>

              <h2>{item.title}</h2>

              <ul>
                {item.technologies.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h1 className="section-title education-title">EDUCATION</h1>

      <div className="timeline">
        {education.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="content">
              <span className="card-tag">{item.year}</span>

              <h2>{item.title}</h2>

              <h4>{item.place}</h4>

              <p style={{ whiteSpace: "pre-line" }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Skills;