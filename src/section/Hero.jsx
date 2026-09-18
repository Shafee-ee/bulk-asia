function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-bulk-blue"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-ship.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-bulk-blue/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pb-24 pt-40">
        <div className="max-w-3xl text-white">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em]">
            Eight decades. A wider tomorrow.
          </p>

          <h1 className="font-serif text-6xl leading-[0.9] tracking-tight md:text-8xl lg:text-[7.5rem]">
            SHIPPING
            <br />
            FORWARD
            <br />A LEGACY
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-white/90">
            Generations of experience.
            <br />
            One enduring connection to the sea.
          </p>

          <a
            href="#story"
            className="mt-8 inline-flex items-center border border-white px-6 py-3 text-sm font-medium transition hover:bg-white hover:text-bulk-blue"
          >
            Explore Our Story →
          </a>
        </div>
      </div>

      {/* Right-side keywords */}
      <div className="absolute bottom-24 right-8 z-10 hidden border-l border-white/40 pl-5 text-xs uppercase tracking-[0.25em] text-white/80 lg:block">
        <div className="space-y-5">
          <p>People</p>
          <p>Ports</p>
          <p>Cargo</p>
          <p>Connections</p>
          <p>Generations</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
