import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  //justify between
  return (
    <>
      <div className="align-middle pb-14">
        <div className="text-md md:text-2xl flex md:gap-24 gap-6 justify-center">
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
              href="https://www.linkedin.com/in/bernhard-nordemann/"
            >
              LinkedIn <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
