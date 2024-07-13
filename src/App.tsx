import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="w-screen">
        <div className="absolute top-10 right-10 text-right">
          <Navbar />
        </div>
        <Landing />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
