import { motion } from "framer-motion";

const socials = [
  {
    label: "GitHub",
    handle: "bhnord",
    color: "text-cyan",
    href: "https://github.com/bhnord",
  },
  {
    label: "LinkedIn",
    handle: "bernhard-nordemann",
    color: "text-pink",
    href: "https://www.linkedin.com/in/bernhard-nordemann/",
  },
];

export default function Connect() {
  return (
    <section id="connect" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-block text-sm uppercase tracking-[0.3em] text-muted">
          05 — <span className="text-pink">Contact</span>
        </p>
        <h2 className="mt-3 font-block text-5xl uppercase leading-none text-ink md:text-7xl">
          Get in touch
        </h2>
        <p className="mt-6 max-w-lg text-lg text-muted md:text-xl">
          Want to say hi? My inbox is open.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-14 md:grid-cols-2">
        <div className="space-y-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-colors duration-200 hover:border-white/25"
            >
              <div>
                <span className="block text-sm uppercase tracking-widest text-muted">
                  {social.label}
                </span>
                <span className={`font-block text-2xl ${social.color}`}>
                  {social.handle}
                </span>
              </div>
              <span className="text-3xl text-muted transition-colors duration-200 group-hover:text-lime">
                ↗
              </span>
            </a>
          ))}
        </div>

        <form
          action="https://formsubmit.co/68f6eb9f1161463baacb23c2ac67579b"
          method="POST"
          className="space-y-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm uppercase tracking-widest text-muted"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full rounded-xl border border-white/15 bg-white/[0.02] p-4 outline-none transition-colors placeholder:text-muted/60 focus:border-lime"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm uppercase tracking-widest text-muted"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-xl border border-white/15 bg-white/[0.02] p-4 outline-none transition-colors placeholder:text-muted/60 focus:border-lime"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm uppercase tracking-widest text-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="What's on your mind?"
              rows={5}
              className="w-full resize-none rounded-xl border border-white/15 bg-white/[0.02] p-4 outline-none transition-colors placeholder:text-muted/60 focus:border-lime"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-lime px-8 py-4 font-block text-base uppercase tracking-wide text-bg transition-colors duration-200 hover:bg-[#b7e62d]"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
