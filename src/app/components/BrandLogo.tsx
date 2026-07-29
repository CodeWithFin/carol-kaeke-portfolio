/** Boundary-free artistic CK wordmark — Fraunces italic, inherits color. */
export function BrandLogo({
  className,
  title = "Caroline Kaeke",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <span
      className={className}
      title={title}
      aria-label={title}
      style={{
        fontFamily: "'Fraunces', serif",
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: "1.65rem",
        letterSpacing: "-0.04em",
        lineHeight: 1,
        color: "inherit",
      }}
    >
      CK
    </span>
  );
}
