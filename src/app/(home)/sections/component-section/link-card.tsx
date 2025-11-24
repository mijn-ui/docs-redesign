import { cn } from "@mijn-ui/react";
import Link from "next/link";
import type React from "react";

type LinkCardProps = {
  href: string;
  label: string;
  inprogress?: boolean;
  cardContentClass?: string;
  containerClass?: string;
  children: React.ReactNode;
};

const LinkCard = ({
  href,
  label,
  children,
  cardContentClass,
  containerClass,
  inprogress,
}: LinkCardProps) => (
  <Link
    className={cn(
      "relative outline-none ring-outline-brand ring-offset-2 ring-offset-bg-default focus-visible:ring-2",
      inprogress && "pointer-events-none",
      containerClass
    )}
    draggable="false"
    href={href}
    target={href !== "#" ? "_blank" : undefined}
  >
    <div
      className={
        "card_glow relative flex aspect-video size-full min-h-72 items-center justify-center border border-outline-default/80 [mask:radial-gradient(75%_75%_at_50%,rgb(0,0,0)_60%,rgba(0,0,0,0)_100%)]"
      }
      id="card"
    >
      <div
        className={cn(
          "card_glow_content pointer-events-none",
          cardContentClass
        )}
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
    <div className="absolute top-0 left-0 p-2.5 sm:p-4">
      <p className="bg-linear-to-br from-foreground to-secondary-foreground/70 bg-clip-text text-sm text-transparent sm:text-sm">
        {label}
      </p>
    </div>
    {inprogress && (
      <p className="absolute inset-0 flex items-center justify-center gap-1 bg-black/10 font-medium text-fg-tertiary text-xs dark:bg-black/50 dark:text-fg-tertiary">
        Under Development
      </p>
    )}
  </Link>
);

export default LinkCard;
