import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  //justify between
  return (
    <>
      <div className="align-middle pb-14">
        <div className="text-xl md:text-2xl flex gap-12 justify-center">
          <span>
            <Link to="/contact">Contact Form</Link>
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
              LinkedIn <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
