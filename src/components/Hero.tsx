export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-20 pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-24 h-72 w-72 rounded-full bg-pink/20 blur-[120px]" />
        <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-cyan/20 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-lime/15 blur-[130px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="font-block text-sm uppercase tracking-[0.3em] text-muted">
          Software Engineer
        </p>
        <h1 className="mt-4 font-block uppercase leading-[0.95] text-[clamp(3rem,11vw,9rem)]">
          <span className="block text-lime">Bernhard</span>
          <span className="block text-pink">Nordemann</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted md:text-xl">
          Backend software engineer at{" "}
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink underline decoration-pink/40 underline-offset-4 transition-colors hover:text-pink"
          >
            Pinterest
          </a>
          , previously{" "}
          <a
            href="https://www.chewy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan"
          >
            Chewy
          </a>{" "}
          and{" "}
          <a
            href="https://www.dell.com/en-us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime underline decoration-lime/40 underline-offset-4 transition-colors hover:text-lime"
          >
            Dell Technologies
          </a>
          . I build systems that ship software.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-lime px-7 py-3.5 font-block text-base uppercase tracking-wide text-bg transition-colors duration-200 hover:bg-[#b7e62d]"
          >
            See my work
          </a>
          <a
            href="#connect"
            className="rounded-full border border-white/20 px-7 py-3.5 font-block text-base uppercase tracking-wide transition-colors duration-200 hover:border-pink hover:text-pink"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}