import ckMark from "../../../assets/logo/ck-app-icon.png";

/** App-icon monogram for Caroline Kaeke — used in nav and as favicon. */
export function BrandLogo({
  size = 40,
  className,
  title = "Caroline Kaeke",
}: {
  size?: number;
  className?: string;
  title?: string;
}) {
  return (
    <img
      src={ckMark}
      alt={title}
      width={size}
      height={size}
      className={className}
      draggable={false}
    />
  );
}
