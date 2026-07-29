import { useId } from "react";

export function BackIcon({ className, size = "1em" }: { className?: string; size?: number | string }) {
  const maskId = useId().replace(/:/g, "");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 0h48v48H0z" fill="none" />
      <defs>
        <mask id={maskId}>
          <path
            fill="#555"
            fillRule="evenodd"
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M44 40.836q-7.34-8.96-13.036-10.168t-10.846-.365V41L4 23.545L20.118 7v10.167q9.523.075 16.192 6.833q6.668 6.758 7.69 16.836Z"
            clipRule="evenodd"
          />
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask={`url(#${maskId})`} />
    </svg>
  );
}
