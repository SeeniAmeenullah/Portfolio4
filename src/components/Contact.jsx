/* eslint-disable react/jsx-no-target-blank */
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <SiGmail className="icon contact-icon email-icon" />
            <p>
              <a href="mailto:thilakramanie007@gmail.com">
                thilakramanie007@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <FaLinkedin className="icon contact-icon" />
            <p>
              <a
                href="https://www.linkedin.com/in/thilak-ramanie-153a27144/"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
