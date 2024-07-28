import Project from "./Project";
import img from "../assets/face.jpg";
import p2img from "../assets/images/projects/proj2.png";
import p3img from "../assets/images/projects/proj3.png";
import p4img from "../assets/images/projects/proj4.png";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const title4 = "Programming Language";

  const skills1 = ["JavaScript", "Node.js", "Express.js", "Web"];
  const skills2 = ["React", "Node.js", "Express.js", "Linux"];
  const skills3 = ["Research"];
  const skills4 = ["C++", "Assembly", "Linux", "Clang"];

  const link1 = "https://github.com/bhnord/chatrooms";
  const link2 = "https://github.com/bhnord/spotify-site-player";
  const link3 = "https://digital.wpi.edu/concern/student_works/cn69m767g";
  const link4 = "https://github.com/bhnord/CS4533";

  //TODO: Possibly embed video
  const img1 = img;
  const img2 = p2img;
  const img3 = p3img;
  const img4 = p4img;

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
      title: title1,
      description: description1,
      img: img1,
      skills: skills1,
      link: link1,
      ref: ref1,
    },
    {
      title: title2,
      description: description2,
      img: img2,
      skills: skills2,
      link: link2,
      ref: ref2,
    },
    {
      title: title3,
      description: description3,
      img: img3,
      skills: skills3,
      link: link3,
      ref: ref3,
    },
    {
      title: title4,
      description: description4,
      img: img4,
      skills: skills4,
      link: link4,
      ref: ref4,
    },
  ];

  //TODO: find a better way to do this

  useEffect(() => {
    if (isInView1) {
      const elem = document.getElementById("projects-numbering");
      if (elem) {
        elem.style.transform = "translateY(0%)";
      }
    }
  }, [isInView1]);
  useEffect(() => {
    if (isInView2) {
      const elem = document.getElementById("projects-numbering");
      if (elem) {
        elem.style.transform = "translateY(-100%)";
      }
    }
  }, [isInView2]);

  useEffect(() => {
    if (isInView3) {
      const elem = document.getElementById("projects-numbering");
      if (elem) {
        elem.style.transform = "translateY(-200%)";
      }
    }
  }, [isInView3]);

  useEffect(() => {
    if (isInView4) {
      const elem = document.getElementById("projects-numbering");
      if (elem) {
        elem.style.transform = "translateY(-300%)";
      }
    }
  }, [isInView4]);

  return (
    <>
      <div className="pt-14">
        <h2 className="text-8xl mb-[100px] text-center">Projects</h2>
        <div className="grid gap-9 grid-cols-12 items-start ">
          <div className="flex sticky top-9 text-[14vw] col-span-3 ml-[4vw] overflow-hidden font-block">
            <span className=" transition-all ease-in-out-cubic duration-1000">
              0
            </span>
            <div className="relative">
              <div
                id="projects-numbering"
                className="absolute h-full flex-col  transition-all ease-in-out-cubic duration-1000 "
              >
                <span className="inline-block">1.</span>
                <span className="inline-block">2.</span>
                <span className="inline-block">3.</span>
                <span className="inline-block">4.</span>
              </div>
            </div>
          </div>

          <div className="col-span-9 ">
            {projects.map(({ ref, title, description, img, skills, link }) => (
              <motion.div ref={ref} key={title}>
                <Project
                  key={title}
                  img={img}
                  title={title}
                  description={description}
                  skills={skills}
                  link={link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
