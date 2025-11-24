import { cn } from "@mijn-ui/react";

type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => (
  <footer
    className={cn(
      "relative flex h-20 w-full items-center justify-start px-4",
      className
    )}
  >
    <div className="flex w-full max-w-4xl flex-col items-start justify-between gap-2 px-6 sm:flex-row md:pl-16">
      <p className="bg-linear-to-br from-fd-foreground to-fd-muted-foreground bg-clip-text font-medium text-tiny text-transparent tracking-tight sm:text-sm">
        All Right Reserved By MijnUI.
      </p>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-50 text-fg-default"
      >
        <div className="absolute inset-x-0 top-0 h-px">
          <div className="absolute inset-x-0 top-px h-px opacity-35 dark:opacity-15">
            <svg className="size-full" preserveAspectRatio="none">
              <line
                stroke="currentColor"
                strokeDasharray="1 3"
                strokeWidth="2"
                x1="0"
                x2="100%"
                y1="0"
                y2="0"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-fd-muted-foreground text-xs sm:text-sm">
        Created by{" "}
        <a
          className="text-creator-brand underline"
          href="https://htetaunglin-coder.vercel.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Htet Aung Lin
        </a>{" "}
        at{" "}
        <a
          className="underline"
          href="https://www.linkedin.com/company/picoinno"
          rel="noopener noreferrer"
          target="_blank"
        >
          Pico
        </a>
      </p>
    </div>
  </footer>
);

export { Footer };
