function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-bulk-blue text-white"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_15%] md:bg-center"
        style={{
          backgroundImage: "url('/images/hero-ship.png')",
        }}
      />

      {/* Main overlay */}
      <div className="absolute inset-0 bg-bulk-blue/10" />

      {/* Extra mobile gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bulk-blue/35 via-transparent to-bulk-blue/70 md:hidden" />

      {/* Desktop / Mobile content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-92px)] w-full max-w-7xl flex-1 flex-col px-7 pt-32 pb-12 md:min-h-screen md:px-8 md:pt-40 md:pb-24">
        {" "}
        <div className="max-w-3xl text-white">
          {/* Eyebrow */}
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] md:mb-6 md:text-xs md:tracking-[0.35em]">
            Eight decades. A wider tomorrow.
          </p>

          {/* Small editorial line - mobile */}
          <div className="mb-7 h-px w-16 bg-white md:hidden" />

          {/* Heading */}
          <h1 className="font-serif text-[3.25rem] leading-[0.88] tracking-tight sm:text-5xl md:text-8xl lg:text-[7.5rem]">
            SHIPPING
            <br />
            FORWARD
            <br />A LEGACY
          </h1>

          {/* Supporting text */}
          <p className="mt-7 max-w-sm text-base leading-6 text-white/90 md:mt-8 md:max-w-md md:text-lg md:leading-relaxed">
            Generations of experience.
            <br />
            One enduring connection to the sea.
          </p>

          {/* CTA */}
          <a
            href="#story"
            className="mt-7 inline-flex items-center border border-white px-6 py-3.5 text-sm font-medium transition hover:bg-white hover:text-bulk-blue md:mt-8"
          >
            Explore Our Story
            <span className="ml-3 text-lg leading-none">→</span>
          </a>
        </div>
        {/* Mobile scroll indicator */}
        <div className="mt-auto flex items-end justify-between pb-8 pt-14 md:hidden">
          {" "}
          <div className="flex -translate-y-6 flex-col items-start">
            <div className="mb-4 h-12 w-px bg-white/70" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/80">
              Scroll
            </span>

            <span className="mt-3 text-lg leading-none">⌄</span>
          </div>
        </div>
      </div>

      {/* Desktop right-side keywords */}
      <div className="absolute bottom-24 right-8 z-10 hidden border-l border-white pl-5 text-xl uppercase tracking-[0.25em] text-white/80 lg:block">
        <div className="space-y-5">
          <p>People</p>
          <p>Ports</p>
          <p>Cargo</p>
          <p>Connections</p>
          <p>Generations</p>
        </div>
      </div>

      {/* Mobile capability navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/25 bg-bulk-blue/25 backdrop-blur-[0.2px] md:hidden">
        <div className="grid grid-cols-3">
          <a
            href="#capabilities"
            className="group flex flex-col items-center justify-center border-r border-white/20 py-5 text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <ShipIcon />

            <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.25em]">
              At Sea
            </span>
          </a>

          <a
            href="#capabilities"
            className="group flex flex-col items-center justify-center border-r border-white/20 py-5 text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <PortIcon />

            <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.25em]">
              In Port
            </span>
          </a>

          <a
            href="#capabilities"
            className="group flex flex-col items-center justify-center py-5 text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <LandIcon />

            <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.25em]">
              On Land
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

function ShipIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      aria-hidden="true"
    >
      {/* Mast */}
      <path
        d="M24 7V28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Flag */}
      <path
        d="M24 8L31 11L24 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bridge / cabin */}
      <path
        d="M17 27V21H29V27"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="M19 21V18H26V21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Hull */}
      <path
        d="M10 28H38L34 34H16L10 28Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Water */}
      <path
        d="M7 37C10 35 13 35 16 37C19 39 22 39 25 37C28 35 31 35 34 37C36 38 38 38 41 37"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M11 41C14 39 17 39 20 41C23 43 26 43 29 41C32 39 35 39 38 41"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PortIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      aria-hidden="true"
    >
      {/* Crane tower */}
      <path
        d="M13 37V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M13 13H36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Crane support */}
      <path
        d="M13 13L21 8H36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path d="M21 8V13" stroke="currentColor" strokeWidth="1.5" />

      {/* Crane arm */}
      <path
        d="M36 13V27"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Cable */}
      <path
        d="M31 13V27"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Hook */}
      <path
        d="M29 27H33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M30 27V30C30 32 32 33 33 31"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Container */}
      <rect
        x="24"
        y="30"
        width="12"
        height="7"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path d="M28 30V37M32 30V37" stroke="currentColor" strokeWidth="1" />

      {/* Ground */}
      <path
        d="M7 37H41"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LandIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      aria-hidden="true"
    >
      {/* Truck body */}
      <path
        d="M7 17H29V33H7V17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Cab */}
      <path
        d="M29 22H36L41 27V33H29V22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Windshield */}
      <path
        d="M34 23H36L39 27H34V23Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Cargo detail */}
      <path
        d="M12 21H24M12 25H24M12 29H24"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Wheels */}
      <circle cx="14" cy="34" r="3" stroke="currentColor" strokeWidth="1.5" />

      <circle cx="35" cy="34" r="3" stroke="currentColor" strokeWidth="1.5" />

      {/* Road */}
      <path
        d="M6 39H42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
