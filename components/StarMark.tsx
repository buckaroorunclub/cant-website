type StarMarkProps = {
  className?: string;
};

export default function StarMark({ className = "h-4 w-4" }: StarMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2c.9 6.5 3.5 9.1 10 10-6.5.9-9.1 3.5-10 10-.9-6.5-3.5-9.1-10-10 6.5-.9 9.1-3.5 10-10Z" />
    </svg>
  );
}
