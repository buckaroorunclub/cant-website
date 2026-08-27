import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/cant-gathering-wide.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center grayscale sm:block"
        />
        <Image
          src="/images/cant-gathering-vertical.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="block object-cover object-top grayscale sm:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 w-full px-5 pb-8 sm:px-8 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[11px] tracking-[0.3em] text-grey sm:mb-6">
            COMING SOON
          </p>
          <h1 className="max-w-3xl font-sans text-[15vw] leading-[0.92] font-black tracking-tight text-white sm:text-[9vw] lg:text-[7.5rem]">
            THEY SAID
            <br />
            YOU CAN&apos;T.
          </h1>
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
