import clsx from 'clsx';
import { ReactNode, useRef, useEffect } from 'react';

import { ViewName } from '../types';
import useStore from '../stores';
import { useOnScreen } from '../hooks';

interface ViewLayoutProps {
  view: ViewName;
  polygon?: boolean;
  children: ReactNode;
  className?: string;
}

function ViewLayout({ view, polygon, className, children }: ViewLayoutProps) {
  const viewRef = useRef<HTMLElement | null>(null);
  const isOnScreen = useOnScreen(viewRef);
  const { setCurrView } = useStore();

  useEffect(() => {
    if (isOnScreen) setCurrView(view);
  }, [isOnScreen, view, setCurrView]);

  return (
    <section
      ref={(el) => (viewRef.current = el)}
      id={`${view}view`}
      className={clsx([
        'p-8 flex flex-col items-center justify-center',
        { 'bg-baseBg view-polygon': polygon },
        className
      ])}
    >
      <div className="flex w-full max-w-6xl flex-col">{children}</div>
    </section>
  );
}

export default ViewLayout;
