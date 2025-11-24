"use client";

import {
  AlertIcon,
  AlertTitle,
  type AlertVariantProps,
  alertStyles,
  cn,
  Alert as MijnUIAlert,
} from "@mijn-ui/react";
import type { ReactNode } from "react";
import { Icons } from "./icons";

type AlertProps = {
  title?: ReactNode;
  variant?: AlertVariantProps["variant"];
  className?: string;
  children: ReactNode;
};

const Alert = ({ title, children, variant, className }: AlertProps) => (
  <MijnUIAlert
    className={cn("w-full backdrop-blur-md", className)}
    variant={variant}
  >
    <AlertIcon>
      <Icons.alertCircle />
    </AlertIcon>
    <AlertTitle>{title}</AlertTitle>
    <div
      className={cn(
        alertStyles().description({ className: "*:my-0!" }),
        !title && "mt-0"
      )}
    >
      {children}
    </div>
  </MijnUIAlert>
);

export { Alert };
