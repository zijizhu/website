import {} from 'react';
import BoxIcon from './icons/BoxIcon';

function HomeButton() {
  return (
    <button className="group m-3 flex items-center font-medium cursor-pointer select-none">
      <span className="mr-2 p-4 rounded-md bg-specialBg group-hover:bg-white group-hover:shadow-around transition duration-500">
        <BoxIcon className="fill-primary" width={35} height={35} />
      </span>
      <div className="p-2 flex items-start text-inherit flex-col">
        <span className="font-semibold group-hover:text-primary transition duration-500">
          This is a button
        </span>
        <span className="text-baseText">hi this is a button</span>
      </div>
    </button>
  );
}

export default HomeButton;
