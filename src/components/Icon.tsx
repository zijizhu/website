import MSTIcon from './icons/MSTIcon';
import ReactIcon from './icons/ReactIcon';
import DatabaseIcon from './icons/DatabaseIcon';
import FirebaseIcon from './icons/FirebaseIcon';
import MaterialIcon from './icons/MaterialIcon';
import NotFoundIcon from './icons/NotFoundIcon';
import TypeScriptIcon from './icons/TypeScriptIcon';

import type { IconName } from '../types';

interface IconProps {
  name: IconName;
  className?: string;
}

function Icon({ name, className }: IconProps) {
  switch (name) {
    case 'mst':
      return <MSTIcon height={40} width={40} className={className} />;
    case 'react':
      return <ReactIcon height={40} width={40} className={className} />;
    case 'database':
      return <DatabaseIcon height={40} width={40} className={className} />;
    case 'firebase':
      return <FirebaseIcon height={40} width={40} className={className} />;
    case 'material':
      return <MaterialIcon height={40} width={40} className={className} />;
    case 'material':
      return <MaterialIcon height={40} width={40} className={className} />;
    case 'typescript':
      return <TypeScriptIcon height={40} width={40} className={className} />;
    default:
      return <NotFoundIcon height={40} width={40} className={className} />;
  }
}

export default Icon;
