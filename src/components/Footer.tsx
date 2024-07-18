import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <h2>
        <Link to="/contact" className="text-9xl">
          Contact Me
        </Link>
      </h2>
      <div className="text-4xl flex">
        <span>
          <a target="_blank" href="https://github.com/bhnord">
            Github <FontAwesomeIcon icon={faGithub} />
          </a>
        </span>
        <span>
          <a
            target="_blank"
            href="https://https://www.linkedin.com/in/bernhard-nordemann/"
          >
            LinkedIn
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </span>
      </div>
    </>
  );
}
