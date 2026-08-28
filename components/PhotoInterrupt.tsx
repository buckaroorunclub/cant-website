import Image from "next/image";
import Reveal from "./Reveal";

export default function PhotoInterrupt() {
  return (
    <section className="relative w-full bg-charcoal">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]">
        <div className="relative h-[32vh] min-h-[220px] w-full sm:h-[48vh] sm:min-h-[320px] lg:h-[64vh] lg:min-h-[460px]">
          {/* Mobile/tablet (below lg): the container was previously tall enough (78vh) that
              object-fit:cover had no vertical overflow to crop at all — it showed the FULL
              height of the photo (down through the wrinkled shirt and camo pants) and only
              cropped the sides. Shortening the container here forces a real vertical crop.
              Desktop (lg+): unchanged — same shorter container + higher object-position anchor
              that was already approved, crops the wrinkled lower shirt/waist while keeping the
              top essentially where it was. CAN'T mark, tattooed arm, and hands stay comfortably
              inside the visible window at every breakpoint. */}
          <Image
            src="/images/cant-shirt-detail.jpeg"
            alt="Detail of a CAN'T garment, worn."
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-[center_7%] grayscale sm:object-[center_9%] lg:object-[center_12%]"
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
