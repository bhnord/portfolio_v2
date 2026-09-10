import { motion } from "framer-motion";
import p1img from "../assets/images/projects/proj1.png";
import p2img from "../assets/images/projects/proj2.png";
import p3img from "../assets/images/projects/proj3.png";
import p4img from "../assets/images/projects/proj4.png";

const projects = [
  {
    title: "Chatrooms",
    tag: "01",
    description:
      "A PictoChat-inspired multiplayer chatroom you can roam around in. Node.js/Express sockets with character movement, drawings, and messages (proxied from a Raspberry Pi via NGINX).",
    img: p1img,
    alt: 'Screenshot of the "Chatrooms" application with multiple users sending images and text',
    skills: ["JavaScript", "Node.js", "Express", "Web"],
    link: "https://github.com/bhnord/chatrooms",
    tint: "bg-lime/10",
    chip: "bg-lime text-bg",
    arrow: "group-hover:text-lime",
    offset: "",
  },
  {
    title: "Spotify Player",
    tag: "02",
    description:
      "A dashboard for my listening habits built on the Spotify API: top songs, recent plays, and playlists, plus remote control of a speaker Raspberry Pi and an embedded player.",
    img: p2img,
    alt: 'Screenshot of "Spotify Player" showing top songs, recent songs, and playlists',
    skills: ["React", "Node.js", "Express", "Linux"],
    link: "https://spotifyplayer.bhnord.com/",
    tint: "bg-pink/10",
    chip: "bg-pink text-bg",
    arrow: "group-hover:text-pink",
    offset: "md:translate-y-12",
  },
  {
    title: "Blockchain Assessment",
    tag: "03",
    description:
      "Traveled to Hong Kong with a team of three to assess whether STC Hong Kong could improve certification with blockchain: interviews, weekly briefings, and a published white paper.",
    img: p3img,
    alt: "Cover page of a white paper analyzing blockchain in the standards and testing industry",
    skills: ["Research", "Interviewing"],
    link: "https://digital.wpi.edu/concern/student_works/cn69m767g",
    tint: "bg-cyan/10",
    chip: "bg-cyan text-bg",
    arrow: "group-hover:text-cyan",
    offset: "",
  },
  {
    title: "Programming Language",
    tag: "04",
    description:
      "A recursive programming language built from scratch in C++: custom grammar, ANTLR parse trees, and an LLVM backend producing x86_64 assembly.",
    img: p4img,
    alt: "Sample code from the backend of a custom programming language",
    skills: ["C++", "LLVM", "Assembly", "Linux"],
    link: "https://github.com/bhnord/CS4533",
    tint: "bg-yellow/10",
    chip: "bg-yellow text-bg",
    arrow: "group-hover:text-yellow",
    offset: "md:translate-y-12",
  },
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-block text-sm uppercase tracking-[0.3em] text-muted">
          02 — <span className="text-lime">Selected Work</span>
        </p>
        <h2 className="mt-3 font-block text-5xl uppercase leading-none text-ink md:text-7xl">
          Projects
        </h2>
      </motion.div>

      <div className="mt-16 grid items-start gap-10 md:grid-cols-2 md:gap-12">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block rounded-3xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/25 ${project.offset}`}
          >
            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${project.tint}`}
            >
              <img
                src={project.img}
                alt={project.alt}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className={`absolute left-4 top-4 rounded-full px-3 py-1 font-block text-sm ${project.chip}`}
              >
                {project.tag}
              </span>
            </div>

            <div className="mt-5 flex items-start justify-between gap-4">
              <h3 className="font-block text-3xl uppercase leading-tight text-ink md:text-4xl">
                {project.title}
              </h3>
              <span
                className={`mt-1 text-2xl text-muted transition-colors duration-300 ${project.arrow}`}
              >
                ↗
              </span>
            </div>

            <p className="mt-3 text-muted md:text-lg">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/15 px-3 py-1 text-sm text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}