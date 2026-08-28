import Reveal from "./Reveal";

export default function StatementSequence() {
  return (
    <section className="relative border-t border-b border-line bg-black">
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
      <div className="flex justify-end px-5 pt-16 pb-32 sm:px-8 sm:py-48 lg:px-16 lg:py-56">
        <Reveal className="max-w-[13rem] text-right sm:max-w-[22rem] lg:max-w-sm">
          <h3 className="text-2xl leading-snug font-semibold tracking-tight text-white sm:text-[2.2rem] lg:text-[2.6rem]">
            YOU CAN&apos;T BECOME UNFORGETTABLE TRYING TO FIT IN.
          </h3>
        </Reveal>
      </div>
    </section>
  );
}
