import { useRef } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function App() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "80px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "80%"]);
  return (
    <>
      <div className="w-screen">
        <img width={100} src={logo} className="absolute" />
        <div className="absolute top-10 right-10 text-right">
          <Navbar />
        </div>
        <div ref={scrollRef} className="h-[200vh] mb-[-100vh]">
          <motion.div
            style={{ translateY: y, opacity: opacity, scale: scale }}
            className="z-0 sticky top-0"
            viewport={{ root: scrollRef }}
          >
            <Landing />
          </motion.div>
        </div>
        <div className="relative bg-black z-10 rounded-t-3xl">
          <Projects />
        </div>
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
