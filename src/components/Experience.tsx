import { motion } from "framer-motion";

const experiences = [
  {
    company: "Pinterest",
    role: "Software Engineer II",
    location: "Remote · United States",
    period: "Aug 2024 — Present",
    accent: "bg-pink",
    details: [
      "Backend engineer in the Infrastructure Org, working on Teletraan (Pinterest's open source deploy system) and Pindeploy, which moves software between environments",
    ],
  },
  {
    company: "Chewy",
    role: "Software Engineer Intern",
    location: "Boston, MA · Hybrid",
    period: "Jun 2023 — Aug 2023",
    accent: "bg-cyan",
    details: [
      "Built a web app that proactively surfaces internal order issues across 30M+ monthly orders, saving ~$162K/month",
      "Streamed data from Amazon SNS → SQS → Kafka into Elasticsearch with a Java backend",
      "Cut build times 40% by parallelizing Gradle builds and isolating integration tests",
    ],
  },
  {
    company: "STC Group",
    role: "Researcher",
    location: "Hong Kong · On-site",
    period: "Jan 2023 — Mar 2023",
    accent: "bg-yellow",
    details: [
      "Investigated a blockchain solution to publicly store product certification data for Hong Kong Standards and Testing Centre",
      "Interviewed Verizon, DigiKerma, and HerBChain on their supply chain blockchain implementations, then presented recommendations directly to leadership",
    ],
  },
  {
    company: "Dell Technologies",
    role: "Software Engineer Intern",
    location: "Hopkinton, MA · On-site",
    period: "Jun 2022 — Aug 2022",
    accent: "bg-lime",
    details: [
      "Built an Oracle Enterprise Manager plugin (Oracle JET + Java) that streamlined hardware info access for admins across 1,400+ companies",
      "Collected hardware metrics from SQL views and REST APIs into a JavaScript frontend",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-block text-sm uppercase tracking-[0.3em] text-muted">
          01 — <span className="text-yellow">Experience</span>
        </p>
        <h2 className="mt-3 font-block text-5xl uppercase leading-none text-ink md:text-7xl">
          Experience
        </h2>
      </motion.div>

      <div className="mt-16">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="grid gap-6 border-t border-white/10 py-10 md:grid-cols-2 md:gap-12"
          >
            <div>
              <div className="flex items-center gap-3">
                <span
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ${exp.accent}`}
                />
                <h3 className="font-block text-3xl uppercase leading-none text-ink md:text-4xl">
                  {exp.company}
                </h3>
              </div>
              <div className="mt-3">
                <p className="text-ink">{exp.role}</p>
                <p className="text-sm uppercase tracking-widest text-muted/70">
                  {exp.period}
                </p>
              </div>
              {exp.location && (
                <p className="mt-2 text-sm text-muted">{exp.location}</p>
              )}
            </div>
            <ul className="space-y-3">
              {exp.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 text-muted md:text-lg"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="border-t border-white/10" />
      </div>
    </section>
  );
}