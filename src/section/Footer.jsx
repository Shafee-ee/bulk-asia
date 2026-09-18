function Footer() {
  return (
    <footer className="bg-bulk-blue text-white">
      <div className="border-t border-white/15">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:grid-cols-3 md:px-8">
          <div>
            <img
              src="/images/bulk-asia-logo.svg"
              alt="Bulk Asia"
              className="h-12 w-auto brightness-0 invert"
            />

            <p className="mt-6 max-w-xs text-xs leading-6 text-white/50">
              Eight decades of experience connecting cargo, ports, vessels and
              people across the maritime and logistics network.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Navigate
            </p>

            <div className="mt-5 grid grid-cols-2 gap-y-3 text-xs text-white/65">
              <a href="#home" className="hover:text-white">
                Home
              </a>
              <a href="#story" className="hover:text-white">
                Our Story
              </a>
              <a href="#capabilities" className="hover:text-white">
                Capabilities
              </a>
              <a href="#network" className="hover:text-white">
                Our Network
              </a>
              <a href="#impact" className="hover:text-white">
                Our Impact
              </a>
              <a href="#partners" className="hover:text-white">
                Partners
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Connect
            </p>

            <div className="mt-5 space-y-3 text-xs text-white/65">
              <p>India</p>
              <a href="#contact" className="block hover:text-white">
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-[10px] uppercase tracking-[0.18em] text-white/35 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Bulk Asia. All rights reserved.</p>
          <p>Shipping forward. A legacy carried forward.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
