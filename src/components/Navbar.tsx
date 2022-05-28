import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const navLinks: { num: number; name: string; link: string }[] = [
  { num: 1, name: 'Home', link: '#home' },
  { num: 2, name: 'Projects', link: '#projects' },
  { num: 3, name: 'About Me', link: '#about' }
];

function Navbar() {
  const [showNav, setShowNav] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

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

  return (
    <CSSTransition
      unmountOnExit
      in={showNav}
      timeout={300}
      classNames="fadedown"
    >
      <div className="fixed right-0 z-20 m-4 p-2 shadow-around bg-baseBg rounded-lg hover:bg-specialBg transition duration-300">
        {navLinks.map((item) => (
          <a
            key={item.num}
            href={item.link}
            className="mx-2 my-1 p-2 font-semibold hover:text-primary text-lg transition duration-500"
          >
            <span className="mr-2 text-primary">{item.num}</span>
            {item.name}
          </a>
        ))}
      </div>
    </CSSTransition>
  );
}

export default Navbar;
