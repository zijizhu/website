import clsx from 'clsx';
import Image from 'next/image';

import FootstepsImg from '../../public/footsteps.png';

interface ProjectCardProps {
  imgLayout?: 'left' | 'right';
}

function ProjectCard({ imgLayout = 'left' }: ProjectCardProps) {
  return (
    <div
      className={clsx([
        'w-full py-8 flex justify-center items-center',
        { 'flex-row-reverse': imgLayout === 'right' },
        { 'flex-row': imgLayout === 'left' }
      ])}
    >
      <div
        className="hidden md:block shadow-lg rounded-lg w-96 lg:w-144"
        style={{ fontSize: 0 }}
      >
        <Image src={FootstepsImg} alt="footsteps" className="rounded-lg" />
      </div>
      <div
        className={clsx([
          'flex-1 flex flex-col p-6 bg-baseBg md:bg-transparent rounded-lg shadow-lg md:shadow-none',
          { 'md:text-right md:items-end': imgLayout === 'left' }
        ])}
      >
        <h2 className="py-4 text-3xl font-bold">TaskHouse</h2>
        <h3 className="text-xl font-semibold text-primary">
          UNSW COMP3900 Capstone project
        </h3>
        <p className="py-4 text-lg lg:text-xl">
          TaskHouse is a collaborative platform for teams to communicate the
          state of their tasks, for users to connect with their collaborators
          through a user-friendly interface.
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
