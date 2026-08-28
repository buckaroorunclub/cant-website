import Reveal from "./Reveal";
import FirstAccessForm from "./FirstAccessForm";

export default function FirstAccess() {
  return (
    <section
      id="first-access"
      className="relative bg-charcoal px-5 pt-24 pb-14 sm:px-8 sm:pt-32 sm:pb-40"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-10 flex items-center gap-4 sm:mb-14">
          <span className="h-px flex-1 bg-line-strong" />
          <span className="text-[11px] tracking-[0.3em] text-grey">FIRST ACCESS</span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mb-6 text-[13vw] leading-[0.98] font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
            YOU&apos;LL KNOW
            <br />
            BEFORE THEY DO.
          </h2>
          <p className="mb-12 max-w-sm font-serif text-lg italic text-grey sm:mb-14">
            First drop. First access. No noise.
          </p>
          <FirstAccessForm />
        </Reveal>
      </div>
    </section>
  );
}
