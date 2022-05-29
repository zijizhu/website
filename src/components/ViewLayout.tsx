import clsx from 'clsx';
import { ReactNode } from 'react';
import { useOnScreen } from '../hooks';

interface ViewLayoutProps {
  refCallback: (el: HTMLDivElement | null) => void;
  polygon?: boolean;
  children: ReactNode;
  className?: string;
}

function ViewLayout({
  polygon,
  refCallback,
  className,
  children
}: ViewLayoutProps) {
  return (
    <section
      ref={refCallback}
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
