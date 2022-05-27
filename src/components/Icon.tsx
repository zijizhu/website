import { SVGAttributes } from 'react';

import MSTIcon from './icons/MSTIcon';
import ReactIcon from './icons/ReactIcon';
import DatabaseIcon from './icons/DatabaseIcon';
import FirebaseIcon from './icons/FirebaseIcon';
import MaterialIcon from './icons/MaterialIcon';
import TypeScriptIcon from './icons/TypeScriptIcon';

import type { IconName } from '../types';

interface IconProps {
  name: IconName;
  className?: string;
}

function Icon({ name, className }: IconProps) {
  switch (name) {
    case 'mst':
      return <MSTIcon className={className} />;
    case 'react':
      return <ReactIcon className={className} />;
    case 'database':
      return <DatabaseIcon className={className} />;
    case 'firebase':
      return <FirebaseIcon className={className} />;
    case 'material':
      return <MaterialIcon className={className} />;
    case 'material':
      return <MaterialIcon className={className} />;
    case 'typescript':
      return <TypeScriptIcon className={className} />;
    default:
      break;
  }
}

export default Icon;
