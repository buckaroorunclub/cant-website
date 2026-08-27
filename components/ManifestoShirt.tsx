import Image from "next/image";
import Reveal from "./Reveal";

export default function ManifestoShirt() {
  return (
    <section className="relative w-full bg-black px-5 py-20 sm:px-8 sm:py-40">
      <Reveal className="ml-auto w-[94%] sm:w-[68%] lg:w-[52%]">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src="/images/cant-manifesto-shirt.jpeg"
            alt="A CAN'T shirt reading: for those who were told they can't and refused to accept it."
            fill
            sizes="(min-width: 1024px) 52vw, (min-width: 640px) 68vw, 94vw"
            className="object-cover object-top grayscale"
          />
        </div>
        <p className="mt-6 text-[11px] tracking-[0.3em] text-grey">
          BECOMING PHYSICAL.
        </p>
      </Reveal>
    </section>
  );
}
