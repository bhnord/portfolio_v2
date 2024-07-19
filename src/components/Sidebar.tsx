import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

//TODO: maybe on hover make button get big
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      {open ? (
        <div>
          <div className="fixed top-0 left-0 h-screen w-screen justify-end z-40 bg-white opacity-15"></div>
          <div className="flex flex-col items-center justify-center min-h-screen h-screen w-[75vw] fixed right-0 bg-black z-50 transition-opacity ">
            <div className="fixed top-0 right-0">
              <button
                onClick={toggleOpen}
                className="bg-white text-black rounded-full w-16 h-16 m-5"
              >
                <FontAwesomeIcon icon={faXmark} className="text-3xl" />
              </button>
            </div>
            <nav className="text-6xl flex flex-col gap-8">
              <Link to="/">Home</Link>
              <Link to="/">Projects</Link>
              <Link to="/#About">About</Link>
              <Link to="/Contact">Contact</Link>
            </nav>
          </div>
        </div>
      ) : (
        <div className="fixed top-0 right-0 z-40 ">
          <button
            onClick={toggleOpen}
            className="rounded-full m-5 text-3xl aspect-square "
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      )}
    </>
  );
}
