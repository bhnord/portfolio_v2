import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <h2>
        <Link to="/contact">Contact Me</Link>
      </h2>
      <a target="_blank" href="https://github.com/bhnord">
        Github <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        target="_blank"
        href="https://https://www.linkedin.com/in/bernhard-nordemann/"
      >
        LinkedIn
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </>
  );
}
