import Reveal from "./Reveal";

export default function Manifesto() {
  return (
    <section className="relative bg-black px-5 pt-28 pb-36 sm:px-8 sm:pt-40 sm:pb-52">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-1 sm:gap-2">
          <Reveal
            as="h2"
            className="pl-0 text-[8vw] leading-[0.98] font-black tracking-tight text-grey sm:text-4xl lg:text-7xl"
          >
            GOOD.
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="pl-[6vw] text-[9vw] leading-[0.98] font-black tracking-tight text-white/90 sm:pl-12 sm:text-5xl lg:text-8xl"
          >
            WE WERE NEVER
          </Reveal>
          <Reveal
            as="h2"
            delay={160}
            className="pl-[6vw] pt-1 text-[11vw] leading-[0.98] font-black tracking-tight text-white sm:pl-12 sm:pt-2 sm:text-6xl lg:text-8xl"
          >
            LOOKING FOR
          </Reveal>
          <Reveal
            as="h2"
            delay={240}
            className="pl-[6vw] pt-2 text-[12vw] leading-none font-black tracking-tight text-white sm:pl-12 sm:pt-4 sm:text-7xl lg:text-[7.5rem]"
          >
            PERMISSION.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
