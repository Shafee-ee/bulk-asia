function Partners() {
  return (
    <section id="partners" className="bg-bulk-blue text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-white/50">
              Partners
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Built on
              <br />
              relationships.
            </h2>
          </div>

          <div className="max-w-lg md:justify-self-end">
            <p className="text-xl leading-relaxed text-white/80">
              Strong logistics are built through strong relationships.
            </p>

            <p className="mt-6 text-sm leading-7 text-white/65">
              We work across the maritime and logistics ecosystem, connecting
              customers, vessel owners, ports, transporters and service partners
              to move cargo efficiently from origin to destination.
            </p>
          </div>
        </div>
      </div>
      <div className="border-y border-white/15">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {["Customers", "Vessel Owners", "Ports", "Logistics Partners"].map(
            (partner, index) => (
              <div
                key={partner}
                className={`flex min-h-[150px] items-center justify-center px-6 py-10 ${
                  index !== 0 ? "border-l" : ""
                } border-white/15`}
              >
                <span className="text-center text-xs uppercase tracking-[0.2em] text-white/85">
                  {partner}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Partners;
