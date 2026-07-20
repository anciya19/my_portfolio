import React from "react";
import "../styles/About.css";

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiDjango,
  SiMongodb,
  SiMysql,
  SiTensorflow,
} from "react-icons/si";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* LEFT */}
        <div className="skills-circle">

          <div className="center-circle">
            <h2>My Skills</h2>
          </div>

          <div className="icon icon1"><FaPython /></div>
          <div className="icon icon2"><FaReact /></div>
          <div className="icon icon3"><SiDjango /></div>
          <div className="icon icon4"><FaHtml5 /></div>
          <div className="icon icon5"><FaCss3Alt /></div>
          <div className="icon icon6"><FaJs /></div>
          <div className="icon icon7"><SiMysql /></div>
          <div className="icon icon8"><SiMongodb /></div>
          <div className="icon icon9"><FaGitAlt /></div>
          <div className="icon icon10"><SiTensorflow /></div>

        </div>

        {/* RIGHT */}
        <div className="about-right">

          <h2 className="section-title">
            About Me
          </h2>

          <p className="about-text">
            I'm <strong>Anciya R</strong>, a passionate Software Engineer with
            1.5+ years of experience in Python Development, Django,
            React.js, TensorFlow, Android Development and Full Stack Web
            Development.
            <br /><br />
            I enjoy developing scalable applications, creating responsive
            user interfaces, solving real-world problems, and continuously
            learning modern technologies.
          </p>

          <div className="about-info">

            <div className="info-left">
              <p><strong>Name :</strong> <span>Anciya R</span></p>
              <p><strong>Email :</strong> <span>anciyaanciya6gmail.com</span></p>
              <p><strong>Current Location :</strong> <span>Dubai, UAE</span></p>
            </div>

            <div className="info-right">
              <p><strong>Nationality :</strong> <span>India</span></p>
              <p><strong>Address :</strong> <span>Tamil Nadu, India</span></p>
            </div>

          </div>

        </div>

      </div>
      <hr className="about-divider" />
    </section>
  );
};

export default About;