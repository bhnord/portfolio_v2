export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-muted sm:flex-row">
        <p className="font-block text-lg text-ink">
          BN<span className="text-lime">.</span>
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} Bernhard Nordemann —
          built with React + Tailwind
        </p>
        <a
          href="#top"
          className="rounded-full border border-white/15 px-4 py-2 font-block text-sm uppercase tracking-wide transition-colors hover:border-pink hover:text-pink"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}