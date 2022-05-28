import { SVGProps } from 'react';

const NotFoundIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={96}
    height={96}
    {...props}
  >
    <path d="M12.299 2.008A6.007 6.007 0 0 0 6.11 6.846C5.993 7.448 6.491 8 7.105 8c.484 0 .88-.35.98-.824a4.01 4.01 0 0 1 4.71-3.1c1.922.372 3.308 2.19 3.2 4.145-.087 1.549-1.084 2.53-2.231 3.66-1.051 1.035-2.216 2.18-2.618 3.857-.154.64.314 1.262.971 1.262.477 0 .865-.343.979-.807.278-1.124 1.121-1.954 2.07-2.888 1.324-1.303 2.824-2.78 2.834-5.28.011-2.737-1.725-5.11-4.371-5.81a6.412 6.412 0 0 0-1.33-.207zM11.5 20a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
  </svg>
);

export default NotFoundIcon;
