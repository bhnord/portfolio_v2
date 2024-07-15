import Project from "./Project";
import img from "../assets/face.jpg";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Projects() {
  const description1 = "";
  const description2 = "";
  const description3 =
    "I worked in a group of three and traveled to Hong Kong to provide recommendations \
    as to whether or not STC Hong Kong could improve their current certification processes \
    by using blockchain. We organized and conducted interviews with employees from Verizon, \
    DigiKerma, HerBChain, and within STC. We gave weekly presentations as to the progress of \
    our research, and compiled a white paper detailing our research, methods, and conclusions \
    that was published by Worcester Polytechnic Institute.";

  const description4 =
    "I developed a recursive programming language from scratch in C++. \
    I created a custom grammar and structure for the language and implemented \
    the front and back end of the compiler for the recursive language. I implemented variables, \
    procedures, functions, return statements, the ability to import C++ libraries and to link files. \
    I defined a context free grammar (CFG) and used ANTLER to create a parse tree for input files. I used \
    this parse tree along with LLVM to compile the tree into a runnable x86_64 assembly executable file.";

  const title1 = "title3";
  const title2 = "title2";
  const title3 = "Blockchain Feasibility Assessment";
  const title4 = "Custom Programming Language";

  const img1 = img;
  const img2 = img;
  const img3 = img;
  const img4 = img;

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const options = { margin: "-600px" };
  const isInView1 = useInView(ref1, options);
  const isInView2 = useInView(ref2, options);
  const isInView3 = useInView(ref3, options);
  const isInView4 = useInView(ref4, options);

  const projects = [
    {
      num: "01.",
      title: title1,
      description: description1,
      img: img1,
      ref: ref1,
    },
    {
      num: "02.",
      title: title2,
      description: description2,
      img: img2,
      ref: ref2,
    },
    {
      num: "03.",
      title: title3,
      description: description3,
      img: img3,
      ref: ref3,
    },
    {
      num: "04.",
      title: title4,
      description: description4,
      img: img4,
      ref: ref4,
    },
  ];

  //TODO: add scrolling animations
  //TODO: add more projects + descriptions
  //TODO: add link spots
  //
  const [project, setProject] = useState("01.");

  //TODO: clean up somehow
  //if bottom of div is in view?
  //add offset somehow? -- check framer-motion
  useEffect(() => {
    if (isInView1) {
      setProject("01.");
    }
  }, [isInView1]);
  useEffect(() => {
    if (isInView2) {
      setProject("02.");
    }
  }, [isInView2]);

  useEffect(() => {
    if (isInView3) {
      setProject("03.");
    }
  }, [isInView3]);

  useEffect(() => {
    if (isInView4) {
      setProject("04.");
    }
  }, [isInView4]);

  return (
    <>
      <h2 className="text-6xl mb-[100px] ">Projects</h2>
      <div className="w-screen">
        <h1 className="text-[15rem] sticky top-8 ml-14">{project}</h1>

        {projects.map(({ ref, title, description, img }) => (
          <motion.div ref={ref} key={title}>
            <Project
              key={title}
              img={img}
              title={title}
              description={description}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}
