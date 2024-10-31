import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="contact-section">
      <h2 className="header-style">Contact Me</h2>
      <div className="body-style">
        <div className="contacts">
          <div className="social-links mb-4">
            <a href="https://www.linkedin.com/in/username">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/username">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/username">
              <FaFacebook />
            </a>
            <a href="mailto:joeschmoe@gmail.com">
              <MdOutlineEmail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
