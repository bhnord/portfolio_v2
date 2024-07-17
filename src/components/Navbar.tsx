import { Link } from "react-router-dom";
export default function Navbar() {
  //TODO: fix font
  //TODO: transform into diff mode
  //TODO: add smooth scroll
  //TODO: add animation on hover
  //TODO: fix click
  return (
    <>
      <div className="text-2xl text-secondary-color block sticky">
        <Link to="/#Projects">Projects</Link>
        <a href="/#About">About</a>
        <Link to="/Contact">Contact</Link>
      </div>
    </>
  );
}
