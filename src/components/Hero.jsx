import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import Img from "../assets/anciya_professional_photo.jpeg";

const Hero = () => {
  const words = ["ANCIYA R", "Skilled Python Programmer"];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = deleting ? 80 : 150;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero-section" id="home">

      <div className="hero-content">

        <div className="hero-left">

          <p className="hello-text">Hello, I'm</p>

          <h1 className="hero-name">{text}</h1>

          <h2 className="hero-role">
            Full Stack Developer | Based in UAE
          </h2>

          <div className="hero-stats">

            <div
              className="stat-box"
              onClick={() => scrollToSection("projects")}
            >
              <h3>3</h3>
              <p>Completed Projects</p>
            </div>

            <div
              className="stat-box"
              onClick={() => scrollToSection("certifications")}
            >
              <h3>2</h3>
              <p>Completed Certifications</p>
            </div>

          </div>

          <div className="hero-buttons">

            <button
              className="talk-btn"
              onClick={() => scrollToSection("contact")}
            >
              Let's Talk
            </button>

            <button
              className="works-btn"
              onClick={() => scrollToSection("projects")}
            >
              My Works
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="hexagon">
            <img src={Img} alt="Professional Profile" />
          </div>

        </div>

      </div>

      {/* Divider */}

      <hr className="hero-divider" />

    </section>
  );
};

export default Hero;