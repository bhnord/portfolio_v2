import Project from "./Project";
import img from "../assets/face.jpg";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Projects() {
  const description1 =
    "I worked in a group of three and traveled to Hong Kong to provide recommendations as to whether or not STC Hong Kong could improve their current certification processes by using blockchain.";
  const description2 = "";
  const description3 = "";
  const description4 = "";

  const title1 = "Blockchain Feasibility Assessment";
  const title2 = "title2";
  const title3 = "title3";
  const title4 = "title4";

  const img1 = img;
  const img2 = img;
  const img3 = img;
  const img4 = img;

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const isInView4 = useInView(ref4);

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
  const [project, setProject] = useState(1);

  //TODO: clean up somehow
  //if bottom of div is in view?
  //add offset somehow? -- check framer-motion
  useEffect(() => {
    if (isInView1) {
      setProject(1);
    }
  }, [isInView1]);
  useEffect(() => {
    if (isInView2) {
      setProject(2);
    }
  }, [isInView2]);

  useEffect(() => {
    if (isInView3) {
      setProject(3);
    }
  }, [isInView3]);

  useEffect(() => {
    if (isInView4) {
      setProject(4);
    }
  }, [isInView4]);

  return (
    <>
      <h2 className="text-6xl mb-[100px] ">Projects</h2>
      <div className="w-screen">
        <h3 className="text-9xl sticky top-8 ml-8">{project}</h3>

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
