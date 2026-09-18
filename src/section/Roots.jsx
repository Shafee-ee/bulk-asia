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
      <div className="mx-auto max-w-7xl px-8 py-28 md:py-36">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em]">
              Roots
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Eight decades.
              <br />
              One enduring
              <br />
              connection.
            </h2>
          </div>

          <div className="max-w-lg md:justify-self-end">
            <p className="text-xl leading-relaxed text-bulk-blue/80">
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
      {/* Timeline */}
      <div className="border-y border-bulk-blue/15">
        <div className="mx-auto max-w-7xl px-8">
          <div className="relative grid md:grid-cols-4">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 top-[58px] hidden h-px bg-bulk-blue/20 md:block" />

            {milestones.map((milestone, index) => (
              <article
                key={milestone.year}
                className={`relative py-12 md:px-8 md:py-16 ${
                  index !== 0 ? "border-t md:border-t-0 md:border-l" : ""
                } border-bulk-blue/15`}
              >
                {/* Year */}
                <div className="relative flex items-center gap-4">
                  <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border border-bulk-blue bg-white">
                    <div className="h-1.5 w-1.5 rounded-full bg-bulk-blue" />
                  </div>

                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-bulk-blue/60">
                    {milestone.year}
                  </p>
                </div>

                {/* Content */}
                <div className="mt-14">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-medium tracking-[0.2em] text-bulk-blue/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-6 bg-bulk-blue/20" />

                    <span className="text-[10px] uppercase tracking-[0.25em] text-bulk-blue/50">
                      Chapter
                    </span>
                  </div>

                  <h3 className="mt-5 max-w-[12rem] font-serif text-3xl leading-[1.05] md:text-4xl">
                    {milestone.title}
                  </h3>

                  <p className="mt-6 max-w-xs text-sm leading-6 text-bulk-blue/65">
                    {milestone.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Closing statement */}
      <div className="mx-auto max-w-7xl px-8 py-24 md:py-32">
        <p className="max-w-5xl font-serif text-3xl leading-tight md:text-5xl">
          Shipping is in our DNA.
          <br />
          Logistics is our evolution.
          <br />
          Our legacy we carry forward.
        </p>
      </div>
    </section>
  );
}

export default Roots;
