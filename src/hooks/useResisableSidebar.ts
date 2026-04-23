// Libraries
import {
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

type Params = {
  initialWidth?: number;
  min?: number;
  max?: number;
};

export function useResizableSidebar({
  initialWidth = 260,
  min = 200,
  max = 400,
}: Params = {}) {
  const [width, setWidth] = useState(initialWidth);
  const isDragging: RefObject<boolean> = useRef(false);

  useEffect(() => {
    const handleMouseMove: (e: MouseEvent) => void = (e: MouseEvent) => {
      if (!isDragging.current) return;

      const newWidth: number = Math.max(min, Math.min(max, e.clientX));
      setWidth(newWidth);
    };

    const handleMouseUp: () => void = () => {
      isDragging.current = false;
      document.body.style.cursor = "default";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [min, max]);

  const startResize: () => void = () => {
    isDragging.current = true;
    document.body.style.cursor = "col-resize";
  };

  return {
    width,
    startResize,
  };
}