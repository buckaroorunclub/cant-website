import Reveal from "./Reveal";
import StarMark from "./StarMark";

export default function StarSection() {
  return (
    <section className="relative h-[64vh] min-h-[440px] w-full overflow-hidden bg-black sm:h-[100vh]">
      <Reveal
        variant="scale"
        className="pointer-events-none absolute -top-[22vw] -right-[26vw] h-[112vw] w-[112vw] text-white/90 sm:-top-[9vw] sm:-right-[8vw] sm:h-[50vw] sm:w-[50vw] lg:-top-[6vw] lg:-right-[6vw] lg:h-[36vw] lg:w-[36vw]"
      >
        <StarMark className="h-full w-full" />
      </Reveal>

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-10 sm:px-8 sm:pb-24 lg:px-16">
        <Reveal delay={250} className="max-w-[15rem] sm:max-w-md">
          <p className="text-3xl leading-[1.05] font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            WE ALL CAN
            <br />
            BECOME A{" "}
            <br className="sm:hidden" />
            STAR.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
