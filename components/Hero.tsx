import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Desktop / tablet — width-relative crop, immune to container aspect-ratio swings */}
        <Image
          src="/images/cant-gathering-wide.jpeg"
          alt=""
          width={5000}
          height={3335}
          priority
          sizes="260vw"
          className="absolute left-0 top-0 hidden max-w-none grayscale sm:block"
          style={{ width: "260%", height: "auto", transform: "translate(0%, -23%)" }}
        />
        {/* Mobile — separate crop tuned to the vertical photograph */}
        <Image
          src="/images/cant-gathering-vertical.jpeg"
          alt=""
          width={2668}
          height={4000}
          priority
          sizes="333vw"
          className="absolute left-0 top-0 max-w-none grayscale sm:hidden"
          style={{ width: "333%", height: "auto", transform: "translate(0%, -37%)" }}
        />
        {/* Vertical depth gradient (desktop/tablet) — mood + legibility */}
        <div className="absolute inset-0 hidden bg-gradient-to-t from-black via-black/30 to-black/10 sm:block" />
        {/* Vertical depth gradient (mobile) — reaches full black well before the headline so the client's lower body never fights the text for legibility */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to top, black 0%, black 38%, rgba(0,0,0,0.85) 50%, transparent 68%)",
          }}
        />
        {/* Privacy gradient (desktop/tablet) — dissolves the photograph into black past the client */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent 0%, transparent 58%, rgba(0,0,0,0.92) 68%, black 76%, black 100%)",
          }}
        />
        {/* Privacy gradient (mobile) — tuned separately for the vertical crop */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent 0%, transparent 76%, rgba(0,0,0,0.92) 86%, black 92%, black 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full px-5 pb-[calc(2rem+12svh)] sm:px-8 sm:pb-28 lg:pb-40">
        <div className="mx-auto flex max-w-7xl justify-end">
          <div className="text-right">
            <p className="mb-5 text-[11px] tracking-[0.3em] text-grey sm:mb-6">
              COMING SOON
            </p>
            <h1 className="font-sans text-[14vw] leading-[0.92] font-black tracking-tight text-white sm:text-[9vw] lg:text-[7.5rem]">
              THEY SAID
              <br />
              YOU CAN&apos;T.
            </h1>
          </div>
        </div>

        {/* Mobile: scroll indicator sits in normal flow beneath the headline, never overlapping it */}
        <div className="mt-10 flex justify-center sm:hidden">
          <div className="flex flex-col items-center gap-3 text-grey">
            <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
            <span className="h-8 w-px animate-pulse bg-line-strong motion-reduce:animate-none" />
          </div>
        </div>
      </div>

      {/* Desktop: scroll indicator, unchanged absolute placement */}
      <div className="absolute inset-x-0 bottom-7 z-10 hidden sm:flex sm:justify-center">
        <div className="flex flex-col items-center gap-3 text-grey">
          <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
          <span className="h-10 w-px animate-pulse bg-line-strong motion-reduce:animate-none" />
        </div>
      </div>
    </section>
  );
}
