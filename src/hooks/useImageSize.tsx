import { useEffect, useState } from "react";
import { getImageSize } from "../utils/computedImageSize";

function useImageSize(url: string) {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    getImageSize(url, (width: number, height: number): void => {
      setWidth(width);
      setHeight(height);
    });
  }, [url]);

  return { width, height };
}

export default useImageSize;
