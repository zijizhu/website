import clsx from 'clsx';
import Image from 'next/image';

import Icon from './Icon';
import Linking from './icons/Linking';
import { useWindowSize } from '../hooks';
import GitHubIcon from './icons/GitHubIcon';
import AppStoreIcon from './icons/AppStoreIcon';

import type { ProjectInfo } from '../types';

function ProjectCard({
  name,
  link,
  description,
  detail,
  sourceLink,
  downloadLink,
  techs,
  techIconNames,
  image,
  imgLayout = 'left'
}: {
  imgLayout?: 'left' | 'right';
} & ProjectInfo) {
  const { width } = useWindowSize();
  const linkingOnLeft = width && width > 768 && imgLayout === 'left';

  return (
    <div
      className={clsx([
        'w-full py-8 flex justify-center items-center',
        { 'flex-col md:flex-row-reverse': imgLayout === 'right' },
        { 'flex-col md:flex-row': imgLayout === 'left' }
      ])}
    >
      <div
        className="md:block rounded-t-lg d:rounded-lg md:shadow-lg lg:w-144"
        style={{ fontSize: 0 }}
      >
        <Image
          src={image}
          alt="footsteps"
          className="rounded-t-lg d:rounded-lg"
        />
      </div>

      <div
        className={clsx([
          'flex-1 flex flex-col py-6 px-6 bg-baseBg md:bg-transparent rounded-b-lg shadow-lg md:shadow-none',
          {
            'md:pl-6 md:pr-0 md:text-right md:items-end': imgLayout === 'left'
          },
          { 'md:pl-0 md:pr-6': imgLayout === 'right' }
        ])}
      >
        <h2 className="py-4 text-3xl font-bold">{name}</h2>

        <a href={link}>
          <span className="text-md md:text-xl font-semibold text-primary">
            {link && linkingOnLeft && (
              <Linking className="inline mx-2 fill-primary w-7 h-7" />
            )}
            {description}
            {link && !linkingOnLeft && (
              <Linking className="inline mx-2 fill-primary w-7 h-7" />
            )}
          </span>
        </a>

        <p className="py-4 text-lg lg:text-xl">{detail}</p>

        <div
          className={clsx([
            'flex items-center',
            { 'md:justify-end': imgLayout === 'left' }
          ])}
        >
          {techIconNames.map((name, idx) => (
            <Icon
              key={idx}
              name={name}
              className={clsx([
                'my-2',
                { 'mr-3': imgLayout === 'right' || (width && width <= 768) },
                { 'md:ml-3': imgLayout === 'left' }
              ])}
            />
          ))}
        </div>

        {(sourceLink || downloadLink) && (
          <div className={'py-2 flex items-center'}>
            {sourceLink && (
              <a
                href={sourceLink}
                className={clsx([
                  'group py-2 flex items-center',
                  { 'mr-4': imgLayout === 'right' },
                  { 'ml-4': imgLayout === 'left' }
                ])}
              >
                <span className="mr-1 text-xl font-semibold group-hover:text-primary duration-300">
                  source
                </span>
                <GitHubIcon
                  width={40}
                  height={40}
                  className="inline group-hover:fill-primary duration-300"
                />
              </a>
            )}

            {downloadLink && (
              <a href={downloadLink}>
                <AppStoreIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
