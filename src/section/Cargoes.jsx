function Cargoes() {
  const cargoes = [
    {
      number: "01",
      title: "STEEL PRODUCTS",
      text: "From steel pipes to complex steel structures, we understand the handling, port operations and movement required for demanding cargoes.",
    },
    {
      number: "02",
      title: "BULK COMMODITIES",
      text: "Experience across bulk commodity movements, connecting vessels, ports and inland logistics through every stage of the journey.",
    },
    {
      number: "03",
      title: "PROJECT CARGO",
      text: "Complex and oversized cargo requires careful planning, coordination and an understanding of every point between vessel and destination.",
    },
    {
      number: "04",
      title: "GENERAL CARGO",
      text: "International freight movements supported by established relationships across ports, transporters and last-mile networks.",
    },
  ];

  return (
    <section id="cargoes" className="bg-white text-bulk-blue">
      {/* Intro */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-bulk-blue/55">
              Cargoes
            </p>

            <h2 className="font-serif text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Moving cargo
              <br />
              with purpose.
            </h2>
          </div>

          <div className="max-w-md md:justify-self-end">
            <p className="text-base leading-6 text-bulk-blue/80 md:text-lg">
              Every cargo has a journey. Every journey has its challenges.
            </p>

            <p className="mt-4 text-sm leading-6 text-bulk-blue/60">
              Our experience across shipping, port operations, cargo handling
              and logistics allows us to understand what it takes to move cargo
              from origin to destination.
            </p>
          </div>
        </div>
      </div>

      {/* Cargo categories */}
      <div className="border-y border-bulk-blue/15">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          {cargoes.map((cargo, index) => (
            <article
              key={cargo.number}
              className={`group px-6 py-8 md:px-10 md:py-12 ${
                index >= 2 ? "border-t" : ""
              } ${index % 2 !== 0 ? "md:border-l" : ""} border-bulk-blue/15`}
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-medium tracking-[0.25em] text-bulk-blue/40">
                  {cargo.number}
                </span>

                <span className="h-px w-8 bg-bulk-blue/25 transition-all duration-300 group-hover:w-14" />
              </div>

              <h3 className="mt-8 font-serif text-3xl leading-none md:text-4xl">
                {cargo.title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-6 text-bulk-blue/60">
                {cargo.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Closing statement */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <p className="max-w-4xl font-serif text-2xl leading-tight md:text-4xl">
          From steel to bulk commodities,
          <br />
          every movement demands experience.
        </p>
      </div>
    </section>
  );
}

export default Cargoes;
