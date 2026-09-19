function Partners() {
  const charterers = [
    "Total Energies",
    "Alba",
    "Tata Steel",
    "Arcelor Mittal",
    "EGA",
    "Aramco",
    "Jindal Steel Ltd",
    "Sabic",
  ];

  const shipOwners = [
    "Oldendorff",
    "Cargill Ocean",
    "Pacific Basin",
    "SCI",
    "MUR",
    "BALTNAV",
    "DRYDEL",
  ];

  return (
    <section id="partners" className="bg-bulk-blue text-white">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
          Vouch for Us
        </p>

        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="font-serif text-5xl leading-[0.9] tracking-tight md:text-7xl">
            Built on
            <br />
            relationships.
          </h2>

          <p className="max-w-md text-sm leading-6 text-white/60 md:justify-self-end">
            Owners and charterers we work with across the maritime and logistics
            network.
          </p>
        </div>
      </div>

      {/* Charterers */}
      <div className="border-y border-white/15">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-white/15 px-6 py-5 md:px-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/45">
              Charterers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {charterers.map((company, index) => (
              <div
                key={company}
                className={`flex min-h-28 items-center px-6 py-6 md:px-8 ${
                  index % 2 !== 0 ? "border-l" : ""
                } ${index >= 2 ? "border-t" : ""} md:border-l ${
                  index >= 4 ? "md:border-t" : ""
                } border-white/15`}
              >
                <span className="font-serif text-lg tracking-tight text-white/85 md:text-xl">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ship Owners */}
      <div className="border-b border-white/15">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-white/15 px-6 py-5 md:px-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/45">
              Ship Owners
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {shipOwners.map((company, index) => (
              <div
                key={company}
                className={`flex min-h-28 items-center px-6 py-6 md:px-8 ${
                  index % 2 !== 0 ? "border-l" : ""
                } ${index >= 2 ? "border-t" : ""} md:border-l ${
                  index >= 4 ? "md:border-t" : ""
                } border-white/15`}
              >
                <span className="font-serif text-lg tracking-tight text-white/85 md:text-xl">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <p className="font-serif text-2xl leading-tight text-white/80 md:text-3xl">
          Trusted relationships,
          <br />
          built over time.
        </p>
      </div>
    </section>
  );
}

export default Partners;
