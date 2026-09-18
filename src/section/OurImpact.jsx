function OurImpact() {
  const impacts = [
    {
      title: "RELIABILITY",
      text: "Decades of experience built around dependable movement of cargo, vessels and people.",
    },
    {
      title: "CONNECTIVITY",
      text: "Connecting ports, cargo, transport and logistics capabilities across the wider supply chain.",
    },
    {
      title: "EXPERIENCE",
      text: "Knowledge developed across generations, from shipping and port operations to integrated logistics.",
    },
  ];

  return (
    <section id="impact" className="bg-white text-bulk-blue">
      {/* Intro */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-[16px] font-semidbold uppercase tracking-[0.3em] text-bulk-blue/55">
              Our Impact
            </p>

            <h2 className="font-serif text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Moving more
              <br />
              than cargo.
            </h2>
          </div>

          <div className="max-w-md md:justify-self-end">
            <p className="text-base leading-6 text-bulk-blue/80 md:text-lg">
              Building connections that move businesses, communities and
              generations forward.
            </p>

            <p className="mt-4 text-sm leading-6 text-bulk-blue/60">
              Every vessel, port, warehouse and transport connection contributes
              to a wider network built on experience, reliability and long-term
              relationships.
            </p>
          </div>
        </div>
      </div>

      {/* Impact cards */}
      <div className="border-y border-bulk-blue/15">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {impacts.map((impact, index) => (
            <article
              key={impact.title}
              className={`px-6 py-8 md:px-8 md:py-10 ${
                index !== 0 ? "border-t md:border-t-0 md:border-l" : ""
              } border-bulk-blue/15`}
            >
              <div className="mb-8 h-px w-8 bg-bulk-blue/30" />

              <h3 className="font-serif text-3xl leading-none md:text-4xl">
                {impact.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-bulk-blue/60">
                {impact.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="border-b border-bulk-blue/15">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {[
            "Cargoes Covered",
            "Ship Sizes Covered",
            "Ship Days",
            "Metric Tonnes Moved",
          ].map((label, index) => (
            <div
              key={label}
              className={`px-6 py-8 md:px-8 md:py-10 ${
                index % 2 !== 0 ? "border-l" : ""
              } md:border-l border-bulk-blue/15`}
            >
              <p className="font-serif text-3xl md:text-4xl">0000</p>

              <p className="mt-2 max-w-[140px] text-[9px] font-medium uppercase leading-4 tracking-[0.16em] text-bulk-blue/50">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing statement */}
      <div
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/impact-close.png')" }}
      >
        <div className="absolute inset-0 bg-white/15" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
          <p className="max-w-4xl font-serif text-2xl leading-tight text-bulk-blue md:text-4xl">
            Experience creates trust.
            <br />
            Connections create possibility.
            <br />
            Progress carries us forward.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurImpact;
