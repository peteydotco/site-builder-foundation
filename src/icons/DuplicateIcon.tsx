import React from 'react';

export default function DuplicateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      preserveAspectRatio="none"
      style={{ display: 'block' }}
      {...props}
    >
      <path
        id="Icon"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14V0H14V4H18V18H4V14H0ZM2 2H12V12H2V2ZM6 14V16H16V6H14V14H6Z"
        fill="currentColor"
      />
    </svg>
  );
}
