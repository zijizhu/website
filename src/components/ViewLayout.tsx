import clsx from 'clsx';
import { ReactNode, useRef, useEffect } from 'react';

import { ViewName } from '../types';
import useStore from '../stores';
import { useOnScreen } from '../hooks';

interface ViewLayoutProps {
  view: ViewName;
  topSkew?: boolean;
  botSkew?: boolean;
  children: ReactNode;
  className?: string;
  observerThreshold?: number;
}

function ViewLayout({
  view,
  topSkew,
  botSkew,
  className,
  children,
  observerThreshold
}: ViewLayoutProps) {
  const viewRef = useRef<HTMLElement | null>(null);
  const isOnScreen = useOnScreen(viewRef, observerThreshold);
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
        { 'bg-baseBg view-top-skew': topSkew },
        { 'bg-baseBg view-bot-skew': botSkew },
        className
      ])}
    >
      <div className="flex w-full max-w-6xl flex-col">{children}</div>
    </section>
  );
}

export default ViewLayout;
