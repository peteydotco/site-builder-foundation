import React from 'react';

export default function DesktopIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 18 17"
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
        d="M0 0H18V13H10V15H13V17H5V15H8V13H0V0ZM2 2V11H16V2H2Z"
        fill="currentColor"
      />
    </svg>
  );
}
