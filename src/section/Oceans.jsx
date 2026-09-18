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

  return (
    <section id="network" className="overflow-hidden bg-bulk-blue text-white">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-8 py-28 md:py-36">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/60">
              Oceans
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] md:text-7xl">
              Connected
              <br />
              by the sea.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/65">
            From Indian ports to destinations across the world, our network
            connects cargo, vessels, ports and people through every stage of the
            journey.
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="mx-auto max-w-7xl px-8 pb-24">
        <div className="relative aspect-[2/1]">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              center: [35, 15],
              scale: 260,
            }}
            className="h-full w-full"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(255,255,255,0.10)"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth={0.5}
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

            {/* Shipping routes */}
            {routes.map((route, index) => (
              <Line
                key={`${route.from}-${route.to}`}
                from={route.coordinates[0]}
                to={route.coordinates[1]}
                stroke="white"
                strokeWidth={index === 0 ? 1.8 : 1.4}
                strokeOpacity={index === 0 ? 0.8 : 0.45}
                strokeDasharray="1 7"
                strokeLinecap="round"
                className="ocean-route"
                style={{
                  animationDelay: `${index * 0.35}s`,
                }}
              />
            ))}

            {/* Hazira */}
            <Marker coordinates={hazira}>
              <circle r={5} fill="white" />
              <circle r={10} fill="none" stroke="white" strokeOpacity={0.35} />
              <text
                textAnchor="start"
                x="14"
                y="4"
                className="fill-white text-[9px] uppercase tracking-[0.2em]"
              >
                Hazira
              </text>
            </Marker>

            {/* Destination markers */}
            {routes.map((route) => {
              const labelOffsets = {
                Antwerp: [8, -8],
                Dunkirk: [8, 12],
                Sagunto: [8, 4],
                Ravenna: [8, 4],
                Goa: [8, 4],
                Vizag: [8, 4],
              };

              const [x, y] = labelOffsets[route.to];

              return (
                <Marker
                  key={`marker-${route.to}`}
                  coordinates={route.coordinates[1]}
                >
                  <circle r={3} fill="white" fillOpacity={0.9} />

                  <text
                    textAnchor="start"
                    x={x}
                    y={y}
                    className="fill-white text-[8px] uppercase tracking-[0.15em]"
                  >
                    {route.to}
                  </text>
                </Marker>
              );
            })}
          </ComposableMap>
        </div>
      </div>

      {/* Route cards */}
      {/* Route cards */}
      <div className="border-t border-white/20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {routes.map((route) => (
            <article
              key={`${route.from}-${route.to}`}
              className="border-b border-white/20 px-5 py-4 md:border-r"
            >
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/45">
                {route.cargo}
              </p>

              <div className="mt-2 flex items-center gap-2 text-xs">
                <span>{route.from}</span>
                <span className="text-white/30">→</span>
                <span>{route.to}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <div className="border-t border-white/20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {[
            { label: "Vessel & Chartering", icon: Anchor },
            { label: "Port Operations & Stevedores", icon: Container },
            { label: "Warehousing & Cargo Handling", icon: Boxes },
            { label: "Transporters & Last Mile Truckers", icon: Truck },
            { label: "International Freight Movements", icon: Globe2 },
            { label: "End-to-End Solutions", icon: ShieldCheck },
          ].map(({ label, icon: Icon }, index) => (
            <div
              key={label}
              className={`flex items-center gap-3 border-b border-white/20 px-5 py-5 ${
                index !== 0 ? "lg:border-l" : ""
              }`}
            >
              <Icon
                size={19}
                strokeWidth={1.4}
                className="shrink-0 text-white/70"
              />

              <span className="text-[9px] uppercase leading-4 tracking-[0.12em] text-white/65">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <div className="border-t border-white/20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {[
            "Vessel & Chartering",
            "Port Operations & Stevedores",
            "Warehousing & Cargo Handling",
            "Transporters & Last Mile Truckers",
            "International Freight Movements",
            "End-to-End Solutions",
          ].map((item, index) => (
            <div
              key={item}
              className={`p-6 text-xs uppercase tracking-[0.12em] text-white/65 ${
                index !== 0 ? "border-l border-white/20" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Oceans;
