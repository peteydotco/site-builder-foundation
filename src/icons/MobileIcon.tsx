import React from 'react';

export default function MobileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      preserveAspectRatio="none"
      style={{ display: 'block' }}
      {...props}
    >
      <g id="Icon">
        <path d="M9 15H3V17H9V15Z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0H3C1.34315 0 0 1.34315 0 3V17C0 18.6569 1.34315 20 3 20H9C10.6569 20 12 18.6569 12 17V3C12 1.34315 10.6569 0 9 0ZM2 3C2 2.44772 2.44772 2 3 2H9C9.55228 2 10 2.44772 10 3V17C10 17.5523 9.55228 18 9 18H3C2.44772 18 2 17.5523 2 17V3Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
