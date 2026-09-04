import type { SVGProps } from "react";

export function IconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M1.4 18L0 16.6L7.6 9L0 1.4L1.4 0L9 7.6L16.6 0L18 1.4L10.4 9L18 16.6L16.6 18L9 10.4L1.4 18Z"
        fill="currentColor"
      />
    </svg>
  );
}
