import Image from "next/image";
import Reveal from "./Reveal";

export default function ManifestoShirt() {
  return (
    <section className="relative border-b border-line bg-black px-5 pt-20 pb-14 sm:px-8 sm:pt-32 sm:pb-20 lg:px-16 lg:pt-40 lg:pb-24">
      <Reveal>
        <h2 className="max-w-3xl text-[7vw] leading-[0.95] font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
          THEY SAID YOU CAN&apos;T.
          <br />
          NOW WATCH.
        </h2>
      </Reveal>

      {/* Natural width/height sizing — no object-cover, no forced aspect ratio — so the
          flat-lay composition (shirt, beanie, socks) is never cropped or distorted */}
      <div className="ml-auto mt-10 w-full sm:mt-14 sm:w-[68%] lg:mt-16 lg:w-[52%]">
        <Reveal delay={120}>
          <Image
            src="/images/cant-clothes.JPEG"
            alt="CAN'T apparel laid out: shirt, beanie, and socks."
            width={1320}
            height={1575}
            sizes="(min-width: 1024px) 52vw, (min-width: 640px) 68vw, 100vw"
            className="h-auto w-full grayscale"
          />
        </Reveal>
      </div>
    </section>
  );
}
