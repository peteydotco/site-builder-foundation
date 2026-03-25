import React from 'react';

export default function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      preserveAspectRatio="none"
      style={{ display: 'block' }}
      {...props}
    >
      <path
        id="Icon"
        d="M9 0H7V7H0V9H7V16H9V9H16V7H9V0Z"
        fill="currentColor"
      />
    </svg>
  );
}
