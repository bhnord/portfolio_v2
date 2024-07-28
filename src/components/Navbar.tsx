import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function Navbar() {
  //TODO: fix font
  //TODO: add animation on hover
  return (
    <>
      <div className="text-2xl text-secondary-color block sticky">
        <div className="relative group w-fit">
          <HashLink smooth to="/#Projects">
            Projects
          </HashLink>
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full duration-500"></span>
        </div>
        <div className="relative group w-fit">
          <HashLink smooth to="/#About">
            About
          </HashLink>
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full duration-500"></span>
        </div>
        <div className="relative group w-fit">
          <Link to="/Contact">Contact</Link>
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full duration-500"></span>
        </div>
      </div>
    </>
  );
}
