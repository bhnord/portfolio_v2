import { ReactLenis } from "lenis/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import About from "./components/About";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function App() {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-bg text-ink">
        <Nav />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Education />
          <About />
          <Connect />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;