"use client";

import { Button } from "@mijn-ui/react";

const ButtonLoading = () => (
  <div className="flex flex-col gap-8">
    <Button className="w-34" loading>
      Button
    </Button>

    <div className="flex flex-col gap-2">
      <p className="font-semibold text-fg-tertiary text-sm">With Custom Text</p>

      <Button className="w-36" loading loadingText="Submitting...">
        Button
      </Button>
    </div>

    <div className="flex flex-col gap-2">
      <p className="font-semibold text-fg-tertiary text-sm">With Custom Icon</p>

      <Button
        className="w-36"
        loading
        loadingIcon={<Ring />}
        loadingText="Submitting..."
      >
        Button
      </Button>
    </div>
  </div>
);

export default ButtonLoading;

const Ring = ({
  size = 24,
  ...props
}: React.ComponentProps<"svg"> & { size?: number }) => (
  <svg
    height={size}
    stroke="currentColor"
    viewBox="0 0 44 44"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Loading...</title>
    <g fill="none" fillRule="evenodd" strokeWidth="2">
      <circle cx="22" cy="22" r="1">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="1.8s"
          keySplines="0.165, 0.84, 0.44, 1"
          keyTimes="0; 1"
          repeatCount="indefinite"
          values="1; 20"
        />
        <animate
          attributeName="stroke-opacity"
          begin="0s"
          calcMode="spline"
          dur="1.8s"
          keySplines="0.3, 0.61, 0.355, 1"
          keyTimes="0; 1"
          repeatCount="indefinite"
          values="1; 0"
        />
      </circle>
      <circle cx="22" cy="22" r="1">
        <animate
          attributeName="r"
          begin="-0.9s"
          calcMode="spline"
          dur="1.8s"
          keySplines="0.165, 0.84, 0.44, 1"
          keyTimes="0; 1"
          repeatCount="indefinite"
          values="1; 20"
        />
        <animate
          attributeName="stroke-opacity"
          begin="-0.9s"
          calcMode="spline"
          dur="1.8s"
          keySplines="0.3, 0.61, 0.355, 1"
          keyTimes="0; 1"
          repeatCount="indefinite"
          values="1; 0"
        />
      </circle>
    </g>
  </svg>
);
