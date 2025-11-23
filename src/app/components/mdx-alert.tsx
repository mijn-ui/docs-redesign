"use client";

import {
  AlertIcon,
  AlertTitle,
  type AlertVariantProps,
  alertStyles,
  Alert as MijnUIAlert,
} from "@mijn-ui/react";
import type { ReactNode } from "react";
import { cnBase } from "tailwind-variants";
import { Icons } from "./icons";

type AlertProps = {
  title?: ReactNode;
  variant?: AlertVariantProps["variant"];
  className?: string;
  children: ReactNode;
};

const Alert = ({ title, children, variant, className }: AlertProps) => (
  <MijnUIAlert
    className={cnBase("w-full backdrop-blur-md", className)}
    variant={variant}
  >
    <AlertIcon>
      <Icons.alertCircle />
    </AlertIcon>
    <AlertTitle>{title}</AlertTitle>
    <div
      className={cnBase(
        alertStyles().description({ className: "*:my-0!" }),
        !title && "mt-0"
      )}
    >
      {children}
    </div>
  </MijnUIAlert>
);

export { Alert };
