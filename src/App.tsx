import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <>
      <div className="w-screen">
        <motion.div
          style={{ y }}
          className="absolute top-10 right-10 text-right"
        >
          <Navbar />
        </motion.div>
        <Landing />
        <Projects />

        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
