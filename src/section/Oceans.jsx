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
    // Hazira → Europe
    {
      from: "Hazira",
      to: "Antwerp",
      cargo: "Steel",
      color: "#244081",
      coordinates: [
        [72.67, 21.12],
        [4.4, 51.3],
      ],
    },
    {
      from: "Hazira",
      to: "Dunkirk",
      cargo: "Steel",
      color: "#244081",
      coordinates: [
        [72.67, 21.12],
        [2.38, 51.03],
      ],
    },
    {
      from: "Hazira",
      to: "Sagunto",
      cargo: "Steel",
      color: "#244081",
      coordinates: [
        [72.67, 21.12],
        [-0.27, 39.67],
      ],
    },
    {
      from: "Hazira",
      to: "Ravenna",
      cargo: "Steel",
      color: "#244081",
      coordinates: [
        [72.67, 21.12],
        [12.2, 44.42],
      ],
    },

    // Hazira → India
    {
      from: "Hazira",
      to: "Goa",
      cargo: "Steel",
      color: "#e45b6b",
      coordinates: [
        [72.67, 21.12],
        [73.8, 15.4],
      ],
    },
    {
      from: "Hazira",
      to: "Vizag",
      cargo: "Steel",
      color: "#53d6d2",
      coordinates: [
        [72.67, 21.12],
        [83.3, 17.7],
      ],
    },

    // Kandla → West Coast
    {
      from: "Kandla",
      to: "Okha",
      cargo: "Steel",
      color: "#91d34a",
      coordinates: [
        [70.22, 23.03],
        [69.07, 22.47],
      ],
    },
    {
      from: "Kandla",
      to: "Karwar",
      cargo: "Steel",
      color: "#b66cff",
      coordinates: [
        [70.22, 23.03],
        [74.12, 14.8],
      ],
    },

    // East Coast → West Coast
    {
      from: "Gangavaram",
      to: "New Mangalore",
      cargo: "Steel",
      color: "#f5b83d",
      coordinates: [
        [83.45, 17.65],
        [74.8, 12.91],
      ],
    },
  ];

  const ports = {
    Hazira: [72.67, 21.12],
    Kandla: [70.22, 23.03],
    Okha: [69.07, 22.47],
    Karwar: [74.12, 14.8],
    Goa: [73.8, 15.4],
    Gangavaram: [83.45, 17.65],
    "New Mangalore": [74.8, 12.91],
    Vizag: [83.3, 17.7],
    Antwerp: [4.4, 51.3],
    Dunkirk: [2.38, 51.03],
    Sagunto: [-0.27, 39.67],
    Ravenna: [12.2, 44.42],
  };

  const importantPorts = [
    "Hazira",
    "Kandla",
    "Okha",
    "Karwar",
    "Goa",
    "Gangavaram",
    "New Mangalore",
    "Vizag",
    "Antwerp",
    "Dunkirk",
    "Sagunto",
    "Ravenna",
  ];

  const labelOffsets = {
    // India
    Hazira: [18, 5],

    // Separate Kandla and Okha
    Kandla: [5, -14],
    Okha: [-52, -6],

    Goa: [-42, 24],
    Karwar: [6, -4],

    Gangavaram: [12, -18],
    Vizag: [12, 6],
    "New Mangalore": [6, 16],

    // Europe
    Antwerp: [12, 10],
    Dunkirk: [12, 20],
    Sagunto: [-58, 8],
    Ravenna: [12, 8],
  };
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

            {/* Route underlays */}
            {routes.map((route) => (
              <Line
                key={`underlay-${route.from}-${route.to}`}
                from={route.coordinates[0]}
                to={route.coordinates[1]}
                stroke="white"
                strokeWidth={5}
                strokeOpacity={0.7}
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
                stroke={route.color}
                strokeWidth={2.5}
                strokeOpacity={1}
                strokeDasharray="3 6"
                strokeLinecap="round"
                className="ocean-route"
                style={{
                  animationDelay: `${index * 0.25}s`,
                }}
              />
            ))}
            {/* Port markers */}
            {importantPorts.map((port) => {
              const [x, y] = labelOffsets[port];
              const isHazira = port === "Hazira";

              return (
                <Marker key={`marker-${port}`} coordinates={ports[port]}>
                  {/* Port marker */}
                  <circle
                    r={isHazira ? 8 : 5}
                    fill="#244081"
                    stroke="white"
                    strokeWidth={2}
                  />

                  {/* Hazira outer ring */}
                  {isHazira && (
                    <circle
                      r={14}
                      fill="none"
                      stroke="#244081"
                      strokeWidth={1.5}
                      strokeOpacity={0.45}
                    />
                  )}

                  {/* Label background */}

                  {/* Label */}
                  <text
                    x={x}
                    y={y}
                    className="fill-bulk-blue text-[10px] font-bold uppercase tracking-[0.1em]"
                    style={{
                      paintOrder: "stroke",
                      stroke: "white",
                      strokeWidth: 3,
                      strokeLinejoin: "round",
                    }}
                  >
                    {port}
                  </text>
                </Marker>
              );
            })}
          </ComposableMap>
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
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: route.color }}
                />

                <p className="text-[9px] uppercase tracking-[0.25em] text-white/45">
                  {route.cargo}
                </p>
              </div>

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
              <Icon size={25} strokeWidth={1.5} className="text-white" />
              <span className="max-w-[150px] text-[10px] font-medium uppercase leading-4 tracking-[0.12em] text-white/80">
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
            backgroundImage: "url('/images/oceans-closing.png')",
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
