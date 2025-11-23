import { cnBase } from "tailwind-variants";

const PreviewWrapper = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div
    className={cnBase(
      "preview not-prose relative my-6 flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border bg-bg-default p-5",
      className
    )}
    {...props}
  />
);

export default PreviewWrapper;
