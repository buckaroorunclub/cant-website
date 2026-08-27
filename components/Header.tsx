"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import InstagramGlyph from "./InstagramGlyph";

const INSTAGRAM_URL = "https://www.instagram.com/itsjustcant/";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-sm border-b border-line" : "border-b border-transparent"
      }`}
    >
      {!scrolled && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-36 bg-gradient-to-b from-black/85 via-black/45 to-transparent"
        />
      )}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <a href="#top" aria-label="CAN'T — home" className="shrink-0">
          <Image
            src="/images/cant-logo.png"
            alt="CAN'T"
            width={140}
            height={140}
            priority
            className="h-5 w-auto sm:h-6"
          />
        </a>

        <nav className="flex items-center gap-4 sm:gap-8">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CAN'T on Instagram"
            className="text-grey transition-colors hover:text-white sm:hidden"
          >
            <InstagramGlyph className="h-[18px] w-[18px]" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[11px] tracking-[0.2em] text-grey transition-colors hover:text-white sm:inline-block"
          >
            @ITSJUSTCANT
          </a>
          <a
            href="#first-access"
            className="border border-line-strong px-3 py-2 text-[10px] font-medium tracking-[0.15em] text-white transition-colors hover:border-white sm:px-5 sm:text-[11px] sm:tracking-[0.2em]"
          >
            FIRST ACCESS
          </a>
        </nav>
      </div>
    </header>
  );
}
