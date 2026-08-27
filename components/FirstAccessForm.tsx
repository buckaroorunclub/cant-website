"use client";

import { useId, useState, type FormEvent } from "react";

type Status = "idle" | "invalid" | "submitting" | "success";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function FirstAccessForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const inputId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus("invalid");
      return;
    }

    setStatus("submitting");

    // Simulated success — no backend wired up yet.
    window.setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  if (status === "success") {
    return (
      <div className="flex min-h-[92px] flex-col items-start gap-2 border-t border-line-strong pt-6" role="status">
        <p className="text-sm tracking-[0.15em] text-white">YOU&apos;RE ON THE LIST.</p>
        <p className="text-sm text-grey">We&apos;ll reach out before anyone else knows.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-md">
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
        <input
          id={inputId}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="YOUR EMAIL"
          value={email}
          disabled={status === "submitting"}
          aria-invalid={status === "invalid"}
          aria-describedby={status === "invalid" ? `${inputId}-error` : undefined}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "invalid") setStatus("idle");
          }}
          className={`w-full border bg-transparent px-4 py-4 text-base tracking-[0.05em] text-white placeholder:text-grey-dim focus:outline-none disabled:opacity-50 sm:py-3.5 sm:text-sm ${
            status === "invalid" ? "border-white" : "border-line-strong focus:border-white"
          }`}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="whitespace-nowrap border border-white bg-white px-6 py-4 text-[11px] font-semibold tracking-[0.25em] text-black transition-opacity hover:opacity-80 disabled:opacity-60 sm:py-3.5"
        >
          {status === "submitting" ? "JOINING…" : "JOIN FIRST ACCESS"}
        </button>
      </div>
      <p
        id={`${inputId}-error`}
        role="alert"
        className={`mt-3 text-xs tracking-[0.1em] text-white/80 transition-opacity ${
          status === "invalid" ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        ENTER A VALID EMAIL.
      </p>
    </form>
  );
}
