import { motion } from "framer-motion";

const education = [
  {
    school: "Worcester Polytechnic Institute",
    location: "Worcester, MA",
    accent: "bg-lime",
    degrees: [
      { title: "MS in Computer Science", period: "Aug 2022 — May 2024 · 4.0 GPA" },
      { title: "BS in Computer Science", period: "2020 — 2024 · 4.0 GPA" },
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-block text-sm uppercase tracking-[0.3em] text-muted">
          03 — <span className="text-lime">Education</span>
        </p>
        <h2 className="mt-3 font-block text-5xl uppercase leading-none text-ink md:text-7xl">
          Education
        </h2>
      </motion.div>

      <div className="mt-16">
        {education.map((entry) => (
          <div
            key={entry.school}
            className="border-t border-white/10 py-10"
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-2.5 w-2.5 shrink-0 rounded-full ${entry.accent}`}
              />
              <h3 className="font-block text-3xl uppercase leading-none text-ink md:text-4xl">
                {entry.school}
              </h3>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {entry.degrees.map((degree) => (
                <div key={degree.title}>
                  <p className="text-ink">{degree.title}</p>
                  <p className="text-sm uppercase tracking-widest text-muted/70">
                    {degree.period}
                  </p>
                </div>
              ))}
            </div>
            {entry.location && (
              <p className="mt-2 text-sm text-muted">{entry.location}</p>
            )}
          </div>
        ))}
        <div className="border-t border-white/10" />
      </div>
    </section>
  );
}