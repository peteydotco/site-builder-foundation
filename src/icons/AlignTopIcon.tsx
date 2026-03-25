import React from 'react';

export default function AlignTopIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      preserveAspectRatio="none"
      style={{ display: 'block' }}
      {...props}
    >
      <g id="Icon">
        <path d="M18 0H0V2H18V0Z" fill="currentColor" />
        <path
          d="M8 14V7.32838L5 10.3284V7.49995L8.99995 3.5L13 7.50004V10.3285L10 7.32847V14H8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
