import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ScrollZoomImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

/**
 * An <img> that grows slightly larger as it scrolls into view,
 * and eases back down as it scrolls out of view.
 */
export default function ScrollZoomImage({ className, ...props }: ScrollZoomImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      {...props}
      className={cn(
        "transition-transform duration-700 ease-out",
        inView ? "scale-105" : "scale-100",
        className
      )}
    />
  );
}
