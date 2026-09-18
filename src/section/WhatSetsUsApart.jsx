import { Ship, Container, Truck } from "lucide-react";
function WhatSetsUsApart() {
  const capabilities = [
    {
      number: "01",
      title: "AT SEA",
      icon: Ship,
      items: ["Vessels", "Routes", "Global Reach"],
    },
    {
      number: "02",
      title: "IN PORT",
      icon: Container,
      items: ["Operations", "Cargo Handling", "Expertise"],
    },
    {
      number: "03",
      title: "ON LAND",
      icon: Truck,
      items: ["Warehousing", "Transport", "Last-Mile Connectivity"],
    },
  ];

  return (
    <section id="capabilities" className="bg-bulk-blue text-white">
      {/* Introduction */}
      <div className="mx-auto max-w-7xl px-8 py-28 md:py-36">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-white/60">
              What Sets Us Apart
            </p>

            <h2 className="max-w-2xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
              We understand
              <br />
              the entire journey.
            </h2>
          </div>

          <div className="max-w-xl md:pt-12">
            <p className="text-xl leading-relaxed text-white/90">
              From port to open sea and every stage in between.
            </p>

            <p className="mt-6 leading-7 text-white/65">
              Decades of shipping and port operations have given us a deep
              understanding of ports, cargoes, routes and the obstacles that
              come with moving freight across the world.
            </p>

            <p className="mt-6 leading-7 text-white/65">
              We don’t simply move freight. We understand the journey behind it
              — and have the experience, relationships and expertise to navigate
              every step of it.
            </p>
          </div>
        </div>
      </div>

      {/* Capability panels */}
      {/* Capability panels */}
      <div className="border-t border-white/20">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.number}
                className={`group min-h-[360px] p-8 transition-colors duration-300 hover:bg-white/[0.03] md:p-10 ${
                  index !== 0 ? "border-t md:border-t-0 md:border-l" : ""
                } border-white/20`}
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.25em] text-white/40">
                    {capability.number}
                  </span>

                  <span className="text-xs tracking-[0.25em] text-white/40">
                    {capability.title}
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-12">
                  <Icon
                    size={30}
                    strokeWidth={1.2}
                    className="text-white/70 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3 className="font-serif text-4xl leading-none">
                    {capability.title}
                  </h3>

                  <div className="mt-8">
                    {capability.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between border-b border-white/15 py-3 text-sm text-white/60"
                      >
                        <span>{item}</span>

                        <span className="text-white/30 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatSetsUsApart;
