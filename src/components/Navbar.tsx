import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function Navbar() {
  //TODO: fix font
  //TODO: add animation on hover
  return (
    <>
      <div className="text-2xl text-secondary-color block sticky">
        <HashLink smooth to="/#Projects">
          Projects
        </HashLink>
        <HashLink smooth to="/#About">
          About
        </HashLink>
        <Link to="/Contact">Contact</Link>
      </div>
    </>
  );
}
