import Image from "next/image";
import Reveal from "./Reveal";

export default function PhotoInterrupt() {
  return (
    <section className="relative w-full bg-charcoal">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]">
        <div className="relative h-[78vh] min-h-[460px] w-full lg:h-[64vh]">
          {/* Desktop (lg+): shorter container + a higher object-position anchor crops the
              bottom of the frame so the wrinkled lower shirt/waist area drops out of view,
              while keeping the top essentially where it was — CAN'T mark, tattooed arm, and
              hands stay comfortably inside the visible window. Mobile/tablet unchanged. */}
          <Image
            src="/images/cant-shirt-detail.jpeg"
            alt="Detail of a CAN'T garment, worn."
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-[center_20%] grayscale lg:object-[center_12%]"
          />
        </div>

        <div className="flex items-end px-5 py-10 lg:px-12 lg:py-14">
          <Reveal>
            <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              NOT FOR EVERYONE.
            </p>
            <p className="mt-3 font-serif text-base italic text-grey">
              Never was.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
