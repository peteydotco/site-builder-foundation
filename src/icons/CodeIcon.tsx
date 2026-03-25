import React from 'react';

export default function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      preserveAspectRatio="none"
      style={{ display: 'block' }}
      {...props}
    >
      <g id="Icon">
        <path d="M14.55 0L9.55001 18H7.45001L12.45 0H14.55Z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 4.16795V6.57165L2.35748 9L6 11.4283V13.832L0 9.83205V8.16795L6 4.16795Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 4.16795V6.57165L19.6425 9L16 11.4283V13.832L22 9.83205V8.16795L16 4.16795Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
