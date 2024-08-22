import { useRef } from "react";
import "./App.css";
import { ReactLenis } from "lenis/react";
import About from "./components/About";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  //Home page shrink opacity animation
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "80px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "80%"]);

  //trigger animation when cant see homepage

  const ref = useRef(null);
  const sbButton = !useInView(ref, { margin: "500px" });

  return (
    <ReactLenis root>
      <div className="w-full">
        <Sidebar showButton={sbButton} />
        <div ref={ref} className="absolute top-10 right-10 text-right z-10">
          <Navbar />
        </div>
        <section ref={scrollRef} className="h-[200vh] mb-[-100vh]">
          <motion.div
            style={{ y, opacity, scale }}
            className="z-0 sticky top-0"
          >
            <Landing />
          </motion.div>
        </section>
        <section
          id="Projects"
          className="relative bg-[black] z-10 rounded-t-3xl"
        >
          <Projects />
        </section>
        <section id="About" className="mb-56">
          <About />
        </section>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
