import { SVGProps } from 'react';

const DatabaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={96}
    height={96}
    {...props}
  >
    <path d="M6 2a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6zM5 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H5zm0 8a1 1 0 0 0-1 1v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a1 1 0 0 0-1-1H5z" />
  </svg>
);

export default DatabaseIcon;
