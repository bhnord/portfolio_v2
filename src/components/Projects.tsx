import Project from "./Project";
import img from "../assets/face.jpg";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Projects() {
  const description1 =
    "I created a custom chatroom experience using JavaScript (Node.js and Express), HTML, CSS, and NGINX. \
    I implemented a game-like chatroom inspired by PictoChat where users can enter and move around with a \
    custom-made character, character animations, and environment. Users are able to send messages, and drawings \
    to other users in the chatroom. I used a Node.js / Express server to host multiple sockets and to hold the game logic and character \
    positions similarly to online multiplayer games. I used NGINX to host a reverse proxy from my Raspberry Pi and provide access \
    to the chatroom to users on my local network";
  const description2 =
    "I developed a website using the Spotify API, React, Typescript, Node.js, Express, and Linux. I created a \
    custom website to keep track of my favorite songs and playlists, as well as control a Raspberry Pi remotely to \
    play Spotify on a speaker. I pulled information about my account through the Spotify API and organized it to \
    show my most recent listens, my top songs, and my playlists. It is hosted through a NGINX reverse proxy to \
    enable users on the local network to see the site. A daemon runs on the same Raspberry Pi to control Spotify \
    Playback through a connected speaker.";
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

  const title1 = "Chatrooms";
  const title2 = "Spotify Player";
  const title3 = "Blockchain Feasibility Assessment";
  const title4 = "Custom Programming Language";

  const skills1 = ["JavaScript", "Node.js", "Express.js", "Web"];
  const skills2 = ["React", "Node.js", "Express.js", "Linux"];
  const skills3 = ["Research"];
  const skills4 = ["C++", "Assembly", "Linux", "Clang"];

  const img1 = img;
  const img2 = img;
  const img3 = img;
  const img4 = img;

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const options = { amount: 0.6 };
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
      skills: skills1,
      ref: ref1,
    },
    {
      num: "02.",
      title: title2,
      description: description2,
      img: img2,
      skills: skills2,
      ref: ref2,
    },
    {
      num: "03.",
      title: title3,
      description: description3,
      img: img3,
      skills: skills3,
      ref: ref3,
    },
    {
      num: "04.",
      title: title4,
      description: description4,
      img: img4,
      skills: skills4,
      ref: ref4,
    },
  ];

  //TODO: add scrolling animations
  //TODO: add more projects + descriptions

  const [project, setProject] = useState("01.");

  useEffect(() => {
    if (isInView1) {
      setProject("1.");
    }
  }, [isInView1]);
  useEffect(() => {
    if (isInView2) {
      setProject("2.");
    }
  }, [isInView2]);

  useEffect(() => {
    if (isInView3) {
      setProject("3.");
    }
  }, [isInView3]);

  useEffect(() => {
    if (isInView4) {
      setProject("4.");
    }
  }, [isInView4]);

  return (
    <>
      <h2 id="Projects" className="text-8xl mb-[100px] ">
        Projects
      </h2>
      <div className="grid-gap grid grid-cols-12 items-start">
        <h1 className="text-[14vw] sticky top-8 col-span-3 self-start leading-[.8] ml-[5rem]">
          {project}
        </h1>

        <div className="col-span-9 ">
          {projects.map(({ ref, title, description, img, skills }) => (
            <motion.div ref={ref} key={title}>
              <Project
                key={title}
                img={img}
                title={title}
                description={description}
                skills={skills}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
