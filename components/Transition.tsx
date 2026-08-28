import Reveal from "./Reveal";
import StarMark from "./StarMark";

const WORD_CLASS =
  "text-xl font-normal uppercase tracking-[0.15em] text-white sm:text-2xl lg:text-3xl";
const STAR_CLASS = "h-3 w-3 text-white/80 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4";

export default function Transition() {
  return (
    <section className="relative bg-black px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
      {/* Below lg: two centered rows, matching the client's suggested break
          ("GYM ✦ STREET" / "✦ EVERYWHERE BETWEEN") exactly rather than relying on
          unpredictable text-wrap. Same five-item reveal sequence and delays as desktop. */}
      <div className="flex flex-col items-center gap-3 text-center sm:gap-4 lg:hidden">
        <div className="flex items-center gap-3 sm:gap-4">
          <Reveal>
            <span className={WORD_CLASS}>GYM</span>
          </Reveal>
          <Reveal delay={150}>
            <StarMark className={STAR_CLASS} />
          </Reveal>
          <Reveal delay={300}>
            <span className={WORD_CLASS}>STREET</span>
          </Reveal>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Reveal delay={450}>
            <StarMark className={STAR_CLASS} />
          </Reveal>
          <Reveal delay={600}>
            <span className={WORD_CLASS}>EVERYWHERE BETWEEN</span>
          </Reveal>
        </div>
      </div>

      {/* lg+: one centered line, as requested when there's room for it */}
      <div className="hidden items-center justify-center gap-5 text-center lg:flex">
        <Reveal>
          <span className={WORD_CLASS}>GYM</span>
        </Reveal>
        <Reveal delay={150}>
          <StarMark className={STAR_CLASS} />
        </Reveal>
        <Reveal delay={300}>
          <span className={WORD_CLASS}>STREET</span>
        </Reveal>
        <Reveal delay={450}>
          <StarMark className={STAR_CLASS} />
        </Reveal>
        <Reveal delay={600}>
          <span className={WORD_CLASS}>EVERYWHERE BETWEEN</span>
        </Reveal>
      </div>
    </section>
  );
}
