import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import useStore from '../stores';
import { ViewName } from '../types';

const navLinks: { view: ViewName; name: string; link: string }[] = [
  { view: 'home', name: 'Home', link: '#home' },
  { view: 'projects', name: 'Projects', link: '#projects' },
  { view: 'about', name: 'About Me', link: '#about' }
];

function Navbar() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const nodeRef = useRef<HTMLElement | null>(null);
  const { currView } = useStore();

  useEffect(() => {
    function onWindowScroll() {
      if (window === undefined) return;
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    }

    if (window === undefined) return;
    window.addEventListener('scroll', onWindowScroll);

    return () => window.removeEventListener('scroll', onWindowScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNav(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <CSSTransition
      unmountOnExit
      in={showNav}
      timeout={300}
      nodeRef={nodeRef}
      classNames="navfade"
    >
      <div
        ref={(el) => (nodeRef.current = el)}
        className="fixed right-0 z-20 m-4 px-2 flex shadow-around bg-baseBg rounded-lg hover:bg-specialBg transition duration-300"
      >
        {navLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="group mx-2 p-2 flex flex-col items-center font-semibold text-lg"
            onClick={() =>
              document
                .getElementById(`${item.view}view`)
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <div>
              <span className="group-hover:text-primary transition duration-300">
                {item.name}
              </span>
            </div>
            <div
              className={clsx([
                'mt-1 h-1 w-4 bg-primary rounded-full',
                { visible: currView === item.view },
                { invisible: currView !== item.view }
              ])}
            />
          </a>
        ))}
      </div>
    </CSSTransition>
  );
}

export default Navbar;
