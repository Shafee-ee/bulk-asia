import { Menu, X } from "lucide-react";
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
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <a href="#home" className="block">
          <img
            src="/images/bulk-asia-logo.svg"
            alt="Bulk Asia"
            className="h-12 w-auto md:h-14"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[11px] font-medium text-bulk-blue transition-colors duration-200 hover:text-bulk-blue/70"
            >
              {link.label}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-bulk-blue transition-all duration-200 group-hover:w-full" />
            </a>
          ))}

          <a
            href="#contact"
            className="ml-2 border border-bulk-blue bg-bulk-blue px-5 py-3 text-[11px] font-medium text-white transition-all duration-200 hover:bg-transparent hover:text-bulk-blue"
          >
            Get in Touch →
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center border border-bulk-blue text-bulk-blue md:hidden"
        >
          {menuOpen ? (
            <X size={19} strokeWidth={1.5} />
          ) : (
            <Menu size={19} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-bulk-blue/15 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-bulk-blue/10 py-4 text-sm text-bulk-blue"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-bulk-blue px-5 py-3 text-center text-sm font-medium text-white"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
