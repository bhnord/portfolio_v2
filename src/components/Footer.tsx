import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="text-4xl flex gap-12">
        <span>
          <Link to="/contact">Contact Me</Link>
        </span>

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
