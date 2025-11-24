import { cn } from "@mijn-ui/react"
import React from "react"

const LeftRadialGradient = ({ className, style, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("absolute inset-0 -z-10", className)}
      style={{
        ...style,
        backgroundImage: "radial-gradient(130% 60% at 0% 50%, rgba(239, 138, 94, 0.1), rgba(255, 255, 255, 0))",
      }}
      {...props}
    />
  )
}

const TopRightRadialGradient = ({ className, style, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("absolute inset-0 -z-10", className)}
      style={{
        ...style,
        // backgroundImage: "radial-gradient(60% 100% at 100% 10%, rgba(239, 138, 94, 0.1), rgba(255, 255, 255, 0))",
      }}
      {...props}
    />
  )
}

const TopLeftRadialGradient = ({ className, style, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("absolute inset-0 -z-10 rotate-180", className)}
      style={{
        ...style,
        backgroundImage: "radial-gradient(100% 100% at 100% 50%, rgba(239, 138, 94, 0.05), rgba(255, 255, 255, 0))",
      }}
      {...props}
    />
  )
}

export { LeftRadialGradient, TopLeftRadialGradient, TopRightRadialGradient }
