import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[max(100svh,560px)] w-full items-end overflow-hidden bg-black sm:h-[100svh] sm:min-h-[560px]"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Desktop / tablet — full-width environmental composition (object-cover keeps the
            entire group photo in frame; only top/bottom get trimmed to fill the viewport) */}
        <Image
          src="/images/cant-gathering-wide.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover grayscale sm:block"
        />
        {/* Desktop / tablet — same photograph, lightly blurred; this layer paints ON TOP of the
            sharp base above, so its mask controls where the BLUR is visible, not where the
            sharp layer is visible. Transparent = blur hidden (sharp base shows through, over
            Evan); white = blur visible (over the crowd). (White/transparent, not black —
            CSS mask gradients default to luminance mode, which treats black as hidden too.) */}
        <Image
          src="/images/cant-gathering-wide.jpeg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="hidden object-cover grayscale sm:block"
          style={{
            filter: "blur(4px)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, transparent 23%, white 30%, white 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, transparent 23%, white 30%, white 100%)",
          }}
        />
        {/* Mobile — dedicated mobile photograph with selective blur already baked into the
            source image (Evan sharp, everyone else soft). No CSS blur, mask, or duplicate
            layer here by design: shown at its natural width with no crop/zoom, so Evan's
            position on the left is exactly as shot, not repositioned. */}
        <Image
          src="/images/cant-gathering-mobile.JPG"
          alt=""
          width={2668}
          height={4000}
          priority
          sizes="100vw"
          className="absolute left-0 top-0 w-full h-auto grayscale sm:hidden"
        />
        {/* Vertical depth gradient (desktop/tablet) — mood + legibility */}
        <div className="absolute inset-0 hidden bg-gradient-to-t from-black via-black/30 to-black/10 sm:block" />
        {/* Mobile — smooth black gradient over the bottom of the photograph: clear through
            Evan and the room, then dissolves to solid black by ~69vh, right where the
            (uncropped) image's own content naturally ends — so there's no seam between photo
            and background, just one continuous composition */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent 0%, transparent 38%, black 69%, black 100%)",
          }}
        />
        {/* Restrained dark pool behind the headline (desktop/tablet) — enough contrast for the
            type without flattening the blurred room behind it into solid black */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 55% 50% at 82% 78%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 45%, transparent 75%)",
          }}
        />
      </div>

      {/* Desktop / tablet headline — unchanged */}
      <div className="relative z-10 hidden w-full sm:block sm:px-8 sm:pb-28 lg:pb-40">
        <div className="mx-auto flex max-w-7xl justify-end">
          <div className="text-right">
            <h1 className="font-sans text-[9vw] leading-[0.92] font-black tracking-tight text-white lg:text-[7.5rem]">
              THEY SAID
              <br />
              YOU CAN&apos;T.
            </h1>
          </div>
        </div>
      </div>

      {/* Mobile headline — absolutely positioned within the hero (not flex/padding-driven like
          desktop) so it can sit at an exact top offset in the black field below the photo */}
      <div
        className="absolute inset-x-6 z-10 text-right sm:hidden"
        style={{ top: "73vh" }}
      >
        <h1
          className="font-sans font-black tracking-tight text-white"
          style={{ fontSize: "clamp(52px, 14vw, 72px)", lineHeight: 0.88 }}
        >
          THEY SAID
          <br />
          YOU CAN&apos;T.
        </h1>
      </div>

      {/* Mobile scroll indicator — fixed vh offset, well clear of the headline above it */}
      <div
        className="absolute inset-x-0 z-10 flex justify-center sm:hidden"
        style={{ top: "88vh" }}
      >
        <div className="flex flex-col items-center gap-3 text-grey">
          <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
          <span className="h-8 w-px animate-pulse bg-line-strong motion-reduce:animate-none" />
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
