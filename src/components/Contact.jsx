import React, { useState } from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const initialFormData = {
    reason: "Offering Job",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "🇮🇳 +91 India",
    organization: "",
    description: "",
    "bot-field": "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const encodeFormData = (data) => {
    return Object.keys(data)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitStatus("");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodeFormData({
          "form-name": "portfolio-contact",
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitStatus("success");
      setSubmitMessage(
        "Thank you! Your message has been sent successfully."
      );

      setFormData(initialFormData);
    } catch (error) {
      console.error("Contact form error:", error);

      setSubmitStatus("error");
      setSubmitMessage(
        "Sorry, your message could not be sent. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
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
            Have a job opportunity, freelance work, or project idea? Send me a
            message or connect with me directly.
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

          <form
            name="portfolio-contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="form-name"
              value="portfolio-contact"
            />

            {/* Spam protection field */}

            <p style={{ display: "none" }}>
              <label>
                Do not fill this field:
                <input
                  name="bot-field"
                  value={formData["bot-field"]}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </label>
            </p>

            <label htmlFor="reason">Why do you want to contact me?</label>

            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            >
              <option value="Offering Job">Offering Job</option>
              <option value="Freelance Project">Freelance Project</option>
              <option value="Internship">Internship</option>
              <option value="Business Inquiry">Business Inquiry</option>
              <option value="General Question">General Question</option>
            </select>

            <div className="row">
              <div className="input-group">
                <label htmlFor="firstName">First Name</label>

                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="lastName">Last Name</label>

                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="xyz@abc.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone Number</label>

            <div className="phone-row">
              <select
                aria-label="Country code"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="🇮🇳 +91 India">🇮🇳 +91 India</option>
                <option value="🇦🇪 +971 UAE">🇦🇪 +971 UAE</option>
                <option value="🇺🇸 +1 USA">🇺🇸 +1 USA</option>
                <option value="🇨🇦 +1 Canada">🇨🇦 +1 Canada</option>
                <option value="🇬🇧 +44 UK">🇬🇧 +44 UK</option>
              </select>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <label htmlFor="organization">Organization Details</label>

            <input
              id="organization"
              type="text"
              name="organization"
              placeholder="Organization name, location"
              value={formData.organization}
              onChange={handleChange}
            />

            <label htmlFor="description">Describe</label>

            <textarea
              id="description"
              name="description"
              rows="5"
              placeholder="Write your message..."
              value={formData.description}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="contact-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>

            {submitMessage && (
              <p
                className={`contact-form-message ${submitStatus}`}
                role="status"
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;