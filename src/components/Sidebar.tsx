import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { AnimatePresence, motion } from "framer-motion";

//TODO: maybe on big
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <AnimatePresence>
        {open && (
          <div>
            <div className="fixed top-0 left-0 h-screen w-screen justify-end z-40 bg-black opacity-15"></div>
            <motion.div
              initial={{ x: "50vw" }}
              animate={{ x: "0" }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.8,
              }}
              className={
                "flex flex-col w-[35vw] items-center justify-center min-h-screen h-screen fixed right-0 bg-black z-50 "
              }
            >
              <nav className="text-6xl flex flex-col gap-8">
                <div className="relative group w-fit">
                  <HashLink
                    smooth
                    to="/#top"
                    className=" transition-all "
                    onClick={toggleOpen}
                  >
                    Home
                  </HashLink>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full duration-500"></span>
                </div>
                <div className="relative group w-fit">
                  <HashLink smooth to="/#Projects" onClick={toggleOpen}>
                    Projects
                  </HashLink>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full duration-500"></span>
                </div>
                <div className="relative group w-fit">
                  <HashLink
                    smooth
                    to="/#About"
                    className=" transition-all "
                    onClick={toggleOpen}
                  >
                    About
                  </HashLink>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full duration-500"></span>
                </div>
                <div className="relative group w-fit">
                  <Link to="/Contact" onClick={toggleOpen}>
                    Contact
                  </Link>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full duration-500"></span>
                </div>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="fixed top-0 right-0 z-50 ">
        <button
          onClick={toggleOpen}
          className="rounded-full m-5 text-3xl aspect-square "
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>
    </>
  );
}
