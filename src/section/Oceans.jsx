import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
function Oceans() {
  const photographs = [
    {
      image: "/images/steel-loading-1.png",
      label: "Steel Loading",
    },
    {
      image: "/images/steel-loading-2.png",
      label: "Global Distribution",
    },
    {
      image: "/images/steel-loading-3.png",
      label: "Port Operations",
    },
  ];

  return (
    <section id="network" className="overflow-hidden bg-bulk-blue text-white">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60 md:text-xs">
                Oceans
              </p>

              <span className="h-px w-12 bg-white/35" />
            </div>

            <h2 className="font-serif text-5xl leading-[0.9] tracking-tight md:text-7xl">
              Connected
              <br />
              by the sea.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/65 md:justify-self-end md:text-base">
            From Asia to the Middle East, Africa and beyond, our network
            connects cargo, vessels and ports across key maritime routes.
          </p>
        </div>
      </div>
      {/* Maritime Map */}
      {/* Maritime Map */}
      <div className="border-y border-white/25">
        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={3}
          centerOnInit
          doubleClick={{
            mode: "zoomIn",
            step: 0.8,
          }}
          pinch={{
            disabled: false,
          }}
          wheel={{
            disabled: false,
            step: 0.15,
          }}
          panning={{
            disabled: false,
          }}
          limitToBounds={true}
        >
          <TransformComponent wrapperClass="!w-full" contentClass="!w-full">
            <img
              src="/images/world-image.png"
              alt="Bulk Asia maritime network and shipping routes"
              className="block h-auto w-full select-none"
              draggable="false"
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
      {/* Steel / Port Photography */}
      {/* <div className="mx-auto max-w-7xl px-4 py-4 md:px-8 md:py-8">
        <div className="grid gap-3 md:grid-cols-3">
          {photographs.map((photo) => (
            <figure key={photo.label} className="group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <figcaption className="mt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/55">
                {photo.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div> */}
      {/* Closing */}
      <div className="relative min-h-[300px] overflow-hidden md:min-h-[420px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/oceans-closing.png')",
          }}
        />

        <div className="absolute inset-0 bg-bulk-blue/50" />

        <div className="relative z-10 flex min-h-[300px] items-end px-6 py-10 md:min-h-[420px] md:px-8 md:py-14">
          <div className="flex w-full items-end justify-between gap-8">
            <p className="max-w-xl font-serif text-3xl leading-tight md:text-5xl">
              More than ports.
              <br />A wider horizon.
            </p>

            <p className="hidden text-right text-[16px] uppercase leading-6 tracking-[0.3em] text-white/90 md:block">
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
