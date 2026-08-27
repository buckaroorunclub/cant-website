import Reveal from "./Reveal";

export default function Slogan() {
  return (
    <section className="relative border-t border-b border-line bg-black px-5 py-24 sm:px-8 sm:py-44 lg:px-16">
      <Reveal>
        <p className="text-[11vw] leading-[1.05] font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          DO IT BECAUSE
          <br />
          THEY SAID
        </p>
        <p
          aria-hidden="true"
          className="pointer-events-none -mt-1 -ml-1 -rotate-3 text-[17vw] leading-none text-white/95 sm:-mt-4 sm:text-8xl lg:text-9xl"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          YOU CAN&apos;T.
        </p>
        <span className="sr-only">You can&apos;t.</span>
      </Reveal>
    </section>
  );
}
