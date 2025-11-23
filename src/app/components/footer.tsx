import { cnBase } from "tailwind-variants";

type FooterProps = {
  children?: React.ReactNode;
  className?: string;
};

const Footer = ({ children, className }: FooterProps) => (
  <footer
    className={cnBase(
      "flex h-20 w-full items-center justify-start px-4",
      className
    )}
  >
    <div className="flex w-full max-w-4xl flex-col items-start justify-between gap-2 px-6 sm:flex-row md:pl-16">
      <p className="bg-linear-to-br from-fd-foreground to-fd-muted-foreground bg-clip-text font-medium text-tiny text-transparent tracking-tight sm:text-sm">
        All Right Reserved By MijnUI.
      </p>

      {children}
    </div>
  </footer>
);

export { Footer };
