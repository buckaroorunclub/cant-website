import Reveal from "./Reveal";
import StarMark from "./StarMark";

export default function StarSection() {
  return (
    <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden bg-black sm:h-[100vh]">
      <Reveal
        variant="scale"
        className="pointer-events-none absolute -top-[3vw] -right-[11vw] h-[47vw] w-[47vw] text-white/90 sm:-top-[2.2vw] sm:-right-[6vw] sm:h-[35vw] sm:w-[35vw] lg:-top-[1.5vw] lg:-right-[4vw] lg:h-[25vw] lg:w-[25vw]"
      >
        <StarMark className="h-full w-full" />
      </Reveal>

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-8 sm:px-8 sm:pb-24 lg:px-16">
        <Reveal delay={250} className="ml-5 -mt-5 max-w-[15rem] sm:max-w-md">
          <p className="text-3xl leading-[1.05] font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            NOT FOR
            <br />
            EVERYONE.
          </p>
          <p className="mt-3 font-serif text-lg italic text-grey sm:mt-4 sm:text-xl">
            Never was.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
