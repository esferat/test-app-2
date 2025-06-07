import React from 'react';
import CircleGradient from '@pages/Gradient/component/CircleGradient.ts';

const useUseGradient = () => {
  const containerRef = React.useRef<HTMLCanvasElement | null>(null);
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    if (!containerRef.current) {
      const raf = requestAnimationFrame(function check() {
        if (containerRef.current) {
          setIsReady(true);
        } else {
          requestAnimationFrame(check);
        }
      });
      return () => cancelAnimationFrame(raf);
    } else {
      setIsReady(true);
    }
  }, []);

  React.useEffect(() => {
    if (containerRef.current && isReady) {
      const gradient = new CircleGradient(containerRef.current);
      gradient.start();

      containerRef.current.addEventListener('click', () => gradient.start());
      return containerRef.current?.removeEventListener('click', () => gradient.stop());
    }
  }, [isReady, containerRef.current]);

  return {
    containerRef,
  };
};

export default useUseGradient;
