import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
}

const SlideLayout = ({ children, className = "" }: SlideLayoutProps) => (
  <div
    className={`w-[1920px] h-[1080px] relative overflow-hidden font-body ${className}`}
    style={{ background: "linear-gradient(160deg, hsl(220,20%,7%) 0%, hsl(220,22%,4%) 100%)" }}
  >
    {/* Subtle grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: "radial-gradient(circle, hsl(210,100%,50%) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
    <div className="relative z-10 w-full h-full">{children}</div>
  </div>
);

export default SlideLayout;
