function WhatSetsUsApart() {
  const capabilities = [
    {
      number: "01",
      title: "AT SEA",
      items: ["Vessels", "Routes", "Global Reach"],
    },
    {
      number: "02",
      title: "IN PORT",
      items: ["Operations", "Cargo Handling", "Expertise"],
    },
    {
      number: "03",
      title: "ON LAND",
      items: ["Warehousing", "Transport", "Last-Mile Connectivity"],
    },
  ];

  return (
    <section id="capabilities" className="bg-bulk-blue text-white">
      {/* Introduction */}
      <div className="mx-auto max-w-7xl px-7 py-14 md:px-8 md:py-36">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-5 text-[18px] font-medium uppercase tracking-[0.3em] text-white/60 md:mb-6 md:text-xs md:tracking-[0.35em]">
              What Sets Us Apart
            </p>

            <h2 className="max-w-2xl font-serif text-4xl leading-[0.95] tracking-tight md:text-7xl">
              We understand
              <br />
              the entire journey.
            </h2>
          </div>

          <div className="max-w-xl md:pt-12">
            <p className="text-base leading-6 text-white/90 md:text-xl md:leading-relaxed">
              From port to open sea and every stage in between.
            </p>

            <p className="mt-4 text-sm leading-6 text-white/65 md:mt-6 md:leading-7">
              Decades of shipping and port operations have given us a deep
              understanding of ports, cargoes, routes and the obstacles that
              come with moving freight across the world.
            </p>

            <p className="mt-4 text-sm leading-6 text-white/65 md:mt-6 md:leading-7">
              We don’t simply move freight. We understand the journey behind it
              — and have the experience, relationships and expertise to navigate
              every step of it.
            </p>
          </div>
        </div>
      </div>

      {/* Capability panels */}
      <div className="border-t border-white/20">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {capabilities.map((capability, index) => (
            <article
              key={capability.number}
              className={`p-7 md:min-h-[420px] md:p-10 ${
                index !== 0 ? "border-t md:border-t-0 md:border-l" : ""
              } border-white/20`}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.25em] text-white/40">
                  {capability.number}
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                  {capability.title}
                </span>
              </div>

              {/* Content */}
              <div className="mt-8 md:mt-32">
                <h3 className="font-serif text-3xl leading-none md:text-4xl">
                  {capability.title}
                </h3>

                <div className="mt-5 space-y-2 md:mt-8 md:space-y-3">
                  {capability.items.map((item) => (
                    <p
                      key={item}
                      className="border-b border-white/15 pb-2 text-sm text-white/65 md:pb-3"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatSetsUsApart;
