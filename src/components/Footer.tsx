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
            <div className="relative group w-fit ">
              <Link to="/contact" className=" transition-all ">
                Contact Form
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full duration-500"></span>
            </div>
          </span>

          <span>
            <div className="relative group w-fit ">
              <a target="_blank" href="https://github.com/bhnord">
                Github <FontAwesomeIcon icon={faGithub} />
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full duration-500"></span>
            </div>
          </span>
          <span>
            <div className="relative group w-fit ">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/bernhard-nordemann/"
              >
                LinkedIn <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full duration-500"></span>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
