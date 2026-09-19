function Partners() {
  const charterers = [
    {
      name: "TotalEnergies",
      logo: "/images/partners/totalenergies.png",
    },
    {
      name: "Alba",
      logo: "/images/partners/alba.png",
    },
    {
      name: "Tata Steel",
      logo: "/images/partners/tata-steel.png",
    },
    {
      name: "ArcelorMittal",
      logo: "/images/partners/arcelormittal.png",
    },
    {
      name: "EGA",
      logo: "/images/partners/ega.png",
    },
    {
      name: "Aramco",
      logo: "/images/partners/aramco.png",
    },
    {
      name: "Jindal Steel",
      logo: "/images/partners/jindal-steel.png",
    },
    {
      name: "SABIC",
      logo: "/images/partners/sabic.png",
    },
  ];

  const shipOwners = [
    {
      name: "Oldendorff",
      logo: "/images/partners/oldendorff.png",
    },
    {
      name: "Cargill Ocean",
      logo: "/images/partners/cargill.png",
    },
    {
      name: "Pacific Basin",
      logo: "/images/partners/pacific-basin.png",
    },
    {
      name: "SCI",
      logo: "/images/partners/sci.png",
    },
    {
      name: "MUR",
      logo: "/images/partners/mur.png",
    },
    {
      name: "BALTNAV",
      logo: "/images/partners/baltnav.png",
    },
    {
      name: "DRYDEL",
      logo: "/images/partners/drydel-shipping.png",
    },
  ];

  const LogoGrid = ({ companies }) => (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {companies.map((company, index) => (
        <div
          key={company.name}
          className={`
            flex min-h-32 items-center justify-center
            border-b border-white/15
            px-6 py-8
            md:min-h-36 md:px-8
            ${index % 2 !== 0 ? "border-l border-white/15" : ""}
            ${index >= 2 ? "border-t border-white/15" : ""}
            md:border-l-0
            md:border-t-0
            ${index % 4 !== 0 ? "md:border-l md:border-white/15" : ""}
            ${index >= 4 ? "md:border-t md:border-white/15" : ""}
          `}
        >
          <img
            src={company.logo}
            alt={company.name}
            className="max-h-12 max-w-[170px] w-auto object-contain md:max-h-14 md:max-w-[190px]"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section id="partners" className="bg-bulk-blue text-white">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="mb-6 flex items-center gap-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/55">
            Our Partners
          </p>

          <span className="h-px w-16 bg-white/50" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="font-serif text-5xl leading-[0.9] tracking-tight md:text-7xl">
            Trusted by global
            <br />
            industry leaders.
          </h2>

          <p className="max-w-md text-sm leading-6 text-white/65 md:justify-self-end md:text-base">
            Long-term relationships with leading owners, charterers and
            industrial partners across the world.
          </p>
        </div>
      </div>

      {/* Charterers */}
      <div>
        <div className="mx-auto max-w-7xl">
          <div className="border-y border-white/15 px-6 py-5 md:px-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/55">
              Charterers
            </p>
          </div>

          <LogoGrid companies={charterers} />
        </div>
      </div>

      {/* Ship Owners */}
      <div>
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-white/15 px-6 py-5 md:px-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/55">
              Ship Owners
            </p>
          </div>

          <LogoGrid companies={shipOwners} />
        </div>
      </div>

      {/* Closing */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-12 md:px-8 md:py-16">
        <div className="flex items-center gap-7">
          <span className="h-px w-16 bg-white/60" />

          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/60">
            Moving the world forward
          </p>
        </div>

        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/60">
          Bulk Asia
        </p>
      </div>
    </section>
  );
}

export default Partners;
