import Image from "next/image";
import Reveal from "./Reveal";

export default function Slogan() {
  return (
    <section className="relative border-t border-b border-line bg-black px-5 pt-16 pb-12 sm:px-8 sm:pt-28 sm:pb-16 lg:px-16 lg:pt-32 lg:pb-20">
      {/* lg+: photo and statement sit side by side, photo left / statement in the negative
          space to the right. Below lg: stacked, photo first — the negative space to the
          right of a 70%-wide photo is too narrow on tablet for the statement to carry any
          real presence, so it drops beneath the photo there too, same as mobile. */}
      <div className="lg:flex lg:items-end lg:gap-12">
        {/* Natural width/height sizing (no object-cover, no computed aspect-ratio box) —
            the entire printed message on the shirt is guaranteed visible, uncropped and
            undistorted, because the image is never fit into a box shaped differently from
            its own proportions. Image sizing/crop unchanged from the approved version. */}
        <Reveal className="mr-auto w-full sm:w-[80%] lg:mr-0 lg:w-[70%]">
          <Image
            src="/images/cant-manifesto-shirt.jpeg"
            alt="Back of a CAN'T shirt reading: for those who were told they can't and refused to accept it."
            width={3663}
            height={3818}
            sizes="(min-width: 1024px) 70vw, (min-width: 640px) 80vw, 100vw"
            className="h-auto w-full grayscale"
          />
        </Reveal>

        {/* Statement 3 — moved off the photo entirely and into the black negative space.
            Primary line carries real weight; secondary line stays small, tracked, and muted
            so the hierarchy reads clearly at a glance. */}
        <Reveal delay={150} className="mt-8 sm:mt-10 lg:mt-0 lg:max-w-xs lg:flex-1">
          <p className="text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            BUILT FOR MORE.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-grey sm:mt-5 sm:text-sm">
            MADE FOR THOSE
            <br />
            WHO MOVE LIKE IT.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
