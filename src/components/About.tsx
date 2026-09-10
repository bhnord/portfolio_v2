import { motion } from "framer-motion";
import img from "../assets/images/bernhard_nordemann.jpg";

const facts = [
  "Backend SWE @ Pinterest, Infrastructure Org",
  "Working on Teletraan and Pindeploy, the systems that move software between environments",
  "Cooking and baking",
  "Chasing great food around the world",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-block text-sm uppercase tracking-[0.3em] text-muted">
          04 — <span className="text-cyan">About</span>
        </p>
        <h2 className="mt-3 font-block text-5xl uppercase leading-none text-ink md:text-7xl">
          About
        </h2>
      </motion.div>

      <div className="mt-16 grid items-start gap-12 md:grid-cols-2">
        <div className="mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={img}
              alt="Bernhard Nordemann with a city street in the background"
              className="w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-lg text-ink md:text-2xl">
            I'm Bernhard, a software engineer working on the infrastructure that
            keeps Pinterest deploying.
          </p>
          <ul className="mt-8 space-y-3">
            {facts.map((fact) => (
              <li
                key={fact}
                className="flex items-start gap-3 text-muted md:text-lg"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
