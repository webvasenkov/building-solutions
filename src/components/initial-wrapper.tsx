'use client';
import { LazyMotion, domAnimation } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

function InitialWrapper({ children }: Props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </div>
  );
}

export default InitialWrapper;
