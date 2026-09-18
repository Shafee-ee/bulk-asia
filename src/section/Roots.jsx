function Roots() {
  const milestones = [
    {
      year: "1940s",
      title: "SHIPPING",
      text: "Our journey began with our forefathers, who were shipowners carrying cargo between the Persian Gulf and the Indian subcontinent.",
    },
    {
      year: "1980s",
      title: "PORT OPERATIONS",
      text: "Our experience expanded beyond shipping into port operations, deepening our understanding of cargo and the places where it moves.",
    },
    {
      year: "2000s",
      title: "EXPANSION",
      text: "Through the 1980s and 2000s, our capabilities grew across port operations, cargo handling, warehousing and last-mile connectivity.",
    },
    {
      year: "TODAY",
      title: "INTEGRATED LOGISTICS",
      text: "Today, generations of experience come together across the maritime and logistics value chain.",
    },
  ];

  return (
    <section id="story" className="bg-white text-bulk-blue">
      {/* Intro */}
      <div className="mx-auto max-w-7xl px-7 py-14 md:px-8 md:py-36">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em]">
              Roots
            </p>

            <h2 className="font-serif text-4xl leading-[0.95] tracking-tight md:text-7xl">
              Eight decades.
              <br />
              One enduring
              <br />
              connection.
            </h2>
          </div>
          <div className="max-w-lg md:justify-self-end">
            <p className="text-base leading-6 text-bulk-blue/80 md:text-xl md:leading-relaxed">
              Generations of experience. One enduring connection to the sea.
            </p>

            <p className="mt-6 leading-7 text-bulk-blue/70">
              From our first vessels in the 1940s to the integrated logistics
              capabilities of today, our journey has always been about moving
              cargo, creating connections and building for the generations
              ahead.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="border-y border-bulk-blue/15">
        <div className="mx-auto max-w-7xl px-7 md:px-8">
          <div className="relative grid md:grid-cols-4">
            {/* Desktop timeline line */}
            <div className="absolute left-0 right-0 top-[58px] hidden h-px bg-bulk-blue/20 md:block" />

            {milestones.map((milestone, index) => (
              <article
                key={milestone.year}
                className={`relative py-8 md:px-8 md:py-16 ${
                  index !== 0 ? "border-t md:border-t-0 md:border-l" : ""
                } border-bulk-blue/15`}
              >
                {/* Year */}
                <div className="relative flex items-center gap-3">
                  <div className="relative z-10 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-bulk-blue bg-white md:h-4 md:w-4">
                    <div className="h-1 w-1 rounded-full bg-bulk-blue md:h-1.5 md:w-1.5" />
                  </div>

                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-bulk-blue/60 md:text-xs">
                    {milestone.year}
                  </p>
                </div>

                {/* Content */}
                <div className="mt-6 md:mt-14">
                  {/* Desktop chapter label */}
                  <div className="hidden items-center gap-3 md:flex">
                    <span className="text-[10px] font-medium tracking-[0.2em] text-bulk-blue/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-6 bg-bulk-blue/20" />

                    <span className="text-[10px] uppercase tracking-[0.25em] text-bulk-blue/50">
                      Chapter
                    </span>
                  </div>

                  <h3 className="mt-0 max-w-[15rem] font-serif text-2xl leading-[1.05] md:mt-5 md:text-4xl">
                    {milestone.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-5 text-bulk-blue/65 md:mt-6 md:text-sm md:leading-6">
                    {milestone.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      {/* Closing statement */}
      {/* Closing statement */}
      <div className="relative overflow-hidden bg-bulk-blue">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-75"
          style={{
            backgroundImage: "url('/images/end-image.png')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-bulk-blue/15" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-end px-7 py-14 md:min-h-[520px] md:px-8 md:py-20">
          <div>
            <p className="mb-6 text-[18px] uppercase tracking-[0.3em] text-semibold text-white/50">
              Our legacy
            </p>

            <p className="max-w-5xl font-serif text-3xl leading-[1.05] text-white md:text-5xl lg:text-6xl">
              Shipping is in our DNA.
              <br />
              Logistics is our evolution.
              <br />
              Our legacy we carry forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roots;
