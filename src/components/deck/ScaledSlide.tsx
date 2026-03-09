import { useRef, useEffect, useState, ReactNode } from "react";

interface ScaledSlideProps {
  children: ReactNode;
  className?: string;
}

const ScaledSlide = ({ children, className = "" }: ScaledSlideProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      setScale(Math.min(clientWidth / 1920, clientHeight / 1080));
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`slide-container ${className}`}>
      <div className="slide-wrapper" style={{ transform: `scale(${scale})` }}>
        {children}
      </div>
    </div>
  );
};

export default ScaledSlide;
