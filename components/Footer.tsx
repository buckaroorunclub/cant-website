import Image from "next/image";

const INSTAGRAM_URL = "https://www.instagram.com/itsjustcant/";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-black px-5 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <Image
          src="/images/cant-logo.png"
          alt="CAN'T"
          width={120}
          height={120}
          className="h-5 w-auto"
        />

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] tracking-[0.25em] text-grey transition-colors hover:text-white"
        >
          @ITSJUSTCANT
        </a>

        <p className="text-[11px] tracking-[0.15em] text-grey-dim">
          © {new Date().getFullYear()} CAN&apos;T. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
