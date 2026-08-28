import Image from "next/image";
import Reveal from "./Reveal";

export default function PhotoInterrupt() {
  return (
    <section className="relative w-full bg-black">
      {/* Below lg: photo full-bleed, headline sits in the black space beneath it (never
          overlaid on the image). At lg+: side-by-side — photo left, headline in the negative
          space to the right. Container height/object-position are tuned per breakpoint so
          object-fit:cover keeps the same crop (CAN'T mark / arm / hands, no wrinkled shirt or
          pants) at each column width — mobile/tablet values are unchanged from the approved
          crop; lg was recalculated for its new (narrower) column width. */}
      <div className="lg:flex lg:items-center">
        <div className="relative h-[32vh] min-h-[220px] w-full sm:h-[48vh] sm:min-h-[320px] lg:h-[56vh] lg:min-h-[420px] lg:w-[56%]">
          <Image
            src="/images/cant-shirt-detail.jpeg"
            alt="Detail of a CAN'T garment, worn."
            fill
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover object-[center_7%] grayscale sm:object-[center_9%] lg:object-[center_11%]"
          />
        </div>

        <div className="px-5 py-8 sm:px-8 sm:py-10 lg:flex-1 lg:py-0 lg:pl-10 lg:pr-8">
          <Reveal>
            <p className="text-3xl leading-[1.05] font-black uppercase tracking-tight text-white sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              LUXURY WITH AN
              <br />
              EDGE.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
