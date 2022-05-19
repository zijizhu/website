import { SVGProps } from 'react';

const PersonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={256}
    height={256}
    {...props}
  >
    <path
      fill={props.fill}
      d="M26.9 118.6c-.5 0-1-.1-1.5-.4-1.4-.8-1.9-2.6-1.1-4.1C32.4 99.9 47.6 91 64 91s31.6 8.9 39.7 23.1c.8 1.4.3 3.3-1.1 4.1s-3.3.3-4.1-1.1C91.4 104.7 78.2 97 64 97s-27.4 7.7-34.5 20.1c-.5.9-1.5 1.5-2.6 1.5zm50.7-89.5-.4-.6c-2.9-4.1-7.7-6.6-12.7-6.6H56c-12.7 0-23 10.3-23 23 0 1.7 1.3 3 3 3h5.4c11.5 0 23.2 0 31.6-7.5v.1c.4-.4.8-.7 1.1-1.1 1.1-1.2 3-1.4 4.2-.3 1.3 1.1 1.4 3.1.2 4.4l-1.4 1.4c-1.3 1.3-.8 3.5.9 4.2 1 .4 2.1.6 3.2.7 1.5.2 2.7 1.4 2.7 3v6.8c0 10.6-8 19.7-18.6 20.4-11.5.8-21.2-8.4-21.3-19.9 0-1.6-1.2-3-2.8-3.1-1.7-.1-3.2 1.3-3.2 3 0 14.3 11.7 26 26 26 13.9 0 25.3-10.9 26-24.7V43c0-7.2-5.4-13.1-12.4-13.9z"
    />
  </svg>
);

export default PersonIcon;
