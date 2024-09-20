import { useEffect, useState } from 'react';

const useGetWindowSize = () => {
  const [stageSize, setStageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resizeScreen = () => {
    const handleResize = () => {
      setStageSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  };

  useEffect(resizeScreen, []);

  return stageSize;
};

export default useGetWindowSize;
