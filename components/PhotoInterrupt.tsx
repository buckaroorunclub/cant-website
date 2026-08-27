import Image from "next/image";
import Reveal from "./Reveal";

export default function PhotoInterrupt() {
  return (
    <section className="relative w-full bg-charcoal">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]">
        <div className="relative h-[78vh] min-h-[460px] w-full lg:h-[92vh]">
          <Image
            src="/images/cant-shirt-detail.jpeg"
            alt="Detail of a CAN'T garment, worn."
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-[center_20%] grayscale"
          />
        </div>

        <div className="flex items-end px-5 py-10 lg:px-12 lg:py-14">
          <Reveal>
            <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              NOT FOR EVERYONE.
            </p>
            <p className="mt-3 font-serif text-base italic text-grey">
              It was never supposed to be.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
