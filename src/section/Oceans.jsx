import {
  Anchor,
  Boxes,
  Container,
  Globe2,
  ShieldCheck,
  Truck,
} from "lucide-react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function Oceans() {
  const routes = [
    {
      from: "Hazira",
      to: "Antwerp",
      cargo: "Steel",
      coordinates: [
        [72.67, 21.12],
        [4.4, 51.3],
      ],
    },
    {
      from: "Hazira",
      to: "Dunkirk",
      cargo: "Steel",
      coordinates: [
        [72.67, 21.12],
        [2.38, 51.03],
      ],
    },
    {
      from: "Hazira",
      to: "Sagunto",
      cargo: "Steel",
      coordinates: [
        [72.67, 21.12],
        [-0.27, 39.67],
      ],
    },
    {
      from: "Hazira",
      to: "Ravenna",
      cargo: "Steel",
      coordinates: [
        [72.67, 21.12],
        [12.2, 44.42],
      ],
    },
    {
      from: "Hazira",
      to: "Goa",
      cargo: "Steel",
      coordinates: [
        [72.67, 21.12],
        [73.8, 15.4],
      ],
    },
    {
      from: "Hazira",
      to: "Vizag",
      cargo: "Steel",
      coordinates: [
        [72.67, 21.12],
        [83.3, 17.7],
      ],
    },
  ];

  const hazira = [72.67, 21.12];

  const capabilities = [
    {
      label: "Vessel & Chartering",
      icon: Anchor,
    },
    {
      label: "Port Operations & Stevedores",
      icon: Container,
    },
    {
      label: "Warehousing & Cargo Handling",
      icon: Boxes,
    },
    {
      label: "Transporters & Last Mile Truckers",
      icon: Truck,
    },
    {
      label: "International Freight Movements",
      icon: Globe2,
    },
    {
      label: "End-to-End Solutions",
      icon: ShieldCheck,
    },
  ];

  const labelOffsets = {
    Antwerp: [12, -12],
    Dunkirk: [12, 14],
    Sagunto: [12, 5],
    Ravenna: [12, 5],
    Goa: [12, 8],
    Vizag: [12, 8],
  };

  return (
    <section id="network" className="overflow-hidden bg-bulk-blue text-white">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-7 py-14 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60 md:text-xs md:tracking-[0.35em]">
                Oceans
              </p>

              <span className="h-px w-12 bg-white/35" />
            </div>

            <h2 className="font-serif text-4xl leading-[0.92] tracking-tight md:text-7xl">
              Connected
              <br />
              by the sea.
            </h2>
          </div>

          <div className="md:justify-self-end">
            <p className="mb-3 hidden text-right text-[9px] uppercase tracking-[0.35em] text-white/35 md:block">
              Global routes
              <br />
              Stronger together
            </p>

            <p className="max-w-md text-sm leading-6 text-white/65">
              From Indian ports to destinations across the world, our network
              connects cargo, vessels, ports and people through every stage of
              the journey.
            </p>
          </div>
        </div>
      </div>

      {/* World Map */}
      <div className="w-full border-y border-white/15">
        <div className="relative aspect-[1.08/1] w-full md:aspect-[2/1]">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              center: [35, 15],
              scale: 360,
            }}
            className="h-full w-full"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#ffffff"
                    stroke="#244081"
                    strokeWidth={0.45}
                    strokeOpacity={0.55}
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        outline: "none",
                      },
                      pressed: {
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Route underlay */}
            {routes.map((route) => (
              <Line
                key={`underlay-${route.from}-${route.to}`}
                from={route.coordinates[0]}
                to={route.coordinates[1]}
                stroke="white"
                strokeWidth={5}
                strokeOpacity={0.75}
                strokeDasharray="3 6"
                strokeLinecap="round"
              />
            ))}

            {/* Main routes */}
            {routes.map((route, index) => (
              <Line
                key={`${route.from}-${route.to}`}
                from={route.coordinates[0]}
                to={route.coordinates[1]}
                stroke="#244081"
                strokeWidth={index === 0 ? 3 : 2.5}
                strokeOpacity={1}
                strokeDasharray="3 6"
                strokeLinecap="round"
                className="ocean-route"
                style={{
                  animationDelay: `${index * 0.35}s`,
                }}
              />
            ))}

            {/* Hazira */}
            <Marker coordinates={hazira}>
              <circle r={8} fill="#244081" stroke="white" strokeWidth={2} />

              <circle
                r={14}
                fill="none"
                stroke="#244081"
                strokeWidth={1.5}
                strokeOpacity={0.45}
              />

              <rect x="17" y="-8" width="65" height="18" rx="2" fill="white" />

              <text
                x="23"
                y="4"
                className="fill-bulk-blue text-[9px] font-bold uppercase tracking-[0.14em]"
              >
                Hazira
              </text>
            </Marker>

            {/* Destination markers */}
            {routes.map((route) => {
              const [x, y] = labelOffsets[route.to];

              return (
                <Marker
                  key={`marker-${route.to}`}
                  coordinates={route.coordinates[1]}
                >
                  <circle r={5} fill="#244081" stroke="white" strokeWidth={2} />

                  <rect
                    x={x - 3}
                    y={y - 10}
                    width={route.to.length * 6.2 + 18}
                    height="19"
                    rx="2"
                    fill="white"
                  />

                  <text
                    x={x + 4}
                    y={y + 3}
                    className="fill-bulk-blue text-[9px] font-bold uppercase tracking-[0.1em]"
                  >
                    {route.to}
                  </text>
                </Marker>
              );
            })}
          </ComposableMap>

          {/* Map labels */}
          <div className="pointer-events-none absolute bottom-5 left-7 hidden text-[9px] uppercase tracking-[0.3em] text-white/30 md:block">
            Moving possibilities
            <br />
            worldwide
          </div>
        </div>
      </div>

      {/* Route cards */}
      <div className="border-b border-white/20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {routes.map((route, index) => (
            <article
              key={`${route.from}-${route.to}`}
              className={`px-5 py-4 md:px-4 md:py-5 ${
                index % 2 !== 0 ? "border-l" : ""
              } border-white/20 lg:border-l`}
            >
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/45">
                {route.cargo}
              </p>

              <div className="mt-2 flex items-center gap-2 text-xs">
                <span>{route.from}</span>

                <span className="text-white/35">→</span>

                <span>{route.to}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <div className="border-b border-white/20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {capabilities.map(({ label, icon: Icon }, index) => (
            <div
              key={label}
              className={`flex min-h-[100px] flex-col justify-between gap-5 border-white/20 px-5 py-6 ${
                index % 2 !== 0 ? "border-l" : ""
              } lg:border-l`}
            >
              <Icon size={23} strokeWidth={1.3} className="text-white/85" />

              <span className="max-w-[150px] text-[9px] font-medium uppercase leading-4 tracking-[0.12em] text-white/65">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Closing visual */}
      <div className="relative min-h-[360px] overflow-hidden md:min-h-[520px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/oceans-closing.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-bulk-blue/45" />

        <div className="relative z-10 flex min-h-[360px] items-end px-7 py-12 md:min-h-[520px] md:px-12 md:py-16">
          <div className="flex w-full flex-col justify-between gap-10 md:flex-row md:items-end">
            <p className="max-w-md font-serif text-3xl leading-tight text-white md:text-5xl">
              More than ports.
              <br />A wider horizon.
            </p>

            <p className="text-[10px] uppercase leading-6 tracking-[0.3em] text-white/60 md:text-right">
              People
              <br />
              Cargo
              <br />
              Partnerships
              <br />
              Progress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Oceans;
