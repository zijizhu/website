import Image from 'next/image';
import FootstepsImg from '../../public/footsteps.png';

function ProjectCard() {
  return (
    <div className="w-full py-8 flex flex-row">
      <div className="shadow-around rounded-lg w-128" style={{ fontSize: 0 }}>
        <Image src={FootstepsImg} alt="footsteps" />
      </div>
    </div>
  );
}

export default ProjectCard;
