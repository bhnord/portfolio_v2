const links = [
  { href: "#experience", label: "Experience", color: "bg-yellow" },
  { href: "#work", label: "Projects", color: "bg-lime" },
  { href: "#education", label: "Education", color: "bg-cyan" },
  { href: "#about", label: "About", color: "bg-cyan" },
  { href: "#connect", label: "Connect", color: "bg-pink" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-block text-2xl text-ink">
          BN<span className="text-lime">.</span>
        </a>
        <nav className="flex items-center gap-4 text-sm font-medium text-muted md:gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative pb-1 transition-colors duration-200 hover:text-ink"
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 ${link.color} transition-transform duration-300 group-hover:scale-x-100`}
              />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}