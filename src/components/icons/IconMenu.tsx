import type { SVGProps } from "react";

export function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={14}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 2V0H20V2H0ZM0 8V6H20V8H0ZM0 14V12H20V14H0Z"
        fill="currentColor"
      />
    </svg>
  );
}
