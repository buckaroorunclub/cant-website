import Reveal from "./Reveal";

export default function StatementSequence() {
  return (
    <section className="relative border-t border-line bg-black">
      {/* Statement one — oversized, left aligned, nearly edge to edge */}
      <div className="px-4 py-28 sm:px-6 sm:py-36 lg:px-8">
        <Reveal>
          <h3 className="text-[14vw] leading-[0.88] font-black tracking-tighter text-white sm:text-[9vw] lg:text-[7.5rem]">
            I CAN&apos;T EXPLAIN
            <br />
            THE VISION TO PEOPLE
            <br />
            WHO CAN&apos;T SEE IT.
          </h3>
        </Reveal>
      </div>

      {/* Statement two — small, pushed right, drowned in negative space */}
      <div className="flex justify-end px-5 py-32 sm:px-8 sm:py-48 lg:px-16 lg:py-56">
        <Reveal className="max-w-[13rem] text-right sm:max-w-[22rem] lg:max-w-sm">
          <h3 className="text-2xl leading-snug font-semibold tracking-tight text-white sm:text-[2.2rem] lg:text-[2.6rem]">
            YOU CAN&apos;T BECOME UNFORGETTABLE TRYING TO FIT IN.
          </h3>
        </Reveal>
      </div>

      {/* Statement three — clean declaration broken by one raw, defiant mark */}
      <div className="border-t border-b border-line px-5 py-32 sm:px-8 sm:py-44 lg:px-16">
        <Reveal>
          <p className="text-3xl leading-[1.05] font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            DO IT BECAUSE
            <br />
            THEY SAID
          </p>
          <p
            aria-hidden="true"
            className="pointer-events-none -mt-1 -ml-1 -rotate-3 text-[13vw] leading-none text-white/95 sm:-mt-4 sm:text-8xl lg:text-9xl"
            style={{ fontFamily: "var(--font-marker)" }}
          >
            YOU CAN&apos;T.
          </p>
          <span className="sr-only">You can&apos;t.</span>
        </Reveal>
      </div>
    </section>
  );
}
