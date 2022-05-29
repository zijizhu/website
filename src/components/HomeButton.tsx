import { SVGProps } from 'react';

interface HomeButtonProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  text: string;
  label: string;
}

function HomeButton({ Icon, text, label }: HomeButtonProps) {
  return (
    <button className="group mr-3 my-3 flex items-center cursor-pointer select-none">
      <span className="mr-2 p-4 rounded-md bg-specialBg group-hover:bg-white group-hover:shadow-around transition duration-300">
        <Icon className="fill-primary" width={35} height={35} />
      </span>
      <div className="p-2 flex items-start text-inherit flex-col">
        <span className="font-semibold group-hover:text-primary transition duration-300">
          {text}
        </span>
        <span className="text-baseText">{label}</span>
      </div>
    </button>
  );
}

export default HomeButton;
