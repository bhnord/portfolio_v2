import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { AnimatePresence, motion } from "framer-motion";

//TODO: maybe on big
export default function Sidebar({ showButton }: { showButton: boolean }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <AnimatePresence>
        {open && (
          <div>
            <div className="fixed top-0 left-0 h-screen w-screen justify-end z-40 bg-black opacity-70"></div>
            <motion.div
              initial={{ x: "50vw" }}
              animate={{ x: "0" }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.8,
              }}
              className={
                "flex flex-col md:w-[35vw] w-[50vw] items-center justify-center min-h-screen h-screen fixed right-0 top-0 bg-black z-50 "
              }
            >
              <nav className="md:text-5xl text-[6vw] flex flex-col gap-8">
                <div className="relative group w-fit md:mb-12 md:pb-3">
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
                <div className="relative group w-fit md:mb-12 md:pb-3">
                  <HashLink smooth to="/#Projects" onClick={toggleOpen}>
                    Projects
                  </HashLink>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full duration-500"></span>
                </div>
                <div className="relative group w-fit md:mb-12 md:pb-3">
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
                <div className="relative group w-fit md:pb-3">
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
      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={toggleOpen}
            className="rounded-full m-5 md:text-3xl text-2xl aspect-square fixed top-0 right-0 z-50 "
            initial={{ scale: "0%" }}
            animate={{ scale: "100%" }}
            exit={{ scale: "0%" }}
            transition={{ duration: 0.6 }}
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
