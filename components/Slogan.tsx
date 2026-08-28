import Image from "next/image";
import Reveal from "./Reveal";

export default function Slogan() {
  return (
    <section className="relative border-t border-b border-line bg-black px-5 pt-16 pb-12 sm:px-8 sm:pt-28 sm:pb-16 lg:px-16 lg:pt-32 lg:pb-20">
      <div className="mr-auto w-full sm:w-[80%] lg:w-[70%]">
        {/* Natural width/height sizing (no object-cover, no computed aspect-ratio box) —
            the entire printed message on the shirt is guaranteed visible, uncropped and
            undistorted, because the image is never fit into a box shaped differently from
            its own proportions. */}
        <Reveal>
          <Image
            src="/images/cant-manifesto-shirt.jpeg"
            alt="Back of a CAN'T shirt reading: for those who were told they can't and refused to accept it."
            width={3663}
            height={3818}
            sizes="(min-width: 1024px) 70vw, (min-width: 640px) 80vw, 100vw"
            className="h-auto w-full grayscale"
          />
        </Reveal>

        {/* Caption lives inside the photograph's own column (not the full section width), so
            it sits in the negative space right at the image's lower-right corner rather than
            drifting to the extreme edge of the viewport. Slight inset + reduced top gap at
            sm+ pulls it in from the exact edge and closer beneath the photo; mobile untouched. */}
        <Reveal delay={120} className="mt-3 flex justify-end sm:mt-2 sm:pr-2 lg:pr-3">
          <p className="max-w-[13rem] text-right text-[10px] tracking-[0.3em] text-grey sm:max-w-[15rem] sm:text-[11px]">
            BUILT FOR MORE. MADE FOR THOSE WHO MOVE LIKE IT.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
