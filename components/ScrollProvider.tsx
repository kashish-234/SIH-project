// components/ScrollProvider.js
"use client";

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import { ReactNode } from 'react';

const ScrollProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
    });

    function onScroll(time: number) {
      lenis.raf(time);
      requestAnimationFrame(onScroll);
    }

    requestAnimationFrame(onScroll);

    return () => {
      // Clean up the event listener if needed
    };
  }, []);

  return <>{children}</>;
};

export default ScrollProvider;
