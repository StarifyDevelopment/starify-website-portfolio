import "./Footer.scss";
import {
  FaYoutube,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <a
          href="https://www.youtube.com/channel/UC9CNEF2sprGUo2ldpRPs-CA"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube size={29} />
        </a>
        <a href="https://fb.starify.tech" target="_blank" rel="noreferrer">
          <FaFacebookSquare size={29} />
        </a>
        <a href="https://gh.starify.tech" target="_blank" rel="noreferrer">
          <FaGithub size={29} />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <FaLinkedin size={29} />
        </a>
        <a href="https://dc.starify.tech" target="_blank" rel="noreferrer">
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
