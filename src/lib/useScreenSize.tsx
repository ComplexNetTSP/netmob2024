'use client'
import { useState, useEffect } from 'react';

const useScreenSize = () => {
  interface WindowDimentions {
    width: number|undefined;
    height: number|undefined;
  }

  const [screenSize, setScreenSize] = useState<WindowDimentions>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;