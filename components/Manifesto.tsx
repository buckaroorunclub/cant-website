import Reveal from "./Reveal";

export default function Manifesto() {
  return (
    <section className="relative bg-black px-5 pt-28 pb-36 sm:px-8 sm:pt-40 sm:pb-52">
      <div className="mx-auto max-w-6xl">
        <Reveal as="p" className="mb-14 font-serif text-sm italic tracking-wide text-grey sm:mb-20">
          No noise. No explanation.
        </Reveal>

        <div className="flex flex-col gap-1 sm:gap-2">
          <Reveal as="h2" className="pl-0 text-[11vw] leading-[0.98] font-black tracking-tight text-grey sm:text-4xl lg:text-5xl">
            FOR THOSE
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="pl-[4vw] text-[13vw] leading-[0.98] font-black tracking-tight text-white sm:pl-10 sm:text-6xl lg:text-7xl"
          >
            WHO WERE TOLD
          </Reveal>
          <Reveal
            as="h2"
            delay={160}
            className="pl-[5vw] pt-2 text-[15vw] leading-none tracking-tight text-white sm:pl-24 sm:pt-4 sm:text-8xl lg:text-[9rem] font-[family-name:var(--font-marker)]"
          >
            THEY CAN&apos;T
          </Reveal>
        </div>

        <Reveal delay={240} className="mt-8 flex justify-end pr-4 sm:mt-24 sm:pr-0">
          <p className="max-w-xs text-right font-serif text-2xl leading-snug text-white/75 italic sm:max-w-sm sm:text-3xl">
            And refused
            <br />
            to accept it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
