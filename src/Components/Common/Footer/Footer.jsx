import "./Footer.scss";
import {
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <a href="https://www.google.com">
          <FaYoutube size={29} />
        </a>
        <a href="https://www.google.com">
          <FaInstagram size={29} />
        </a>
        <a href="https://www.google.com">
          <FaGithub size={29} />
        </a>
        <a href="https://www.google.com">
          <FaLinkedin size={29} />
        </a>
        <a href="https://www.google.com">
          <FaDiscord size={29} />
        </a>
      </div>
      <p>Copyright 2022. All Rights Reserved</p>
      <div className="logo">
        <img src="./logo-transparent.png" alt="logo" />
        <h4>Starify</h4>
      </div>
      <p>Email: contact@starify.tech</p>
    </div>
  );
};

export default Footer;
