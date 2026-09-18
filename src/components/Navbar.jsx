import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#story" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Our Network", href: "#network" },
    { label: "Our Impact", href: "#impact" },
    { label: "Partners", href: "#partners" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="absolute left-0 top-0 z-[100] w-full border-b border-white/40 bg-white/25 ">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8 md:py-6">
          <a href="/" className="block">
            <img
              src="/images/bulk-asia-logo.svg"
              alt="Bulk Asia"
              className="h-16 w-auto md:h-14"
            />
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-bulk-blue px-5 py-3 text-sm font-medium text-white"
            >
              Get in Touch →
            </a>
          </div>

          {/* Mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
            className="flex h-11 w-11 items-center justify-center border border-bulk-blue/40 bg-white/10 backdrop-blur md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-5 bg-bulk-blue" />
              <span className="block h-px w-5 bg-bulk-blue" />
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[100] overflow-hidden md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Background */}
        <div
          className={`absolute inset-0 bg-bulk-blue transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Menu panel */}
        <div
          className={`absolute inset-0 flex h-full flex-col px-7 py-6 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            menuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <img
              src="/images/bulk-asia-logo.svg"
              alt="Bulk Asia"
              className="h-12 w-auto brightness-0 invert"
            />

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
              className="relative flex h-11 w-11 items-center justify-center border border-white/30"
            >
              <span className="absolute h-px w-6 rotate-45 bg-white" />
              <span className="absolute h-px w-6 -rotate-45 bg-white" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex flex-1 flex-col justify-center">
            <nav>
              {links.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 font-serif text-[2rem] leading-none text-white transition-all duration-300 ${
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${index * 60 + 150}ms` : "0ms",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div
            className={`border-t border-white/20 pt-5 transition-all duration-500 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: menuOpen ? "550ms" : "0ms" }}
          >
            <div className="flex items-center justify-between gap-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Shipping forward a legacy.
              </p>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="shrink-0 border border-white px-4 py-3 text-xs font-medium text-white"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
