function OurImpact() {
  const impacts = [
    {
      number: "01",
      title: "RELIABILITY",
      text: "Decades of experience built around dependable movement of cargo, vessels and people.",
    },
    {
      number: "02",
      title: "CONNECTIVITY",
      text: "Connecting ports, cargo, transport and logistics capabilities across the wider supply chain.",
    },
    {
      number: "03",
      title: "EXPERIENCE",
      text: "Knowledge developed across generations, from shipping and port operations to integrated logistics.",
    },
  ];

  return (
    <section id="impact" className="bg-white text-bulk-blue">
      {/* Intro */}
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-6 text-xl font-semibold uppercase tracking-[0.35em] text-bulk-blue/50">
              Our Impact
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Moving more
              <br />
              than cargo.
            </h2>
          </div>

          <div className="max-w-lg md:justify-self-end">
            <p className="text-xl leading-relaxed text-bulk-blue/80">
              Building connections that move businesses, communities and
              generations forward.
            </p>

            <p className="mt-6 text-sm leading-7 text-bulk-blue/65">
              Our work extends beyond the movement of goods. Every vessel, port,
              warehouse and transport connection contributes to a wider network
              built on experience, reliability and long-term relationships.
            </p>
          </div>
        </div>
      </div>

      {/* Impact grid */}
      <div className="border-y border-bulk-blue/15">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {impacts.map((impact, index) => (
            <article
              key={impact.number}
              className={`relative min-h-[320px] px-6 py-10 md:px-10 md:py-14 ${
                index !== 0 ? "border-t md:border-t-0 md:border-l" : ""
              } border-bulk-blue/15`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.25em] text-bulk-blue/40">
                  {impact.number}
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-bulk-blue/40">
                  Impact
                </span>
              </div>

              <div className="mt-16">
                <div className="mb-5 h-px w-8 bg-bulk-blue/25" />

                <h3 className="font-serif text-4xl leading-none">
                  {impact.title}
                </h3>

                <p className="mt-6 max-w-sm text-sm leading-6 text-bulk-blue/60">
                  {impact.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Closing statement */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
        <p className="max-w-4xl font-serif text-3xl leading-tight md:text-5xl">
          Experience creates trust.
          <br />
          Connections create possibility.
          <br />
          Progress carries us forward.
        </p>
      </div>
    </section>
  );
}

export default OurImpact;
