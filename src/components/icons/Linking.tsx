import { SVGProps } from 'react';

const Linking = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={144}
    height={144}
    {...props}
  >
    <path d="M11.5 6C8.48 6 6 8.48 6 11.5v25c0 3.02 2.48 5.5 5.5 5.5h25c3.02 0 5.5-2.48 5.5-5.5v-25C42 8.48 39.52 6 36.5 6h-25zm0 3h25c1.398 0 2.5 1.102 2.5 2.5v25c0 1.398-1.102 2.5-2.5 2.5h-25A2.478 2.478 0 0 1 9 36.5v-25C9 10.102 10.102 9 11.5 9zm22.97 2.986a1.5 1.5 0 0 0-.161.014H23.5a1.5 1.5 0 1 0 0 3h7.379l-15.44 15.44a1.5 1.5 0 1 0 2.122 2.12L33 17.122V24.5a1.5 1.5 0 1 0 3 0V13.69a1.5 1.5 0 0 0-1.53-1.704z" />
  </svg>
);

export default Linking;
