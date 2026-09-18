function Partners() {
  const customers = [
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
      {/* Intro */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.3em] text-white/55">
              Vouch for Us
            </p>

            <h2 className="font-serif text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Built on
              <br />
              relationships.
            </h2>
          </div>

          <div className="max-w-md md:justify-self-end">
            <p className="text-base leading-6 text-white/80 md:text-lg">
              Strong logistics are built through strong relationships.
            </p>

            <p className="mt-4 text-sm leading-6 text-white/60">
              We work across the maritime and logistics ecosystem, connecting
              customers, vessel owners, ports and transport partners to move
              cargo from origin to destination.
            </p>
          </div>
        </div>
      </div>

      {/* Customers / Charterers */}
      <div className="border-y border-white/15">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-white/15 px-6 py-5 md:px-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
              Customers & Charterers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {customers.map((customer, index) => (
              <div
                key={customer}
                className={`flex min-h-[85px] items-center px-6 py-5 ${
                  index % 2 !== 0 ? "border-l" : ""
                } ${index >= 2 ? "border-t" : ""} md:border-l md:border-t ${
                  index < 4 ? "md:border-t-0" : ""
                } border-white/15`}
              >
                <span className="text-sm font-medium tracking-wide text-white/90 md:text-base">
                  {customer}
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
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
              Ship Owners
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {shipOwners.map((owner, index) => (
              <div
                key={owner}
                className={`flex min-h-[85px] items-center px-6 py-5 ${
                  index % 2 !== 0 ? "border-l" : ""
                } ${index >= 2 ? "border-t" : ""} md:border-l md:border-t ${
                  index < 4 ? "md:border-t-0" : ""
                } border-white/15`}
              >
                <span className="text-sm font-medium tracking-wide text-white/90 md:text-base">
                  {owner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
