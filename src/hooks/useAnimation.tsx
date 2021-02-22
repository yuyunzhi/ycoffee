import { useEffect, useRef } from "react";

const useAnimation = (dep: boolean, fn: () => void) => {
  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    fn();
  }, [dep, fn]);
};

export default useAnimation;
