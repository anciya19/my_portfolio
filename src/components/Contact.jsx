import React, { useState } from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    reason: "Offering Job",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "🇮🇳 +91 India",
    organization: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been received.");
    console.log(formData);
  };

  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/anciya-r/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <span className="small-title">Get In Touch</span>

          <h1>
            Let’s Build Something
            <br />
            Great Together
          </h1>

          <p>
            Have a job opportunity, freelance work, or project idea?
            Send me a message or connect with me directly.
          </p>

          <div className="connect-cards">

            {/* Gmail Card */}
            <a
              className="connect-card gmail-card"
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=anciyaanciya6@gmail.com&su=Software%20Engineer%20Opportunity&body=Hi%20Anciya,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="connect-icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email Me</h3>
                <p>Open Gmail Compose</p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <div
              className="connect-card linkedin-card"
              onClick={openLinkedIn}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  openLinkedIn();
                }
              }}
            >
              <div className="connect-icon">
                <FaLinkedin />
              </div>

              <div>
                <h3>LinkedIn</h3>
                <p>Visit My Profile</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-container">
          <h2>Send Message</h2>

          <form onSubmit={handleSubmit}>
            <label>Why you want to contact me?</label>

            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
            >
              <option>Offering Job</option>
              <option>Freelance Project</option>
              <option>Internship</option>
              <option>Business Inquiry</option>
              <option>General Question</option>
            </select>

            <div className="row">
              <div className="input-group">
                <label>First Name</label>

                <input
                  type="text"
                  name="firstName"
                  placeholder="Your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Last Name</label>

                <input
                  type="text"
                  name="lastName"
                  placeholder="Your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="xyz@abc.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>

            <div className="phone-row">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option>🇮🇳 +91 India</option>
                <option>🇦🇪 +971 UAE</option>
                <option>🇺🇸 +1 USA</option>
                <option>🇨🇦 +1 Canada</option>
                <option>🇬🇧 +44 UK</option>
              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <label>Organization Details</label>

            <input
              type="text"
              name="organization"
              placeholder="Organization name, location"
              value={formData.organization}
              onChange={handleChange}
            />

            <label>Describe</label>

            <textarea
              name="description"
              rows="5"
              placeholder="Write your message..."
              value={formData.description}
              onChange={handleChange}
            />

            <button type="submit" className="contact-submit-btn">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;