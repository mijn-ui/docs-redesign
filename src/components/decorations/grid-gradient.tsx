import { cn } from "@mijn-ui/react";
import type { IconProps } from "@/components/icons";

const TopGridGradient = ({ className, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    className={cn(
      "-z-10 absolute inset-0 size-full [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]",
      className
    )}
    {...props}
  >
    <defs>
      <pattern
        height="80"
        id="hero"
        patternUnits="userSpaceOnUse"
        width="80"
        x="50%"
        y="-1"
      >
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect fill="url(#hero)" height="100%" strokeWidth="0" width="100%" />
  </svg>
);

export default TopGridGradient;
